import { ContainerSection } from "@/components/container-section";
import { getBasicRenderers } from "@/components/keystatic/basic-renderers";
import { getReader } from "@/server/keystatic";
import { DocumentRenderer } from "@keystatic/core/renderer";
import { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { defaultMetadata } from "@/site.config";

export const metadata: Metadata = {
  title: "من أنا؟",
  description: "تعرف على تاج الأصفياء إسحاق محمود - مطور ويب وطالب هندسة كهربائية بجامعة السودان للعلوم والتكنولوجيا (SUST). تخصص تطوير واجهات الويب والحلول البرمجية.",
  alternates: {
    canonical: `${defaultMetadata.url}/about`,
  },
  openGraph: {
    title: `من أنا؟ | ${defaultMetadata.nameAr}`,
    description: "تعرف على تاج الأصفياء إسحاق محمود - مطور ويب وطالب هندسة كهربائية بجامعة السودان للعلوم والتكنولوجيا (SUST).",
    url: `${defaultMetadata.url}/about`,
    type: "profile",
    locale: "ar_SD",
  },
};

export default async function Page() {
  const data = await getReader().singletons.about.readOrThrow();
  const document = await data.content();
  const renderers = getBasicRenderers();
  
  return (
    <ContainerSection enableNavShadow>
      <BreadcrumbJsonLd
        items={[
          { name: "الرئيسية", url: defaultMetadata.url },
          { name: "من أنا؟", url: `${defaultMetadata.url}/about` },
        ]}
      />
      <article className="prose-primary prose pb-20 dark:prose-invert [&_a:hover]:underline [&_a]:no-underline">
        <DocumentRenderer document={document} renderers={renderers} />
      </article>
    </ContainerSection>
  );
}

