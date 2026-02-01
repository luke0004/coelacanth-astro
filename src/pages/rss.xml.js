import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('logbook');

  return rss({
    title: 'Coelacanth Logbook',
    description: 'Sailing voyages and refit notes from SV Coelacanth',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/logbook/${post.slug}/`,
    })),
  });
}
