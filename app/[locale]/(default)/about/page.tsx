import { ContainerSection } from "@/components/container-section";
import { getBasicRenderers } from "@/components/keystatic/basic-renderers";
import { Polaroid } from "@/components/polariod";
import { getReader } from "@/server/keystatic";
import { Link } from "@/utils/i18n";
import { DocumentRenderer } from "@keystatic/core/renderer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Myself",
};

export default async function Page() {
  const data = await getReader().singletons.about.readOrThrow();
  const document = await data.content();
  const renderers = getBasicRenderers();
  return (
    <ContainerSection className="min-h-[80vh]" enableNavShadow>
      {/* <Polaroid className="mb-16 lg:float-right lg:mb-8 lg:ml-8 " /> */}
      <Link href="/about" locale="en">
        testing
      </Link>
      <Link href="/about" locale="ar">
        تجربة
      </Link>
      <article className="prose-primary prose pb-20 dark:prose-invert [&_a:hover]:underline [&_a]:no-underline">
        <DocumentRenderer document={document} renderers={renderers} />
      </article>
    </ContainerSection>
  );
}
