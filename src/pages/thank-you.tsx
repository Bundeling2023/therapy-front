import Footer from "@/components/Footer";
import NavSection from "@/components/Header";
import { GET_CONTACTUS_PAGE } from "@/graphql/GET_CONTACTUS_PAGE";
import { ContactsUsPage } from "@/types/types";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GetStaticProps } from "next/types";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DEFAULT_REVALIDATE_TIME } from "@/types/constants";
import BackButton from "@/components/BackButton";
import { ConstructPageTitle } from "@/types/utils";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function ThankYouPage(props: ContactsUsPage) {
  const { header, footer } = props;
  const router = useRouter();
  const [firstName, setFirstName] = useState<string>("");
  const [contactType, setContactType] = useState<string>("");
  const [service, setService] = useState<string>("");
  const locations = props.locations.data;

  useEffect(() => {
    // Get query parameters
    const { type, firstname, service: serviceParam } = router.query;
    
    if (type && typeof type === 'string') {
      setContactType(type);
    }
    
    if (firstname && typeof firstname === 'string') {
      setFirstName(firstname);
    }

    if (serviceParam && typeof serviceParam === 'string') {
      setService(serviceParam);
    }
  }, [router.query]);

  const getThankYouMessage = () => {
    if (contactType === "appointment" && service) {
      return `Uw bericht over ${service.toLowerCase()} is verzonden.`;
    }
    return `Uw vraag is verzonden.`;
  };

  const getStepsData = () => {
    if (contactType === "appointment") {
      return [
        {
          title: "Beoordeling",
          description: "We bekijken uw aanvraag en beoordelen welke behandeling het beste bij u past."
        },
        {
          title: "Afspraak", 
          description: "We nemen contact met u op om een afspraak in te plannen op een tijdstip dat u uitkomt."
        },
        {
          title: "Behandeling",
          description: "We starten met uw behandeling en begeleiden u naar een volledig herstel."
        }
      ];
    } else {
      return [
        {
          title: "Beoordeling",
          description: "We bekijken uw vraag en zorgen ervoor dat u het juiste antwoord krijgt."
        },
        {
          title: "Antwoord",
          description: "We nemen contact met u op om uw vraag te beantwoorden."
        }
      ];
    }
  };

  const steps = getStepsData();

  return (
    <>
      <Head>
        <title>{ConstructPageTitle("Bedankt voor uw bericht", "Bedankt")}</title>
        <meta
          name="description"
          content="Bedankt voor het invullen van ons contactformulier. We nemen zo snel mogelijk contact met u op."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <NavSection
        locations={props.locations.data}
        team={props.teams.data}
        data={header}
        info={props.generalinfo.data.attributes.contactsInfo}
        socialLinks={props.generalinfo.data.attributes.socialLinks}
      />
      
      <div className="pt-20 mb-11">
        <BackButton className="absolute pl-4 -mt-6 md:-mt-4">Terug</BackButton>
        <h1 className="mb-0 text-2xl font-semibold text-center text-dark-purple md:text-4xl">
          Bedankt {firstName},
        </h1>
      </div>

      <section className="bg-blue-50 relative xl:px-[200px] 2xl:px-[400px] md:pt-[25px] pt-[10px] mt-2 pb-10">
        <div className="max-w-4xl mx-auto pb-8 text-center w-90% px-4">

          {/* Success Icon */}
          <div className="flex justify-center mb-4">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
              <Icon icon="mdi:check-circle" className="w-16 h-16 text-green-600" />
            </div>
          </div>
          
          {/* Thank you message */}
          <div className="mb-8">
            <p className="text-xl md:text-2xl text-dark-purple font-semibold mb-4">
              {getThankYouMessage()}
            </p>
            <p className="text-lg text-gray-700">
              We nemen zo snel mogelijk contact met u op.
            </p>
          </div>

          {/* Information cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center mb-4">
                <Icon icon="mdi:clock-time-four" className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-dark-purple mb-2">
                Reactietijd
              </h3>
              <p className="text-gray-600">
                U staat nu op onze wachtlijst, zo kijken wij welke specialist het beste bij u klachten past. Wij streven er naar u binnen een week van een afspraak te voorzien, in drukke periodes kan dit uiteraard iets langer zijn.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center mb-4">
                <Icon icon="mdi:phone" className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-dark-purple mb-2">
                Spoed
              </h3>
              <p className="text-gray-600">
                Is uw vraag of aanmelding dringend, dan kunt u ons ook direct <Link href="/locaties" className="text-blue-600 hover:text-blue-800 underline">bellen</Link> tijdens kantooruren.
              </p>
            </div>
          </div>

          {/* What happens next section */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-semibold text-dark-purple mb-6">
              Wat gebeurt er nu?
            </h3>
            <div className={`grid gap-6 text-left ${steps.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
              {steps.map((step, index) => (
                <div key={step.title} className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="font-semibold">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-purple mb-2">{step.title}</h4>
                    <p className="text-gray-600 text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional helpful info */}
          <div className="mt-12 p-6 pb-4 bg-blue-100 rounded-lg">
            <h3 className="text-lg font-semibold text-dark-purple mb-4">
              Meer informatie nodig?
            </h3>
            <p className="text-gray-700 mb-4">
              Bekijk onze specialisaties, leer ons team kennen, of vind meer informatie over onze locaties.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link 
                href="/specialisaties"
                className="inline-flex items-center px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition-colors text-sm"
              >
                <Icon icon="mdi:medical-bag" className="w-4 h-4 mr-2" />
                Specialisaties
              </Link>
              
              <Link 
                href="/team"
                className="inline-flex items-center px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition-colors text-sm"
              >
                <Icon icon="mdi:account-group" className="w-4 h-4 mr-2" />
                Ons team
              </Link>
              
              <Link 
                href="/locaties"
                className="inline-flex items-center px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition-colors text-sm"
              >
                <Icon icon="mdi:map-marker" className="w-4 h-4 mr-2" />
                Onze locaties
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer
        data={footer}
        locations={locations}
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
  });

  const { data } = await client.query({
    query: GET_CONTACTUS_PAGE,
  });

  return {
    props: data,
    revalidate:
      Number(process.env.NEXT_PUBLIC_REVALIDATE_TIME) ||
      DEFAULT_REVALIDATE_TIME,
  };
};