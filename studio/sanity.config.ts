import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "jasmina-website",
  title: "J&A Business Coaching",
  projectId: "aj6886z5",
  dataset: "production",
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
