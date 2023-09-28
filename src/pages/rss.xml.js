import rss from '@astrojs/rss';

export async function GET(context) {
    return rss({
        title: 'Zedan Saheer',
        description: '',
        site: context.site,
        items: [],
        customData: `<language>en-us</language>`,
    });
}
