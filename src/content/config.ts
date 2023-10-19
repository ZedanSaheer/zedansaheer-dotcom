import { z, defineCollection } from "astro:content";
import type { ImageMetadata } from "astro";

const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.enum(['Software Engineering', 'JavaScript', 'TypeScript', 'Web Development', 'Life', 'Thoughts', 'Wisdom', 'Motivation'])),
    author: z.enum(['Zedan Saheer']),
    publishDate: z.string().transform((str) => new Date(str).toLocaleDateString('en-us', { weekday: "long", year: "2-digit", month: "2-digit", day: "2-digit" })),
    image: z.object({
      alt: z.string(),
      src: image(),
    }).optional(),
  })
});

export const collections = {
  blogs: blogCollection,
};