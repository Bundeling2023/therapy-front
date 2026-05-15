import Footer from "@/components/Footer";
import NavSection from "@/components/Header";
import HeaderSlider from "@/components/main-page/HeaderSlider";
import ReviewsBlock from "@/components/main-page/ReviewsBlock";
import ServicesBlock from "@/components/main-page/ServicesBlock";
import TeamsBlock from "@/components/main-page/TeamsBlock";
import MapSection from "@/components/main-page/MapSection";
import { HomePage } from "@/types/types";
import { GetStaticProps } from "next/types";
import Head from "next/head";
import { GET_HOMEPAGE_DATA } from "@/graphql/GET_HOMEPAGE_DATA";
import { GET_NAVIGATION_DATA } from "@/graphql/GET_NAVIGATION_DATA";
import { DEFAULT_REVALIDATE_TIME } from "@/types/constants";
import { ConstructPageTitle, isEnvironment } from "@/types/utils";
import Script from "next/script";
import { createServerApolloClient } from "@/graphql/apolloClient";

export default function Home(props: HomePage) {
  const { header, footer, locations } = props;
  const { mainBanner, services, seo } = props.home;

  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GTM_ID || "";
  const isProduction = isEnvironment("production");

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
        locations={locations}
        team={props.teams}
        data={header}
        info={props.generalinfo.contactsInfo}
        socialLinks={props.generalinfo.socialLinks}
      />
      <HeaderSlider data={mainBanner} />
      <ServicesBlock data={services} />
      <TeamsBlock data={props.teams} />
      <MapSection data={locations} />
      <ReviewsBlock />
      <Footer
        data={footer}
        locations={locations}
        privacyLink={props.generalinfo.privacyPolicyPage.url}
        termsAndConditionsPage={props.generalinfo.termsAndConditionsPage.url}
        info={props.generalinfo.contactsInfo}
        socialLinks={props.generalinfo.socialLinks}
      />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const client = createServerApolloClient();

  try {
    const [result, navigationResult] = await Promise.all([
      client.query({
        query: GET_HOMEPAGE_DATA,
      }),
      client.query({
        query: GET_NAVIGATION_DATA,
      }),
    ]);

    const data = result.data as any;
    const navigationData = navigationResult.data as any;

    const props = {
      home: data?.home || {
        mainBanner: [],
        services: [],
        seo: { metaTitle: '', metaDescription: '' },
        modalVideo: { providerUid: '' }
      },
      locations: data?.locations || [],
      teams: data?.teams || [],
      generalinfo: data?.generalinfo || {},
      header: Array.isArray(navigationData?.header) ? navigationData.header : [],
      footer: Array.isArray(navigationData?.footer) ? navigationData.footer : [],
    };

    return {
      props,
      revalidate:
        Number(process.env.NEXT_PUBLIC_REVALIDATE_TIME) ||
        DEFAULT_REVALIDATE_TIME,
    };
  } catch (error) {
    console.error('Failed to fetch home page data:', error);
    return {
      props: {
        __maintenance: true,
      },
      revalidate: 10,
    };
  }
};
