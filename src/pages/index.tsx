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
import { GetStaticProps } from "next/types";
import Head from 'next/head'
import { GET_HOMEPAGE_DATA } from "@/graphql/queries";
import { DEFAULT_REVALIDATE_TIME } from "@/types/constants";

export default function Home(props: HomePage) {
  const { header, footer, locations } = props
  const {
    mainBanner,
    services,
    seo,
    modalVideo
  } = props.home.data.attributes;

  return (
    <>
      <Head>
        <title>{seo.metaTitle && seo.metaTitle}</title>
        <meta name='description' content={seo.metaDescription && seo.metaDescription} />
        <link rel="canonical" href={seo.canonicalURL && seo.canonicalURL} />
      </Head>
      <NavSection locations={locations.data} team={props.teams.data} data={header} info={props.generalinfo.data.attributes.contactsInfo} />
      <HeaderSlider data={mainBanner} />
      <ServicesBlock data={services} />
      <TeamsBlock data={props.teams.data}/>
      <ModalVideo data={modalVideo}/>
      <ReviewsBlock />
      <MapSection data={locations.data} />
      <Footer
        data={footer}
        locations={locations.data}
        privacyLink={props.generalinfo.data.attributes.privacyPolicyPage.data.attributes.url}
        termsAndConditionsPage={props.generalinfo.data.attributes.termsAndConditionsPage.data.attributes.url}
        info={props.generalinfo.data.attributes.contactsInfo}
      />
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
		props: data,
    revalidate: Number(process.env.NEXT_PUBLIC_REVALIDATE_TIME) ?? DEFAULT_REVALIDATE_TIME,
  }
}
