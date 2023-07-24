import Footer from "@/components/Footer";
import NavSection from "@/components/Header";
import { GET_LOCATIONS_DATA, } from "@/graphql/queries";
import { LocationsPage } from "@/types/types";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { Icon } from "@iconify/react";
import { GetStaticProps } from "next/types";
import Image from "next/image";
import Head from 'next/head'
import { SortLocations } from "@/types/utils";
import { DEFAULT_REVALIDATE_TIME } from "@/types/constants";

export default function Locations(props: LocationsPage) {
  const { header, footer } = props
  const { seo } = props.locatie.data.attributes;

  const locationsData = SortLocations(props.locations.data);
  return (
    <>
      <Head>
        <title>{seo.metaTitle && seo.metaTitle}</title>
        <meta name='description' content={seo.metaDescription && seo.metaDescription} />
        <link rel="canonical" href={seo.canonicalURL && seo.canonicalURL} />
      </Head>
      <NavSection locations={locationsData} team={props.teams.data} data={header} info={props.generalinfo.data.attributes.contactsInfo} />
      <div className="py-20 bg-blue-100">
        <h1 className="mb-0 text-2xl font-semibold text-center text-dark-purple md:text-5xl">
          {props.locatie.data.attributes.title}
        </h1>
      </div>
      <section className="bg-blue-50 relative md:pt-[85px] pt-[85px] pb-10">
        <div className="relative xl:w-80% w-90% max-w-1560 h-auto mx-auto">
          <div className="flex flex-wrap justify-between gap-y-10">
          {locationsData.map((item) =>
            <div
              id={item.attributes.url.slice(item.attributes.url.indexOf('#') + 1)}
              className="bg-white rounded-[42px] p-8 sm:w-[48%] w-full" key={item.attributes.url}
            >
              <h3 className="mb-8 text-2xl font-medium">{item.attributes.title}</h3>
              <div className="flex justify-between gap-6 flex-row max-[1600px]:flex-col-reverse">
                <div>
                  <div className="flex items-center gap-3 lg:text-2xl text-base text-[#696AA5] font-normal">
                    <span className="block p-2 rounded-full bg-dark-purple lg:p-3">
                      <Icon
                        icon="material-symbols:mail-rounded"
                        color="white"
                        width="24"
                        height="24"
                      />
                    </span>
                    <a href={`mailto:${item.attributes.email}`}>{item.attributes.email}</a>
                  </div>
                  <div className="flex mt-4 items-center gap-3 lg:text-2xl text-base text-[#696AA5] font-normal">
                    <span className="block p-2 rounded-full bg-dark-purple lg:p-3">
                      <Icon
                        icon="ic:baseline-local-phone"
                        color="white"
                        width="24"
                        height="24"
                      />
                    </span>
                    <a href={`tel:${item.attributes.phone}`}>{item.attributes.phone}</a>
                  </div>
                  <p className="text-[#696AA5] lg:text-[26px] text-base mt-6 leading-normal">
                    {item.attributes.address}
                  </p>
                </div>
                {item.attributes.img.data && (
                  <div className="max-w-[50%] max-[1600px]:max-w-full">
                    <Image
                      width="0"
                      height="0"
                      quality="80"
                      alt={item.attributes.address}
                      src={item.attributes.img.data && item.attributes.img.data.attributes.url}
                      sizes="100vw"
                      blurDataURL={item.attributes.img.data && item.attributes.img.data.attributes.url}
                      className="relative z-0 aspect-video object-cover w-full h-full rounded-[42px]"
                    />
                  </div>
                )}
              </div>
              <p className="mt-8 text-base font-semibold text-dark-purple lg:mt-10 lg:text-2xl">
                Openingstijden
              </p>
              <div className="[&>*]:text-[#696AA5] [&>*]:lg:text-[26px] [&>*]:text-sm lg:pb-0 pb-2">
                <div className="flex justify-between lg:mt-[18px] mt-[8px]">
                  <p>maandag</p>
                  <p className="lg:min-w-[170px] min-w-[100px]">{item.attributes.workingHours.monday}</p>
                </div>
                <div className="flex justify-between lg:mt-[18px] mt-[8px]">
                  <p>dinsdag</p>
                  <p className="lg:min-w-[170px] min-w-[100px]">{item.attributes.workingHours.tuesday}</p>
                </div>
                <div className="flex justify-between lg:mt-[18px] mt-[8px]">
                  <p>woensdag</p>
                  <p className="lg:min-w-[170px] min-w-[100px]">{item.attributes.workingHours.wednesday}</p>
                </div>
                <div className="flex justify-between lg:mt-[18px] mt-[8px]">
                  <p>donderdag</p>
                  <p className="lg:min-w-[170px] min-w-[100px]">{item.attributes.workingHours.thursday}</p>
                </div>
                <div className="flex justify-between lg:mt-[18px] mt-[8px]">
                  <p>vrijdag</p>
                  <p className="lg:min-w-[170px] min-w-[100px]">{item.attributes.workingHours.friday}</p>
                </div>
                <div className="flex justify-between lg:mt-[18px] mt-[8px]">
                  <p>zaterdag</p>
                  <p className="lg:min-w-[170px] min-w-[100px]">{item.attributes.workingHours.saturday}</p>
                </div>
                <div className="flex justify-between lg:mt-[18px] mt-[8px]">
                  <p>zondag</p>
                  <p className="lg:min-w-[170px] min-w-[100px]">{item.attributes.workingHours.sunday}</p>
                </div>
              </div>
            </div>
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
		query: GET_LOCATIONS_DATA
	})

	return {
		props: data,
    revalidate: Number(process.env.NEXT_PUBLIC_REVALIDATE_TIME) || DEFAULT_REVALIDATE_TIME,
  }
}
