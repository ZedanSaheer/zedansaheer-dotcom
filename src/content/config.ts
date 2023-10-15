import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string() ,
    description: z.string(),
    publishDate: z.date(),
    author: z.enum(['Zedan Saheer']),
  })
});

export const collections = {
  blogs: blogCollection,
};