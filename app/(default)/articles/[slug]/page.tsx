import { DocumentRenderer } from "@keystatic/core/renderer";
import { getArticle, getReader, getSortedArticles } from "@/server/keystatic";
import { ContainerSection } from "@/components/container-section";
import { notFound, redirect } from "next/navigation";
import { Metadata } from "next";
import { getArticleLayoutSearchString } from "@/components/satori/types";
import "@/styles/ar.css";
import { defaultMetadata } from "@/site.config";
import { getArticleRenderers } from "@/components/keystatic/article-renderers";
import { ProseArticle } from "@/components/prose-article";
import { CalendarIcon } from "lucide-react";
import { formatLongDate } from "@/utils/intl";
import { cn } from "@/utils/ui";
import { TopScroller } from "@/components/top-scroller";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams(): Promise<Props["params"][]> {
  const articles = await getSortedArticles();
  return articles.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticle(params.slug).catch(() => notFound());
  if (article.redirect.discriminant) redirect(article.redirect.value.url);
  const search = getArticleLayoutSearchString(
    {
      title: article.title,
      description: article.description,
      imgSrc: article.cover || undefined,
      path: `/articles/${params.slug}`,
    },
    { encoded: true }
  );
  return {
    title: article.title,
    description: article.description,
    twitter: {
      card: "summary_large_image",
      creator: defaultMetadata.x.creator,
      title: article.title,
      creatorId: defaultMetadata.x.creatorId,
      site: defaultMetadata.x.creator,
      description: article.description,
      images: [`${defaultMetadata.url}/api/opengraph/article?${search}`],
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `${defaultMetadata.url}/articles/${params.slug}`,
      images: [`${defaultMetadata.url}/api/opengraph/article?${search}`],
    },
    authors: [
      {
        name: defaultMetadata.title,
        url: defaultMetadata.url,
      },
    ],
  };
}
export default async function Page({ params }: { params: { slug: string } }) {
  // const article = await getArticle(params.slug).catch(() => notFound());]
  const article = await getReader().collections.articles.readOrThrow(
    params.slug
  );
  const document = await article.content();
  const renderers = getArticleRenderers();

  return (
    <ContainerSection className="relative space-y-4" enableNavShadow>
      <div className="m-auto  prose prose-xl dark:prose-invert ">
        {article.cover && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={article.cover}
            alt="article cover image"
            className="mb-8 aspect-video w-full max-w-screen-sm rounded bg-neutral-500 object-cover"
          />
        )}
        <h1 className="max-w-screen-sm text-4xl font-bold">{article.title}</h1>
        <p className="max-w-screen-sm space-y-4 text-neutral-700 dark:text-neutral-300">
          {article.description}
        </p>
        <div className="flex items-center gap-x-2 text-sm text-neutral-700 dark:text-neutral-300">
          <CalendarIcon className="h-3 w-3" aria-hidden="true" />
          <span>Publish at</span>
          <time dateTime={article.publishedAt}>
            {formatLongDate(article.publishedAt)}
          </time>
          {article.updatedAt && (
            <time dateTime={article.updatedAt}>
              {formatLongDate(article.updatedAt)}
            </time>
          )}
          <div className="flex-grow" />
        </div>
        <br />
        <br />
        <ProseArticle>
          <DocumentRenderer document={document} renderers={renderers} />
        </ProseArticle>
        <div
          className={cn(
            "container pointer-events-none fixed inset-x-0 bottom-4 z-10",
            "flex justify-end"
            //
          )}
        >
          <TopScroller />
        </div>
      </div>
    </ContainerSection>
  );
}
