import { defaultMetadata } from "@/site.config";
import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: defaultMetadata.title,
    short_name: defaultMetadata.title,
    description: defaultMetadata.description,
    start_url: "/",
    display: "standalone",
    background_color: "#fafafa",
    theme_color: "rgb(2, 132, 199)",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      //   {
      //     src: "/apple-icon",
      //     sizes: "any",
      //     type: "image/png",
      //   },
    ],
  };
}
