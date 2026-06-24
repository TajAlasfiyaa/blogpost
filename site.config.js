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
  title: "TajAlasfiyaa",
  nameAr: "تاج الأصفياء إسحاق",
  nameEn: "Taj Alasfiyaa Ishag",
  description: "تاج الأصفياء إسحاق — مطوّر ويب وطالب هندسة كهربائية بجامعة السودان للعلوم والتكنولوجيا. مدونة تقنية تشمل مقالات عن البرمجة والذكاء الاصطناعي.",
  email: "tajalasfiyaa@gmail.com",
  domain,
  url,
  //   bluesky: {
  //     actor: "did:plc:rue26duvigfk3zi5sselzwjc",
  //     handle: "TajAlasfiyaa.bsky.social",
  //   },
  github: {
    username: "tajalasfiya",
    repository: "blogpost",
  },
  x: {
    creator: "@tajalasiyaa",
    creatorId: "888298632683933696",
  },
};
const customMetadata = {
  blueskyUrl: `https://bsky.app/profile/TajAlasfiyaa.bsky.social`,
  cohostUrl: "https://cohost.org/TajAlasfiyaa",
  emailUrl: `mailto:${defaultMetadata.email}`,
  githubUrl: `https://github.com/${defaultMetadata.github.username}`,
  linkedInUrl: "https://linkedin.com/in/TajAlasfiyaa",
  keybaseUrl: "https://keybase.io/TajAlasfiyaa",
  mastodonUrl: "https://mastodon.social/@TajAlasfiyaa",
  matrixUrl: "https://matrix.to/#/@TajAlasfiyaa:matrix.org",
  scheduleUrl: `https://cal.com/tajalasfiyaa/helloworld`,
  xUrl: `https://x.com/${defaultMetadata.x.creator}`,
  facebookUrl: "https://facebook.com/TajAlasfiyaa",
};

exports.defaultMetadata = defaultMetadata;
exports.customMetadata = customMetadata;
