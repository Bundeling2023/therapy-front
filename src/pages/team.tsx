import Footer from "@/components/Footer";
import NavSection from "@/components/Header";
import TeamsGrid from "@/components/team/TeamsGrid";
import { GET_SHARED_DATA } from "@/graphql/shared";
import { TeamPage } from "@/types/types";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GetServerSideProps } from "next";
import Head from 'next/head'

export default function Team(props: TeamPage) {
  const { header, footer } = props
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
      <TeamsGrid data={teams.data}/>
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
		query: GET_SHARED_DATA
	})

	return {
		props: data
  }
}
