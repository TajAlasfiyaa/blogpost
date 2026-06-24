import { defaultMetadata } from "@/site.config";

const url = defaultMetadata.url;

/* ------------------------------------------------------------------ */
/*  PersonJsonLd                                                      */
/* ------------------------------------------------------------------ */

export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${url}/#person`,
    name: "تاج الأصفياء إسحاق",
    givenName: "تاج الأصفياء",
    familyName: "إسحاق",
    alternateName: [
      "Taj Alasfiyaa Ishag",
      "تاج الاصفياء",
      "TajAlasfiyaa",
      "تاج الأصفياء إسحاق محمود",
      "Taj Alasfiyaa Ishag Mahmoud",
      "تاج الأصفياء",
    ],
    url,
    email: "tajalasfiyaa@gmail.com",
    image: `${url}/social.png`,
    jobTitle: "مطوّر ويب",
    description:
      "تاج الأصفياء إسحاق — مطوّر ويب وطالب هندسة كهربائية بجامعة السودان للعلوم والتكنولوجيا. مهتم بالبرمجة والذكاء الاصطناعي وتطوير تطبيقات الويب الحديثة. لديه خبرة في Next.js وReact وTypeScript وPython.",
    knowsAbout: [
      "Web Development",
      "Artificial Intelligence",
      "Next.js",
      "React",
      "TypeScript",
      "Python",
      "JavaScript",
      "تطوير الويب",
      "الذكاء الاصطناعي",
      "هندسة كهربائية",
      "Electrical Engineering",
      "Frontend Development",
      "UI/UX Design",
    ],
    knowsLanguage: ["ar", "en"],
    nationality: { "@type": "Country", name: "السودان" },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "جامعة السودان للعلوم والتكنولوجيا",
      alternateName: "Sudan University of Science and Technology",
      url: "https://www.sustech.edu",
    },
    sameAs: [
      "https://github.com/tajalasfiya",
      "https://linkedin.com/in/TajAlasfiyaa",
      "https://x.com/tajalasiyaa",
      "https://facebook.com/TajAlasfiyaa",
      "https://mastodon.social/@TajAlasfiyaa",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  WebSiteJsonLd                                                     */
/* ------------------------------------------------------------------ */

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}/#website`,
    name: "تاج الأصفياء",
    alternateName: "Taj Alasfiyaa",
    url,
    description:
      "الموقع الشخصي لتاج الأصفياء إسحاق — مطوّر ويب وطالب هندسة كهربائية. مقالات تقنية ومشاريع برمجية.",
    inLanguage: ["ar", "en"],
    author: { "@id": `${url}/#person` },
    publisher: { "@id": `${url}/#person` },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  ArticleJsonLd                                                     */
/* ------------------------------------------------------------------ */

interface ArticleJsonLdProps {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  updatedAt?: string | null;
  cover?: string | null;
}

export function ArticleJsonLd({
  title,
  description,
  slug,
  publishedAt,
  updatedAt,
  cover,
}: ArticleJsonLdProps) {
  const articleUrl = `${url}/articles/${slug}`;

  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: articleUrl,
    image: cover || `${url}/social.png`,
    datePublished: publishedAt,
    dateModified: updatedAt || publishedAt,
    author: { "@id": `${url}/#person` },
    publisher: { "@id": `${url}/#person` },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  BreadcrumbJsonLd                                                  */
/* ------------------------------------------------------------------ */

interface BreadcrumbJsonLdProps {
  items: Array<{ name: string; url: string }>;
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
