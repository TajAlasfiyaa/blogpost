import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import {
  AvailableLanguageTag,
  availableLanguageTags,
  sourceLanguageTag,
} from "@/src/paraglide/runtime";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest) {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  let languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  const preferredLocale = match(
    languages,
    availableLanguageTags,
    sourceLanguageTag
  );
  return preferredLocale;
}
export function middleware(request: NextRequest) {
  const locale = getLocale(request);
  console.log("local3", locale);
  const cookie = request.cookies.get("language")?.value;
  const headers = new Headers(request.headers);
  const response = NextResponse.next();
  if (cookie) {
    response.headers.set("x-language-tag", cookie);
    return response;
  }
  response.headers.set("x-language-tag", locale);
  response.cookies.set("language", locale);
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
