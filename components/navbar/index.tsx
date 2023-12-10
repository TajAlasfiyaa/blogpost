import imageAvatar from "@/public/assets/me.svg";
import { defaultMetadata } from "@/site.config";
import { cn } from "@/utils/ui";
import Image from "next/image";
// import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import { MobileSheetButton } from "./mobile-sheet-button";
import { NavItem } from "./nav-item";
import { routes } from "./routes";
import { navbarContainerClassNames } from "./styles";
import { ThemeButton } from "./theme-button";
import { TestButton } from "./test";
import { Separator } from "../ui/separator";
import { Link } from "@/utils/i18n";
// import Local as Link from '@/utils/i18n'

type Props = ComponentPropsWithoutRef<"nav"> & {
  locale?: "en" | "ar";
};

export function Navbar({ className, locale = "en", ...props }: Props) {
  return (
    <nav
      className={cn(
        "container flex items-center gap-x-2 py-4 text-sm",
        "pointer-events-none [&>*]:pointer-events-auto",
        className
      )}
      {...props}
    >
      <Link
        href="/"
        className={cn(
          "group overflow-hidden ",
          "h-9 w-9 rounded-full border border-neutral-500/25 shadow-md",
          "hover:bg-primary-500/50 bg-neutral-500/25 transition"
        )}
        aria-label="Go to home"
        locale={locale}
      >
        <Image
          src={imageAvatar}
          alt={defaultMetadata.title}
          className="pointer-events-none"
        />
      </Link>
      <span className="max-sm:hidden">
        <ul className={navbarContainerClassNames}>
          {routes[locale].map((route, i) => (
            <li key={i} className="max-sm:hidden">
              <NavItem {...route} />
            </li>
          ))}
          {/* <li className="sm:hidden">
            <MobileSheetButton />
          </li> */}
          <li key="lang">
            <Link href="/"></Link>
          </li>
        </ul>
      </span>
      <div className={cn(navbarContainerClassNames, "px-2")}>
        <ThemeButton />
        <Separator
          className="w-1 h-full bg-[#171717] dark:bg-neutral-300 sm:hidden"
          orientation="vertical"
        />
        <TestButton locale={locale} className="sm:hidden" />
      </div>
    </nav>
  );
}
