import Link from "next/link";
import { Fragment } from "react";

interface Props {
    items: SideMenuItem[],
    title: string
    currentPageUrl: string
    showAppointment?: boolean
}

export interface SideMenuItem {
    url: string;
    title: string;

}

const SideMenu = ({ items, title, currentPageUrl: pageUrl, showAppointment }: Props) => {
    return (<aside className="bg-blue-200 lg:ml-8 w-full rounded-xl p-7 mt-6 lg:mt-0 lg:min-w-[400px] lg:max-w-[400px]">
        <h3 className="mb-6 text-xl font-bold lg:text-2xl">{title}</h3>
        {items.map((item: SideMenuItem) =>
            <Fragment key={item.title}>
                {!(item.url === undefined) && <Link
                    className={`block w-full p-5 pl-7 mb-5 overflow-hidden transition duration-300 ease-in-out before:left-0 before:top-0 relative before:content-[''] before:block before:absolute before:h-full before:w-3 before:bg-blue-300 hover:bg-blue-300 last:mb-0 lg:text-lg text-base font-medium bg-gray-100 rounded-xl ${item.related?.attributes.url === pageUrl ? 'active' : ''}`}
                    key={item.title}
                    href={item.url}>
                    {item.title}
                </Link>}
            </Fragment>
        )}
        {showAppointment && <Link href="/contact-us" className="text-white btn btn-primary mt-7">
            Afspraak maken
        </Link>}
    </aside>)
}

export default SideMenu;