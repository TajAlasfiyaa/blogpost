import { collection, fields } from "@keystatic/core";

export const projectSchema = collection({
  label: "Projects",
  slugField: "title",
  path: "content/projects/*",
  format: {
    contentField: "content",
  },
  schema: {
    title: fields.slug({
      name: {
        label: "Title",
        description: "The name of the project",
        validation: {
          length: {
            min: 1,
          },
        },
      },
    }),
    url: fields.url({
      label: "Project URL",
      description: "Link to the live project website",
      validation: {
        isRequired: true,
      },
    }),
    description: fields.text({
      label: "Description",
      description: "Brief summary of the project",
      validation: {
        length: {
          min: 1,
        },
      },
    }),
    techStack: fields.array(
      fields.text({ label: "Tag" }),
      {
        label: "Tech Stack Tags",
        itemLabel: (props) => props.value,
      }
    ),
    order: fields.integer({
      label: "Sort Order",
      description: "Ascending order sequence (e.g. 1, 2, 3...)",
      validation: {
        min: 1,
        max: 9999,
      },
      defaultValue: 99,
    }),
    content: fields.document({
      label: "Content",
      description: "Detailed description of the project (optional)",
      formatting: true,
      links: true,
    }),
  },
});
