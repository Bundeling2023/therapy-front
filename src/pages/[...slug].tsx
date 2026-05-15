import Footer from "@/components/Footer";
import NavSection from "@/components/Header";
import { GET_PAGE_DATA } from "@/graphql/GET_PAGE_DATA";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next/types";
import { useEffect } from "react";
import SideMenu, { SideMenuItem } from "@/components/SideMenu";
import BackButton from "@/components/BackButton";
import { ConstructPageTitle } from "@/types/utils";
import { NoInfo } from "../components/sub-page/NoInfo";
import { SimplePageContent } from "../components/sub-page/SimplePageContent";
import { BlocksPageContent } from "../components/sub-page/BlocksPageContent";
import TeamMember from "@/components/team/TeamMember";
import { Team } from "@/types/types";
import { createServerApolloClient } from "@/graphql/apolloClient";
import { GET_ALL_PAGE_SLUGS } from "@/graphql/GET_ALL_PAGE_SLUGS";
import { GET_LAYOUT_DATA } from "@/graphql/GET_LAYOUT_DATA";
import { GET_NAVIGATION_DATA } from "@/graphql/GET_NAVIGATION_DATA";
import { DEFAULT_REVALIDATE_TIME } from "@/types/constants";

export default function PostPage(props: any) {
  useEffect(() => {
    const tables = document.querySelectorAll("table");
    tables && tables.forEach((item) => item.classList.add("table"));
  }, []);

  const pageAttributes = props.pages?.[0];
  const isBlocksPage = pageAttributes?.pageWithBlocks?.blocks?.[0];
  const isNormalPage = !isBlocksPage;
  const hasSimplePageData = pageAttributes?.simplePage;

  const { header, footer } = props;
  const { seo } = props.pages?.[0] ?? {
    seo: { metaTitle: "", metaDescription: "" },
  };

  const teamData = pageAttributes?.specialisations?.flatMap(
    (item: any) => item?.teamMembers ?? []
  );
  return (
    <>
      <Head>
        <title>{ConstructPageTitle(seo.metaTitle, pageAttributes?.title)}</title>
        <meta
          name="description"
          content={
            seo.metaDescription
              ? seo.metaDescription
              : (pageAttributes?.simplePage?.data?.description ??
                pageAttributes.pageWithBlocks?.blocks?.[0]?.description)
          }
        />
        {seo.canonicalURL && <link rel="canonical" href={seo.canonicalURL} />}
      </Head>
      <NavSection
        locations={props.locations || []}
        team={props.teams || []}
        data={header}
        info={props.generalinfo.contactsInfo}
        socialLinks={props.generalinfo.socialLinks}
      />
      <div className="bg-blue-100 pt-20 pb-10">
        <BackButton className="absolute pl-4 -mt-6 sm:-mt-4">Home</BackButton>
        <h1 className="mb-0 text-3xl font-semibold text-center w-90% max-w-1560 mx-auto text-dark-purple md:text-4xl md:mt-2">
          {pageAttributes?.title}
        </h1>
      </div>
      <section className="flex bg-blue-100 page">
        {isNormalPage ? (
          <div className="flex flex-col lg:flex-row items-start pb-20 w-90% max-w-1560 mx-auto">
            {hasSimplePageData ? (
              <SimplePageContent data={pageAttributes.simplePage} />
            ) : (
              <NoInfo />
            )}
            {props.siblingsSideMenu.items?.length !== 0 && (
              <SideMenu
                items={props.siblingsSideMenu.items}
                childItems={props.childsSideMenu.items}
                currentPageUrl={pageAttributes.url}
                parentTitle={props.siblingsSideMenu?.title}
                parentPageUrl={props.siblingsSideMenu?.url}
                showAppointment
              />
            )}
          </div>
        ) : (
          <BlocksPageContent items={pageAttributes.pageWithBlocks} />
        )}
      </section>
      {teamData?.length > 0 && (
        <section className="xl:bg-[url('/team_bgr.svg')] bg-[url('/team_bgr_mob.svg')] bg-no-repeat bg-top md:bg-cover bg-contain relative pb-10">
          <div className="relative xl:w-80% w-90% max-w-1560 h-auto mx-auto -mt-10">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
              {teamData.map((item: Team) => (
                <TeamMember key={item.name} data={item} showDetailedInformation />
              ))}
            </div>
            <div className="mt-2 text-center">
              <p className="h-16 px-4 mt-2 text-dark-purple normal-case text-xl">
                De bovenstaande therapeuten zijn gespecialiseerd in {pageAttributes?.title}
              </p>
            </div>
          </div>
        </section>
      )}
      <Footer
        data={footer}
        locations={props.locations || []}
        privacyLink={props.generalinfo.privacyPolicyPage.url}
        termsAndConditionsPage={props.generalinfo.termsAndConditionsPage.url}
        info={props.generalinfo.contactsInfo}
        socialLinks={props.generalinfo.socialLinks}
      />
    </>
  );
}

const normalizePath = (value?: string | null): string =>
  (value || "").replace(/^\/+|\/+$/g, "").trim();

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createServerApolloClient();
  const reservedTopLevelRoutes = new Set([
    "contact",
    "team",
    "locaties",
    "thank-you",
    "onderhoud",
    "404",
    "500",
    "api",
    "sitemap.xml",
  ]);

  try {
    const result = await client.query<{ pages: Array<{ url?: string | null }> }>({
      query: GET_ALL_PAGE_SLUGS,
    });

    const paths = (result.data?.pages || [])
      .map((page) => normalizePath(page?.url))
      .filter((url): url is string => Boolean(url))
      .filter((url) => !reservedTopLevelRoutes.has(url))
      .map((url) => ({ params: { slug: url.split("/").filter(Boolean) } }));

    return {
      paths,
      fallback: "blocking",
    };
  } catch (error) {
    console.error("Failed to fetch static paths:", error);
    return {
      paths: [],
      fallback: "blocking",
    };
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  const subpageRevalidateTime =
    Number(process.env.NEXT_PUBLIC_REVALIDATE_TIME) ||
    DEFAULT_REVALIDATE_TIME;

  const slugParam = context.params?.slug;
  const slugParts = Array.isArray(slugParam)
    ? slugParam
    : typeof slugParam === "string"
      ? [slugParam]
      : [];
  const slugUrl = normalizePath(slugParts.join("/"));

  if (!slugUrl) {
    return {
      notFound: true,
      revalidate: subpageRevalidateTime,
    };
  }

  const client = createServerApolloClient();

  try {
    const [pageResult, layoutResult, navigationResult] = await Promise.allSettled([
      client.query({
        query: GET_PAGE_DATA,
        variables: { slugUrl },
      }),
      client.query({
        query: GET_LAYOUT_DATA,
      }),
      client.query({
        query: GET_NAVIGATION_DATA,
      }),
    ]);

    if (pageResult.status !== "fulfilled") {
      throw pageResult.reason;
    }

    const queryData = pageResult.value.data as any;
    const layoutData = layoutResult.status === "fulfilled"
      ? (layoutResult.value.data as any)
      : {};
    const navData = navigationResult.status === "fulfilled"
      ? (navigationResult.value.data as any)
      : {};

    if (!queryData?.pages?.length) {
      return {
        notFound: true,
      };
    }

    const menuJSON = navData?.header || [];

    const slug = slugUrl as string;
    const current = findNodeBySlug(menuJSON[0], slug);
    const parent = findParentNode(current, menuJSON[0]);

    const childItems = getChildItems(current);
    const parentChildItems = parent ? getChildItems(parent) : [];

    const props = {
      pages: queryData?.pages || [],
      locations: layoutData?.locations || [],
      teams: layoutData?.teams || [],
      generalinfo: layoutData?.generalinfo || {},
      header: navData?.header || [],
      footer: navData?.footer || [],
      childsSideMenu: {
        items: childItems,
        title: current?.title ?? null,
        url: current?.related?.url ?? null,
      },
      siblingsSideMenu: {
        items: parentChildItems,
        title: parent?.title ?? null,
        url: parent?.related?.url ?? null,
      },
    };

    return {
      props,
      revalidate: subpageRevalidateTime,
    };
  } catch (error) {
    console.error("Failed to fetch page data:", error);
    return {
      props: {
        __maintenance: true,
      },
      revalidate: 10,
    };
  }
};

interface NavigationItem {
  __typename: string;
  title: string;
  path: string;
  related: {
    __typename: string;
    url: string;
    publishedAt: string;
  };
  items: NavigationItem[];
}

function findNodeBySlug(node: NavigationItem | null, slug: string): NavigationItem | null {
  if (!node) {
    return null;
  }

  if (normalizePath(node.related?.url) === normalizePath(slug)) {
    return node;
  }

  if (!node.items) {
    return null;
  }

  for (const item of node.items) {
    const found = findNodeBySlug(item, slug);
    if (found) {
      return found;
    }
  }

  return null;
}

function getChildItems(node: NavigationItem | null): SideMenuItem[] {
  if (!node || !node.items || !Array.isArray(node.items)) {
    return [];
  }

  return node.items.filter((y) => y.related?.publishedAt).map((x) => {
    return {
      title: x.title,
      url: x.related?.url,
    };
  });
}

function findParentNode(node: NavigationItem | null, root: NavigationItem): NavigationItem | null {
  if (!node || !root.items || !Array.isArray(root.items)) {
    return null;
  }

  for (const item of root.items) {
    if (item.title === node.title || item.path === node.path) {
      return root;
    }

    const parent = findParentNode(node, item);
    if (parent) {
      return parent;
    }
  }

  return null;
}
