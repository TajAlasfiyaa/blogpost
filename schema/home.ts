import { fields, singleton } from "@keystatic/core";

export const homeSchema = singleton({
  label: "Home",
  path: "content/home",
  entryLayout: "content",
  format: {
    contentField: "contetn",
  },
  schema: {
    content: fields.document({
      label: "content",
      formatting: {
        inlineMarks: true,
        softBreaks: true,
      },
    }),
  },
  previewUrl: `${process.env.APP_URL}`,
});
