import { useRef } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import LogoDesktop from "../img/logo.svg";
import {
  AddressMap,
  ContactInfo,
  type Menu,
  SocialLinks,
  Team,
} from "@/types/types";
import MenuLink from "./MenuLink";

interface Props {
  data: Menu[];
  info: ContactInfo;
  team: Team[];
  locations: AddressMap[];
  socialLinks: SocialLinks;
}

const NavSection = ({ data, info, team, locations, socialLinks }: Props) => {
  const openSubMenu = (e: { currentTarget: HTMLButtonElement }) => {
    (e.currentTarget.nextSibling! as HTMLElement).classList.toggle("hidden");
  };

  const mobNav = useRef<HTMLInputElement>(null);

  const hideMenu = () => {
    mobNav.current!.checked = false;
  };

  return (
    <>
      <section data-nosnippet={''} className="relative w-full bg-dark-purple">
        <div className="hidden w-full py-5 bg-dark-purple xl:block">
          <TopBar info={info} />
        </div>
        <nav className="mx-auto 3xl:relative hidden xl:flex w-full px-10 max-w-1560 items-start gap-52px justify-end">
          <Link
            className="absolute 3xl:left-[-180px] left-0 z-20 max-w-lg mt-4 2xl:max-w-none"
            href="/"
          >
            <Image
              blurDataURL={LogoDesktop}
              className="w-full 2xl:w-10/12 h-44 pl-4 -my-16 z-20 relative"
              src={LogoDesktop}
              alt="De Bundeling"
            />

            <div
              className="bg-dark-purple w-[680px] 2xl:w-[820px] h-44 absolute -left-20 -my-[56px]"
              style={{
                borderRadius: "50% / 0 0 100% 100%",
              }}
            >
              &nbsp;
            </div>

          </Link>
          <Menu data={data} team={team} locations={locations} />
          <Link
            href="/contact-opnemen"
            className="text-white btn btn-white mt-7"
          >
            Afspraak maken
          </Link>
        </nav>
        <nav className="flex justify-end w-full p-0 mx-auto sm:py-3 xl:hidden">
          <Link
            className="absolute left-0 z-30 max-w-[250px] sm:max-w-[400px] md:max-w-[500px] top-2"
            href="/"
          >
            <Image
              src={LogoDesktop}
              className="w-full ml-2 z-30 relative"
              alt="De Bundeling (small)"
            />
            <div
              className="z-0 absolute bg-dark-purple h-10 w-[280px] -my-5 sm:w-[440px] sm:-my-6 md:w-[560px] md:h-24 md:-my-16 -left-2"
              style={{
                borderRadius: "50% / 0 0 100% 100%",
              }}
            >
              &nbsp;
            </div>
          </Link>
          <div className="max-w-[70px] z-20">
            <div className="static overflow-visible collapse z-20">
              <input ref={mobNav} type="checkbox" className="peer" />
              <svg
                width="40"
                height="26"
                viewBox="0 0 40 26"
                fill="none"
                className="p-5 collapse-title peer-checked:hidden"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="3.5" rx="1" fill="#fff" />
                <rect y="11" width="40" height="3.5" rx="1" fill="#fff" />
                <rect y="22" width="40" height="3.5" rx="1" fill="#fff" />
              </svg>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                className="hidden p-5 collapse-title peer-checked:block"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.2534 20L39.1404 5.11301C39.6951 4.54703 40.004 3.78503 40 2.99259C39.996 2.20015 39.6794 1.4413 39.119 0.880958C38.5587 0.320612 37.7999 0.00404073 37.0074 3.84139e-05C36.215 -0.0039639 35.453 0.304926 34.887 0.859584L20 15.7466L5.11301 0.859584C4.54703 0.304926 3.78503 -0.0039639 2.99259 3.84139e-05C2.20015 0.00404073 1.4413 0.320612 0.880958 0.880958C0.320612 1.4413 0.00404073 2.20015 3.84139e-05 2.99259C-0.0039639 3.78503 0.304926 4.54703 0.859584 5.11301L15.7466 20L0.859584 34.887C0.304926 35.453 -0.0039639 36.215 3.84139e-05 37.0074C0.00404073 37.7999 0.320612 38.5587 0.880958 39.119C1.4413 39.6794 2.20015 39.996 2.99259 40C3.78503 40.004 4.54703 39.6951 5.11301 39.1404L20 24.2534L34.887 39.1404C35.453 39.6951 36.215 40.004 37.0074 40C37.7999 39.996 38.5587 39.6794 39.119 39.119C39.6794 38.5587 39.996 37.7999 40 37.0074C40.004 36.215 39.6951 35.453 39.1404 34.887L24.2534 20Z"
                  fill="#fff"
                />
              </svg>
              <div className="collapse-content pb-0 pr-0 pl-5 pt-10 w-full left-0 top-[60px] sm:top-[84px] absolute bg-dark-purple z-40 shadow-lg">
                <ul className="[&>*]:text-white pt-1">
                  {data?.map((item: Menu, index) => (
                    <li
                      key={item.title + index}
                      className="flex flex-wrap items-center min-h-[56px] justify-between"
                    >
                      <MenuLink
                        onClick={hideMenu}
                        className="text-[22px] sm:max-w-none max-w-[240px]"
                        pageUrl={item.related?.attributes.url}
                        path={item.path}
                      >
                        {item.title}
                      </MenuLink>
                      {(item.items.length > 0 ||
                        item.title === "Team" ||
                        item.title === "Locaties") && (
                          <button
                            onClick={(e) => openSubMenu(e)}
                            className="p-6 pl-10 bg-arrow-down"
                          >
                            <svg
                              width="12"
                              height="8"
                              viewBox="0 0 12 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.4211 0.712158H0.578825C0.0657523 0.712158 -0.195624 1.33172 0.172239 1.69958L5.59338 7.12073C5.81604 7.34338 6.1839 7.34338 6.40665 7.12073L11.8278 1.69958C12.1956 1.33172 11.9342 0.712158 11.4211 0.712158Z"
                                fill="white"
                              />
                            </svg>
                          </button>
                        )}
                      {item.title === "Team" && (
                        <ul className="hidden w-full pl-4 ">
                          {team.map((i: Team) => (
                            <li
                              key={i.attributes.name + index}
                              className="flex justify-between p-4 pr-0 flex-wrap items-center min-h-[56px]"
                            >
                              <Link
                                onClick={hideMenu}
                                className="text-[20px] sm:max-w-none max-w-[240px]"
                                href={`/team#${i.attributes.url}`}
                              >
                                {i.attributes.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                      {item.title === "Locaties" && (
                        <ul className="hidden w-full pl-4 ">
                          {locations.map((i: AddressMap) => (
                            <li
                              key={i.attributes.title + index}
                              className="flex justify-between p-4 pr-0 flex-wrap items-center min-h-[56px]"
                            >
                              <Link
                                onClick={hideMenu}
                                className="text-[20px] sm:max-w-none max-w-[240px]"
                                href={`/locaties#${i.attributes.url}`}
                              >
                                {i.attributes.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                      {item.items.length > 0 && (
                        <ul className="hidden w-full pl-4 ">
                          {item.items.map((i) => (
                            <li
                              key={i.title + index}
                              className="flex justify-between p-4 pr-0 flex-wrap items-center min-h-[56px]"
                            >
                              <MenuLink
                                onClick={hideMenu}
                                className="text-[20px] sm:max-w-none max-w-[240px]"
                                pageUrl={i.related?.attributes.url}
                                path={i.path}
                              >
                                {i.title}
                              </MenuLink>

                              {i.items?.length > 0 && (
                                <button
                                  onClick={(e) => openSubMenu(e)}
                                  className="p-6 pl-10 bg-arrow-down"
                                >
                                  <svg
                                    width="12"
                                    height="8"
                                    viewBox="0 0 12 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M11.4211 0.712158H0.578825C0.0657523 0.712158 -0.195624 1.33172 0.172239 1.69958L5.59338 7.12073C5.81604 7.34338 6.1839 7.34338 6.40665 7.12073L11.8278 1.69958C12.1956 1.33172 11.9342 0.712158 11.4211 0.712158Z"
                                      fill="white"
                                    />
                                  </svg>
                                </button>
                              )}
                              {i.items?.length > 0 && (                                
                                <ul className="hidden w-full pl-4">
                                  {i.items.map((itm) => (
                                    itm.related?.attributes.publishedAt && (
                                    <li
                                      key={
                                        itm.title
                                          ? itm.title + index
                                          : itm.related.attributes.title + index
                                      }
                                      className="flex justify-between p-4 last:pb-0"
                                    >
                                      <MenuLink
                                        onClick={hideMenu}
                                        className="text-[20px]"
                                        pageUrl={itm.related?.attributes.url}
                                        path={itm.path}
                                      >
                                        {itm.title}
                                      </MenuLink>
                                    </li>)
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
                <p className="text-white pt-6 text-[18px] font-medium">
                  Wilt u eens langskomen?
                </p>
                <Link
                  href="/contact"
                  className="btn btn-white bg-white focus:bg-light-purple h-16 px-8 mt-6 normal-case text-base 2xl:text-[18px]"
                >
                  Maak afspraak
                </Link>
                <hr className="relative w-[110%] mt-9 mb-9 left-[-20px] opacity-20" />
                <a
                  href={`"tel:${info.phone}"`}
                  className="bg-white sm:mr-5 rounded-lg font-medium items-center p-3 pl-6 hover:bg-light-purple focus:bg-light-purple hover:text-white h-auto inline-flex gap-8 text-[18px] text-dark-purple"
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
                  href={`"mailto:${info.email}"`}
                  className="bg-white rounded-lg font-medium items-center p-3 pl-6 mt-6 normal-case hover:bg-light-purple focus:bg-light-purple hover:text-white h-auto inline-flex gap-8 text-[18px] text-dark-purple"
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
                <div className="flex gap-4 mt-10">
                  <a
                    title="Facebook"
                    href={socialLinks?.facebook}
                    target="_blank"
                    className="w-[60px] h-[60px] rounded-full bg-white/10 flex items-center justify-center"
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
                  {/* <a
                    title="YouTube"
                    href={socialLinks?.youtube}
                    target="_blank"
                    className="w-[60px] h-[60px] rounded-full bg-white/10 flex items-center justify-center"
                  >
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26 13C26 16.4478 24.6304 19.7544 22.1924 22.1924C19.7544 24.6304 16.4478 26 13 26C9.55219 26 6.24558 24.6304 3.80761 22.1924C1.36964 19.7544 0 16.4478 0 13C0 9.55219 1.36964 6.24558 3.80761 3.80761C6.24558 1.36964 9.55219 0 13 0C16.4478 0 19.7544 1.36964 22.1924 3.80761C24.6304 6.24558 26 9.55219 26 13ZM10.621 19.851C11.7945 19.8596 12.9581 19.6349 14.044 19.1898C15.1299 18.7447 16.1164 18.0881 16.9463 17.2583C17.7761 16.4284 18.4327 15.4419 18.8778 14.356C19.3229 13.2701 19.5476 12.1065 19.539 10.933V10.543C20.137 10.088 20.67 9.542 21.099 8.905C20.54 9.165 19.929 9.321 19.292 9.399C19.942 9.009 20.436 8.398 20.67 7.67C20.072 8.021 19.396 8.281 18.681 8.424C18.2084 7.92332 17.5841 7.59224 16.9045 7.48195C16.2249 7.37166 15.5279 7.48829 14.9213 7.81381C14.3146 8.13934 13.8321 8.65563 13.5482 9.28288C13.2644 9.91013 13.1951 10.6134 13.351 11.284C10.751 11.154 8.437 9.906 6.89 8.008C6.4913 8.69928 6.3702 9.51624 6.55123 10.2935C6.73225 11.0707 7.20188 11.75 7.865 12.194C7.345 12.181 6.864 12.038 6.448 11.804V11.843C6.448 13.364 7.527 14.625 8.957 14.911C8.49492 15.0369 8.01006 15.0547 7.54 14.963C7.73648 15.5881 8.12475 16.1354 8.64976 16.5274C9.17477 16.9194 9.80987 17.1362 10.465 17.147C9.1512 18.1778 7.48211 18.6454 5.824 18.447C7.25214 19.3722 8.91939 19.8602 10.621 19.851Z"
                        fill="white"
                      />
                    </svg>
                  </a> */}
                  <a
                    title="Instagram"
                    href={socialLinks?.instagram}
                    target="_blank"
                    className="w-[60px] h-[60px] rounded-full bg-white/10 flex items-center justify-center"
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
                <div className="mt-10 [&>*]:text-white flex gap-2 items-center">
                  <Link href="#">Algemene voorwaarden</Link>
                  <div className="h-5 w-[1px] bg-white/60"></div>
                  <Link href="#">Privacy Policy</Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default NavSection;



const TopBar = ({ info }: { info: ContactInfo }) => <div className="flex mx-auto w-90% max-w-1560 justify-end gap-10">
  <div className="flex gap-2.5 items-center">
    <Icon
      icon="ic:baseline-local-phone"
      color="white"
      width="20"
      height="20" />
    <a
      className="font-medium leading-5 text-white"
      href={`tel:${info.phone}`}
    >
      {info.phone}
    </a>
  </div>
  <div className="flex gap-2.5 items-center">
    <Icon
      icon="material-symbols:mail-rounded"
      color="white"
      width="20"
      height="20" />
    <a
      className="font-medium leading-5 text-white"
      href={`mailto:${info.email}`}
    >
      {info.email}
    </a>
  </div>
  <div className="flex gap-2.5 items-center">
    <Icon
      icon="material-symbols:location-on-rounded"
      color="white"
      width="20"
      height="20" />
    <p className="font-medium leading-5 text-white">
      {info.mainAddress}
    </p>
  </div>
</div>;

const Menu = ({ data, team, locations }: { data: Menu[], team: Team[], locations: AddressMap[] }) => {
  return <ul className="flex gap-5 px-0 pt-11 2xl:gap-11 z-30">
    {data?.map((item: Menu, index) => (
      item.related?.attributes.publishedAt && (
      <li
        className="relative flex group"
        key={item.title + index}
        tabIndex={0}
      >
        <MenuLink
          pageUrl={item.related?.attributes.url}
          path={item.path}
          className="flex items-center gap-2 text-base font-medium text-white 2xl:text-2xl pb-11 hover:text-blue-gray"
        >
          {item.title}
          {(item?.items.length ||
            item.title === "Team" ||
            item.title === "Locaties") > 0 && (
              <svg
                className=""
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.5176 0.260254H0.482354C0.0547936 0.260254 -0.16302 0.776554 0.143533 1.08311L4.66115 5.60073C4.8467 5.78628 5.15325 5.78628 5.33888 5.60073L9.8565 1.08311C10.163 0.776554 9.94516 0.260254 9.5176 0.260254Z"
                  fill="#fff" />
              </svg>
            )}
        </MenuLink>

        {item.title === "Team" && (
          <ul className="absolute left-0 z-10 hidden w-auto max-w-sm p-2 text-2xl shadow-md group-hover:block min-w-max menu menu-compact top-14 bg-base-100 rounded-box">
            {team.map((i: Team) => (
              <li
                className="relative group/item"
                key={i.attributes.name + index}
              >
                <Link
                  className="py-4 text-base font-medium text-dark-purple active:text-white 2xl:text-2xl"
                  href={`/team#${i.attributes.url}`}
                >
                  {i.attributes.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
        {item.title === "Locaties" && (
          <ul className="absolute left-0 z-10 hidden w-auto max-w-sm p-2 text-2xl shadow-md group-hover:block min-w-max menu menu-compact top-14 bg-base-100 rounded-box">
            {locations.map((i: AddressMap) => (
              <li
                className="relative group/item"
                key={i.attributes.title + index}
              >
                <Link
                  className="py-4 text-base font-medium text-dark-purple active:text-white 2xl:text-2xl"
                  href={`/locaties#${i.attributes.url}`}
                >
                  {i.attributes.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
        {item?.items.length > 0 && (
          <ul className="absolute left-0 z-10 hidden w-auto max-w-sm p-2 text-2xl shadow-md group-hover:block min-w-max menu menu-compact top-14 bg-base-100 rounded-box">
            {item?.items.map((i) => (
              i.related?.attributes.publishedAt && (
              <li className="relative group/item" key={i.title + index}>
                <MenuLink
                  className="w-full py-4 text-base font-medium text-dark-purple active:text-white 2xl:text-2xl"
                  pageUrl={i.related?.attributes.url}
                  path={i.path}
                >
                  {i.title}
                  {i.items?.length > 0 && (
                    <svg
                      className="rotate-[270deg]"
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.5176 0.260254H0.482354C0.0547936 0.260254 -0.16302 0.776554 0.143533 1.08311L4.66115 5.60073C4.8467 5.78628 5.15325 5.78628 5.33888 5.60073L9.8565 1.08311C10.163 0.776554 9.94516 0.260254 9.5176 0.260254Z"
                        fill="#2C2E80" />
                    </svg>
                  )}
                </MenuLink>

                {i.items?.length > 0 && (                  
                  <ul className="absolute top-0 left-full ml-0 z-10 hidden w-auto max-w-[350px] min-w-[auto] p-2 text-2xl shadow-md group-hover/item:block menu menu-compact bg-base-100 rounded-box">
                    {i?.items?.map((itm, index) => (                      
                      itm.related?.attributes.publishedAt !== null && (
                      <li
                        key={itm.title
                          ? itm.title + index
                          : itm.related.attributes.title + index}
                      >
                        <MenuLink
                          className="block w-full py-4 text-base font-medium whitespace-pre-wrap text-dark-purple active:text-white 2xl:text-2xl"
                          pageUrl={itm.related?.attributes.url}
                          path={itm.path}
                        >
                          {itm.title}
                        </MenuLink>
                      </li>)
                    ))}
                  </ul>
                )}
              </li>)
            ))}
          </ul>
        )}
      </li>)
    ))}
  </ul>;
}