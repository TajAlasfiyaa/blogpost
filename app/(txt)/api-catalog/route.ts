import { defaultMetadata } from "@/site.config";

export async function GET() {
  const catalog = {
    linkset: [
      {
        anchor: `${defaultMetadata.url}/`,
        profile: "https://www.rfc-editor.org/rfc/rfc9727",
        item: [
          {
            href: `${defaultMetadata.url}/feed.json`,
            type: "application/feed+json",
            title: "JSON Feed",
          },
          {
            href: `${defaultMetadata.url}/feed.xml`,
            type: "application/rss+xml",
            title: "RSS Feed",
          },
          {
            href: `${defaultMetadata.url}/atom.xml`,
            type: "application/atom+xml",
            title: "Atom Feed",
          },
        ],
      },
    ],
  };

  return new Response(JSON.stringify(catalog, null, 2), {
    headers: {
      "cache-control": "public, max-age=86400, immutable",
      "content-type": "application/linkset+json",
    },
  });
}
