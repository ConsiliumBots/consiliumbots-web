// @ts-check
import { defineConfig } from 'astro/config';
import { readdirSync, readFileSync } from 'node:fs';

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

// The i18n fallback rewrite serves every project at /es/projects/<slug>/ too.
// Until the SSOT exports a Spanish description, those pages are English-content
// duplicates that canonicalize to the EN URL, so keep them out of the sitemap.
const projects = JSON.parse(readFileSync(new URL('./src/data/projects.json', import.meta.url), 'utf8'));
const untranslatedProjects = projects.filter((p) => !p.descriptionEs).map((p) => p.slug);

// https://astro.build/config
export default defineConfig({
  site: 'https://www.consiliumbots.com',
  // Spanish lives under /es/. Routes with no es/ counterpart are served at
  // /es/... from the English component (fallback rewrite); the component reads
  // Astro.currentLocale to localize its chrome. Today that is the project pages.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: { prefixDefaultLocale: false, fallbackType: 'rewrite' },
    fallback: { es: 'en' },
  },
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
      filter: (page) =>
        !untranslated.some((s) => page.endsWith(`/es/blog/${s}/`)) &&
        !untranslatedProjects.some((s) => page.endsWith(`/es/projects/${s}/`)),
    }),
  ],
});
