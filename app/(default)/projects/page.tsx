import { ContainerSection } from "@/components/container-section";
import { getSortedProjects } from "@/server/keystatic";
import { cn } from "@/utils/ui";
import { ExternalLinkIcon, Code2Icon } from "lucide-react";
import { AdaptiveLink } from "@/components/adaptive-link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "A showcase of web applications, wikis, and tools built for the community.",
};

export default async function ProjectsPage() {
  const projects = await getSortedProjects();

  return (
    <ContainerSection className="relative space-y-6" enableNavShadow>
      <div>
        <h1 className="max-w-screen-sm text-4xl font-bold">Projects</h1>
        <p className="max-w-screen-sm mt-2 text-neutral-700 dark:text-neutral-300">
          A collection of web applications, wiki resources, community projects, and tools
          I've designed and built.
        </p>
      </div>

      <br />

      <ul
        className={cn(
          "grid grid-cols-1 gap-6",
          "sm:grid-cols-2"
        )}
      >
        {projects.map(({ slug, entry }) => (
          <li
            key={slug}
            className={cn(
              "group relative flex flex-col justify-between p-6 rounded-xl border transition-all duration-300",
              "bg-white/40 dark:bg-neutral-900/40 backdrop-blur-md",
              "border-neutral-200 dark:border-neutral-800",
              "hover:border-primary-500/50 hover:shadow-lg hover:-translate-y-1",
              "before:absolute before:inset-0 before:-z-10 before:rounded-xl before:transition-opacity",
              "before:bg-gradient-to-br before:from-primary-500/5 before:to-secondary-500/5 before:opacity-0 hover:before:opacity-100"
            )}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {entry.title}
                </h3>
                <Code2Icon className="h-5 w-5 text-neutral-400 dark:text-neutral-500" />
              </div>
              <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                {entry.description}
              </p>
            </div>

            <div className="mt-6 space-y-4">
              {entry.techStack && entry.techStack.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {entry.techStack.map((tag) => (
                    <span
                      key={tag}
                      className={cn(
                        "inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium",
                        "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                      )}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex items-center justify-end">
                <AdaptiveLink
                  href={entry.url}
                  className={cn(
                    "inline-flex items-center gap-x-2 text-sm font-semibold transition-all",
                    "text-primary-600 dark:text-primary-400 hover:underline",
                    "before:absolute before:inset-0"
                  )}
                >
                  <span>Visit website</span>
                  <ExternalLinkIcon className="h-4 w-4" />
                </AdaptiveLink>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </ContainerSection>
  );
}
