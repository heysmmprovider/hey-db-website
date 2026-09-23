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

- `src/data/site.ts`: repository, version, source download, and release links.
- `src/data/projects.ts`: the maker's 17 other projects, displayed discreetly in the footer as visible standard links. They do not have `nofollow` or `sponsored` attributes.
- `src/pages/index.astro`: landing page, product copy, FAQs, and interactions.
- `src/styles/global.css`: responsive styles.
- `src/assets/workspace.png`: real app screenshot with synthetic sample data, copied from the hey-db project.
- `public/og-image.png`: sharing image.

The page includes descriptive metadata, optional canonical URLs, Open Graph tags, and SoftwareSourceCode structured data. Navigation and all external links work without JavaScript; JavaScript only powers the enlarged screenshot and copy button. Fonts are loaded from Google Fonts with local system fallbacks.

## Downloads

The repository had no published releases when this page was created. The download button therefore retrieves the source ZIP from the public `main` branch. The site clearly states that packaged installers are not yet available and links to GitHub Releases. Once installers are published, update the download section and FAQ with verified release assets, supported platforms, and signing details.

Feature and platform claims reflect hey db 0.1.0: PostgreSQL only; local Apple Silicon build for macOS 13+; Windows and Linux builds have not received manual platform QA.
