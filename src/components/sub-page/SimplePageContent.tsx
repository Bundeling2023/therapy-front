import HTMLReactParser from "html-react-parser";
import Image from "next/image";
import { NoInfo } from "./NoInfo";
import { optimizeCloudinaryUrl, RESPONSIVE_SIZES_MOBILE_FIRST, getBlurPlaceholder } from "@/types/cloudinaryOptimization";

export const SimplePageContent = (props: any) => {
    const data = props?.data;
    if (!data) {
        return <NoInfo />;
    }

    return (<main className="w-full bg-white rounded-xl p-7 simple-page break-words">
        {data.img && data.img.data && (
            <Image
                className="w-full rounded-xl"
                src={optimizeCloudinaryUrl(data.img.data.attributes.url, { quality: 'auto', dpr: 'auto', gravity: 'auto', crop: 'auto' })}
                alt={data.title || "Content"}
                width={0}
                height={0}
                sizes={RESPONSIVE_SIZES_MOBILE_FIRST}
                placeholder="blur"
                blurDataURL={getBlurPlaceholder(data.img.data.attributes.url)}
            />
        )}
        {data.description ? HTMLReactParser(data.description) : ''}
    </main>);
};
