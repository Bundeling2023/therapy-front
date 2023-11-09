import Footer from "@/components/Footer";
import NavSection from "@/components/Header";
import { GET_PAGE_DATA } from "@/graphql/GET_PAGE_DATA";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import HTMLReactParser from "html-react-parser";
import Head from "next/head";
import { GetServerSideProps } from "next/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import SideMenu, { SideMenuItem } from "@/components/SideMenu";
import BackButton from "@/components/BackButton";
import { ConstructPageTitle } from "@/types/utils";

export default function PostPage(props: any) {
  useEffect(() => {
    const tables = document.querySelectorAll('table');
    tables && tables.forEach((item) => item.classList.add('table'));
  }, [])

  const pageAttributes = props.pages?.data?.[0]?.attributes;
  const isBlocksPage = pageAttributes?.pageWithBlocks?.blocks;
  const isNormalPage = !isBlocksPage;
  const hasSimplePageData = pageAttributes?.simplePage;

  const { header, footer } = props
  const { seo } = props.pages.data?.[0]?.attributes ?? { seo: { metaTitle: '', metaDescription: '' } };

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

const NoInfo = () => {
  return (
    <main className="w-full bg-white rounded-xl p-7 simple-page break-words">
      Deze pagina is momenteel in ontwikkeling. Onze excuses voor het ongemak.
      We werken eraan om hier binnenkort waardevolle informatie te plaatsen.
      Kom alstublieft later terug om de volledige inhoud te bekijken.
      Wilt u toch al meer weten neem dan <Link className="underline text-dark-purple" href="/contact">contact met ons op</Link>.
    </main>
  )
}

const SimplePageContent = (props: any) => {
  const data = props?.data;
  if (!data) {
    return <NoInfo />
  }

  return (<main className="w-full bg-white rounded-xl p-7 simple-page break-words">
    {data.img && data.img.data && (
      <Image
        className="w-full rounded-xl"
        src={data.img.data.attributes.url}
        alt={data.title}
        width={0}
        height={0}
        sizes="100vw" />
    )}
    {data.description ? HTMLReactParser(data.description) : ''}
  </main>)
};

const BlocksPageContent = (data: any) => {
  const blocks = data?.items?.blocks;
  if (!blocks) {
    return <NoInfo />
  }


  return <main className="flex w-90% max-w-1560 flex-wrap mx-auto justify-between pb-20 gap-5">
    {blocks.map((item: any) => {
      const imageUrl = item.img.data?.attributes?.url;

      const ImageComponent = () => <Image
        className="w-full rounded-xl"
        src={imageUrl}
        alt={item.title}
        width={0}
        height={0}
        sizes="100vw" />

      return (<>
        {item.link.data ? (
          <Link href={item.link.data.attributes.url} key={item.title} className="bg-white rounded-xl p-7 xl:max-w-[49%] sm:max-w-[48%] max-w-full simple-page transition duration-500 ease-in-out hover:shadow-lg hover:-translate-y-2">
            {imageUrl && <ImageComponent />}
            <h2>{item.title}</h2>
            <div>{HTMLReactParser(item.description)}</div>
          </Link>
        ) : (
          <div key={item.title} className="bg-white rounded-xl p-7 xl:max-w-[49%] sm:max-w-[48%] max-w-full simple-page transition duration-500 ease-in-out">
            {imageUrl && <ImageComponent />}
            <h2>{item.title}</h2>
            <div>{HTMLReactParser(item.description)}</div>
          </div>
        )}
      </>)
    }
    )}
  </main>
};


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

  return node.items.map((x) => {
    return {
      title: x.title,
      url: x.related?.attributes?.url
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


