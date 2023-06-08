import Footer from "@/components/Footer";
import NavSection from "@/components/Header";
import { GET_CONTACTUS_PAGE, } from "@/graphql/queries";
import { ContactsUsPage } from "@/types/types";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GetServerSideProps } from "next/types";
import Head from 'next/head'
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";


export default function Team(props: ContactsUsPage) {
  const { header, footer } = props
  const { seo } = props.contactus.data.attributes;
  const [emailError, setEmailError] = useState<boolean>(false);
  const [telefoonError, setTelefoonError] = useState<boolean>(false);
  const [voornaamError, setVoornaamError] = useState<boolean>(false);
  const [achternaamError, setAchternaamError] = useState<boolean>(false);
  const [isLoading, setIsLoading ] = useState<boolean>(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setEmailError(e.target.email.value === '');
    setTelefoonError(e.target.telefoon.value === '');
    setVoornaamError(e.target.voornaam.value === '');
    setAchternaamError(e.target.achternaam.value === '');

    if(!(e.target.email.value === '') && !(e.target.telefoon.value === '') && !(e.target.voornaam.value === '') && !(e.target.achternaam.value === '')){
      setIsLoading(true);
      try {
        await axios.post('/api/nodemailer', {
          body: JSON.stringify({
            email: e.target.email.value,
            telefoon: e.target.telefoon.value,
            voornaam: e.target.voornaam.value,
            achternaam: e.target.achternaam.value,
            locatie: e.target.achternaam.value,
          })
        })
        toast.success("Thank you! Your message was send", {
          position: toast.POSITION.TOP_CENTER
        });
        setIsLoading(false);
        e.target.reset();
      } catch (e) {
        setIsLoading(true);
        toast.error("Error!")
      }
    }
  }

  return (
    <>
      <Head>
        <title>{seo.metaTitle}</title>
        <meta name='description' content={seo.metaDescription} />
        <link rel="canonical" href={seo.canonicalURL} />
      </Head>
      <NavSection data={header} info={props.generalinfo.data.attributes.contactsInfo} />
      <div className="py-20 mb-11">
        <h1 className="mb-0 text-2xl font-semibold text-center text-dark-purple md:text-5xl">
          {props.contactus.data.attributes.title}
        </h1>
      </div>
      <section className="bg-blue-50 relative md:pt-[85px] pt-[85px] md:mt-[27px] mt-2 pb-20">
        <form className="flex flex-wrap justify-between w-90% mx-auto gap-y-5 max-w-1560" onSubmit={(e) => handleSubmit(e)}>
          <div className="w-full form-control sm:max-w-[49%]">
            <label className="label">
              <span className="label-text">Naam (Voornaam) <span className="text-red-700">*</span></span>
            </label>
            <input onChange={() => setVoornaamError(false)}  type="text" name="voornaam" placeholder="Naam (Voornaam)" className="w-full input input-bordered" />
            {voornaamError && <span className="font-semibold text-red-700">Dit veld is vereist.</span>}
          </div>
          <div className="w-full form-control sm:max-w-[49%]">
            <label className="label">
              <span className="label-text">Naam (Achternaam) <span className="text-red-700">*</span></span>
            </label>
            <input onChange={() => setAchternaamError(false)} type="text" name="achternaam" placeholder="Naam (Achternaam)" className="w-full input input-bordered" />
            {achternaamError && <span className="font-semibold text-red-700">Dit veld is vereist.</span>}
          </div>
          <div className="w-full form-control sm:max-w-[49%]">
            <label className="label">
              <span className="label-text">E-mailadres <span className="text-red-700">*</span></span>
            </label>
            <input onChange={() => setEmailError(false)} type="text" name="email" placeholder="Naam (Voornaam)" className="w-full input input-bordered" />
            {emailError && <span className="font-semibold text-red-700">Dit veld is vereist.</span>}
          </div>
          <div className="w-full form-control sm:max-w-[49%]">
            <label className="label">
              <span className="label-text">Telefoon <span className="text-red-700">*</span></span>
            </label>
            <input onChange={() => setTelefoonError(false)} type="text" name="telefoon" placeholder="Telefoon" className="w-full input input-bordered" />
            {telefoonError && <span className="font-semibold text-red-700">Dit veld is vereist.</span>}
          </div>
          <div className="w-full form-control">
            <label className="label">
              <span className="label-text">Voorkeur behandellocatie</span>
            </label>
            <select name="locatie" className="select select-bordered">
              {props.locations.data.map((item) =>
                <option key={item.attributes.address}>{item.attributes.address}</option>
              )}
            </select>
          </div>
          <input type="submit" className="btn bg-dark-purple mt-7 hover:bg-purple-950" value="Afspraak maken" />
          {isLoading && <span className="loading loading-spinner loading-md"></span>}
        </form>
        <p className="w-90% mx-auto max-w-1560 mt-12 text-sm">Wij gebruiken de opgegeven gegevens alleen om contact met je op te nemen voor de afspraak.</p>
        <ToastContainer hideProgressBar />
      </section>
      <Footer data={footer} info={props.generalinfo.data.attributes.contactsInfo} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const client = new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
		cache: new InMemoryCache(),
	})

	const { data } = await client.query({
		query: GET_CONTACTUS_PAGE
	})

	return {
		props: data
  }
}
