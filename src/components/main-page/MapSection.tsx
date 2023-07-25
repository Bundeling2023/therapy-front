import React from "react";
import { Icon } from "@iconify/react";
import "node_modules/leaflet/dist/leaflet.css";
import { AddressMap } from "@/types/types";
import dynamic from "next/dynamic";

interface Props {
  data: AddressMap[],
}

const MapSection = ({ data: locations }: Props) => {
  const MapBlock = dynamic(() => import("@/components/Map"), {
    ssr: false,
  });

  const changeTab = (index: number) => {
    const tab = document.querySelector(`[tab-index="${index}"]`);
    const allTabs = document.querySelectorAll('[tab-index]');

    allTabs.forEach((item) =>
      (!item.classList.contains('hidden') && item.getAttribute('tab-index') !== `${index}`) && item.classList.add('hidden')
    )

    tab?.classList.remove('hidden');
  }

  return (
    <section className="relative pt-20 pb-24 w-full mx-auto bg-[#EBF3FF]">
      <div className="w-90% max-w-1560 mx-auto flex rounded-[42px] overflow-hidden lg:flex-row flex-col">
        <div className="relative w-full z-[20] max-w-[1022px] lg:h-auto h-[395px]">
          <div className="z-[999] absolute pb-10 bottom-0 left-0 right-0 mx-auto text-center">
            <span className="bg-gray-400/80 rounded-lg p-2 text-white">Selecteer een locatie om de contactgegevens te bekijken</span>
            </div>
          <MapBlock handleCLick={changeTab} data={locations} />
        </div>
        <div className="w-full lg:max-w-[541px] max-w-full bg-white lg:p-[60px] p-[14px] ">
          {locations.map((item, index) =>
            <div tab-index={index} className={index === 0 ? '' : 'hidden'} key={item.attributes.url}>
              <h3 className="lg:text-[36px] text-2xl text-dark-purple font-semibold mb-6 leading-normal">
                {item.attributes.title}
              </h3>
              <div className="flex items-center gap-3 lg:text-2xl text-base text-[#696AA5] font-normal">
                <span className="block p-2 rounded-full bg-dark-purple lg:p-3">
                  <Icon
                    icon="material-symbols:mail-rounded"
                    color="white"
                    width="24"
                    height="24" />
                </span>
                <a href={`mailto:${item.attributes.email}`}>{item.attributes.email}</a>
              </div>
              <div className="flex mt-4 items-center gap-3 lg:text-2xl text-base text-[#696AA5] font-normal">
                <span className="block p-2 rounded-full bg-dark-purple lg:p-3">
                  <Icon
                    icon="ic:baseline-local-phone"
                    color="white"
                    width="24"
                    height="24" />
                </span>
                <a href={`tel:${item.attributes.phone}`}>{item.attributes.phone}</a>
              </div>
              <p className="text-[#696AA5] lg:text-[26px] text-base mt-6 max-w-[350px] leading-normal">
                {item.attributes.address}
              </p>
              <p className="mt-8 text-base font-semibold text-dark-purple lg:mt-10 lg:text-2xl">
                Openingstijden
              </p>
              <div className="[&>*]:text-[#696AA5] [&>*]:lg:text-[26px] [&>*]:text-sm lg:pb-0 pb-2">
                <div className="flex justify-between lg:mt-[18px] mt-[8px]">
                  <p>maandag</p>
                  <p className="lg:min-w-[170px] min-w-[100px] ">{item.attributes.workingHours.monday}</p>
                </div>
                <div className="flex justify-between lg:mt-[18px] mt-[8px]">
                  <p>dinsdag</p>
                  <p className="lg:min-w-[170px] min-w-[100px]">{item.attributes.workingHours.tuesday}</p>
                </div>
                <div className="flex justify-between lg:mt-[18px] mt-[8px]">
                  <p>woensdag</p>
                  <p className="lg:min-w-[170px] min-w-[100px]">{item.attributes.workingHours.wednesday}</p>
                </div>
                <div className="flex justify-between lg:mt-[18px] mt-[8px]">
                  <p>donderdag</p>
                  <p className="lg:min-w-[170px] min-w-[100px]">{item.attributes.workingHours.thursday}</p>
                </div>
                <div className="flex justify-between lg:mt-[18px] mt-[8px]">
                  <p>vrijdag</p>
                  <p className="lg:min-w-[170px] min-w-[100px]">{item.attributes.workingHours.friday}</p>
                </div>
                <div className="flex justify-between lg:mt-[18px] mt-[8px]">
                  <p>zaterdag</p>
                  <p className="lg:min-w-[170px] min-w-[100px]">{item.attributes.workingHours.saturday}</p>
                </div>
                <div className="flex justify-between lg:mt-[18px] mt-[8px]">
                  <p>zondag</p>
                  <p className="lg:min-w-[170px] min-w-[100px]">{item.attributes.workingHours.sunday}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MapSection;
