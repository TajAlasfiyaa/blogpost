import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "ar"],

  // Used when no locale matches
  defaultLocale: "en",
  localePrefix: "never",
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    "/",
    "/articles",
    "/articles/:path*",
    "/links",
    "/projects",
    "/about",
    "/test",
    "/test/:path*",

    "/(ar|en)/:path*",
  ],
};
