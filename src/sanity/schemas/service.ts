import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Services",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "titleAccent", title: "Title Accent (italic part)", type: "string" }),
    defineField({ name: "subtitle", title: "Subtitle / Tag", type: "string" }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "tagline", title: "Tagline (card preview)", type: "string" }),
    defineField({ name: "intro", title: "Intro Paragraph", type: "text", rows: 5 }),
    defineField({ name: "heroImage", title: "Hero Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "detailImage", title: "Detail / Process Image", type: "image", options: { hotspot: true } }),
    defineField({
      name: "benefits",
      title: "Benefits / Deliverables",
      type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "title", title: "Title", type: "string" }),
          defineField({ name: "desc", title: "Description", type: "text", rows: 2 }),
        ],
      }],
    }),
    defineField({
      name: "processSteps",
      title: "Process Steps",
      type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "step", title: "Step Number", type: "number" }),
          defineField({ name: "title", title: "Title", type: "string" }),
          defineField({ name: "desc", title: "Description", type: "text", rows: 3 }),
        ],
      }],
    }),
    defineField({ name: "quote", title: "Pull Quote", type: "text", rows: 2 }),
    defineField({ name: "price", title: "Price (e.g. $555)", type: "string" }),
    defineField({ name: "bookingUrl", title: "Booking URL", type: "url" }),
    defineField({
      name: "pricingSteps",
      title: "Pricing / Booking Steps",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
});
