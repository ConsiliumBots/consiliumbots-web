#!/usr/bin/env node
// Verifies every internal link and asset reference in the built site resolves
// to a file in dist/. Fails the build on the first broken internal reference,
// which is how dead links stop reaching production. External URLs are only
// probed when CHECK_EXTERNAL=1 (network is slow and flaky in CI), and are
// reported as warnings rather than failures.
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, resolve, sep } from 'node:path';

const DIST = resolve(process.argv[2] ?? 'dist');
const SITE = 'https://www.consiliumbots.com';

function* htmlFiles(dir) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) yield* htmlFiles(p);
    else if (p.endsWith('.html')) yield p;
  }
}

const ATTR = /\b(?:href|src|poster|content)="([^"]+)"/g;
const internal = new Map(); // target -> [pages]
const external = new Set();

for (const file of htmlFiles(DIST)) {
  const html = readFileSync(file, 'utf8');
  const page = file.slice(DIST.length).split(sep).join('/');
  for (const [, raw] of html.matchAll(ATTR)) {
    let url = raw.replace(/&amp;/g, '&');
    if (url.startsWith(SITE)) url = url.slice(SITE.length) || '/';
    if (/^(https?:)?\/\//.test(url)) { external.add(url); continue; }
    if (/^(mailto:|tel:|data:|#|javascript:)/.test(url)) continue;
    if (!url.startsWith('/')) continue; // relative refs are not used by this site
    const path = url.split('#')[0].split('?')[0];
    if (!internal.has(path)) internal.set(path, []);
    internal.get(path).push(page);
  }
}

const missing = [];
for (const [path, pages] of internal) {
  const p = decodeURIComponent(path);
  const candidates = [
    join(DIST, p),
    join(DIST, p, 'index.html'),
    join(DIST, p.replace(/\/$/, '') + '.html'),
  ];
  if (!candidates.some((c) => existsSync(c) && statSync(c).isFile())) {
    missing.push({ path, pages: [...new Set(pages)].slice(0, 3) });
  }
}

console.log(`checked ${internal.size} internal targets across ${[...htmlFiles(DIST)].length} pages`);
if (missing.length) {
  console.error(`\n${missing.length} broken internal reference(s):`);
  for (const m of missing) console.error(`  ${m.path}   <- ${m.pages.join(', ')}`);
  process.exit(1);
}
console.log('all internal links and assets resolve');

if (process.env.CHECK_EXTERNAL === '1') {
  const urls = [...external].filter((u) => !/googletagmanager|google-analytics/.test(u));
  console.log(`\nprobing ${urls.length} external URLs (warnings only)...`);
  let failures = 0;
  const probe = async (u) => {
    try {
      const ctrl = new AbortController();
      const t = setTimeout(() => ctrl.abort(), 20000);
      let r = await fetch(u, { method: 'HEAD', redirect: 'follow', signal: ctrl.signal, headers: { 'user-agent': 'Mozilla/5.0 (link check)' } });
      if (r.status === 405 || r.status === 403) r = await fetch(u, { method: 'GET', redirect: 'follow', signal: ctrl.signal, headers: { 'user-agent': 'Mozilla/5.0 (link check)' } });
      clearTimeout(t);
      if (r.status >= 400) { failures++; console.warn(`  ${r.status}  ${u}`); }
    } catch (e) {
      failures++; console.warn(`  ERR  ${u}  (${e.name})`);
    }
  };
  // modest concurrency so partner sites are not hammered
  for (let i = 0; i < urls.length; i += 6) await Promise.all(urls.slice(i, i + 6).map(probe));
  console.log(failures ? `${failures} external URL(s) need attention` : 'all external URLs reachable');
}
