import "@fontsource-variable/figtree/index.css";
import { cookies, draftMode } from "next/headers";

import { defaultMetadata } from "@/site.config";
import { cn } from "@/utils/ui";
import { GeistMono } from "geist/font/mono";
import { Metadata, Viewport } from "next";
import { ReactNode } from "react";
import { PersonJsonLd, WebSiteJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  metadataBase: new URL(defaultMetadata.url),
  title: {
    template: `%s ⋅ ${defaultMetadata.title}`,
    absolute: `${defaultMetadata.nameAr} | ${defaultMetadata.nameEn} | ${defaultMetadata.title}`,
  },
  description: defaultMetadata.description,
  keywords: [
    "تاج الأصفياء",
    "تاج الأصفياء إسحاق",
    "تاج الاصفياء",
    "Taj Alasfiyaa",
    "Taj Alasfiyaa Ishag",
    "TajAlasfiyaa",
    "مطور ويب",
    "هندسة كهربائية",
    "جامعة السودان",
    "ذكاء اصطناعي",
    "برمجة",
    "تقنية",
    "web developer",
    "Sudan University",
    "AI",
  ],
  openGraph: {
    title: `${defaultMetadata.nameAr} (${defaultMetadata.nameEn})`,
    description: defaultMetadata.description,
    type: "website",
    siteName: defaultMetadata.title,
    images: [`${defaultMetadata.url}/social.png`],
    url: defaultMetadata.url,
    locale: "ar_SD",
  },
  twitter: {
    card: "summary_large_image",
    creator: defaultMetadata.x.creator,
    creatorId: defaultMetadata.x.creatorId,
    site: defaultMetadata.x.creator,
    title: `${defaultMetadata.nameAr} (${defaultMetadata.nameEn})`,
    description: defaultMetadata.description,
  },
  robots: {
    follow: true,
    index: true,
  },
  alternates: {
    canonical: "./",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#171717" },
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  const { isEnabled } = draftMode();

  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "overflow-y-scroll font-sans antialiased",
          "relative flex min-h-screen flex-col items-stretch",
          "bg-neutral-50 dark:bg-neutral-900",
          "text-neutral-900 dark:text-neutral-50",
          GeistMono.variable
        )}
      >
        <PersonJsonLd />
        <WebSiteJsonLd />
        {children}
        {isEnabled && (
          <div>
            Draft mode ({cookies().get("ks-branch")?.value}){" "}
            <form method="POST" action="/preview/end">
              <button>End preview</button>
            </form>
          </div>
        )}
      </body>
    </html>
  );
}

