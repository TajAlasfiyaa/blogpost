import Head from "next/head";
import "@fontsource-variable/figtree/index.css";
import { cookies, draftMode } from "next/headers";

import { defaultMetadata, defaultMetadataLocale } from "@/site.config";
import { cn } from "@/utils/ui";
import { GeistMono } from "geist/font/mono";
import { Metadata, Viewport } from "next";
import { ReactNode } from "react";

export async function generateMetadata({
  params: { locale = "en" },
}: {
  params: { locale: "ar" | "en" };
}) {
  console.log("test", locale);
  return {
    title: {
      template: `%s ⋅ ${defaultMetadataLocale.title[locale]}`,
      absolute: defaultMetadataLocale.title[locale],
    },
    metadataBase: new URL(defaultMetadata.url),

    description: defaultMetadataLocale.description[locale],
    openGraph: {
      title: defaultMetadataLocale.title[locale],
      description: defaultMetadataLocale.description[locale],
      type: "website",
      siteName: defaultMetadataLocale.title[locale],
      images: [`${defaultMetadata.url}/social.png`],
      url: defaultMetadata.url,
      locale: locale,
    },
    twitter: {
      card: "summary_large_image",
      creator: defaultMetadata.x.creator,
      creatorId: defaultMetadata.x.creatorId,
      site: defaultMetadata.x.creator,
    },
    robots: {
      follow: true,
      index: true,
    },
  };
}
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#171717" },
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
  ],
};

export default function Layout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const { isEnabled } = draftMode();
  return (
    <html lang={locale} suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "overflow-y-scroll font-sans antialiased min-h-screen",
          "relative flex min-h-screen flex-col items-stretch",
          "bg-neutral-50 dark:bg-neutral-900",
          "text-neutral-900 dark:text-neutral-50",
          GeistMono.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
