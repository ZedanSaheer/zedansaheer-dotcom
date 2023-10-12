import rss from '@astrojs/rss';

export async function GET(context) {
    return rss({
        title: 'Zedan Saheer',
        description: 'Zedan Saheer is a Software Engineer, Innovator, Content Writer and an Indie Chef. Focused on building highly performant and scalable code.',
        site: context.site,
        items: [],
        customData: `<language>en-us</language>`,
    });
}
