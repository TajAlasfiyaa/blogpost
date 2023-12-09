import { getArticlesFeed } from "@/server/feed";
import { getReader } from "@/server/keystatic";
import { defaultMetadata } from "@/site.config";
import { MetadataRoute } from "next";
const routes = ["articles", "about", "projects", "links"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getReader().collections.articles.all();
  const site = articles.map(({ slug, entry }) => {
    return {
      url: `${defaultMetadata.url}/articles/${slug}`,
      lastModified: entry.publishedAt,
    };
  });
  const links = routes.map((slug: string) => {
    return {
      url: `${defaultMetadata.url}/${slug}`,
    };
  });
  return [...site, ...links];
}
