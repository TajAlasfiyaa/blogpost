"use client";
import { TooltipProvider } from "@/components/ui/tooltip";

import "@/styles/styles.css";

import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/utils/ui";
import { Navbar } from "@/components/navbar";
import { notFound } from "next/navigation";

const locales = ["en", "ar"];
export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: "ar" | "en" };
}) {
  if (!locales.includes(locale as any)) notFound();
  const direction = locale === "ar" ? "rtl" : "ltr";
  return (
    <div className="min-h-screen" dir={direction}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <TooltipProvider>
          <main
            className={cn(
              "relative flex-grow overflow-x-hidden ",
              "before:fixed before:left-0 before:top-0 before:z-[-1] before:h-full before:w-full",
              "before:transition-[background-position] before:duration-1000 before:ease-out",
              "motion-safe:before:[background-position:_var(--beams-x,-839px)_var(--beams-y,-520px)]",
              "motion-safe:before:animate-beams"
            )}
          >
            {children}
          </main>
          <Navbar locale={locale} className="sticky bottom-0 left-0 z-50" />
        </TooltipProvider>
      </ThemeProvider>
    </div>
  );
}
const cnn = [
  "before:bg-[url(/beams.png)] before:bg-[-839px_-520px] before:bg-no-repeat",
];
