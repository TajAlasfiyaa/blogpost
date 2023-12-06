import { config, collection, fields } from "@keystatic/core";
import { defaultMetadata } from "./site.config";
const isVercelProd = process.env.NEXT_PUBLIC_VERCEL_ENV === "production";
export default config({
  storage: isVercelProd
    ? {
        kind: "github",
        repo: {
          owner:
            process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER ||
            defaultMetadata.github.username,
          name:
            process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG ||
            defaultMetadata.github.repository,
        },
      }
    : {
        kind: "local",
      },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "content/posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        description: fields.text({ label: "Description", multiline: true }),
        image: fields.image({
          label: "Cover",
          description: "The avatar for this user",
          // This will output the images in the "public" directory
          directory: "public/assets",
          publicPath: "/assets/posts/",
        }),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: "public/assets/posts",
            publicPath: "/assets/posts/",
          },
        }),
      },
    }),
  },
});
