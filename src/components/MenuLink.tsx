import { getPathFromUrl } from "@/types/utils";
import Link from "next/link";

interface MenuLinkProps {
  pageUrl?: string;
  path?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (
    event: React.MouseEvent<HTMLAnchorElement | HTMLParagraphElement>
  ) => void;
}

const MenuLink: React.FC<MenuLinkProps> = ({
  pageUrl,
  path,
  children,
  className,
  onClick,
}) => {
  if (pageUrl) {
    return (
      <Link className={className} href={pageUrl} onClick={onClick}>
        {children}
      </Link>
    );
  } else if (
    path &&
    (path.includes("local.bundeling") || path.includes("bundeling.local"))
  ) {
    const externalUrl = getPathFromUrl(path);
    return (
      <Link className={className} href={externalUrl}>
        {children}
      </Link>
    );
  } else {
    return <p className={className}>{children}</p>;
  }
};

export default MenuLink;
