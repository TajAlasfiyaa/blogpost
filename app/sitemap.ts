import { getArticlesFeed } from "@/server/feed";
import { getReader } from "@/server/keystatic";
import { defaultMetadata } from "@/site.config";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getReader().collections.articles.all();
  const site = articles.map(({ slug, entry }) => {
    return {
      url: `${defaultMetadata.url}/${slug}`,
      lastModified: entry.publishedAt,
    };
  });
  return [
    ...site,
    {
      url: "https://acme.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://acme.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://acme.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];
}
