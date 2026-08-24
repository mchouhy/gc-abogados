import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const SERVICE_CATEGORIES = [
  "visados",
  "residencia",
  "nacionalidad",
  "documentacion",
] as const;

const SERVICE_ICONS = [
  "world",
  "school",
  "family",
  "flag",
  "work",
  "house",
  "hand-shake",
  "users-plus",
  "id",
  "refresh",
] as const;

const services = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    price: z.string(),
    priceDescription: z.string(),
    category: z.enum(SERVICE_CATEGORIES),
    icon: z.enum(SERVICE_ICONS),
  }),
});

export const collections = { services };
