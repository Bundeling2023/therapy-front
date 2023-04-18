import React from "react";
import Image from "next/image";
import Link from "next/link";
import S1 from "../../img/s1.svg";
import S2 from "../../img/s2.svg";
import S3 from "../../img/s3.svg";
import S4 from "../../img/s4.svg";
import ImageTest from "@/img/test_img2.png";

const ServicesBlock = () => {
  return (
    <section className="bg-[url('/services-bgr.svg')] bg-no-repeat bg-bottom bg-cover relative md:pt-[152px] pt-20 pb-48">
      <h3 className="mb-8 text-2xl font-semibold text-center text-white md:text-5xl md:mb-16">
        Wat we doen
      </h3>
      <div className="flex justify-between 2xl:gap-[176px] md:gap-16 gap-[unset] gap-y-10 items-start mx-auto w-90% max-w-1560 xl:flex-nowrap flex-wrap">
        <Link
          href="#"
          className="md:max-w-[310px] max-w-[160px] xl:w-auto w-1/2 text-center group"
        >
          <Image
            className="mx-auto w-full md:max-w-[228px] max-w-[140px] ease-linear duration-300 group-hover:translate-y-[-8px]"
            src={S1}
            alt="test"
          />
          <p className="text-white inline-block mx-auto after:block after:ease-linear after:duration-300 after:h-[2px] after:w-0 after:bg-white after:absolute relative md:mt-8 mt-4 2xl:text-[30px] md:text-xl text-sm ease-linear duration-300 leading-normal font-semibold group-hover:after:w-full">
            Fysiotherapie
          </p>
        </Link>
        <Link
          href="#"
          className="md:max-w-[310px] max-w-[160px] xl:w-auto w-1/2 text-center group"
        >
          <Image
            className="mx-auto w-full md:max-w-[228px] max-w-[140px] ease-linear duration-300 group-hover:translate-y-[-8px]"
            src={S2}
            alt="test"
          />
          <p className="text-white inline-block mx-auto after:block after:ease-linear after:duration-300 after:h-[2px] after:w-0 after:bg-white after:absolute relative md:mt-8 mt-4 2xl:text-[30px] md:text-xl text-sm ease-linear duration-300 leading-normal font-semibold group-hover:after:w-full">
            Kinderfysiotherapie
          </p>
        </Link>
        <Link
          href="#"
          className="md:max-w-[310px] max-w-[160px] xl:w-auto w-1/2 text-center group"
        >
          <Image
            className="mx-auto w-full md:max-w-[228px] max-w-[140px] ease-linear duration-300 group-hover:translate-y-[-8px]"
            src={S3}
            alt="test"
          />
          <p className="text-white inline-block mx-auto after:block after:ease-linear after:duration-300 after:h-[2px] after:w-0 after:bg-white after:absolute relative md:mt-8 mt-4 2xl:text-[30px] md:text-xl text-sm ease-linear duration-300 leading-normal font-semibold group-hover:after:w-full">
            Geriatrie
          </p>
        </Link>
        <Link
          href="#"
          className="md:max-w-[310px] max-w-[160px] xl:w-auto w-1/2 text-center group"
        >
          <Image
            className="mx-auto w-full md:max-w-[228px] max-w-[140px] ease-linear duration-300 group-hover:translate-y-[-8px]"
            src={S4}
            alt="test"
          />
          <p className="text-white inline-block mx-auto after:block after:ease-linear after:duration-300 after:h-[2px] after:w-0 after:bg-white after:absolute relative md:mt-8 mt-4 2xl:text-[30px] md:text-xl text-sm ease-linear duration-300 leading-normal font-semibold group-hover:after:w-full">
            Manuele therapie
          </p>
        </Link>
      </div>
      <div className="mt-20 flex w-90% max-w-1560 mx-auto lg:items-center items-start lg:flex-row flex-col justify-between [&>*]:text-white">
        <div className="lg:w-[47%] w-full ld:max-w-[721px]">
          <h2 className="2xl:text-[48px] md:text-[36px] text-[30px] mb-4 font-semibold leading-normal">
            De voordelen van Fysiotherapie De Bundeling
          </h2>
          <p className="2xl:text-[22px] md:text-[18px] text-[15px]">
            Fysiotherapie de Bundeling is een kwalitatief hoogwaardig centrum
            voor kinderfysiotherapie, volwassenen fysiotherapie en
            geriatriefysiotherapie. Wij zijn klein genoeg om de cliënten veel
            persoonlijke aandacht te geven en groot genoeg om een grote
            diversiteit aan deskundigheden in huis te hebben.
          </p>
          <Link
            href="#"
            className="bg-white btn btn-white text-dark-purple mt-14"
          >
            Bekijk meer
          </Link>
        </div>
        <div className="relative lg:w-[47%] w-full ld:max-w-[630px] flex items-center justify-center md:pt-32 pt-20">
          <svg
            className="absolute z-0 max-w-[77%] ml-[10%] md:top-[9%]"
            viewBox="0 0 489 607"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M157.301 30.7275C381.652 -45.9049 435.648 22.3957 342.155 241.307C287.887 368.374 582.038 524.738 456.772 577.237C273.755 653.94 99.8072 575.217 47.8972 416.41C-20.1642 208.192 -40.3305 121.981 157.301 30.7275Z"
              fill="white"
            />
          </svg>

          <Image
            className="relative w-full mask2"
            quality="80"
            src={ImageTest}
            alt="test"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesBlock;
