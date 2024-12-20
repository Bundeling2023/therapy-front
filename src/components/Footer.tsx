import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import LogoFooter from "../img/logo.svg";
import { AddressMap, ContactInfo, Menu, SocialLinks } from "@/types/types";
import { hasCookie, setCookie } from 'cookies-next';
import { Fragment, useEffect, useState } from "react";
import { getPathFromUrl } from "@/types/utils";
import MenuLink from "./MenuLink";

interface Props {
  data: Menu[],
  info: ContactInfo,
  privacyLink: string,
  termsAndConditionsPage: string,
  locations: AddressMap[],
  socialLinks: SocialLinks
}

const Footer = ({ data, info, privacyLink = '#', termsAndConditionsPage = '#', locations, socialLinks }: Props) => {
  const [isCookieBanner, seIsCookieBanner] = useState<boolean>(false);

  useEffect(() => {
    if (!hasCookie("notFirstVisit")) {
      seIsCookieBanner(true)
    }
  }, [])

  const closeCookieBanner = () => {
    seIsCookieBanner(false);
    setCookie('notFirstVisit', true, { path: '/', maxAge: (new Date(new Date().setFullYear(new Date().getFullYear() + 1))).getTime() });
  }

  return (
    <>
      <footer className="md:bg-[url('/footer_bgr.svg')] bg-[url('/footer_bgr_mob.svg')] bg-no-repeat bg-top bg-cover bg pt-16 pb-8 md:mt-[130px] mt-10">
        <div className="w-90% max-w-1560 mx-auto">
          <div className="flex flex-col items-start justify-between gap-8 2xl:items-end xl:flex-row">
            <Link href="/" className="w-1/2 min-w-[205px] max-w-[508px]">
              <Image
                blurDataURL={LogoFooter}
                className="w-full"
                src={LogoFooter}
                alt="De Bundeling"
              />
            </Link>
            <div className="flex flex-col items-start gap-6 md:gap-16 md:items-center md:flex-row">
              <p className="text-lg font-semibold text-white">Wilt u eens langskomen?</p>
              <Link href="/contact-opnemen" className="bg-white btn-white btn">Maak afspraak</Link>
            </div>
          </div>
          <hr className="mt-8 mb-8" />
          <div className="flex flex-col items-start justify-between gap-10 xl:flex-row xl:gap-3">
            <div className="flex flex-col items-start justify-start gap-6">
              <a
                href={`tel:${info.phone}`}
                className="bg-white rounded-lg font-medium items-center p-3 pl-6 hover:bg-light-purple focus:bg-light-purple hover:text-white h-auto inline-flex gap-8 text-[18px] text-dark-purple"
              >
                {info.phone}
                <span className="block p-3 rounded-lg bg-dark-purple">
                  <Icon
                    icon="ic:baseline-local-phone"
                    color="white"
                    width="20"
                    height="20"
                  />
                </span>
              </a>
              <a
                href={`mailto:${info.email}`}
                className="bg-white rounded-lg font-medium items-center p-3 pl-6 normal-case hover:bg-light-purple focus:bg-light-purple hover:text-white h-auto inline-flex gap-8 text-[18px] text-dark-purple"
              >
                {info.email}
                <span className="block p-3 rounded-lg bg-dark-purple">
                  <Icon
                    icon="material-symbols:mail-rounded"
                    color="white"
                    width="20"
                    height="20"
                  />
                </span>
              </a>
            </div>
            <div className="flex 2xl:gap-[50px] gap-6 md:flex-row flex-col md:w-auto w-full">
              {data.map((item: Menu) =>
                <div key={item.title} className="flex 2xl:pr-[50px] flex-col items-start justify-start gap-[18px] relative after:content-[''] md:after:block after:hidden after:w-[1px] after:h-full after:absolute after:bg-white/50 after:right-0 last:after:hidden last:pr-0 md:pr-6 pr-0">
                  <MenuLink key={item.title} pageUrl={item.related?.attributes.url} path={item.path} className="text-sm text-white opacity-50 2xl:text-lg first:opacity-100 hover:underline 2xl:first:text-xl first:text-base text-first:font-medium">{item.title}</MenuLink>
                  {item.items.length > 0 && item.items.map((i) =>
                    <Fragment key={i.path}>
                      {i.related?.attributes.url ?
                        <Link key={i.title + i.path} href={i.related.attributes.url} className="text-sm text-white opacity-50 hover:opacity-100 2xl:text-lg first:opacity-100 hover:underline 2xl:first:text-xl first:text-base first:font-medium">{i.title}</Link>
                        :
                        (
                          i?.path.includes('local.bundeling') ?
                            <Link key={i.title + i.path} href={getPathFromUrl(i.path)} className="text-sm text-white opacity-50 hover:opacity-100 2xl:text-lg first:opacity-100 hover:underline 2xl:first:text-xl first:text-base first:font-medium">{i.title}</Link>
                            :
                            <p key={i.title + i.path} className="text-sm text-white opacity-50 2xl:text-lg first:opacity-100 2xl:first:text-xl first:text-base first:font-medium">{i.title}</p>
                        )
                      }
                    </Fragment>
                  )}
                  {item.title === 'Locaties' && (
                    <Fragment key={item.title + item.path}>
                      {locations.map((i: AddressMap) =>
                        <Link key={i.attributes.title} href={`/locaties#${i.attributes.url}`} className="text-sm text-white opacity-50 hover:opacity-100 2xl:text-lg first:opacity-100 hover:underline 2xl:first:text-xl first:text-base first:font-medium">{i.attributes.title}</Link>
                      )}
                    </Fragment>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col-reverse items-start justify-between mt-12 md:mt-20 gap-y-8 md:flex-row">
            <div className="[&>*]: text-white md:text-lg text-sm">
              <div className="flex md:gap-[34px] gap-[16px] mb-2">
                <Link className="hover:underline" href={termsAndConditionsPage}>Algemene voorwaarden</Link>
                <span>|</span>
                <Link className="hover:underline" href={privacyLink}>Privacy policy</Link>
              </div>
              
              <Link className="hover:underline text-xs opacity-30 w-full text-center" target="_blank" href="https://novana.nl" >Website gecreëerd door Novana</Link>
            </div>
            <div className="flex gap-4">
            <a
                title="AVG OK"
                href="https://www.avg-programma.nl/avg-ok-vignet/0ed29e36-61bd-4e59-980d-f105c5ed8cfc"
                target="_blank"
                className="w-[60px] h-[60px] rounded-full bg-white/10 hover:bg-white/30 flex items-center justify-center mr-10"
              >
                <Image
                  src="https://res.cloudinary.com/dwjdjipxl/image/upload/f_auto/q_auto/v1707918573/thumbnail_avg_ok_logo_a0c76dd1c2.png"
                  alt="AVG OK"
                  width={50}
                  height={50}
                />
              </a>
              <a
                title="Facebook"
                href={socialLinks?.facebook}
                target="_blank"
                className="w-[60px] h-[60px] rounded-full bg-white/10 hover:bg-white/30 flex items-center justify-center"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 11.9971C23.9994 9.70383 23.3418 7.45874 22.1049 5.52764C20.868 3.59655 19.1036 2.06031 17.0207 1.10082C14.9378 0.141332 12.6236 -0.201229 10.3521 0.113697C8.08055 0.428622 5.94681 1.38784 4.20351 2.8778C2.4602 4.36775 1.18034 6.32603 0.515442 8.52079C-0.149455 10.7156 -0.171537 13.0549 0.45181 15.2618C1.07516 17.4687 2.31783 19.4508 4.0327 20.9734C5.74756 22.496 7.86281 23.4953 10.128 23.8531V15.4651H7.08V11.9971H10.128V9.35709C10.128 6.35709 11.916 4.67709 14.652 4.67709C15.972 4.67709 17.34 4.91709 17.34 4.91709V7.86909H15.84C14.352 7.86909 13.884 8.79309 13.884 9.74109V11.9971H17.22L16.68 15.4651H13.884V23.8531C16.7055 23.4046 19.2743 21.9641 21.1287 19.7908C22.983 17.6175 24.0011 14.854 24 11.9971Z"
                    fill="white"
                  />
                </svg>
              </a>              
              <a
                title="Instagram"
                href={socialLinks?.instagram}
                target="_blank"
                className="w-[60px] h-[60px] rounded-full bg-white/10 hover:bg-white/30 flex items-center justify-center"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 0C8.736 0 8.328 0.036 7.056 0.096C5.76 0.12 4.896 0.336 4.14 0.636C3.34015 0.936234 2.61534 1.40716 2.016 2.016C1.40283 2.61415 0.927748 3.33906 0.624 4.14C0.276392 5.07378 0.0897429 6.05978 0.072 7.056C0.012 8.34 0 8.736 0 12C0 15.264 0.012 15.672 0.072 16.944C0.132 18.228 0.336 19.104 0.624 19.86C0.936 20.652 1.344 21.324 2.016 21.984C2.676 22.656 3.348 23.064 4.14 23.376C4.896 23.664 5.772 23.868 7.056 23.928C8.328 23.988 8.736 24 12 24C15.252 24 15.66 23.988 16.944 23.928C17.9402 23.9103 18.9262 23.7236 19.86 23.376C20.6609 23.0723 21.3858 22.5972 21.984 21.984C22.5928 21.3847 23.0638 20.6598 23.364 19.86C23.664 19.104 23.868 18.228 23.916 16.944C23.976 15.672 23.988 15.264 23.988 12C23.988 8.748 23.988 8.34 23.916 7.056C23.8983 6.05978 23.7116 5.07378 23.364 4.14C23.0638 3.34015 22.5928 2.61534 21.984 2.016C21.3847 1.40716 20.6598 0.936234 19.86 0.636C18.9262 0.288392 17.9402 0.101743 16.944 0.084C15.66 0.024 15.264 0 12 0ZM12 2.16C15.204 2.16 15.576 2.184 16.848 2.244C18.012 2.292 18.648 2.484 19.068 2.652C19.632 2.868 20.028 3.132 20.448 3.552C20.868 3.972 21.132 4.368 21.348 4.932C21.516 5.352 21.708 5.988 21.756 7.152C21.816 8.424 21.828 8.796 21.828 12C21.828 15.204 21.828 15.588 21.756 16.848C21.708 18.024 21.516 18.648 21.348 19.08C21.132 19.644 20.868 20.04 20.448 20.46C20.0611 20.8594 19.5895 21.1669 19.068 21.36C18.648 21.516 18.012 21.72 16.848 21.768C15.576 21.828 15.204 21.84 12 21.84C8.796 21.84 8.412 21.828 7.152 21.768C5.976 21.72 5.352 21.528 4.92 21.36C4.39851 21.1669 3.92695 20.8594 3.54 20.46C3.14063 20.073 2.83308 19.6015 2.64 19.08C2.484 18.66 2.28 18.024 2.232 16.848C2.16094 15.233 2.13693 13.6164 2.16 12C2.16 8.796 2.172 8.424 2.232 7.152C2.28 5.988 2.472 5.352 2.64 4.932C2.868 4.368 3.12 3.972 3.54 3.552C3.92573 3.14829 4.39738 2.83658 4.92 2.64C5.34 2.472 5.976 2.28 7.152 2.232C8.4 2.184 8.796 2.16 12 2.16Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.9999 16.0081C10.9385 16.0081 9.92057 15.5864 9.17005 14.8359C8.41953 14.0854 7.99789 13.0675 7.99789 12.0061C7.99789 10.9447 8.41953 9.92674 9.17005 9.17622C9.92057 8.4257 10.9385 8.00406 11.9999 8.00406C13.0613 8.00406 14.0792 8.4257 14.8297 9.17622C15.5803 9.92674 16.0019 10.9447 16.0019 12.0061C16.0019 13.0675 15.5803 14.0854 14.8297 14.8359C14.0792 15.5864 13.0613 16.0081 11.9999 16.0081V16.0081ZM11.9999 5.84406C10.3656 5.84406 8.7983 6.49327 7.6427 7.64887C6.4871 8.80447 5.83789 10.3718 5.83789 12.0061C5.83789 13.6403 6.4871 15.2077 7.6427 16.3633C8.7983 17.5189 10.3656 18.1681 11.9999 18.1681C13.6342 18.1681 15.2015 17.5189 16.3571 16.3633C17.5127 15.2077 18.1619 13.6403 18.1619 12.0061C18.1619 10.3718 17.5127 8.80447 16.3571 7.64887C15.2015 6.49327 13.6342 5.84406 11.9999 5.84406V5.84406ZM19.8359 5.60406C19.8359 5.98597 19.6842 6.35224 19.4141 6.6223C19.1441 6.89235 18.7778 7.04406 18.3959 7.04406C18.014 7.04406 17.6477 6.89235 17.3777 6.6223C17.1076 6.35224 16.9559 5.98597 16.9559 5.60406C16.9559 5.22215 17.1076 4.85588 17.3777 4.58583C17.6477 4.31578 18.014 4.16406 18.3959 4.16406C18.7778 4.16406 19.1441 4.31578 19.4141 4.58583C19.6842 4.85588 19.8359 5.22215 19.8359 5.60406"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
      {isCookieBanner && (
        <div className="fixed bottom-5 w-90% max-w-1560 z-50 left-[50%] -translate-x-1/2 alert shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 stroke-info shrink-0"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>Deze site gebruikt cookies. Lees hoe we ermee omgaan in onze <Link href={privacyLink} className="text-blue-600">privacy policy</Link></span>
          <Icon
            onClick={closeCookieBanner}
            className="absolute hidden cursor-pointer right-4 top-4 sm:top-auto sm:block"
            width="30"
            height="30"
            icon="iconamoon:close-bold"
          />
          <button onClick={closeCookieBanner} className="block btn btn-sm btn-primary sm:hidden">Accepteren</button>
        </div>
      )}
    </>
  );
};

export default Footer;
