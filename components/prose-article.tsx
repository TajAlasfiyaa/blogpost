import { cn } from "@/utils/ui";
import { ComponentProps } from "react";

type Props = ComponentProps<"article">;

export function ProseArticle({ className, ...props }: Props) {
  return (
    <article
      className={cn(
        "prose-primary prose dark:prose-invert",
        "pb-20 [&>*]:gap-4",

        "[&_a:hover]:underline [&_a]:no-underline",
        "prose-a:inline prose-a:hyphens-auto prose-a:break-words",

        "prose-code:before:content-[''] prose-code:after:content-['']",
        "prose-code:rounded prose-code:border prose-code:border-neutral-500/25",
        "prose-code:bg-neutral-100 prose-code:px-1 dark:prose-code:bg-neutral-800",
        "prose-code:inline prose-code:hyphens-auto prose-code:break-words",

        "[&_blockquote_p]:before:content-[''] [&_blockquote_p]:after:content-['']",
        "prose-blockquote:not-italic",
        "prose-blockquote:border-l-neutral-200 dark:prose-blockquote:border-l-neutral-800",

        "prose-figcaption:text-center prose-img:mx-auto prose-img:rounded",

        "prose-hr:border-neutral-200 dark:prose-hr:border-neutral-800",

        className
      )}
      {...props}
    />
  );
}
