import { defaultMetadata } from "@/site.config";

export async function GET() {
  const content = `
User-agent: *
Allow: /
Disallow: /api/
Disallow: /keystatic/
Content-Signal: ai-train=no, search=yes, ai-input=no

Sitemap: ${defaultMetadata.url}/sitemap.xml
`.trim();

  return new Response(content, {
    headers: {
      "cache-control": "public, max-age=86400, immutable",
      "content-type": "text/plain; charset=utf-8",
    },
  });
}
