import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('logbook');

  return rss({
    title: 'Coelacanth Logbook',
    description: 'Sailing voyages and refit notes from SV Coelacanth',
    site: context.site,
    items: posts
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.date,
        description: post.data.description,
        link: `/logbook/${post.slug}/`,
      })),
  });
}
