import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog posts live under src/content/blog/<lang>/<slug>.md so the language is
// part of the id ("en/making-algorithmic-transparency-meaningful"). The index
// pages filter on the `lang` field rather than the path, so a post can move
// between folders without breaking anything.
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
      title: z.string(),
      // Shown in listings and used as the meta description when set.
      description: z.string(),
      // Optional deck displayed under the title on the post page.
      subtitle: z.string().optional(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      lang: z.enum(['en', 'es']).default('en'),
      authors: z.array(z.string()).default([]),
      // Path under /public — used for og:image and the listing thumbnail.
      heroImage: z.string().optional(),
      ogImage: z.string().optional(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
      // Optional "read the paper" call-to-action rendered at the foot.
      paperUrl: z.string().url().optional(),
      paperLabel: z.string().optional(),
  }),
});

export const collections = { blog };
