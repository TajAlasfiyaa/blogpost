import { fields, singleton } from "@keystatic/core";

export const homeSchema = singleton({
  label: "Home",
  path: "content/home",
  entryLayout: "content",
  format: {
    contentField: "content",
  },
  schema: {
    content: fields.document({
      label: "Content",
      formatting: {
        inlineMarks: true,
        softBreaks: true,
      },
      links: true,
    }),
    contentArabic: fields.document({
      label: "Arabic",
      formatting: {
        inlineMarks: true,
        softBreaks: true,
      },
      links: true,
    }),
  },
  previewUrl: `${process.env.APP_URL}`,
});

export const homeSchemaArabic = singleton({
  label: "Home",
  path: "content/home",
  entryLayout: "content",
  format: {
    contentField: "content",
  },
  schema: {
    content: fields.document({
      label: "Content",
      formatting: {
        inlineMarks: true,
        softBreaks: true,
      },
      links: true,
    }),
  },
  previewUrl: `${process.env.APP_URL}`,
});
