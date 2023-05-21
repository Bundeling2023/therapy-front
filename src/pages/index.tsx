import Footer from "@/components/Footer";
import NavSection from "@/components/Header";
import HeaderSlider from "@/components/main-page/HeaderSlider";
import ModalVideo from "@/components/main-page/ModalVideo";
import ReviewsBlock from "@/components/main-page/ReviewsBlock";
import ServicesBlock from "@/components/main-page/ServicesBlock";
import TeamsBlock from "@/components/main-page/TeamsBlock";
import MapSection from "@/components/main-page/MapSection";
import { HomePage } from "@/types/types";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GetStaticProps } from "next";
import Head from 'next/head'
import { GET_HOMEPAGE_DATA } from "@/graphql/queries";

export default function Home(props: HomePage) {
  const { header, footer, addresses } = props
  const {
    mainBanner,
    services,
    teams,
    contactsInfo,
    seo,
    modalVideo
  } = props.home.data.attributes;

  return (
    <>
      <Head>
        <title>{seo.metaTitle}</title>
        <meta name='description' content={seo.metaDescription} />
        <link rel="canonical" href={seo.canonicalURL} />
      </Head>
      <NavSection data={header} info={contactsInfo} />
      <HeaderSlider data={mainBanner} />
      <ServicesBlock data={services} />
      <TeamsBlock data={teams.data}/>
      <ModalVideo data={modalVideo}/>
      <ReviewsBlock />
      <MapSection data={addresses.data} info={contactsInfo} />
      <Footer data={footer} info={contactsInfo} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const client = new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
		cache: new InMemoryCache(),
	})

	const { data } = await client.query({
		query: GET_HOMEPAGE_DATA
	})

	return {
		props: data
  }
}
