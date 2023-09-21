import Footer from "@/components/Footer";
import NavSection from "@/components/Header";
import TeamMember from "@/components/team/TeamMember";
import { GET_TEAMPAGE_DATA } from "@/graphql/queries";
import { Seo, TeamPage } from "@/types/types";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GetStaticProps } from "next/types";
import Head from 'next/head'
import { DEFAULT_REVALIDATE_TIME } from "@/types/constants";
import BackButton from "@/components/BackButton";
import { ConstructPageTitle } from "@/types/utils";

export default function Team(props: TeamPage) {
  const { header, footer } = props
  const { seo } = props.teampage.data.attributes;

  return (
    <>
      <Head>
        <title>{ConstructPageTitle(seo.metaTitle, 'Team')}</title>
        <meta name='description' content={seo.metaDescription && seo.metaDescription} />
        <link rel="canonical" href={seo.canonicalURL && seo.canonicalURL} />
      </Head>
      <NavSection locations={props.locations.data} team={props.teams.data} data={header} info={props.generalinfo.data.attributes.contactsInfo} socialLinks={props.generalinfo.data.attributes.socialLinks} />
      <div className="pt-20 pb-16 bg-blue-100 mb-11">
        <BackButton className="absolute pl-4 -mt-8">Terug</BackButton>
        <h1 className="mb-0 text-2xl font-semibold text-center text-dark-purple md:text-5xl">
          {props.teampage.data.attributes.title}
        </h1>
      </div>
      <section className="xl:bg-[url('/team_bgr.svg')] bg-[url('/team_bgr_mob.svg')] bg-no-repeat bg-top md:bg-cover bg-contain relative md:pt-[85px] pt-[67px] md:mt-[27px] mt-2 pb-10">
        <div className="relative xl:w-80% w-90% max-w-1560 h-auto mx-auto">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
          {props.teams.data.map((item) =>
            <TeamMember key={item.attributes.name} data={item} />
          )}
          </div>
        </div>
      </section>
      <Footer
        data={footer}
        locations={props.locations.data}
        privacyLink={props.generalinfo.data.attributes.privacyPolicyPage.data.attributes.url}
        termsAndConditionsPage={props.generalinfo.data.attributes.termsAndConditionsPage.data.attributes.url}
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
		query: GET_TEAMPAGE_DATA,
	})

	return {
		props: data,
    revalidate: Number(process.env.NEXT_PUBLIC_REVALIDATE_TIME) || DEFAULT_REVALIDATE_TIME,
  }
}

