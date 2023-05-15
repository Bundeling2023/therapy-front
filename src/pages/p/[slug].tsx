import NavSection from "@/components/Header";
import { GET_ALL_SLUGS_FOR_CONTENT_PAGES, GET_SINGLE_PAGE } from "@/graphql/contentpage";
import { GET_SHARED_DATA } from "@/graphql/shared";
import { ContentPage, Page } from "@/types/types";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import Footer from "@/components/Footer";

export default function Page(props: ContentPage) {
  const { header, footer, page } = props
  const {
    teams,
    contactsInfo,
    seo  } = props.home.data.attributes;

  return (
    <>
      <Head>
        <title>{seo.metaTitle}</title>
        <meta name='description' content={seo.metaDescription} />
        <link rel="canonical" href={seo.canonicalURL} />
      </Head>
      <NavSection data={header} info={contactsInfo} />
      <article className="max-w-3xl mx-auto p-5 space-y-10">
            <h1 className="text-3xl mt-10 mb-3">{page.attributes.title}</h1>
            <div className="flex items-center space-x-2">
            </div>
            <ReactMarkdown className=" mb-2">{page.attributes.content}</ReactMarkdown>
            <div className="mt-10"></div>
          </article>
      <Footer data={footer} info={contactsInfo} />
    </>
  );
}
 
 
  const client = new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
    cache: new InMemoryCache(),
  })

  export async function getStaticPaths(){    
    const { data } = await client.query({query: GET_ALL_SLUGS_FOR_CONTENT_PAGES});
  
    const paths = data.pages.data.map((page: Page) => {
      return { params: { slug: page.attributes.slug}}
    })
  
    return {
      paths,
      fallback: false
    }
  };
  
  export async function getStaticProps({params} : ContentPage){
   const { data } = await client.query({
      query: GET_SINGLE_PAGE,
      variables: { slugUrl: params.slug}
    });

    const { data: sharedData } = await client.query({
      query: GET_SHARED_DATA
    })
  
    return {
      props: { page: data.pages.data[0], params, ...sharedData }
    }
  }