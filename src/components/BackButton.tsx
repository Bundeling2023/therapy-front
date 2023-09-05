import Link from "next/link";
import { Icon } from "@iconify/react";

interface BackButtonProps {
  children: React.ReactNode;
  className?: string;
}

const BackButton: React.FC<BackButtonProps> = ({
  children,
  className,
}) => {
    return <Link className={`underline text-dark-purple ${className}`} href={'/'}>
    <Icon icon="ic:baseline-arrow-back" color="#696AA5" width="24" height="24" className="inline-block mr-2 -mt-1" />
    {children}
    </Link>
};

export default BackButton;
