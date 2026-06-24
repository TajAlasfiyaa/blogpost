import { NextRequest } from "next/server";

export const revalidate = 0;

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const path = searchParams.get("path") || "/";

  // Re-construct the target URL for the internal fetch
  const targetUrl = new URL(path, origin);
  searchParams.forEach((value, key) => {
    if (key !== "path") {
      targetUrl.searchParams.set(key, value);
    }
  });

  try {
    // Fetch the standard HTML page from the local server
    const response = await fetch(targetUrl.toString(), {
      headers: {
        Accept: "text/html",
        "User-Agent": request.headers.get("user-agent") || "",
        Cookie: request.headers.get("cookie") || "",
      },
    });

    if (!response.ok) {
      return new Response(`Error fetching page: ${response.statusText}`, {
        status: response.status,
      });
    }

    const html = await response.text();
    const markdown = htmlToMarkdown(html);
    const tokenCount = Math.ceil(markdown.length / 4);

    return new Response(markdown, {
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        "x-markdown-tokens": String(tokenCount),
      },
    });
  } catch (error: any) {
    return new Response(`Internal server error: ${error.message || error}`, {
      status: 500,
    });
  }
}

function htmlToMarkdown(html: string): string {
  // Extract main content
  let content = html;
  const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (mainMatch && mainMatch[1]) {
    content = mainMatch[1];
  } else {
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch && bodyMatch[1]) {
      content = bodyMatch[1];
    }
  }

  // Strip script, style, svg, nav, footer, header
  content = content.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "");
  content = content.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "");
  content = content.replace(/<svg[^>]*>[\s\S]*?<\/svg>/gi, "");
  content = content.replace(/<nav[^>]*>[\s\S]*?<\/nav>/gi, "");
  content = content.replace(/<header[^>]*>[\s\S]*?<\/header>/gi, "");
  content = content.replace(/<footer[^>]*>[\s\S]*?<\/footer>/gi, "");

  // Convert pre/code blocks
  content = content.replace(/<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/gi, "\n```\n$1\n```\n");
  content = content.replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, "`$1`");

  // Convert headings
  content = content.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, "\n# $1\n\n");
  content = content.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, "\n## $1\n\n");
  content = content.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, "\n### $1\n\n");
  content = content.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, "\n#### $1\n\n");
  content = content.replace(/<h5[^>]*>([\s\S]*?)<\/h5>/gi, "\n##### $1\n\n");
  content = content.replace(/<h6[^>]*>([\s\S]*?)<\/h6>/gi, "\n###### $1\n\n");

  // Convert list items
  content = content.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, "- $1\n");

  // Convert blockquotes
  content = content.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, "\n> $1\n\n");

  // Convert emphasis and bold
  content = content.replace(/<(strong|b)[^>]*>([\s\S]*?)<\/\1>/gi, "**$2**");
  content = content.replace(/<(em|i)[^>]*>([\s\S]*?)<\/\1>/gi, "*$2*");

  // Convert links
  content = content.replace(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, "[$2]($1)");
  content = content.replace(/<a[^>]*href='([^']*)'[^>]*>([\s\S]*?)<\/a>/gi, "[$2]($1)");

  // Convert line breaks and paragraphs
  content = content.replace(/<br\s*\/?>/gi, "\n");
  content = content.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, "\n$1\n\n");

  // Strip all other HTML tags
  content = content.replace(/<[^>]+>/g, " ");

  // Decode HTML entities
  content = content
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&nbsp;/gi, " ");

  // Clean up spacing and newlines
  content = content.replace(/[ \t]+/g, " ");
  content = content.replace(/\n\s*\n\s*\n+/g, "\n\n");
  return content.trim();
}
