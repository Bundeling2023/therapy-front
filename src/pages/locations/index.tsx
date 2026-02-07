import Footer from "@/components/Footer";
import NavSection from "@/components/Header";
import { GET_LOCATIONS_DATA } from "@/graphql/GET_LOCATIONS_DATA";
import { LocationsPage } from "@/types/types";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { Icon } from "@iconify/react";
import { GetStaticProps } from "next/types";
import Image from "next/image";
import { optimizeCloudinaryUrl, RESPONSIVE_SIZES_CARD, getBlurPlaceholder } from "@/types/cloudinaryOptimization";
import Head from 'next/head'
import { DEFAULT_REVALIDATE_TIME } from "@/types/constants";
import BackButton from "@/components/BackButton";
import { ConstructPageTitle } from "@/types/utils";

export default function Locations(props: LocationsPage) {
  const { header, footer } = props
  const { seo } = props.locatie;

  const locationsData = props.locations || [];
  return (
    <>
      <Head>
        <title>{ConstructPageTitle(seo.metaTitle, 'Locaties')}</title>
        <meta name='description' content={seo.metaDescription && seo.metaDescription} />
        <link rel="canonical" href={seo.canonicalURL && seo.canonicalURL} />
      </Head>
      <NavSection locations={locationsData} team={props.teams || []} data={header} info={props.generalinfo.contactsInfo} socialLinks={props.generalinfo.socialLinks} />
      <div className="pt-20 pb-16 bg-blue-100">
        <BackButton className="absolute pl-4 -mt-4">Terug</BackButton>
        <h1 className="mb-0 text-2xl font-semibold text-center text-dark-purple md:text-5xl">
          {props.locatie.title}
        </h1>
      </div>
      <section className="bg-blue-50 relative md:pt-[85px] pt-[85px] pb-10">
        <div className="relative xl:w-80% w-90% max-w-1560 h-auto mx-auto">
          <div className="flex flex-wrap justify-between gap-y-10">
            {locationsData.map((item) =>
              <div
                id={item.url.slice(item.url.indexOf('#') + 1)}
                className="bg-white rounded-[42px] p-8 sm:w-[48%] w-full" key={item.url}
              >
                <h3 className="mb-8 text-2xl font-medium">{item.title}</h3>
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
                      <a href={`mailto:${item.email}`}>{item.email}</a>
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
                      <a href={`tel:${item.phone}`}>{item.phone}</a>
                    </div>
                    <p className="text-[#696AA5] lg:text-[26px] text-base mt-6 leading-normal">
                      {item.address}
                    </p>
                  </div>
                  {item.img?.url && (
                    <div className="max-w-[50%] max-[1600px]:max-w-full">
                      <Image
                        width="0"
                        height="0"
                        quality="80"
                        alt={item.address}
                        src={optimizeCloudinaryUrl(item.img.url, { quality: 'auto', dpr: 'auto', gravity: 'auto', crop: 'auto' })}
                        sizes={RESPONSIVE_SIZES_CARD}
                        placeholder="blur"
                        blurDataURL={getBlurPlaceholder(item.img.url)}
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
                    <p className="lg:min-w-[170px] min-w-[100px]">{item.workingHours.monday}</p>
                  </div>
                  <div className="flex justify-between lg:mt-[18px] mt-[8px]">
                    <p>dinsdag</p>
                    <p className="lg:min-w-[170px] min-w-[100px]">{item.workingHours.tuesday}</p>
                  </div>
                  <div className="flex justify-between lg:mt-[18px] mt-[8px]">
                    <p>woensdag</p>
                    <p className="lg:min-w-[170px] min-w-[100px]">{item.workingHours.wednesday}</p>
                  </div>
                  <div className="flex justify-between lg:mt-[18px] mt-[8px]">
                    <p>donderdag</p>
                    <p className="lg:min-w-[170px] min-w-[100px]">{item.workingHours.thursday}</p>
                  </div>
                  <div className="flex justify-between lg:mt-[18px] mt-[8px]">
                    <p>vrijdag</p>
                    <p className="lg:min-w-[170px] min-w-[100px]">{item.workingHours.friday}</p>
                  </div>
                  <div className="flex justify-between lg:mt-[18px] mt-[8px]">
                    <p>zaterdag</p>
                    <p className="lg:min-w-[170px] min-w-[100px]">{item.workingHours.saturday}</p>
                  </div>
                  <div className="flex justify-between lg:mt-[18px] mt-[8px]">
                    <p>zondag</p>
                    <p className="lg:min-w-[170px] min-w-[100px]">{item.workingHours.sunday}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer
        data={footer}
        locations={props.locations}
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
      query: GET_LOCATIONS_DATA
    })

    const data = result.data as any;

    const props = {
      locatie: data?.locatie || {},
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
    console.error('Failed to fetch locations page data:', error);
    return {
      notFound: true,
      revalidate: 10,
    };
  }
}
