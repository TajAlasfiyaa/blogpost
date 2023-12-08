import { cn } from "@/utils/ui";
import { DocumentRendererProps } from "@keystatic/core/renderer";
import { Shikiji } from "../shikiji";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { AdaptiveLink } from "../adaptive-link";

export function getArticleRenderers(): DocumentRendererProps["renderers"] {
  return {
    block: {
      code: ({ children: code, language = "plain" }) => {
        return (
          <ScrollArea
            className={cn(
              "not-prose relative rounded-lg text-sm",
              "border border-neutral-500/25"
              //
            )}
          >
            <Shikiji code={code} language={language} className="[&>pre]:p-4" />
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        );
      },
      image: (props) => {
        return (
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
            <img {...props} />
            <figcaption>
              {props.title && <strong>{props.title}:&nbsp;</strong>}
              {props.alt}
            </figcaption>
          </figure>
        );
      },
      paragraph: (props) => {
        return <p dir="auto">{props.children}</p>;
      },
      blockquote: (props) => {
        return (
          <blockquote className="!ltr:border-0 !rtl:border-r-2  " dir="auto">
            {props.children}
          </blockquote>
        );
      },
    },

    inline: {
      link: AdaptiveLink,
    },
  };
}
