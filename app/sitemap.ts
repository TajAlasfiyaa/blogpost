import { getReader } from "@/server/keystatic";
import { defaultMetadata } from "@/site.config";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Get all articles
  const articles = await getReader().collections.articles.all();
  const articleEntries = articles.map(({ slug, entry }) => ({
    url: `${defaultMetadata.url}/articles/${slug}`,
    lastModified: entry.publishedAt ? new Date(entry.publishedAt) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // 2. Static pages with custom parameters
  const staticEntries = [
    {
      url: defaultMetadata.url,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${defaultMetadata.url}/articles`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${defaultMetadata.url}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${defaultMetadata.url}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${defaultMetadata.url}/links`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ];

  return [...staticEntries, ...articleEntries];
}

