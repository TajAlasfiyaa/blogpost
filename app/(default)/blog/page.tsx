import Link from "next/link";
import { reader } from "../reader";
import Image from "next/image";

export default async function Homepage() {
  const posts = await reader.collections.posts.all();

  return (
    <>
      <div className="m-auto max-w-3xl prose prose-xl dark:prose-invert ">
        <h2>Posts</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              {post.entry.image && (
                <Image
                  width={300}
                  height={300}
                  src={post.entry.image}
                  alt="tah"
                />
              )}
              <Link href={`/blog/${post.slug}`}>
                <h2>{post.entry.title}</h2>
                <p>{post.entry.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
