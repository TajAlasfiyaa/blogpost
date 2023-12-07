import { DocumentRenderer } from "@keystatic/core/renderer";
import { getArticle, getReader, getSortedArticles } from "@/server/keystatic";
import { ContainerSection } from "@/components/container-section";
import { notFound } from "next/navigation";

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
