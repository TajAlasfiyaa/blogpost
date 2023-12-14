import Link from "next/link";
import { getReader, getSortedArticles } from "@/server/keystatic";
import Image from "next/image";
import { ContainerSection } from "@/components/container-section";
import { cn } from "@/utils/ui";
import { ArrowRightIcon, CalendarIcon, ExternalLinkIcon } from "lucide-react";
import { formatLongDate } from "@/utils/intl";
import { AdaptiveLink } from "@/components/adaptive-link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles",
  description: "Writing on software development and random personal tidbits.",
};

export default async function Homepage() {
  // const posts = await getReader().collections.articles.all();
  const articles = await getSortedArticles();
  return (
    <ContainerSection className="relative space-y-4" enableNavShadow>
      <div>
        <h1 className="max-w-screen-sm text-4xl font-bold">Psosts</h1>
        <p className="max-w-screen-sm space-y-4 text-neutral-700 dark:text-neutral-300">
          All of my long-form thoughts on programming and probably about life,
          collected in chronological order.
        </p>
        <br />
        <br />
        <ul>
          {articles.map(({ slug, entry }) => {
            const Icon = entry.redirect.value
              ? ExternalLinkIcon
              : ArrowRightIcon;
            return (
              <li
                key={slug}
                className={cn(
                  "group relative flex flex-col",
                  "before:absolute before:-z-10 before:transition-[opacity,inset]",
                  "before:rounded-lg before:bg-neutral-500/5 dark:before:bg-neutral-500/10",
                  "before:opacity-0 hover:before:opacity-100",
                  "before:-inset-1 hover:before:-inset-4"
                )}
              >
                <div className="mb-2 text-xl font-bold">{entry.title}</div>
                <div className="mb-2 text-sm text-neutral-700 dark:text-neutral-300">
                  {entry.description}
                </div>
                <div className="mt-4 flex items-center gap-x-2 text-sm text-neutral-700 dark:text-neutral-300">
                  <CalendarIcon className="h-3 w-3" />
                  <time dateTime={entry.publishedAt}>
                    {formatLongDate(entry.publishedAt)}
                  </time>
                  <div className="flex-grow" />
                  <AdaptiveLink
                    href={entry.redirect.value?.url || `/articles/${slug}`}
                    className={cn(
                      "flex items-center gap-x-2 hover:underline",
                      "text-primary-600 dark:text-primary-500",
                      "before:absolute before:-inset-4"
                    )}
                  >
                    <div>
                      {entry.redirect.value
                        ? `Read on ${
                            new URL(entry.redirect.value.url).hostname
                          }`
                        : "Read article"}
                    </div>
                    <Icon className="h-3 w-3" aria-hidden="true" />
                  </AdaptiveLink>
                </div>
                <Link href={`/articles/${slug}`}></Link>
              </li>
            );
          })}
        </ul>
      </div>
    </ContainerSection>
  );
}
