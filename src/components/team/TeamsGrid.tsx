import React from "react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import Link from "next/link";
import { Team } from "@/types/types";
import TeamMember from "./TeamMember";

interface Props {
  data: Team[]
}

const TeamsBlock = ({ data }: Props) => {
  return (
    <section className="xl:bg-[url('/team_bgr.svg')] bg-[url('/team_bgr_mob.svg')] bg-no-repeat bg-top md:bg-cover bg-contain relative md:pt-[85px] pt-[67px] md:mt-[27px] mt-2 pb-10">
      <h3 className="mb-24 text-2xl font-semibold text-center text-dark-purple md:text-5xl md:mb-16">
        Ons team
      </h3>
        <div className="relative xl:w-80% w-90% max-w-1560 h-auto mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
            {data.map((item) =>
                <TeamMember key={item.attributes.name} data={item.attributes} />
            )}
          </div>      
          
        <div className="mt-16 text-center">
          <Link
            href="#"
            className="btn bg-dark-purple mx-auto hover:bg-light-purple focus:bg-light-purple h-16 px-8 mt-6 text-dark-purple normal-case text-base 2xl:text-[18px]"
          >
            Neem contact op
          </Link>
        </div>
        </div>
    </section>
  );
};

export default TeamsBlock;
