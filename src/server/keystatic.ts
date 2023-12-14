import "server-only";

import keystaticConfig from "@/keystatic.config";
import { createGitHubReader } from "@keystatic/core/reader/github";
import { createReader } from "@keystatic/core/reader";
import { cache } from "react";
import { cookies, draftMode } from "next/headers";

export const getReader = cache(() => {
  let isDraftModeEnabled = false;
  // draftMode throws in e.g. generateStaticParams
  try {
    isDraftModeEnabled = draftMode().isEnabled;
  } catch {}

  if (isDraftModeEnabled) {
    const branch = cookies().get("ks-branch")?.value;

    if (branch) {
      return createGitHubReader(keystaticConfig, {
        // Replace the below with your repo org an name
        repo: "tajalasfiyaa/blogpost",
        ref: branch,
        // Assuming an existing GitHub app
        token: cookies().get("keystatic-gh-access-token")?.value,
      });
    }
  }
  // If draft mode is off, use the regular reader
  return createReader(process.cwd(), keystaticConfig);
});
export const getHomeSingleton = cache(getReader().singletons.home.readOrThrow);
export const getArticle = cache(getReader().collections.articles.readOrThrow);
export const getSortedArticles = cache(async () => {
  const reader = getReader();
  const articles = await reader.collections.articles.all();
  // https://github.com/Thinkmill/keystatic/discussions/406
  const sortedArticles = articles.sort((a, b) => {
    const aDate = new Date(a.entry.publishedAt);
    const bDate = new Date(b.entry.publishedAt);
    if (aDate < bDate) return 1;
    if (aDate > bDate) return -1;
    return 0;
  });
  return sortedArticles;
});
