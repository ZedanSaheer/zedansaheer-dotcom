import { categories, publishDateTransformedToLocaleDate } from "@scripts/constants";
import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(categories),
    subCategory: z.string().array().optional(),
    author: z.enum(['Zedan Saheer']).default("Zedan Saheer"),
    publishDate: publishDateTransformedToLocaleDate,
    image: z.object({
      alt: z.string(),
      src: image(),
    }).optional(),
  })
});

export const collections = {
  blogs: blogCollection,
};