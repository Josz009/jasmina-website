import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "heroHeadline", title: "Hero Headline", type: "string" }),
    defineField({ name: "heroSubheadline", title: "Hero Subheadline", type: "text", rows: 3 }),
    defineField({ name: "heroImage", title: "Hero Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "aboutHeadline", title: "About Headline", type: "string" }),
    defineField({ name: "aboutText", title: "About Text", type: "text", rows: 6 }),
    defineField({ name: "aboutImage", title: "About Photo", type: "image", options: { hotspot: true } }),
    defineField({
      name: "contactEmail",
      title: "Contact Email",
      type: "string",
      initialValue: "align@jabusinesscoaching.com",
    }),
  ],
  preview: { select: { title: "heroHeadline" }, prepare: () => ({ title: "Site Settings" }) },
});
