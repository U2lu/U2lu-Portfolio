# U2LU

Portfolio for Emmanuel Utulu — software engineering and poster design.
Astro 7, MDX, Tailwind v4. Pre-rendered HTML, no CMS, no client-side framework,
no analytics.

## Running it

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview  # serve dist/
npm run check    # astro check (types + content schema)
```

Node 20.3 or newer. The build is fully static; `dist/` is the whole site.

## Where things are

| Path | What lives there |
| --- | --- |
| `src/pages/` | Routes. `/work/[slug]` renders every case study. |
| `src/content/work/*.mdx` | One file per case study. Frontmatter drives the indexes. |
| `src/content.config.ts` | The case study schema — the only place that defines allowed fields. |
| `src/data/rail.ts` | The five homepage rail tiles, in order. |
| `src/layouts/Base.astro` | Head (meta, icons, social card), header, footer, theme toggle. |
| `src/styles/global.css` | Design tokens, light and dark, plus the prose and table styles. |
| `public/shots/` | Artwork and screenshots. WebP, 1200px wide maximum. |
| `public/og.png` | Social card, 1200×630. Source and regeneration notes in `scripts/`. |
| `public/_headers` | Cache and security headers, served by the Worker. |

## Adding a project

1. Put the artwork in `public/shots/` as `.webp` (1200px wide is plenty).
2. Create `src/content/work/<slug>.mdx` with frontmatter matching
   `src/content.config.ts` — `title`, `discipline` (`engineering` or `design`),
   `year`, `summary`, `role`, `order`, and a `figures` array. A figure with a
   `src` also needs the image's real `width` and `height`, so the browser
   reserves the right space before it decodes.
3. Leave `src` off a figure to render its caption as a placeholder.
4. Set `draft: true` to keep a file out of every index.

It appears on `/work`, on `/design` if it is design, on the homepage rail if it
is listed in `rail.ts`, and in the sitemap. Three things are written by hand:
the homepage rail order, each rail tile's image `width`/`height`, and the
`/work` headline ("Five things, chosen."), which has to change when the set
does. The 404 count reads the collection and stays correct on its own.

## Deploy

Live at **https://u2lu.ayoutulu.workers.dev** — a Cloudflare Worker serving
`dist/` as static assets.

```sh
npm run build
npx wrangler deploy
```

The first deploy on a machine needs `npx wrangler login` once.

`wrangler.jsonc` sets `not_found_handling: "404-page"`, which is what makes an
unknown URL return `404.html` with a 404 status. Without that setting
Cloudflare answers with an empty 404 instead.

`astro.config.mjs` holds the canonical URL in `site` — the source for the
sitemap, every canonical tag and the absolute OG image URL. Changing the domain
is one line there, plus the sitemap line in `public/robots.txt`.
