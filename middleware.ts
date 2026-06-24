import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const acceptHeader = request.headers.get("accept") || "";

  if (acceptHeader.includes("text/markdown")) {
    const url = request.nextUrl.clone();

    // Prevent infinite loop if already rewritten
    if (!url.pathname.startsWith("/api/markdown-negotiator")) {
      url.pathname = "/api/markdown-negotiator";
      url.searchParams.set("path", request.nextUrl.pathname);
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public assets
     */
    "/((?!api|_next/static|_next/image|favicon.ico|assets|site\\.webmanifest).*)",
  ],
};
