import Image from "next/image";
import { Icon } from "@iconify/react";

interface Props {
    data: any
}

const TeamMember = ({ data }: Props) => {
    return (
      <div className="lg:pb-[60px] pb-[45px] team-member">
        <div className="member-wrapper aspect-square flex items-center justify-center p-2 w-full max-h-[405px] h-full relative max-w-[405px] overflow-hidden mx-auto">
          <Image
            width="0"
            height="0"
            src={data.img.data.attributes.url}
            alt={data.name}
            sizes="404px"
            priority
            className="object-cover w-full h-full rounded-full"
            blurDataURL={data.img.data.attributes.url} />
        </div>
        <a
          href={`mailto:${data.email}`}
          className="w-full bg-dark-purple font-semibold ease-linear duration-300 items-center justify-between p-3 mt-6 rounded-full pr-2 pl-8 normal-case hover:bg-light-purple focus:bg-light-purple h-auto inline-flex gap-8 2xl:text-[30px] text-lg text-white"
        >
          {data.name}
          <span className="block p-3 bg-white rounded-full">
            <Icon
              icon="material-symbols:mail-rounded"
              color="#2C2E80"
              width="20"
              height="20" />
          </span>
        </a>
      </div>
    );
  }

  export default TeamMember;