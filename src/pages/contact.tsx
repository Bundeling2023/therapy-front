import Footer from "@/components/Footer";
import NavSection from "@/components/Header";
import { GET_CONTACTUS_PAGE } from "@/graphql/queries";
import { ContactsUsPage } from "@/types/types";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GetStaticProps } from "next/types";
import Head from "next/head";
import { useCallback, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { DEFAULT_REVALIDATE_TIME } from "@/types/constants";
import BackButton from "@/components/BackButton";
import { ConstructPageTitle } from "@/types/utils";
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3";

export default function ContactPage(props: ContactsUsPage) {
  const { header, footer } = props;
  const { seo } = props.contactus.data.attributes;
  const [emailError, setEmailError] = useState<boolean>(false);
  const [phoneError, setPhoneError] = useState<boolean>(false);
  const [firstnameError, setFirstNameError] = useState<boolean>(false);
  const [lastnameError, setLastNameError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const locations = props.locations.data;
  const [captchaToken, setCaptchaToken] = useState<string>("");
  const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);
  const [lastSentTime, setLastSentTime] = useState<number>(0);

  const [selectedContactOption, setSelectedContactOption] =
    useState("appointment");

  const handleSelectedTypeOfContactChange = (event: any) => {
    setSelectedContactOption(event.target.value);
  };

  const handleCaptchaChange = useCallback((token: string | null) => {
    if (token) {
      setCaptchaToken(token);
    }
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setEmailError(e.target.email.value === "");
    setPhoneError(e.target.phone.value === "");
    setFirstNameError(e.target.firstname.value === "");
    setLastNameError(e.target.lastname.value === "");

    if (
      !(e.target.email.value === "") &&
      !(e.target.phone.value === "") &&
      !(e.target.firstname.value === "") &&
      !(e.target.lastname.value === "")
    ) {
      setIsLoading(true);
      const currentTime = Date.now();
      if (currentTime - lastSentTime < 30000) {
        toast.warning(
          "U heeft recent al een bericht verzonden, probeert u het over enkele minuten nog eens of neem rechtstreeks contact met ons op via e-mail of telefoon.",
          {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 30000,
          }
        );
        return;
      }

      try {
        await axios.post("/api/nodemailer", {
          email: e.target.email.value,
          phone: e.target.phone.value,
          firstname: e.target.firstname.value,
          lastname: e.target.lastname.value,
          location: e.target.location.value,
          service: e.target.service.value,
          message: e.target.message.value,
          contactMethod: selectedContactOption,
          captchaToken: captchaToken,
        });
        setLastSentTime(currentTime);
        toast.success(
          selectedContactOption === "appointment"
            ? `Bedankt ${e.target.firstname.value}, uw bericht over ${e.target.service.value?.toLowerCase()} is verzonden.`
            : `Bedankt ${e.target.firstname.value}, uw bericht is verzonden.`,
          {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 30000,
          }
        );
        e.target.reset();
      } catch (e) {
        toast.error(
          "Er is iets misgegaan met het verzenden van het formulier, probeert u het nog eens of neem rechtstreeks contact met ons op via e-mail of telefoon.",
          {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 30000,
          }
        );
      } finally {
        setRefreshReCaptcha((r) => !r);
        setIsLoading(false);
      }
    }
  };

  const serviceOptions = [
    "Algemene fysiotherapie",
    "Kinderfysiotherapie",
    "Geriatrie (Fysio voor ouderen)",
    "Manuele therapie",
  ];

  const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";
  return (
    <>
      <Head>
        <title>{ConstructPageTitle(seo.metaTitle, "Contact")}</title>
        <meta
          name="description"
          content={seo.metaDescription && seo.metaDescription}
        />
        <link rel="canonical" href={seo.canonicalURL && seo.canonicalURL} />
      </Head>
      <NavSection
        locations={props.locations.data}
        team={props.teams.data}
        data={header}
        info={props.generalinfo.data.attributes.contactsInfo}
        socialLinks={props.generalinfo.data.attributes.socialLinks}
      />
      <div className="pt-20 mb-11">
        <BackButton className="absolute pl-4 -mt-8">Terug</BackButton>
        <h1 className="mb-0 text-2xl font-semibold text-center text-dark-purple md:text-5xl">
          {props.contactus.data.attributes.title}
        </h1>
      </div>
      <section className="bg-blue-50 relative md:pt-[85px] pt-[85px] md:mt-[27px] mt-2 pb-20">
        <GoogleReCaptchaProvider reCaptchaKey={recaptchaKey}>
          <form
            className="flex flex-wrap justify-between w-90% mx-auto gap-y-5 max-w-1560"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="w-full form-control sm:max-w-[49%]">
              <label className="label">
                <span className="label-text">
                  Voornaam <span className="text-red-700">*</span>
                </span>
              </label>
              <input
                onChange={() => setFirstNameError(false)}
                type="text"
                name="firstname"
                placeholder="Voornaam"
                className="w-full input input-bordered"
              />
              {firstnameError && (
                <span className="font-semibold text-red-700">
                  Dit veld is vereist.
                </span>
              )}
            </div>
            <div className="w-full form-control sm:max-w-[49%]">
              <label className="label">
                <span className="label-text">
                  Achternaam <span className="text-red-700">*</span>
                </span>
              </label>
              <input
                onChange={() => setLastNameError(false)}
                type="text"
                name="lastname"
                placeholder="Achternaam"
                className="w-full input input-bordered"
              />
              {lastnameError && (
                <span className="font-semibold text-red-700">
                  Dit veld is vereist.
                </span>
              )}
            </div>
            <div className="w-full form-control sm:max-w-[49%]">
              <label className="label">
                <span className="label-text">
                  E-mailadres <span className="text-red-700">*</span>
                </span>
              </label>
              <input
                onChange={() => setEmailError(false)}
                type="text"
                name="email"
                placeholder="E-mail adres"
                className="w-full input input-bordered"
              />
              {emailError && (
                <span className="font-semibold text-red-700">
                  Dit veld is vereist.
                </span>
              )}
            </div>
            <div className="w-full form-control sm:max-w-[49%]">
              <label htmlFor="phone" className="label">
                <span className="label-text">
                  Telefoon nummer <span className="text-red-700">*</span>
                </span>
              </label>
              <input
                onChange={() => setPhoneError(false)}
                type="text"
                name="phone"
                placeholder="Telefoon nummer"
                className="w-full input input-bordered"
              />
              {phoneError && (
                <span className="font-semibold text-red-700">
                  Dit veld is vereist.
                </span>
              )}
            </div>
            <fieldset>
              <legend className="text-sm leading-6 text-gray-900">
                Soort contact
              </legend>
              <div className="mt-2 space-y-3">
                <div className="flex items-center gap-x-3">
                  <input
                    id="contact-appointment"
                    name="contact-type"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value="appointment"
                    checked={selectedContactOption === "appointment"}
                    onChange={handleSelectedTypeOfContactChange}
                  />
                  <label
                    htmlFor="contact-appointment"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Afspraak maken
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="contact-general-inquiry"
                    name="contact-type"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value="general_inquiry"
                    checked={selectedContactOption === "general_inquiry"}
                    onChange={handleSelectedTypeOfContactChange}
                  />
                  <label
                    htmlFor="contact-general-inquiry"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Algemene vraag
                  </label>
                </div>
              </div>
            </fieldset>
            <div
              className={`w-full form-control ${
                selectedContactOption === "appointment" ? "" : "hidden"
              }`}
            >
              <label htmlFor="service" className="label">
                <span className="label-text">Soort therapie</span>
              </label>
              <select name="service" className="select select-bordered">
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div
              className={`w-full form-control ${
                selectedContactOption === "appointment" ? "" : "hidden"
              }`}
            >
              <label htmlFor="location" className="label">
                <span className="label-text">Voorkeur behandellocatie</span>
              </label>
              <select name="location" className="select select-bordered">
                {locations.map((item) => (
                  <option
                    key={`${item.attributes.title}`}
                    value={item.attributes.title}
                  >
                    {item.attributes.title}
                  </option>
                ))}
                <option value="Geen voorkeur">Geen voorkeur</option>
              </select>
            </div>
            <div className="w-full h-48 form-control">
              <label htmlFor="message" className="label">
                <span className="label-text">Bericht</span>
              </label>
              <textarea
                name="message"
                className="w-full h-full input input-bordered pt-2"
              />
            </div>
            <GoogleReCaptcha
              onVerify={handleCaptchaChange}
              refreshReCaptcha={refreshReCaptcha}
            />
            <input
              type="submit"
              className="btn bg-dark-purple mt-7 hover:bg-purple-950"
              value={
                selectedContactOption === "appointment"
                  ? "Afspraak maken"
                  : "Verzenden"
              }
            />
            {isLoading && (
              <span className="loading loading-spinner loading-lg"></span>
            )}
          </form>
        </GoogleReCaptchaProvider>

        <p className="w-90% mx-auto max-w-1560 mt-12 text-sm">
          Wij gebruiken de opgegeven gegevens alleen om contact met je op te
          nemen voor de afspraak.
        </p>
        <ToastContainer hideProgressBar />
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