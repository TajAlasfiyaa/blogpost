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
import { cn } from "@/utils/ui";
import { DocumentRenderer } from "@keystatic/core/renderer";

export default async function Homepage() {
  const query = await getHomeSingleton();
  const content = await query.content();
  const renderer = getBasicRenderers();

  return (
    <ContainerSection className="relative flex flex-col items-start py-12 md:py-20">
      <div className="w-full max-w-screen-md space-y-8">
        {/* Main Hero Header */}
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-l from-primary-600 via-sky-500 to-indigo-500 bg-clip-text text-transparent">
            تاج الأصفياء إسحاق محمود
          </h1>
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
            TajAlasfiyaa Ishag | مطور ويب ومهندس كهربائي
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
            طالب هندسة كهربائية بجامعة السودان للعلوم والتكنولوجيا، مهتم بالتكنولوجيا ومتخصص في مجال تطوير الويب وتطبيقات واجهات المستخدم (Frontend Development) وتطبيقات الذكاء الاصطناعي.
          </p>
        </header>

        {/* Keystatic CMS Content */}
        <article
          className={cn(
            "prose prose-neutral dark:prose-invert max-w-none text-neutral-700 dark:text-neutral-300",
            "[&_a]:text-primary-600 dark:[&_a]:text-primary-400 [&_a:hover]:underline"
          )}
        >
          <DocumentRenderer document={content} renderers={renderer} />
        </article>

        {/* Social & Contact Links */}
        <section className="w-full pt-6 border-t border-neutral-200 dark:border-neutral-800">
          <h3 className="sr-only">روابط التواصل الاجتماعي</h3>
          <ul className="flex flex-wrap items-center gap-3">
            {links.map(({ href, Icon, label }) => (
              <li key={label}>
                <Tooltip disableHoverableContent>
                  <TooltipTrigger asChild>
                    <AdaptiveLink
                      aria-label={label}
                      href={href}
                      rel="me"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 hover:bg-primary-50 dark:hover:bg-primary-950/30 hover:border-primary-500/50 transition-all group"
                    >
                      <Icon
                        aria-label={label}
                        aria-hidden="true"
                        className="h-5 w-5 text-neutral-600 dark:text-neutral-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
                      />
                      <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {label}
                      </span>
                    </AdaptiveLink>
                  </TooltipTrigger>
                  <TooltipContent sideOffset={8}>{label}</TooltipContent>
                </Tooltip>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </ContainerSection>
  );
}

