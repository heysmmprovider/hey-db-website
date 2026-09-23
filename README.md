# hey db website

A single-page Astro website for [hey db](https://github.com/heysmmprovider/hey-db), the local-first PostgreSQL desktop workspace.

## Local development

Requires Node.js 22.12 or newer.

```sh
npm ci
npm run dev -- --background
```

Open http://localhost:4321. Manage the server with:

```sh
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
```

## Build

```sh
npm run build
```

The static site is generated in `dist/`. Set the real public origin when building for production to include canonical and absolute social-sharing URLs:

```sh
SITE_URL=https://your-actual-domain.com npm run build
```

Upload `dist/` to your static hosting provider. No backend or environment secrets are needed.

## Content

- `src/data/site.ts`: repository, version, macOS installer, installation guide, source download, and release links.
- `src/data/projects.ts`: the maker's 17 other projects, displayed discreetly in the footer as visible standard links. They do not have `nofollow` or `sponsored` attributes.
- `src/pages/index.astro`: landing page, product copy, FAQs, and interactions.
- `src/styles/global.css`: responsive styles.
- `src/assets/workspace.png`: real app screenshot with synthetic sample data, copied from the hey-db project.
- `public/og-image.png`: sharing image.

The page includes descriptive metadata, optional canonical URLs, Open Graph tags, and SoftwareSourceCode structured data. Navigation and all external links work without JavaScript; JavaScript only powers the enlarged screenshot. Fonts are loaded from Google Fonts with local system fallbacks.

## Downloads

Both **Download for Mac** buttons link directly to the GitHub-hosted DMG at:

https://github.com/heysmmprovider/hey-db/blob/main/downloads/hey-db-0.1.0-macos-arm64.dmg?raw=true

The installer supports Apple Silicon (M-series) Macs running macOS 13 Ventura or later. Users open the DMG, drag hey db into Applications, and launch the app. No source build or developer tools are required. The download is an ad-hoc-signed, non-notarized early preview; the site links to the repository’s installation guide for first-launch help and checksum verification. Intel Mac, Windows, and Linux installers are not available in this release.

A secondary **Download source** link remains available for contributors. When a new version is published, update the version and installer URL in `src/data/site.ts`.
