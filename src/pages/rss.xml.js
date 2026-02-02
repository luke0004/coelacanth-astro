import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE, PATHS, SECTIONS } from '../config';

export async function GET(context) {
  const posts = await getCollection('logbook');

  return rss({
    title: `${SITE.name} ${SECTIONS.logbook}`,
    description: SITE.description,
    site: context.site,
    items: posts
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.date,
        description: post.data.description,
        link: `${PATHS.logbook}/${post.slug}/`,
      })),
  });
}
