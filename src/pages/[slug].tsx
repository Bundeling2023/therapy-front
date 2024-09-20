import Footer from "@/components/Footer";
import NavSection from "@/components/Header";
import { GET_PAGE_DATA } from "@/graphql/GET_PAGE_DATA";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import Head from "next/head";
import { GetServerSideProps } from "next/types";
import { useEffect } from "react";
import SideMenu, { SideMenuItem } from "@/components/SideMenu";
import BackButton from "@/components/BackButton";
import { ConstructPageTitle } from "@/types/utils";
import { NoInfo } from "../components/sub-page/NoInfo";
import { SimplePageContent } from "../components/sub-page/SimplePageContent";
import { BlocksPageContent } from "../components/sub-page/BlocksPageContent";
import TeamMember from "@/components/team/TeamMember";
import { Team } from "@/types/types";

export default function PostPage(props: any) {
  useEffect(() => {
    const tables = document.querySelectorAll('table');
    tables && tables.forEach((item) => item.classList.add('table'));
  }, [])

  const pageAttributes = props.pages?.data?.[0]?.attributes;
  const isBlocksPage = pageAttributes?.pageWithBlocks?.blocks?.[0];
  const isNormalPage = !isBlocksPage;
  const hasSimplePageData = pageAttributes?.simplePage;

  const { header, footer } = props
  const { seo } = props.pages.data?.[0]?.attributes ?? { seo: { metaTitle: '', metaDescription: '' } };

  const teamData = pageAttributes.specialisations?.data?.flatMap((item: any) => item?.attributes?.teamMembers?.data ?? []);
  return (
    <>
      <Head>
        <title>{ConstructPageTitle(seo.metaTitle, pageAttributes?.title)}</title>
        <meta name='description' content={seo.metaDescription ? seo.metaDescription : (pageAttributes?.simplePage?.data?.description ?? pageAttributes.pageWithBlocks?.blocks?.[0]?.description)} />
        {seo.canonicalURL && <link rel="canonical" href={seo.canonicalURL} />}
      </Head>
      <NavSection locations={props.locations.data} team={props.teams.data} data={header} info={props.generalinfo.data.attributes.contactsInfo} socialLinks={props.generalinfo.data.attributes.socialLinks} />
      <div className="bg-blue-100 pt-20 pb-10">
        <BackButton className="absolute pl-4 -mt-6 sm:-mt-4">Home</BackButton>
        <h1 className="mb-0 text-3xl font-semibold text-center w-90% max-w-1560 mx-auto text-dark-purple md:text-4xl md:mt-2">
          {pageAttributes?.title}
        </h1>
      </div>
      <section className="flex bg-blue-100 page">
        {isNormalPage ? (
          <div className="flex flex-col lg:flex-row items-start pb-20 w-90% max-w-1560 mx-auto">
            {hasSimplePageData ?
              <SimplePageContent data={pageAttributes.simplePage} />
              : <NoInfo />}
            {props.siblingsSideMenu.items?.length !== 0 && (
              <SideMenu
                items={props.siblingsSideMenu.items}
                childItems={props.childsSideMenu.items}
                currentPageUrl={pageAttributes.url}
                parentTitle={props.siblingsSideMenu?.title}
                parentPageUrl={props.siblingsSideMenu?.url}
                showAppointment />
            )}
          </div>
        ) :
          <BlocksPageContent items={pageAttributes.pageWithBlocks} />
        }
      </section>
      {teamData?.length > 0 && (
        <section className="xl:bg-[url('/team_bgr.svg')] bg-[url('/team_bgr_mob.svg')] bg-no-repeat bg-top md:bg-cover bg-contain relative pb-10">
          <div className="relative xl:w-80% w-90% max-w-1560 h-auto mx-auto -mt-10">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
              {teamData.map((item: Team) =>
                <TeamMember key={item.attributes.name} data={item} showDetailedInformation />
              )}
            </div>
            <div className="mt-2 text-center">
              <p
                className="h-16 px-4 mt-2 text-dark-purple normal-case text-base text-xl"
              >
                De bovenstaande therapeuten zijn gespecialiseerd in {pageAttributes?.title}
              </p>
            </div>
          </div>
        </section>
      )}
      <Footer
        data={footer}
        locations={props.locations.data}
        privacyLink={props.generalinfo.data.attributes.privacyPolicyPage.data.attributes.url}
        termsAndConditionsPage={props.generalinfo.data.attributes.termsAndConditionsPage.data.attributes.url}
        info={props.generalinfo.data.attributes.contactsInfo}
        socialLinks={props.generalinfo.data.attributes.socialLinks}
      />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=29, stale-while-revalidate=179'
  )

  const client = new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
    cache: new InMemoryCache(),
  })

  const { data } = await client.query({
    query: GET_PAGE_DATA,
    variables: { slugUrl: context!.params!.slug },
  })


  if (!(data.pages.data).length) {
    return {
      notFound: true,
    };
  }

  const menuJSON = data.header;

  const slug = context!.params!.slug as string
  const current = findNodeBySlug(menuJSON[0], slug);
  const parent = findParentNode(current, menuJSON[0]);

  const childItems = getChildItems(current);
  const parentChildItems = parent ? getChildItems(parent) : [];

  return {
    props: {
      ...data,
      childsSideMenu: { items: childItems, title: current?.title ?? null, url: current?.related?.attributes?.url ?? null },
      siblingsSideMenu: { items: parentChildItems, title: parent?.title ?? null, url: parent?.related?.attributes?.url ?? null }
    }
  }
}

interface NavigationItem {
  __typename: string;
  title: string;
  path: string;
  related: {
    __typename: string;
    attributes: {
      __typename: string;
      url: string;
      publishedAt: string;
    };
  };
  items: NavigationItem[];
}

function findNodeBySlug(node: NavigationItem | null, slug: string): NavigationItem | null {
  if (!node) {
    return null;
  }

  if (node.related?.attributes?.url === slug) {
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

  return node.items.filter(y => y.related.attributes.publishedAt).map((x) => {
    return {
      title: x.title,
      url: x.related?.attributes?.url,
    }
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


