import Footer from "@/components/Footer";
import NavSection from "@/components/Header";
import TeamMember from "@/components/team/TeamMember";
import { GET_TEAMPAGE_DATA } from "@/graphql/GET_TEAMPAGE_DATA";
import { Seo, TeamPage } from "@/types/types";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { GetStaticProps } from "next/types";
import Head from 'next/head'
import { DEFAULT_REVALIDATE_TIME } from "@/types/constants";
import BackButton from "@/components/BackButton";
import { ConstructPageTitle } from "@/types/utils";

export default function Team(props: TeamPage) {
  const { header, footer } = props
  const { seo } = props.teampage;

  return (
    <>
      <Head>
        <title>{ConstructPageTitle(seo.metaTitle, 'Team')}</title>
        <meta name='description' content={seo.metaDescription && seo.metaDescription} />
        <link rel="canonical" href={seo.canonicalURL && seo.canonicalURL} />
      </Head>
      <NavSection locations={props.locations || []} team={props.teams || []} data={header} info={props.generalinfo.contactsInfo} socialLinks={props.generalinfo.socialLinks} />
      <div className="pt-20 pb-16 bg-blue-100 mb-11">
        <BackButton className="absolute pl-4 -mt-4">Terug</BackButton>
        <h1 className="mb-0 text-2xl font-semibold text-center text-dark-purple md:text-5xl">
          {props.teampage.title}
        </h1>
      </div>
      <section className="xl:bg-[url('/team_bgr.svg')] bg-[url('/team_bgr_mob.svg')] bg-no-repeat bg-top md:bg-cover bg-contain relative md:pt-[85px] pt-[67px] md:mt-[27px] mt-2 pb-10">
        <div className="relative xl:w-80% w-90% max-w-1560 h-auto mx-auto">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
            {(props.teams || []).map((item) =>
              <TeamMember key={item.name} data={item} />
            )}
          </div>
        </div>
      </section>
      <Footer
        data={footer}
        locations={props.locations || []}
        privacyLink={props.generalinfo.privacyPolicyPage.url}
        termsAndConditionsPage={props.generalinfo.termsAndConditionsPage.url}
        info={props.generalinfo.contactsInfo}
        socialLinks={props.generalinfo.socialLinks}
      />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
    }),
    cache: new InMemoryCache(),
  })

  try {
    const result = await client.query({
      query: GET_TEAMPAGE_DATA,
    })

    const data = result.data as any;

    const props = {
      teampage: data?.teampage || {},
      locations: data?.locations || [],
      teams: data?.teams || [],
      generalinfo: data?.generalinfo || {},
      header: Array.isArray(data?.header) ? data.header : [],
      footer: Array.isArray(data?.footer) ? data.footer : [],
    };

    return {
      props,
      revalidate: Number(process.env.NEXT_PUBLIC_REVALIDATE_TIME) || DEFAULT_REVALIDATE_TIME,
    }
  } catch (error) {
    console.error('Failed to fetch team page data:', error);
    return {
      props: {
        __maintenance: true,
      },
      revalidate: 10,
    };
  }
}

