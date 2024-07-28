import { cn } from "../lib/utils";
import Image from "next/image";
import Link from "next/link";
import {} from "next/font/google";
declare type HeaderProps = {
  children: React.ReactNode;
  className?: string;
};

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      <Link href="/" className="md:flex-1">
        <div className="flex items-center gap-0">
          <Image
            src="/assets/images/codoc.png"
            alt="Logo with name"
            width={120}
            height={32}
          />
          <span
            className="text-3xl hidden lg:block"
            style={{ fontFamily: "initial" }}
          >
            CoDoc
          </span>
        </div>
      </Link>
      {children}
    </div>
  );
};

export default Header;
