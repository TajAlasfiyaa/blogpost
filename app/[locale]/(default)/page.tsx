import { AdaptiveLink } from "@/components/adaptive-link";
import { ContainerSection } from "@/components/container-section";
import { getBasicRenderers } from "@/components/keystatic/basic-renderers";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { links } from "@/constants/links";
import { getHomeSingleton } from "@/server/keystatic";
import { defaultMetadataLocale } from "@/site.config";
import { cn } from "@/utils/ui";
import { DocumentRenderer } from "@keystatic/core/renderer";

const query = await getHomeSingleton();
const arabic = await query.contentArabic();
const english = await query.content();

export default async function Homepage({
  params: { locale },
}: {
  params: { locale: "en" | "ar" };
}) {
  console.log("defalut page", locale);
  const renderer = getBasicRenderers();
  return (
    <ContainerSection className="relative flex flex-col items-start min-h-[80vh]">
      <h1 className="mb-2 text-4xl font-bold">
        {defaultMetadataLocale.title[locale]}
      </h1>
      <p className="mb-8 text-2xl">
        {defaultMetadataLocale.description[locale]}
      </p>
      <div
        className={cn(
          "mb-16 max-w-screen-sm space-y-4 text-neutral-700 dark:text-neutral-300",
          "[&_a]:text-primary-600 dark:[&_a]:text-primary-500 [&_a:hover]:underline"
        )}
      >
        <DocumentRenderer
          document={locale == "ar" ? arabic : english}
          renderers={renderer}
        />
      </div>
      <ul className="[&_a:hover]:text-primary-600 dark:[&_a:hover]:text-primary-500 flex items-center gap-x-4">
        {links.map(({ href, Icon, label }) => (
          <li key={label}>
            <Tooltip disableHoverableContent>
              <TooltipTrigger asChild>
                <AdaptiveLink aria-label={label} href={href} rel="me">
                  <Icon
                    aria-label={label}
                    aria-hidden="true"
                    className="h-5 w-5"
                  />
                </AdaptiveLink>
              </TooltipTrigger>
              <TooltipContent sideOffset={8}>{label}</TooltipContent>
            </Tooltip>
          </li>
        ))}
        <li key="language">
          <AdaptiveLink href={locale == "ar" ? "/en" : "/ar"}>
            {locale == "ar" ? "English" : "Arabic"}
          </AdaptiveLink>{" "}
        </li>
      </ul>
    </ContainerSection>
  );
}
