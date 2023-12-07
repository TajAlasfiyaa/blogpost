import Head from "next/head";
import "@fontsource-variable/figtree/index.css";

import { defaultMetadata } from "@/site.config";
import { cn } from "@/utils/ui";
import { GeistMono } from "geist/font/mono";
import { Metadata, Viewport } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  metadataBase: new URL(defaultMetadata.url),
  title: {
    template: `%s ⋅ ${defaultMetadata.title}`,
    absolute: defaultMetadata.title,
  },
  description: defaultMetadata.description,
  openGraph: {
    title: defaultMetadata.title,
    description: defaultMetadata.description,
    type: "website",
    siteName: defaultMetadata.title,
    images: [
      {
        url: `${defaultMetadata.url}/social.png`,

        type: "image/png",
      },
    ],
    url: defaultMetadata.url,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    creator: defaultMetadata.x.creator,
    title: defaultMetadata.title,
    // creatorId: defaultMetadata.x.creatorId,
    site: defaultMetadata.x.creator,
    description: defaultMetadata.description,
    images: [`${defaultMetadata.url}/social.png`],
  },
  robots: {
    follow: true,
    index: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#171717" },
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
  ],
};
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
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
        {children}
      </body>
    </html>
  );
}
