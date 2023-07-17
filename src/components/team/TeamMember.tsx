import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { Team } from "@/types/types";
import HTMLReactParser from "html-react-parser";

interface Props {
  data: Team,
  isMain?: boolean,
}

const TeamMember = ({ data, isMain = false }: Props) => {

  return (
    <div className="lg:pb-[60px] pb-[45px] team-member">
      <div className="member-wrapper h-auto aspect-square flex items-center justify-center p-2 w-full max-h-[405px] relative max-w-[405px] overflow-hidden mx-auto">
        <Image
          id={data.attributes.url.slice(data.attributes.url.indexOf('#') + 1)}
          width="0"
          height="0"
          src={data.attributes.img.data.attributes.url}
          alt={data.attributes.name}
          sizes="404px"
          priority
          className="object-cover w-full h-full rounded-full"
          blurDataURL={data.attributes.img.data.attributes.url} />
      </div>
      <div
        className="w-full bg-dark-purple font-semibold ease-linear duration-300 items-center justify-between p-3 mt-6 rounded-full pr-2 pl-8 normal-case h-auto inline-flex gap-5 2xl:text-[30px] text-lg text-white"
      >
        {isMain ? <Link href={`${data.attributes.url}`}>{data.attributes.name}</Link> : data.attributes.name }
        <div className="flex gap-x-3">
          <a href={`tel:${data.attributes.phone}`} className="block p-3 bg-white rounded-full" >
            <Icon
              icon="solar:phone-bold"
              color="#2C2E80"
              width="20"
              height="20" />
          </a>
          <a href={`mailto:${data.attributes.email}`} className="block p-3 bg-white rounded-full" >
            <Icon
              icon="material-symbols:mail-rounded"
              color="#2C2E80"
              width="20"
              height="20" />
          </a>
        </div>
      </div>
      {!isMain && (
        <>
          {data.attributes.bigRegistrationNumber && (
            <div className="mt-5 text-lg">
              <span className="font-bold">BIG nr.: </span>
              <a className="text-blue-800 hover:underline" href={`tel:${data.attributes.bigRegistrationNumber}`}>{data.attributes.bigRegistrationNumber}</a>
            </div>
          )}
          <div className="mt-5 text-lg team-desc" data-id={data.attributes.url.slice(data.attributes.url.indexOf('#') + 1)}>
            {HTMLReactParser(data.attributes.desc)}
          </div>
        </>
      )}
    </div>
  );
}

export default TeamMember;