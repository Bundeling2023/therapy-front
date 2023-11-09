import HTMLReactParser from "html-react-parser";
import Image from "next/image";
import { NoInfo } from "./NoInfo";

export const SimplePageContent = (props: any) => {
    const data = props?.data;
    if (!data) {
        return <NoInfo />;
    }

    return (<main className="w-full bg-white rounded-xl p-7 simple-page break-words">
        {data.img && data.img.data && (
            <Image
                className="w-full rounded-xl"
                src={data.img.data.attributes.url}
                alt={data.title}
                width={0}
                height={0}
                sizes="100vw" />
        )}
        {data.description ? HTMLReactParser(data.description) : ''}
    </main>);
};
