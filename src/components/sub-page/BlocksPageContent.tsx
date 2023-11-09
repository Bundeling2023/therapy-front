import HTMLReactParser from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import { NoInfo } from "./NoInfo";

export const BlocksPageContent = (data: any) => {
    const blocks = data?.items?.blocks;
    if (!blocks) {
        return <NoInfo />;
    }
    return <main className="flex w-90% max-w-1560 flex-wrap mx-auto justify-between pb-20 gap-5">
        {blocks.map((item: any) => {
            const imageUrl = item.img.data?.attributes?.url;

            const ImageComponent = () => <Image
                className="w-full rounded-xl"
                src={imageUrl}
                alt={item.title}
                width={0}
                height={0}
                sizes="100vw" />;

            return (<>
                {item.link.data ? (
                    <Link href={item.link.data.attributes.url} key={item.title} className="bg-white rounded-xl p-7 xl:max-w-[49%] sm:max-w-[48%] max-w-full simple-page transition duration-500 ease-in-out hover:shadow-lg hover:-translate-y-2">
                        {imageUrl && <ImageComponent />}
                        <h2>{item.title}</h2>
                        <div>{HTMLReactParser(item.description)}</div>
                    </Link>
                ) : (
                    <div key={item.title} className="bg-white rounded-xl p-7 xl:max-w-[49%] sm:max-w-[48%] max-w-full simple-page transition duration-500 ease-in-out">
                        {imageUrl && <ImageComponent />}
                        <h2>{item.title}</h2>
                        <div>{HTMLReactParser(item.description)}</div>
                    </div>
                )}
            </>);
        }
        )}
    </main>;
};
