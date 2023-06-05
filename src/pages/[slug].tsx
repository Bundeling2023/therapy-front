import Footer from "@/components/Footer";
import NavSection from "@/components/Header";
import { GET_PAGE_DATA } from "@/graphql/queries";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import HTMLReactParser from "html-react-parser";
import Head from "next/head";
import { GetServerSideProps } from "next/types";
import Image from "next/image";
import Link from "next/link";


export default function PostPage( props: any ) {
  const { header, footer } = props
  const { seo } = props.pages.data[0].attributes;

  console.log(props)

  return (
    <>
      <Head>
        <title>{seo.metaTitle}</title>
        <meta name='description' content={seo.metaDescription} />
        <link rel="canonical" href={seo.canonicalURL} />
      </Head>
      <NavSection data={header} info={props.generalinfo.data.attributes.contactsInfo} />
      <div className="py-20 bg-blue-100">
        <h1 className="mb-0 text-2xl font-semibold text-center text-dark-purple md:text-5xl">
          {props.pages.data[0].attributes.mainTitle}
        </h1>
      </div>
      <section className="flex bg-blue-100">
        {props.pages.data[0].attributes.simplePage ? (
          <main className="flex w-90% max-w-1560 mx-auto pb-20">
            <div className="bg-white rounded-xl p-7 simple-page">
              {HTMLReactParser(props.pages.data[0].attributes.simplePage.description)}
            </div>
          </main>
        ) : (
          <main className="flex w-90% max-w-1560 flex-wrap mx-auto justify-between pb-20 gap-5">
            {props.pages.data[0].attributes.pageWithBlocks.blocks.map((item: any) =>
              <>
                {item.link.data ? (
                  <Link href='#' key={item.title} className="bg-white rounded-xl p-7 xl:max-w-[49%] sm:max-w-[48%] max-w-full simple-page transition duration-500 ease-in-out hover:shadow-lg hover:-translate-y-2">
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

      <Footer data={footer} info={props.generalinfo.data.attributes.contactsInfo} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  const client = new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
		cache: new InMemoryCache(),
	})

	const { data } = await client.query({
		query: GET_PAGE_DATA,
		variables: { slugUrl: context.params?.slug },
	})

	if (!(data.pages.data).length) {
    return {
      notFound: true,
    };
  }

  return {
		props: data
  }
}