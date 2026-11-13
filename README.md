# sebas.tech

Personal digital workspace for **Sebastian Curtis Lavarias (Baste)** — software developer and tech creator.

The site is an interactive crimson blueprint collage with profile, social links, featured projects, Polaroids, stickers, books, films, three records, clock, and playable chess. Phones display a simpler, vertically scrollable version.

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

Netlify configuration also serves the extensionless `/opengraph-image` with the correct `image/png` MIME type.

## Music and artwork

The three records remain selectable, but **full MP3 tracks are deliberately excluded from GitHub and public Netlify hosting**. The private LAN demo uses a server-mounted, read-only audio library. On Netlify the music player gracefully becomes a visual preview until licensed audio is provided. The production build sets `NEXT_PUBLIC_MUSIC_MODE=preview` so browsers do not fetch the nonexistent `/music/catalog.json` endpoint and log a 404; the LAN build without that flag still uses its real music library. The Mhot cover itself is bundled with the site.

Some book, manga, film, and album art is third-party media. The grid texture currently loads from the reference site. Review media rights and replace third-party dependencies when appropriate.

## Rights

No rights are granted for reuse of the original code or personal photographs. Third-party media and trademarks remain with their respective rights holders.
