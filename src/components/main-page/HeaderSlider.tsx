import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType, Navigation, Pagination } from "swiper";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const HeaderSlider = () => {
  const swiperRef = useRef<SwiperType>();
  return (
    <header className="relative bg-dark-purple">
      <Swiper
        modules={[Navigation, Pagination]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        loop
        pagination={true}
        breakpoints={{
          1025: {
            pagination: true,
          },
        }}
        className="2xl:h-[980px] h-auto relative bg-[url('/main-slider-bgr.svg')] bg-bottom bg-no-repeat bg-cover"
      >
        <SwiperSlide className="h-full">
          <div className="h-auto md:pt-24 pt-14 pb-32 2xl:pb-0 mx-auto xl:w-80% w-90% flex flex-col md:flex-row gap-5 justify-between items-start md:items-center">
            <div className="w-full md:w-1/2">
              <h1 className="2xl:text-[80px] md:text-[40px] text-[36px] font-bold max-w-xl text-dark-purple 2xl:leading-[98px] md:leading-normal leading-tight">
                Last van pijn en klachten
              </h1>
              <h3 className="2xl:text-[24px] md:text-[18px] text-[15px] font-normal md:font-medium max-w-[534px] text-[#4E4F84] mt-4 2xl:leading-10 leading-normal">
                Wij helpen u of uw kind graag bij lichamelijke klachten en
                algemene vragen!
              </h3>
              <Link href="#" className="mt-12 text-white btn btn-primary">
                Maak een afspraak
              </Link>
            </div>
            <div className="relative w-full md:w-1/2 md:mt-0 mt-11">
              <svg
                className="absolute z-0 min-w-[105%] left-[-2.5%]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 815 714"
              >
                <defs>
                  <path
                    d="M814.891 361.302c-5.414 263.823-234.748 367.749-460.748 350.178C181.935 698.092 0 690.738 0 476.261 0 261.785 265.009 0 487.866 0 710.723 0 818.93 164.514 814.891 361.302Z"
                    fill="#2C2E80"
                    id="reuse-0"
                  />
                </defs>
                <mask
                  id="a"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="815"
                  height="714"
                >
                  <use xlinkHref="#reuse-0" />
                </mask>
                <g mask="url(#a)">
                  <use xlinkHref="#reuse-0" />
                  <path
                    d="M-220.962 930.448S9.604 849.056 27.472 724.25c10.946-76.457-64.23-113.355-54.95-190.032 7.77-64.209 60.334-85.322 72.666-148.811C70.636 254.402-79.293 67.053-79.293 67.053"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <path
                    d="M-249.687 934.873S-9.042 891.566 28.637 771.25C51.72 697.543-16.553 649.051 4.92 574.859c17.981-62.127 73.253-74.525 95.621-135.209 46.157-125.218-71.738-334.213-71.738-334.213"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <path
                    d="M-253.893 912.993S-9.39 914.757 49.809 803.441c36.265-68.193-21.907-128.432 12.866-197.399 29.118-57.751 85.728-59.756 118.893-115.28 68.433-114.573-8.945-341.709-8.945-341.709"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <path
                    d="M-144.866 701.504s243.79 18.752 310.581-88.181c40.917-65.507-12.928-129.644 26.554-196.027 33.062-55.588 89.674-53.653 126.617-106.739 76.23-109.539 14.825-341.504 14.825-341.504"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <path
                    d="M-70.866 720.504s243.79 18.752 310.581-88.181c40.917-65.507-12.928-129.644 26.554-196.027 33.062-55.588 89.674-53.653 126.617-106.739 76.23-109.539 14.825-341.504 14.825-341.504"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <path
                    d="M285.904 860.053s171.029-174.1 132.421-293.946c-23.652-73.419-107.179-73.589-132.421-146.475-21.138-61.034 16.733-103.02 0-165.407C251.375 125.493 35 23.053 35 23.053"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <path
                    d="M402.904 800.053s171.029-174.1 132.421-293.946c-23.652-73.419-107.179-73.589-132.421-146.475-21.138-61.034 16.733-103.02 0-165.407C368.375 65.493 152-36.947 152-36.947"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <path
                    d="M519.904 740.053s171.029-174.1 132.421-293.946c-23.652-73.419-107.179-73.589-132.421-146.475-21.138-61.034 16.733-103.02 0-165.407C485.375 5.493 269-96.947 269-96.947"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <path
                    d="M636.549 681.053S808.018 506.745 769.31 386.756c-23.712-73.507-107.454-73.677-132.761-146.65-21.192-61.107 16.776-103.144 0-165.605C601.931-54.385 385-156.947 385-156.947"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <path
                    d="M488.699 525.585s239.3-48.682 274.484-169.72c21.555-74.148-47.561-121.052-27.623-195.649 16.696-62.466 71.61-76.096 92.713-137.22 43.546-126.125-78.324-332.244-78.324-332.244"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <path
                    d="M535.329 613.202s266.86-30.061 295.823-155.302c17.742-76.723-64.832-132.721-48.962-210.066 13.29-64.768 74.306-74.275 92.713-137.22C912.885-19.27 756.148-248.947 756.148-248.947"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                </g>
              </svg>
              <Image
                width="0"
                height="0"
                quality="80"
                src="/test_img.png"
                sizes="100vw"
                blurDataURL="/test_img.png"
                className="relative z-10 w-full mask1"
                alt="test"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <div className="h-auto md:pt-24 pt-14 pb-32 2xl:pb-0 mx-auto xl:w-80% w-90% flex flex-col md:flex-row gap-5 justify-between items-start md:items-center">
            <div className="w-full md:w-1/2">
              <h1 className="2xl:text-[80px] md:text-[40px] text-[36px] font-bold max-w-xl text-dark-purple 2xl:leading-[98px] md:leading-normal leading-tight">
                Last van pijn en klachten
              </h1>
              <h3 className="2xl:text-[24px] md:text-[18px] text-[15px] font-normal md:font-medium max-w-[534px] text-[#4E4F84] mt-4 2xl:leading-10 leading-normal">
                Wij helpen u of uw kind graag bij lichamelijke klachten en
                algemene vragen!
              </h3>
              <Link href="#" className="mt-12 text-white btn btn-primary">
                Maak een afspraak
              </Link>
            </div>
            <div className="relative w-full md:w-1/2 md:mt-0 mt-11">
              <svg
                className="absolute z-0 min-w-[105%] left-[-2.5%]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 815 714"
              >
                <defs>
                  <path
                    d="M814.891 361.302c-5.414 263.823-234.748 367.749-460.748 350.178C181.935 698.092 0 690.738 0 476.261 0 261.785 265.009 0 487.866 0 710.723 0 818.93 164.514 814.891 361.302Z"
                    fill="#2C2E80"
                    id="reuse-0"
                  />
                </defs>
                <mask
                  id="a"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="815"
                  height="714"
                >
                  <use xlinkHref="#reuse-0" />
                </mask>
                <g mask="url(#a)">
                  <use xlinkHref="#reuse-0" />
                  <path
                    d="M-220.962 930.448S9.604 849.056 27.472 724.25c10.946-76.457-64.23-113.355-54.95-190.032 7.77-64.209 60.334-85.322 72.666-148.811C70.636 254.402-79.293 67.053-79.293 67.053"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <path
                    d="M-249.687 934.873S-9.042 891.566 28.637 771.25C51.72 697.543-16.553 649.051 4.92 574.859c17.981-62.127 73.253-74.525 95.621-135.209 46.157-125.218-71.738-334.213-71.738-334.213"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <path
                    d="M-253.893 912.993S-9.39 914.757 49.809 803.441c36.265-68.193-21.907-128.432 12.866-197.399 29.118-57.751 85.728-59.756 118.893-115.28 68.433-114.573-8.945-341.709-8.945-341.709"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <path
                    d="M-144.866 701.504s243.79 18.752 310.581-88.181c40.917-65.507-12.928-129.644 26.554-196.027 33.062-55.588 89.674-53.653 126.617-106.739 76.23-109.539 14.825-341.504 14.825-341.504"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <path
                    d="M-70.866 720.504s243.79 18.752 310.581-88.181c40.917-65.507-12.928-129.644 26.554-196.027 33.062-55.588 89.674-53.653 126.617-106.739 76.23-109.539 14.825-341.504 14.825-341.504"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <path
                    d="M285.904 860.053s171.029-174.1 132.421-293.946c-23.652-73.419-107.179-73.589-132.421-146.475-21.138-61.034 16.733-103.02 0-165.407C251.375 125.493 35 23.053 35 23.053"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <path
                    d="M402.904 800.053s171.029-174.1 132.421-293.946c-23.652-73.419-107.179-73.589-132.421-146.475-21.138-61.034 16.733-103.02 0-165.407C368.375 65.493 152-36.947 152-36.947"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <path
                    d="M519.904 740.053s171.029-174.1 132.421-293.946c-23.652-73.419-107.179-73.589-132.421-146.475-21.138-61.034 16.733-103.02 0-165.407C485.375 5.493 269-96.947 269-96.947"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <path
                    d="M636.549 681.053S808.018 506.745 769.31 386.756c-23.712-73.507-107.454-73.677-132.761-146.65-21.192-61.107 16.776-103.144 0-165.605C601.931-54.385 385-156.947 385-156.947"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <path
                    d="M488.699 525.585s239.3-48.682 274.484-169.72c21.555-74.148-47.561-121.052-27.623-195.649 16.696-62.466 71.61-76.096 92.713-137.22 43.546-126.125-78.324-332.244-78.324-332.244"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <path
                    d="M535.329 613.202s266.86-30.061 295.823-155.302c17.742-76.723-64.832-132.721-48.962-210.066 13.29-64.768 74.306-74.275 92.713-137.22C912.885-19.27 756.148-248.947 756.148-248.947"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                </g>
              </svg>
              <Image
                width="0"
                height="0"
                quality="80"
                src="/test_img.png"
                sizes="100vw"
                blurDataURL="/test_img.png"
                className="relative z-10 w-full mask1"
                alt="test"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <button
        className="btn-nav absolute top-[50%] left-11"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <svg
          width="34"
          height="34"
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
        className="btn-nav lg:block absolute top-[50%] right-11"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <svg
          width="34"
          height="34"
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
    </header>
  );
};

export default HeaderSlider;
