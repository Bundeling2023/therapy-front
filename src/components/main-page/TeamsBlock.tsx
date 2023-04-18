import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType, Navigation, Pagination } from "swiper";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { Icon } from "@iconify/react";

const TeamsBlock = () => {
  const swiperSecondRef = useRef<SwiperType>();
  return (
    <section className="xl:bg-[url('/team_bgr.svg')] bg-[url('/team_bgr_mob.svg')] bg-no-repeat bg-top md:bg-cover bg-contain relative md:pt-[185px] pt-[65px] md:mt-[117px] mt-16 pb-10">
      <h3 className="mb-24 text-2xl font-semibold text-center text-dark-purple md:text-5xl md:mb-16">
        Ons team
      </h3>
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          onBeforeInit={(swiper) => {
            swiperSecondRef.current = swiper;
          }}
          // slidesPerView={3}
          // spaceBetween={173}
          pagination={{
            type: "progressbar",
          }}
          breakpoints={{
            600: {
              slidesPerView: 2,
              spaceBetween: 100,
            },
            1200: {
              spaceBetween: 40,
              slidesPerView: 3,
            },
            1360: {
              spaceBetween: 60,
              slidesPerView: 3,
            },
            1540: {
              spaceBetween: 173,
              slidesPerView: 3,
            },
          }}
          className="xl:w-80% w-90% max-w-1560 h-auto teams_swiper "
        >
          <SwiperSlide>
            <div className="lg:pb-[60px] pb-[45px]">
              <div className="member-wrapper flex items-center justify-center p-2 w-full max-h-[405px] h-full relative max-w-[405px] overflow-hidden">
                <Image
                  width="0"
                  height="0"
                  src="/test_person.png"
                  alt="test"
                  sizes="404px"
                  className="w-full rounded-full "
                  blurDataURL="/test_person.png"
                />
              </div>
              <a
                href="mail:info@debundeling.nl"
                className="w-full bg-dark-purple font-semibold ease-linear duration-300 items-center justify-between p-3 mt-6 rounded-full pr-2 pl-8 normal-case hover:bg-light-purple focus:bg-light-purple h-auto inline-flex gap-8 2xl:text-[30px] text-lg text-white"
              >
                Onno Otten
                <span className="block p-3 bg-white rounded-full">
                  <Icon
                    icon="material-symbols:mail-rounded"
                    color="#2C2E80"
                    width="20"
                    height="20"
                  />
                </span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:pb-[60px] pb-[45px]">
              <div className="member-wrapper flex items-center justify-center p-2 w-full max-h-[405px] h-full relative max-w-[405px] overflow-hidden">
                <Image
                  width="0"
                  height="0"
                  src="/test_person.png"
                  alt="test"
                  sizes="404px"
                  className="w-full rounded-full "
                  blurDataURL="/test_person.png"
                />
              </div>
              <a
                href="mail:info@debundeling.nl"
                className="w-full bg-dark-purple font-semibold ease-linear duration-300 items-center justify-between p-3 mt-6 rounded-full pr-2 pl-8 normal-case hover:bg-light-purple focus:bg-light-purple h-auto inline-flex gap-8 2xl:text-[30px] text-lg text-white"
              >
                Onno Otten
                <span className="block p-3 bg-white rounded-full">
                  <Icon
                    icon="material-symbols:mail-rounded"
                    color="#2C2E80"
                    width="20"
                    height="20"
                  />
                </span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:pb-[60px] pb-[45px]">
              <div className="member-wrapper flex items-center justify-center p-2 w-full max-h-[405px] h-full relative max-w-[405px] overflow-hidden">
                <Image
                  width="0"
                  height="0"
                  src="/test_person.png"
                  alt="test"
                  sizes="404px"
                  className="w-full rounded-full "
                  blurDataURL="/test_person.png"
                />
              </div>
              <a
                href="mail:info@debundeling.nl"
                className="w-full bg-dark-purple font-semibold ease-linear duration-300 items-center justify-between p-3 mt-6 rounded-full pr-2 pl-8 normal-case hover:bg-light-purple focus:bg-light-purple h-auto inline-flex gap-8 2xl:text-[30px] text-lg text-white"
              >
                Onno Otten
                <span className="block p-3 bg-white rounded-full">
                  <Icon
                    icon="material-symbols:mail-rounded"
                    color="#2C2E80"
                    width="20"
                    height="20"
                  />
                </span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:pb-[60px] pb-[45px]">
              <div className="member-wrapper flex items-center justify-center p-2 w-full max-h-[405px] h-full relative max-w-[405px] overflow-hidden">
                <Image
                  width="0"
                  height="0"
                  src="/test_person.png"
                  alt="test"
                  sizes="404px"
                  className="w-full rounded-full "
                  blurDataURL="/test_person.png"
                />
              </div>
              <a
                href="mail:info@debundeling.nl"
                className="w-full bg-dark-purple font-semibold ease-linear duration-300 items-center justify-between p-3 mt-6 rounded-full pr-2 pl-8 normal-case hover:bg-light-purple focus:bg-light-purple h-auto inline-flex gap-8 2xl:text-[30px] text-lg text-white"
              >
                Onno Otten
                <span className="block p-3 bg-white rounded-full">
                  <Icon
                    icon="material-symbols:mail-rounded"
                    color="#2C2E80"
                    width="20"
                    height="20"
                  />
                </span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:pb-[60px] pb-[45px]">
              <div className="member-wrapper flex items-center justify-center p-2 w-full max-h-[405px] h-full relative max-w-[405px] overflow-hidden">
                <Image
                  width="0"
                  height="0"
                  src="/test_person.png"
                  alt="test"
                  sizes="404px"
                  className="w-full rounded-full "
                  blurDataURL="/test_person.png"
                />
              </div>
              <a
                href="mail:info@debundeling.nl"
                className="w-full bg-dark-purple font-semibold ease-linear duration-300 items-center justify-between p-3 mt-6 rounded-full pr-2 pl-8 normal-case hover:bg-light-purple focus:bg-light-purple h-auto inline-flex gap-8 2xl:text-[30px] text-lg text-white"
              >
                Onno Otten
                <span className="block p-3 bg-white rounded-full">
                  <Icon
                    icon="material-symbols:mail-rounded"
                    color="#2C2E80"
                    width="20"
                    height="20"
                  />
                </span>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
        <button
          className="btn-nav btn-nav-teams absolute xl:top-[30%] xl:bottom-auto bottom-[-45px] xl:left-11 md:left-[40%] left-[32%]"
          onClick={() => swiperSecondRef.current?.slidePrev()}
        >
          <svg
            className="w-[20px] xl:w-[34px]"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.9099 7.04102C22.204 7.03556 22.4925 7.12166 22.7356 7.2874C22.9786 7.45314 23.1641 7.69032 23.2665 7.96613C23.3688 8.24193 23.3829 8.54272 23.3067 8.82688C23.2306 9.11103 23.068 9.36449 22.8415 9.5522L14.1729 16.9733L22.8469 24.3944C23.0053 24.5099 23.1381 24.657 23.2369 24.8265C23.3356 24.9959 23.3982 25.1839 23.4206 25.3787C23.443 25.5736 23.4248 25.7709 23.3672 25.9583C23.3095 26.1458 23.2136 26.3192 23.0855 26.4677C22.9574 26.6162 22.7999 26.7365 22.623 26.8211C22.4461 26.9057 22.2536 26.9527 22.0576 26.9591C21.8616 26.9655 21.6664 26.9313 21.4843 26.8585C21.3022 26.7857 21.1372 26.6759 20.9996 26.5361L11.0834 18.0602C10.9275 17.927 10.8022 17.7616 10.7164 17.5753C10.6305 17.3891 10.5861 17.1864 10.5861 16.9813C10.5861 16.7762 10.6305 16.5736 10.7164 16.3873C10.8022 16.2011 10.9275 16.0356 11.0834 15.9024L20.9996 7.39976C21.2509 7.17604 21.5735 7.0489 21.9099 7.04102Z"
              fill="#2C2E80"
            />
          </svg>
        </button>
        <button
          className="btn-nav btn-nav-teams lg:block absolute xl:top-[30%] xl:bottom-auto bottom-[-45px] xl:right-11 md:right-[40%] right-[32%]"
          onClick={() => swiperSecondRef.current?.slideNext()}
        >
          <svg
            className="w-[20px] xl:w-[34px]"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.0904 7.04102C11.7963 7.03556 11.5077 7.12166 11.2647 7.2874C11.0216 7.45314 10.8361 7.69032 10.7338 7.96613C10.6315 8.24193 10.6174 8.54272 10.6935 8.82688C10.7696 9.11103 10.9322 9.36449 11.1587 9.5522L19.8274 16.9733L11.1534 24.3944C10.9949 24.5099 10.8621 24.657 10.7634 24.8265C10.6646 24.9959 10.602 25.1839 10.5796 25.3787C10.5572 25.5736 10.5754 25.7709 10.6331 25.9583C10.6908 26.1458 10.7867 26.3192 10.9148 26.4677C11.0428 26.6162 11.2003 26.7365 11.3772 26.8211C11.5542 26.9057 11.7467 26.9527 11.9427 26.9591C12.1387 26.9655 12.3339 26.9313 12.516 26.8585C12.6981 26.7857 12.8631 26.6759 13.0006 26.5361L22.9168 18.0602C23.0728 17.927 23.198 17.7616 23.2839 17.5753C23.3697 17.3891 23.4142 17.1864 23.4142 16.9813C23.4142 16.7762 23.3697 16.5736 23.2839 16.3873C23.198 16.2011 23.0728 16.0356 22.9168 15.9024L13.0006 7.39976C12.7493 7.17604 12.4267 7.0489 12.0904 7.04102Z"
              fill="#2C2E80"
            />
          </svg>
        </button>
      </div>
      <div className="mt-16 text-center">
        <Link
          href="#"
          className="btn bg-dark-purple mx-auto hover:bg-light-purple focus:bg-light-purple h-16 px-8 mt-6 text-dark-purple normal-case text-base 2xl:text-[18px]"
        >
          Neem contact op
        </Link>
      </div>
    </section>
  );
};

export default TeamsBlock;
