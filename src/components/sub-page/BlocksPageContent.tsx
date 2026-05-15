import HTMLReactParser from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import { NoInfo } from "./NoInfo";
import { optimizeCloudinaryUrl, RESPONSIVE_SIZES_CARD, getBlurPlaceholder } from "@/types/cloudinaryOptimization";

export const BlocksPageContent = (data: any) => {
    const blocks = data?.items?.blocks;
    if (!blocks) {
        return <NoInfo />;
    }

    const isExternalLink = (url?: string) => {
        if (!url) return false;
        return /^https?:\/\//i.test(url);
    };

    return <main className="flex w-90% max-w-1560 flex-wrap mx-auto justify-between pb-20 gap-5">
        {blocks.map((item: any, index: number) => {
            const imageUrl = item.img?.url;
            const itemLink = item.link?.url;
            const cardKey = `${item.title || "block"}-${index}`;

            const ImageComponent = () => <Image
                className="w-full rounded-xl object-contain bg-white p-4 h-48"
                src={optimizeCloudinaryUrl(imageUrl, { quality: 'auto', dpr: 'auto', gravity: 'auto', crop: 'auto' })}
                alt={item.title || "Block"}
                width={0}
                height={0}
                sizes={RESPONSIVE_SIZES_CARD}
                placeholder="blur"
                blurDataURL={getBlurPlaceholder(imageUrl)}
            />;

            return itemLink ? (
                    <Link
                        href={itemLink}
                        key={cardKey}
                        target={isExternalLink(itemLink) ? "_blank" : undefined}
                        rel={isExternalLink(itemLink) ? "noopener noreferrer" : undefined}
                        className="bg-white rounded-xl p-7 xl:max-w-[49%] sm:max-w-[48%] w-full simple-page transition duration-500 ease-in-out hover:shadow-lg hover:-translate-y-2 flex flex-col"
                    >
                        {imageUrl && <ImageComponent />}
                        <h2 className="mt-4">{item.title}</h2>
                        <div>{HTMLReactParser(item.description)}</div>
                    </Link>
                ) : (
                <div key={cardKey} className="bg-white rounded-xl p-7 xl:max-w-[49%] sm:max-w-[48%] w-full simple-page transition duration-500 ease-in-out flex flex-col">
                    {imageUrl && <ImageComponent />}
                    <h2 className="mt-4">{item.title}</h2>
                    <div>{HTMLReactParser(item.description)}</div>
                </div>
            );
        }
        )}
    </main>;
};
