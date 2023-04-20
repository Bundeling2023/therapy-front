import React from "react";
import { Icon } from "@iconify/react";
import "node_modules/leaflet/dist/leaflet.css";
import { AddressMap, ContactInfo } from "@/types/types";
import dynamic from "next/dynamic";

interface Props {
  data: AddressMap[],
  info: ContactInfo
}

const MapSection = ({ data, info }:Props) => {
  const MapBlock = dynamic(() => import("@/components/Map"), {
    ssr: false,
  });

  return (
    <section className="relative pt-20 pb-24 w-full mx-auto bg-[#EBF3FF]">
      <div className="w-90% max-w-1560 mx-auto flex rounded-[42px] overflow-hidden lg:flex-row flex-col">
        <div className="w-full max-w-[1022px] lg:h-auto h-[395px]">
          <MapBlock data={data} />
        </div>
        <div className="w-full lg:max-w-[541px] max-w-full bg-white lg:p-[60px] p-[14px] ">
          <h3 className="lg:text-[48px] text-3xl text-dark-purple font-semibold mb-6 leading-normal">
            Contact info
          </h3>
          <div className="flex items-center gap-3 lg:text-2xl text-base text-[#696AA5] font-normal">
            <span className="block p-2 rounded-full bg-dark-purple lg:p-3">
              <Icon
                icon="material-symbols:mail-rounded"
                color="white"
                width="24"
                height="24"
              />
            </span>
            <a href={`mailto:${info.email}`}>{info.email}</a>
          </div>
          <div className="flex mt-4 items-center gap-3 lg:text-2xl text-base text-[#696AA5] font-normal">
            <span className="block p-2 rounded-full bg-dark-purple lg:p-3">
              <Icon
                icon="ic:baseline-local-phone"
                color="white"
                width="24"
                height="24"
              />
            </span>
            <a href={`tel:${info.phone}`}>{info.phone}</a>
          </div>
          <p className="text-[#696AA5] lg:text-[26px] text-base mt-6 max-w-[350px] leading-normal">
            {info.mainAddress}
          </p>
          <p className="mt-8 text-base font-semibold text-dark-purple lg:mt-10 lg:text-2xl">
            Openingstijden
          </p>
          <div className="[&>*]:text-[#696AA5] [&>*]:lg:text-[26px] [&>*]:text-sm lg:pb-0 pb-2">
            <div className="flex justify-between lg:mt-[18px] mt-[8px]">
              <p>maandag</p>
              <p className="lg:min-w-[170px] min-w-[100px] ">08:00–18:00</p>
            </div>
            <div className="flex justify-between lg:mt-[18px] mt-[8px]">
              <p>dinsdag</p>
              <p className="lg:min-w-[170px] min-w-[100px]">08:00–18:00</p>
            </div>
            <div className="flex justify-between lg:mt-[18px] mt-[8px]">
              <p>woensdag</p>
              <p className="lg:min-w-[170px] min-w-[100px]">08:00–18:00</p>
            </div>
            <div className="flex justify-between lg:mt-[18px] mt-[8px]">
              <p>donderdag</p>
              <p className="lg:min-w-[170px] min-w-[100px]">08:00–18:00</p>
            </div>
            <div className="flex justify-between lg:mt-[18px] mt-[8px]">
              <p>vrijdag</p>
              <p className="lg:min-w-[170px] min-w-[100px]">08:00–18:00</p>
            </div>
            <div className="flex justify-between lg:mt-[18px] mt-[8px]">
              <p>zaterdag</p>
              <p className="lg:min-w-[170px] min-w-[100px]">Gesloten</p>
            </div>
            <div className="flex justify-between lg:mt-[18px] mt-[8px]">
              <p>zondag</p>
              <p className="lg:min-w-[170px] min-w-[100px]">Gesloten</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
