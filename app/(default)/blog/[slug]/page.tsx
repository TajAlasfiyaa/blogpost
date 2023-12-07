import { DocumentRenderer } from "@keystatic/core/renderer";
import { getReader } from "../../../../server/keystatic";

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const post = await getReader().collections.posts.read(slug);

  if (!post) return <div>Post not found!</div>;

  return (
    <div className="m-auto  prose prose-xl dark:prose-invert ">
      <h1>{post.title}</h1>
      <div>
        <DocumentRenderer document={await post.content()} />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const slugs = await getReader().collections.posts.list();

  return slugs.map((slug) => ({
    slug,
  }));
}
