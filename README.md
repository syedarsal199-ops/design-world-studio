# Design World Studio — Next.js

The Design World Studio site, converted from a single-file HTML app to a
Next.js 14 project using the App Router.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build && npm start   # production
```

## What changed in the conversion

| Before | After |
|---|---|
| One 16 MB `index.html` | ~1 MB of markup + 11 MB of real static assets in `public/media` |
| Hash routing (`#/seo`) | Real Next.js routes (`/seo`) — 30 of them |
| One `<title>` for the whole site | Per-route `title`, `description` and canonical URL |
| Every page in the DOM at once | Only the active route is rendered |
| 113 base64 data URIs inline | Real files, browser-cacheable |

## Structure

```
app/
  layout.tsx              root layout: fonts, global CSS, chrome, runtime
  globals.css             all site styles (unchanged)
  page.tsx                /            (home)
  <route>/page.tsx        one folder per route, each with its own metadata
components/
  SiteChrome.tsx          header, mobile menu, CTA ticker, footer
  Page.tsx                renders a route's markup, triggers a runtime re-boot
  SiteRuntime.tsx         loads the scripts, bridges clicks to the Next router
  chrome.ts               header/footer/chrome markup
content/
  <route>.ts              the markup for each route
public/
  js/site.js              the site's interactive code
  js/site-shim.js         re-boot shim (see below)
  js/site-motion.mjs      Motion scroll animations
  media/                  images and video
```

## How the runtime works

The original site's JavaScript is kept intact in `public/js/site.js` — the
animations, coverflow decks, mega-menu, accordions, calculators and hero canvas
all behave exactly as before. Three things were adapted:

1. **Route detection** reads `location.pathname` instead of `location.hash`.
2. **Link clicks** on `[data-route]` fire a `site:navigate` event.
   `SiteRuntime` listens and calls `router.push()`, so navigation is real
   Next.js client-side routing.
3. **Re-initialisation.** `site-shim.js` records every listener, interval and
   observer created during a boot and tears them down before the next one, so
   the script can safely re-run on each route change without stacking
   duplicates.

## Blog

The five posts are pre-rendered into their own routes (`/blog-<slug>`) at build
time, so they are server-rendered and indexable.

The Blog Admin page (`/blog-admin`) still publishes posts to `localStorage` —
they appear on the blog index in that browser. Posts created this way are
client-side only; to make a new post a real route, add it to `BLOG_POSTS` in
`public/js/site.js` and generate a page under `app/`.

## Notes

- `next/font` is a worthwhile follow-up; fonts currently load from Google Fonts
  via `<link>`, as in the original.
- Route markup is injected with `dangerouslySetInnerHTML`. It is all
  first-party static content authored in this repo, not user input.
