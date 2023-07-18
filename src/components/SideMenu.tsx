import Link from "next/link";
import { Fragment } from "react";

interface Props {
    items: SideMenuItem[],
    childItems: SideMenuItem[],
    parentTitle?: string
    parentPageUrl?: string,
    currentPageUrl: string
    showAppointment?: boolean
}

export interface SideMenuItem {
    url: string;
    title: string;

}

const SideMenu = ({ items, childItems, parentTitle, currentPageUrl: pageUrl, parentPageUrl, showAppointment }: Props) => {
    return (<aside className="bg-blue-200 lg:ml-8 w-full rounded-xl p-7 mt-6 lg:mt-0 lg:min-w-[400px] lg:max-w-[400px]">
        {parentPageUrl && <Link href={parentPageUrl}><h3 className="mb-6 text-xl font-bold lg:text-2xl link">{parentTitle}</h3></Link>}
        {items.map((item: SideMenuItem) =>
            <>
                <MenuItem key={item.url} item={item} pageUrl={pageUrl} />
                {item.url === pageUrl && childItems?.map((childItem: SideMenuItem) => <MenuItem key={childItem.url} className="ml-5" item={childItem} pageUrl={pageUrl} />)}
            </>
        )}
        {showAppointment && <Link href="/contact-us" className="text-white btn btn-primary mt-7">
            Afspraak maken
        </Link>}
    </aside>)
}

export interface MenuItemProps {
    item: SideMenuItem,
    pageUrl: string,
    className?: string
}

const MenuItem = ({ item, pageUrl, className }: MenuItemProps) => {
    return !(item.url === undefined) ? <Link
        className={
            `block p-5 pl-7 mb-5 overflow-hidden transition 
             duration-300 ease-in-out before:left-0 before:top-0 relative before:content-[''] 
             before:block before:absolute before:h-full before:w-3 before:bg-blue-300 hover:bg-blue-300 
             last:mb-0 lg:text-lg text-base font-medium bg-gray-100 rounded-xl 
             ${item.url === pageUrl ? 'active' : ''} ${className}`
        }
        key={item.title}
        href={item.url}>
        {item.title}
    </Link> : null;
}

export default SideMenu;