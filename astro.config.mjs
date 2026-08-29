// @ts-check
import { defineConfig } from 'astro/config';
import { readdirSync } from 'node:fs';

import sitemap from '@astrojs/sitemap';

// /es/blog/<slug>/ pages for posts that exist only in English are untranslated
// fallbacks whose canonical points at the EN URL — keep them out of the sitemap
// so it only submits canonical URLs.
const postSlugs = (dir) => {
  try {
    return readdirSync(new URL(`./src/content/blog/${dir}/`, import.meta.url))
      .filter((f) => /\.(md|mdx)$/.test(f))
      .map((f) => f.replace(/\.(md|mdx)$/, ''));
  } catch {
    return [];
  }
};
const esSlugs = new Set(postSlugs('es'));
const untranslated = postSlugs('en').filter((s) => !esSlugs.has(s));

// https://astro.build/config
export default defineConfig({
  site: 'https://www.consiliumbots.com',
  // Safety net for stale inbound links to the previous site's /eng/ structure
  // (the external working-papers site linked there for a while).
  redirects: {
    '/eng': '/',
    '/eng/what-we-do': '/what-we-do',
    '/eng/projects': '/projects',
    '/eng/research': '/research',
    '/eng/team': '/team',
    '/eng/contact': '/contact',
  },
  integrations: [
    sitemap({
      filter: (page) => !untranslated.some((s) => page.endsWith(`/es/blog/${s}/`)),
    }),
  ],
});
