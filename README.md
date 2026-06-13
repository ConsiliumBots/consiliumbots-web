# ConsiliumBots Website

Source for the ConsiliumBots public website — **[www.consiliumbots.com](https://www.consiliumbots.com)**.

Built with [Astro](https://astro.build/). Content (team, projects, partners, copy) is
data-driven from `src/data/`, so most updates are JSON edits rather than markup changes.

## Project structure

```text
src/
├── data/         # Site content: team.json, projects.json, partners.json, site-data.js
├── components/   # Navbar, Footer
├── layouts/      # BaseLayout (shared <head>, header, footer)
├── pages/        # Routes (see below)
├── styles/       # global.css
└── assets/       # Imported/optimized images
public/            # Static assets served as-is (images, logos, icons, videos, robots.txt)
```

### Pages

| Route                 | File                          |
| :-------------------- | :---------------------------- |
| `/`                   | `src/pages/index.astro`       |
| `/what-we-do`         | `src/pages/what-we-do.astro`  |
| `/projects`           | `src/pages/projects/index.astro` |
| `/projects/:slug`     | `src/pages/projects/[slug].astro` (generated from `projects.json`) |
| `/research`           | `src/pages/research.astro`    |
| `/team`               | `src/pages/team.astro`        |
| `/contact`            | `src/pages/contact.astro`     |
| 404                   | `src/pages/404.astro`         |

## Commands

Run from the project root:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start the dev server at `localhost:4321`     |
| `npm run build`   | Build the production site to `./dist/`       |
| `npm run preview` | Preview the production build locally         |

## Editing content

- **Team members** — `src/data/team.json`
- **Projects** — `src/data/projects.json` (each entry generates a `/projects/:slug` page)
- **Partners / collaborators** — `src/data/partners.json`
- **Global copy & links** — `src/data/site-data.js`

Images referenced by the data files live in `public/images/` (team photos, project art,
government/collaborator logos).

## Deployment

Production is served at `https://www.consiliumbots.com` (configured as `site` in
[`astro.config.mjs`](astro.config.mjs), which also generates the sitemap). Hosting is wired
up outside this repo — there is no committed CI/deploy config.
