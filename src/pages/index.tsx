import Footer from "@/components/Footer";
import NavSection from "@/components/Header";
import HeaderSlider from "@/components/main-page/HeaderSlider";
import ModalVideo from "@/components/main-page/ModalVideo";
import ReviewsBlock from "@/components/main-page/ReviewsBlock";
import ServicesBlock from "@/components/main-page/ServicesBlock";
import TeamsBlock from "@/components/main-page/TeamsBlock";
import MapSection from "@/components/main-page/MapSection";
import { GET_HOMEPAGE_DATA } from "@/graphql/queries";
import { HomePage } from "@/types/types";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GetServerSideProps } from "next";
import Head from 'next/head'

export default function Home(props: HomePage) {
  const { header, footer } = props
  const {
    addressesMap,
    mainBanner,
    services,
    team,
    contactsInfo,
    seo,
    modalVideo
  } = props.home.data.attributes;

  console.log(modalVideo)

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
      <TeamsBlock data={team}/>
      <ModalVideo data={modalVideo}/>
      <ReviewsBlock />
      <MapSection data={addressesMap} info={contactsInfo} />
      <Footer data={footer} info={contactsInfo} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
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
