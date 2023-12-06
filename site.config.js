const domain =
  process.env.APP_URL?.replace(/https?:\/\//, "").split("/")[0] ||
  process.env.NEXT_PUBLIC_VERCEL_URL ||
  `${process.env.HOST || "localhost"}:${process.env.PORT || 3000}`;

/* #__PURE__ */
const protocol =
  domain.includes("localhost") ||
  domain.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/)
    ? "http"
    : "https";

/* #__PURE__ */
const url = `${protocol}://${domain}`;

/* #__PURE__ */
const defaultMetadata = {
  title: "Griko Nibras",
  description: "Software engineer specialized in frontend development",
  email: "griko@nibras.co",
  domain,
  url,
  bluesky: {
    actor: "did:plc:rue26duvigfk3zi5sselzwjc",
    handle: "griko.bsky.social",
  },
  github: {
    username: "grikomsn",
    repository: "improved-happiness",
  },
  x: {
    creator: "@___0xdeadbeef",
    creatorId: "1702059533714309121",
  },
};
exports.defaultMetadata = defaultMetadata;
