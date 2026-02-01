import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog'); // Name deiner Collection

  return rss({
    title: 'Coelacanth Logbook',
    description: 'Sailing voyages and refit notes from SV Coelacanth',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
  });
}
