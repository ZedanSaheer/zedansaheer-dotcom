import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      publishDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      tags: z.array(z.string())
    })
});

export const collections = {
  blogs: blogCollection,
};