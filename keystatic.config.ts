import { config, collection, fields } from "@keystatic/core";
import { defaultMetadata } from "./site.config";
import { homeSchema } from "@/schema/home";
import { articleSchema } from "@/schema/articles";
import { aboutSchema } from "@/schema/about";
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
    articles: articleSchema,
  },
  singletons: {
    home: homeSchema,
    about: aboutSchema,
  },
});
