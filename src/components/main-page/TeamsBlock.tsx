import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { Team } from "@/types/types";
import { TeamsSlider } from "../team/TeamsSlider";

interface Props {
  data: Team[],
}

const TeamsBlock = ({ data }: Props) => {
  return (
    <section className="xl:bg-[url('/team_bgr.svg')] bg-[url('/team_bgr_mob.svg')] bg-no-repeat bg-top md:bg-cover bg-contain relative md:pt-[185px] pt-[65px] md:mt-[117px] mt-16 pb-10">
      <h3 className="mb-24 text-2xl font-semibold text-center text-dark-purple md:text-5xl md:mb-16">
        Ons team
      </h3>
      <TeamsSlider data={data} />
      <div className="mt-16 text-center">
        <Link
          href="/team"
          className="btn bg-dark-purple mx-auto hover:bg-light-purple focus:bg-light-purple h-16 px-8 mt-6 text-dark-purple normal-case text-base 2xl:text-[18px]"
        >
          Neem contact op
        </Link>
      </div>
    </section>
  );
};


export default TeamsBlock;
