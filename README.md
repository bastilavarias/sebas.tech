# sebas.tech

Personal digital workspace for **Sebastian Curtis Lavarias (Baste)** — software developer and tech creator.

The site is an interactive crimson blueprint collage with profile, social links, featured projects, Polaroids, stickers, books, films, three records, clock, playable chess, a sliding picture puzzle using an existing personal Polaroid (3×3 and 4×4, with local best times), retro Pong against a beatable CPU (first to seven, keyboard/touch), and 2048 inside a draggable pocket-calculator shell (keyboard, swipe, undo, locally saved score and game). Phones display a simpler, vertically scrollable version.

## Technology

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS, shadcn/ui, chess.js. This website is a **static export** with no backend.

## Develop locally

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`. Run `npm run typecheck` and `npm run build` to test. Next.js outputs a static site into `out/`.


## Deploy on Netlify

1. At [Netlify](https://app.netlify.com/start), choose **Import an existing project** and connect GitHub.
2. Select **`bastilavarias/sebas.tech`**, set the production branch to **`master`**. The current site is **[sebastechisme.netlify.app](https://sebastechisme.netlify.app/)**. The Next.js app occupies this repo's root.
3. Netlify reads committed `netlify.toml` with build command **`npm run build`**, publish directory **`out`**, and `NETLIFY_NEXT_PLUGIN_SKIP=true`. Do not change output to `.next` or run deprecated `next export`.
4. After checking the assigned HTTPS hostname and approving its contents for indexing, set two **Production** environment variables under Netlify site configuration and redeploy (replace the example hostname with the actual one):

   ```env
   NEXT_PUBLIC_SITE_URL=https://sebastechisme.netlify.app
   SEO_ALLOW_INDEXING=true
   ```

   Both variables are mandatory for public canonical, indexable robots and homepage sitemap. Without both, the generated static site intentionally remains `noindex`. Netlify's built-in `URL` supplies correct social-image URLs for previews.
5. Under **Project configuration → General → Powered by Netlify badge**, disable the optional overlay. Netlify currently injects a bottom-right badge that can cover mobile dock buttons. The site also automatically raises the dock above the badge while it remains enabled. Disabling it does not require redeploying.
6. Verify the deployed site's desktop/mobile layouts, profile favicon, social preview, project links, theme, chess, and album artwork. Verify the hostname in Search Console and submit `/sitemap.xml` only after enabling indexing.

### Original OG screenshot (Discord / Facebook / Twitter)

The owner-supplied, **unmodified** screenshot is committed at `public/og-workspace.png` (2048×1048 PNG). Both Open Graph and Twitter metadata link directly to `/og-workspace.png`, and the Next.js file-based `app/opengraph-image.tsx` generator was removed because its metadata overrode `layout.tsx`. No image regeneration, crop, or resize occurs. After deploying, verify the live `og:image` and `twitter:image` tags both point to `/og-workspace.png`. Some chat services cache previews; sharing the URL with a harmless new query parameter can help refresh the preview.

## Music and artwork

The player now supports **real static audio playback on Netlify** when authorized files are added to `public/music/<album-id>/`. The Netlify build uses `NEXT_PUBLIC_MUSIC_MODE=static`, automatically detects audio files with `scripts/build-public-music.mjs`, and creates a Git-ignored `public/music/library.json`. Tracks not yet uploaded remain silent previews, with no broken audio requests. No MP3s are committed in this version. Follow **[MUSIC_UPLOAD.md](MUSIC_UPLOAD.md)** to add authorized recordings; no manual JSON editing is necessary. The separate SEBASTECH LAN preview still uses the private read-only Nginx music library and does not require the static mode. The Mhot cover is bundled with the site.

Some book, manga, film, and album art is third-party media. The grid texture currently loads from the reference site. Review media rights and replace third-party dependencies when appropriate.

## Rights

No rights are granted for reuse of the original code or personal photographs. Third-party media and trademarks remain with their respective rights holders.
