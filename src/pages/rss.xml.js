import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { postSlug } from '../lib/posts.js';

// English feed only for now — fallback ES URLs canonicalize to these posts.
export async function GET(context) {
  const posts = (
    await getCollection('blog', ({ data }) => !data.draft && data.lang === 'en')
  ).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'ConsiliumBots Blog',
    description:
      'Notes on the research and the systems behind it — what we are learning from building information tools with governments.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${postSlug(post)}/`,
    })),
  });
}
