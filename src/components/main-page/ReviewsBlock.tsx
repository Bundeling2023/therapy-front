import React, { useState } from "react";
import Link from "next/link";

const ModalVideo = () => {
  return (
    <section className="relative md:pt-24 pt-14 pb-10 w-90% max-w-1560 mx-auto">
      <div className="w-full flex xl:gap-[116px] gap-11 xl:flex-row flex-col-reverse">
        <div className="xl:w-full w-[95%] mx-auto xl:max-w-[801px] relative before:content-[''] before:block before:rounded-full before:h-full before:w-full before:absolute lg:before:left-[-37px] before:left-[-15px] lg:before:top-[-16px] before:top-[-8px] before:bg-transparent before:border before:border-[#5EB349] before:z-[-1] ">
          <div className="bg-[#5EB349] z-10 rounded-full lg:pt-[60px] lg:pb-10 pt-7 pb-6 flex relative items-center flex-col">
            <p className="lg:text-[32px] lg:leading-10 text-lg lg:max-w-[340px] max-w-[193px] text-white text-center lg:mb-6 mb-2">
              Jullie waarderen ons gemiddeld met een
            </p>
            <svg
              viewBox="0 0 153 166"
              className="w-full lg:max-w-[153px] max-w-[78px]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M146 73.584C146 113.901 113.317 146.584 73 146.584C32.6832 146.584 0 113.901 0 73.584C0 33.2672 32.6832 0.583984 73 0.583984C113.317 0.583984 146 33.2672 146 73.584ZM17.8287 73.584C17.8287 104.054 42.5297 128.755 73 128.755C103.47 128.755 128.171 104.054 128.171 73.584C128.171 43.1137 103.47 18.4127 73 18.4127C42.5297 18.4127 17.8287 43.1137 17.8287 73.584Z"
                fill="white"
              />
              <path
                d="M111.621 122.785L145.316 158.887"
                stroke="white"
                strokeWidth="19.5"
              />
              <text
                fill="white"
                xmlSpace="preserve"
                style={{ whiteSpace: "pre" }}
                fontSize="50"
                fontWeight="800"
                letterSpacing="0em"
              >
                <tspan x="34.3408" y="91.925">
                  9.5
                </tspan>
              </text>
            </svg>
            <p className="text-white lg:text-xs lg:mt-[52px] mt-2 text-[8px] z-10 text-center 2xl:max-w-none max-w-[195px]">
              Bron: onafhankolijk ondorzook uitgovoord door Qualizorg B.V
              periode 10/2020- 10/2021
            </p>
          </div>
        </div>
        <div className="w-full xl:max-w-[670px]">
          <svg
            height="63"
            viewBox="0 0 512 63"
            className="w-full md:max-w-[512px] max-w-[266px]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="512"
              height="63"
              rx="8"
              fill="#2C2E80"
              fillOpacity="0.08"
            />
            <text
              fill="#2C2E80"
              xmlSpace="preserve"
              style={{ whiteSpace: "pre" }}
              fontSize="26"
              fontWeight="500"
              letterSpacing="0.24em"
            >
              <tspan x="57.4069" y="42.321">
                PATIËNTENERVARINGEN
              </tspan>
            </text>
            <path
              d="M42.3685 49.4058C41.7528 50.4712 40.2406 50.4058 39.2766 49.6275C41.598 48.9003 42.3387 46.4624 42.6902 44.6986C42.6902 44.6986 43.6597 47.1741 42.3685 49.4058Z"
              fill="#2C2E80"
            />
            <path
              d="M41.7372 35.3798C41.7483 38.5715 40.697 41.7787 37.1342 43.9593C33.19 46.3739 28.692 46.0679 27.0869 43.2731C26.7984 42.7731 26.6248 42.2288 26.5552 41.6556C28.6599 43.2154 32.4273 43.2409 36 41.4993C39.0245 40.0237 41.1292 37.658 41.7372 35.3798Z"
              fill="#2C2E80"
            />
            <path
              d="M32.7644 36.9949C35.6087 36.1468 37.6958 34.8076 38.9549 33.8542C40.5567 32.6414 41.7052 31.3809 42.4801 30.4042C42.0833 34.3431 38.4276 38.6234 32.6373 40.1932C25.6233 42.0967 18.5728 40.4726 16.8439 36.4483C16.6372 35.9672 16.5167 35.4761 16.4758 34.9783C18.1937 35.9373 20.6267 36.9993 23.6755 37.4882C28.4123 38.2476 32.0503 37.2089 32.7644 36.9949Z"
              fill="#1E9A98"
            />
            <path
              d="M39.8503 47.345C37.8716 49.0057 35.3523 48.7929 33.8091 46.9936C34.9698 47.1 36.251 46.8473 37.4913 46.1843C40.0316 44.8263 41.4808 42.7709 41.913 40.4561C42.2546 43.0791 41.7738 45.732 39.8503 47.345Z"
              fill="#1E9A98"
            />
            <path
              d="M42.5829 27.0263C42.9853 26.3777 43.2727 25.6605 43.4032 24.9066C43.4043 24.9022 43.4043 24.8988 43.4054 24.8944C43.4662 24.6272 43.5126 24.3412 43.5358 24.0363C43.559 23.7226 43.5546 23.4277 43.5325 23.1495C43.5325 23.1384 43.5325 23.1273 43.5325 23.1173C43.5314 23.1184 43.5314 23.1184 43.5303 23.1195C43.4817 22.5342 43.3534 22.032 43.2164 21.6428C43.1522 21.4267 43.0627 21.2127 42.9466 20.9998C42.9455 20.9965 42.9433 20.9932 42.9422 20.991C42.8704 20.8591 42.7885 20.7282 42.6968 20.5985C42.6946 20.5952 42.6924 20.5919 42.6902 20.5886C41.9849 19.5997 40.7015 18.6673 38.8377 17.8858C32.8407 15.3714 23.1085 15.3714 17.1115 17.8858C13.4934 19.4034 11.906 21.624 12.923 23.7259C13.9986 25.9443 17.8974 27.8289 23.3019 28.2602C27.0692 28.5595 31.5009 28.0662 34.2513 26.9154C37.7124 25.4631 38.3469 23.1339 35.4916 21.3746C33.0917 19.8968 28.5295 19.3957 24.7677 20.1085C24.3178 20.1939 23.8812 20.2959 23.4578 20.4167C21.8538 20.8724 20.7727 21.5652 20.4079 22.3634C20.1879 22.8479 20.2498 23.3368 20.5748 23.7958C20.8379 24.1661 21.8206 24.3989 22.7216 24.2747C23.9652 24.1029 25.0098 23.9399 25.8931 23.5064C26.7829 23.0696 27.2693 22.4621 27.1931 21.8867C27.1411 21.4954 27.8862 21.1595 28.8169 21.195C30.3458 21.2537 31.8049 21.5885 32.7346 22.1617C34.9311 23.512 34.091 25.3611 30.8664 26.2802C26.6989 27.4686 20.8401 27.0041 18.0013 25.2558C16.1929 24.1417 15.5318 22.8002 16.1343 21.4766C16.7345 20.1606 18.5231 19.0232 21.164 18.2738C27.4252 16.4978 34.1849 17.5609 38.1048 19.4012C38.3845 19.532 38.6531 19.6684 38.9096 19.8103C40.1521 20.4943 40.979 21.7726 41.0431 23.1916C41.0453 23.247 41.0475 23.3035 41.0475 23.3601C41.0508 23.8922 40.9579 24.3678 40.8187 24.7813C40.5213 25.6627 39.9398 26.4232 39.1904 26.972C36.5826 28.8799 33.5482 30.1293 30.3458 30.5772C30.317 30.5816 30.2883 30.5849 30.2584 30.5894C28.9584 30.7667 24.1686 31.3177 18.3672 29.4586C15.1106 28.412 12.6333 26.9587 10.9995 25.8356C11.1266 26.6549 11.4262 27.8788 12.2155 29.1249C12.7218 29.9242 13.8858 31.4496 17.0429 32.8199C17.0429 32.8199 17.7172 33.1248 18.3982 33.3531C19.6451 33.7977 30.9018 37.6224 38.9063 31.2069C40.4881 29.9375 41.6809 28.4786 42.5829 27.0263Z"
              fill="#2C2E80"
            />
          </svg>
          <p className="2xl:text-5xl text-3xl text-dark-purple font-semibold mt-2 2xl:leading-[62px] leading-10">
            Wij vinden het leveren van goede zorg en een goede
            patiënt/therapeut relatie erg belangrijk.
          </p>
          <Link
            href="/specialisaties"
            className="py-[16px] hover:bg-dark-purple hover:text-white inline-block px-7 border mt-11 border-dark-purple rounded-lg font-bold text-dark-purple text-base"
          >
            Bekijk wat wij doen
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ModalVideo;
