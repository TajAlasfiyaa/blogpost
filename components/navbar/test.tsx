"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/utils/ui";
import { DropdownMenuItemIndicator } from "@radix-ui/react-dropdown-menu";
import { Link, MoonIcon, SunIcon } from "lucide-react";
import { ComponentPropsWithoutRef, useEffect, useState } from "react";
import { navbarItemClassNames } from "./styles";
import { usePathname } from "next/navigation";
import { AdaptiveLink } from "../adaptive-link";
import { routes } from "./routes";

type Props = ComponentPropsWithoutRef<"button">;
const test = ["About", "Artcles", "Projects"];
export function TestButton({ className, ...props }: Props) {
  const [nav, setNav] = useState("About");
  const [state, setState] = useState(() => false);
  const close = () => setState(false);

  const pathname = usePathname();
  useEffect(() => {
    pathname == "/" ? setNav("Menu") : setNav(pathname);
  }, [pathname]);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(navbarItemClassNames, className)}
          aria-label="Menu"
          {...props}
        >
          Menu
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={8}>
        <DropdownMenuRadioGroup value={nav}>
          {routes.map((route, i) => (
            <DropdownMenuRadioItem key={i} value={route.children}>
              <AdaptiveLink
                {...route}
                className={cn(route.href == pathname ? "text-primary-600" : "")}
              />
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
