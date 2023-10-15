import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {

    /* Import blogs collection and render it to items for RSS feed */
    const blogPosts = await getCollection("blogs");

    return rss({
        title: 'Zedan Saheer',
        description: 'Zedan Saheer is a Software Engineer, Innovator, Content Writer and an Indie Chef. Focused on building highly performant and scalable code.',
        site: context.site,
        items: blogPosts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.publishDate,
            description: post.data.description,
            link: `/blog/${post.slug}`,
            customData: `<author>${post.data.author}</author>`,
        })),
        customData: `<language>en-us</language>`,
    });
}
