import { DocumentRenderer } from "@keystatic/core/renderer";
import { getArticle, getSortedArticles } from "@/server/keystatic";
import { ContainerSection } from "@/components/container-section";
import { notFound, redirect } from "next/navigation";
import { Metadata } from "next";
import { getArticleLayoutSearchString } from "@/components/satori/types";
import { defaultMetadata } from "@/site.config";

export default async function Page({ params }: { params: { slug: string } }) {
  const article = await getArticle(params.slug).catch(() => notFound());
  const document = await article.content();

  return (
    <ContainerSection className="relative space-y-4" enableNavShadow>
      <div className="m-auto  prose prose-xl dark:prose-invert ">
        <h1>{article.title}</h1>
        <div>
          <DocumentRenderer document={document} />
        </div>
      </div>
    </ContainerSection>
  );
}

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
      // creatorId: defaultMetadata.x.creatorId,
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
