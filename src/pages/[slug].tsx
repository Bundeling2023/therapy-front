import Footer from "@/components/Footer";
import NavSection from "@/components/Header";
import { GET_PAGES, GET_PAGE_DATA } from "@/graphql/queries";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import HTMLReactParser from "html-react-parser";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next/types";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect } from "react";
import SideMenu from "@/components/SideMenu";

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
        <title>{seo.metaTitle && seo.metaTitle}</title>
        <meta name='description' content={seo.metaDescription && seo.metaDescription} />
        <link rel="canonical" href={seo.canonicalURL && seo.canonicalURL} />
      </Head>
      <NavSection locations={props.locations.data} team={props.teams.data} data={header} info={props.generalinfo.data.attributes.contactsInfo} />
      <div className="bg-blue-100 py-28">
        <h1 className="mb-0 text-3xl font-semibold text-center w-90% max-w-1560 mx-auto text-dark-purple md:text-5xl">
          {pageAttributes?.title}
        </h1>
      </div>
      <section className="flex bg-blue-100 page">
        {isNormalPage ? (
          <div className="flex flex-col lg:flex-row items-start pb-20 w-90% max-w-1560 mx-auto">
            {hasSimplePageData ?
              <SimplePageContent data={pageAttributes.simplePage} />
              : <NoInfo />}
            {props.sidemenu.items && (
              <SideMenu items={props.sidemenu.items} title={props.sidemenu.title} currentPageUrl={pageAttributes.url} />
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
      />
    </>
  )
}

const NoInfo = () => {
  return (
    <main className="w-full bg-white rounded-xl p-7 simple-page break-words">
      Nog geen informatie beschikbaar
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
            {imageUrl && <ImageComponent /> }
            <h2>{item.title}</h2>
            <div>{HTMLReactParser(item.description)}</div>
          </Link>
        ) : (
          <div key={item.title} className="bg-white rounded-xl p-7 xl:max-w-[49%] sm:max-w-[48%] max-w-full simple-page transition duration-500 ease-in-out">
            {imageUrl && <ImageComponent /> }
            <h2>{item.title}</h2>
            <div>{HTMLReactParser(item.description)}</div>
          </div>
        )}
      </>)
    }
    )}
  </main>
};

export const getStaticPaths: GetStaticPaths = async () => {
  const client = new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
    cache: new InMemoryCache(),
  })

  const { data } = await client.query({
    query: GET_PAGES,
  })

  const paths = data.pages.data.map((item: any) => {
    return {
      params: { slug: item.attributes.url }
    }
  })

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
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

  function get_parent(json_object: string | any[], url: string) {
    if (!json_object || json_object.length === 0) {
      return null;
    }
    for (let item of json_object) {
      if (item.items.some((i: any) => i.related?.attributes.url === url || item.path === url)) {
        return item
      }
    }
    return null;
  }

  const sideMenuFirstLevel = get_parent(menuJSON, context!.params!.slug as string)

  const nestedItem = menuJSON.find((item: { items: any[]; }) =>
    item.items?.find(subItem =>
      subItem.items?.find((nestedSubItem: { related: { attributes: { url: string; }; }; }) =>
        nestedSubItem.related?.attributes?.url === context!.params!.slug)));

  const sideMenuSecondLevel = get_parent(nestedItem?.items, context!.params!.slug as string);

  return {
    props: {
      ...data,
      sidemenu: { ...sideMenuFirstLevel, ...sideMenuSecondLevel }
    }
  }
}
