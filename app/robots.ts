import { defaultMetadata } from "@/site.config";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: defaultMetadata.url + "/sitemap.xml",
  };
}
