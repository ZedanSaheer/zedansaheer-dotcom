import { z, defineCollection } from "astro:content";

const keywordArray = z.enum(['Software Engineering', 'JavaScript', 'TypeScript', 'Web Development', 'Life', 'Thoughts', 'Wisdom', 'Motivation']);

const publishDateTransformedToLocaleDate = z.string().transform((str) => new Date(str).toLocaleDateString('en-us', { weekday: "long", year: "2-digit", month: "2-digit", day: "2-digit" }));

const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(keywordArray),
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