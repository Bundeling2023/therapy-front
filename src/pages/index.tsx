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
import { ConstructPageTitle, isEnvironment } from "@/types/utils";
import Script from "next/script";

export default function Home(props: HomePage) {
  const { header, footer, locations } = props
  const {
    mainBanner,
    services,
    seo,
    modalVideo
  } = props.home.data.attributes;

  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GTM_ID || "";
  const isProduction = isEnvironment("production")

  return (
    <>
      <Head>
        <title>{ConstructPageTitle(seo.metaTitle, undefined, false)}</title>
        <meta
          name="robots"
          content={
            process.env.NEXT_PUBLIC_INDEX_IN_SEARCH_ENGINES
              ? "index, follow"
              : "noindex, nofollow"
          }
        ></meta>
        <meta
          name="description"
          content={seo.metaDescription && seo.metaDescription}
        />
        <link rel="canonical" href={seo.canonicalURL && seo.canonicalURL} />
      </Head>
      {isProduction && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
            </Script>
          </>
        )}
      <NavSection
        locations={locations.data}
        team={props.teams.data}
        data={header}
        info={props.generalinfo.data.attributes.contactsInfo}
        socialLinks={props.generalinfo.data.attributes.socialLinks}
      />
      <HeaderSlider data={mainBanner} />
      <ServicesBlock data={services} />
      <TeamsBlock data={props.teams.data} />
      <ModalVideo data={modalVideo} />
      <MapSection data={locations.data} />
      <ReviewsBlock />
      <Footer
        data={footer}
        locations={locations.data}
        privacyLink={
          props.generalinfo.data.attributes.privacyPolicyPage.data.attributes
            .url
        }
        termsAndConditionsPage={
          props.generalinfo.data.attributes.termsAndConditionsPage.data
            .attributes.url
        }
        info={props.generalinfo.data.attributes.contactsInfo}
        socialLinks={props.generalinfo.data.attributes.socialLinks}
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
    revalidate: Number(process.env.NEXT_PUBLIC_REVALIDATE_TIME) || DEFAULT_REVALIDATE_TIME,
  }
}
