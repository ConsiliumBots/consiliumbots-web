import { getCollection } from 'astro:content';

// Strip the language folder from a collection id:
//   "en/making-algorithmic-transparency-meaningful" -> "making-algorithmic-..."
export function postSlug(post) {
  return post.id.replace(/^(en|es)\//, '');
}

/**
 * Posts to show for `lang`, newest first.
 *
 * A post translated into the requested language wins; otherwise the English
 * original is shown with a "this post is in English only" notice (PostCard and
 * PostLayout both key that off `post.data.lang !== lang`). This keeps the
 * Spanish blog populated instead of empty, and it starts preferring the
 * translation automatically the moment one is added under src/content/blog/es/.
 */
export async function getPostsFor(lang) {
  const all = await getCollection('blog', ({ data }) => !data.draft);

  const bySlug = new Map();
  for (const post of all) {
    const slug = postSlug(post);
    const current = bySlug.get(slug);
    if (!current || (post.data.lang === lang && current.data.lang !== lang)) {
      bySlug.set(slug, post);
    }
  }

  return [...bySlug.values()].sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
}
