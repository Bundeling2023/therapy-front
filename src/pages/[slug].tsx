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


export default function PostPage( props: any ) {
  const { header, footer } = props
  const { seo } = props.pages.data[0].attributes;

  useEffect(() => {
    const tables = document.querySelectorAll('table');

    tables && tables.forEach((item) => item.classList.add('table'));
  }, [])

  console.log(props.sidemenu.items[2].related?.attributes.url === undefined);

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
          {props.pages.data[0].attributes.title}
        </h1>
      </div>
      <section className="flex bg-blue-100 page">
        {props.pages.data[0].attributes.simplePage ? (
          <div className="flex flex-col lg:flex-row items-start pb-20 w-90% max-w-1560 mx-auto">
              <main className="w-full bg-white rounded-xl p-7 simple-page">
                {props.pages.data[0].attributes.simplePage.img.data && (
                  <Image
                    className="w-full rounded-xl"
                    src={props.pages.data[0].attributes.simplePage.img.data.attributes.url}
                    alt={props.pages.data[0].attributes.simplePage.title}
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                )}
                {HTMLReactParser(props.pages.data[0].attributes.simplePage.description)}

              </main>
            {props.sidemenu.items && (
              <aside className="bg-blue-200 lg:ml-8 w-full rounded-xl p-7 mt-6 lg:mt-0 lg:min-w-[400px] lg:max-w-[400px]">
                <h3 className="mb-6 text-xl font-bold lg:text-2xl">{props.sidemenu.title}</h3>
                {props.sidemenu.items.map((item: any) =>
                  <Fragment key={item.title}>
                    {!(item.related?.attributes.url === undefined) && <Link
                      className={`block w-full p-5 pl-7 mb-5 overflow-hidden transition duration-300 ease-in-out before:left-0 before:top-0 relative before:content-[''] before:block before:absolute before:h-full before:w-3 before:bg-blue-300 hover:bg-blue-300 last:mb-0 lg:text-lg text-base font-medium bg-gray-100 rounded-xl ${item.related?.attributes.url === props.pages.data[0].attributes.url ? 'active' : ''}`}
                      key={item.title}
                      href={item.related?.attributes.url}>
                        {item.title}
                    </Link>}
                  </Fragment>
                )}
                <Link href="/contact-us" className="text-white btn btn-primary mt-7">
                  Afspraak maken
                </Link>
              </aside>
            )}
          </div>
        ) : (
          <main className="flex w-90% max-w-1560 flex-wrap mx-auto justify-between pb-20 gap-5">
            {props.pages.data[0].attributes.pageWithBlocks.blocks.map((item: any) =>
              <>
                {item.link.data ? (
                  <Link href={item.link.data.attributes.url} key={item.title} className="bg-white rounded-xl p-7 xl:max-w-[49%] sm:max-w-[48%] max-w-full simple-page transition duration-500 ease-in-out hover:shadow-lg hover:-translate-y-2">
                    <Image
                      className="w-full rounded-xl"
                      src={item.img.data.attributes.url}
                      alt={item.title}
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                    <h2>{item.title}</h2>
                    <div>{HTMLReactParser(item.description)}</div>
                  </Link>
                ) : (
                  <div key={item.title} className="bg-white rounded-xl p-7 xl:max-w-[49%] sm:max-w-[48%] max-w-full simple-page transition duration-500 ease-in-out">
                    <Image
                      className="w-full rounded-xl"
                      src={item.img.data.attributes.url}
                      alt={item.title}
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                    <h2>{item.title}</h2>
                    <div>{HTMLReactParser(item.description)}</div>
                  </div>
                )}
              </>
            )}
          </main>
        )}
      </section>
      <Footer
        data={footer}
        privacyLink={props.generalinfo.data.attributes.privacyPolicyPage.data.attributes.url}
        termsAndConditionsPage={props.generalinfo.data.attributes.termsAndConditionsPage.data.attributes.url}
        info={props.generalinfo.data.attributes.contactsInfo}
      />
    </>
  )
}

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
      params: { slug: item.attributes.url}
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (contenxt) => {
  const client = new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
		cache: new InMemoryCache(),
	})

	const { data } = await client.query({
		query: GET_PAGE_DATA,
    variables: { slugUrl: contenxt!.params!.slug },
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
      if(item.items.some((i: any) => i.related?.attributes.url || item.path === url)) {
        return item
      }
    }
    return null;
  }

  const sideMenuFirstLevel = get_parent(menuJSON, contenxt!.params!.slug as string)

  const nestedItem = menuJSON.find((item: { items: any[]; }) =>
    item.items?.find(subItem =>
      subItem.items?.find((nestedSubItem: { related: { attributes: { url: string; }; }; }) =>
      nestedSubItem.related?.attributes?.url === contenxt!.params!.slug)));

  const sideMenuSecondLevel = get_parent(nestedItem?.items, contenxt!.params!.slug as string);

  return {
		props: {
      ...data,
      sidemenu: {...sideMenuFirstLevel, ...sideMenuSecondLevel}
    }
  }
}