# Annie's Curtains and Blinds

Phase 2A static website foundation. The approved Shuffle homepage is integrated without a redesign; the five other navigation destinations are explicitly labelled development placeholders. This is not ready for public launch.

## Prerequisites and installation

Use Node.js **24 LTS** (tested with 24.14.1) and **pnpm 12.15.0**, pinned in `package.json`. Node 22.12+ on the 22.x line or Node 26+ also meets the dependency requirements. With Corepack available, run `corepack enable`; otherwise install the pinned pnpm version using your normal Node package-manager setup.

```sh
pnpm install
```

Keep `pnpm-lock.yaml` under version control. For a reproducible clean installation use `pnpm install --frozen-lockfile`. Vite 8.3.5, Pug 3.0.4, Tailwind 4.3.3 and Vitest 5.0.5 are pinned to stable npm releases checked on 27 October 2026. Tailwind uses its [official Vite integration](https://tailwindcss.com/docs/installation/using-vite); Vitest's [Node/Vite requirements](https://vitest.dev/guide/) inform the runtime requirement.

## Local development

```sh
pnpm dev
```

Open the URL Vite prints (normally `http://127.0.0.1:5173/`). `/contact/` and `/category/curtains/`, for example, work directly. Pug, metadata and shared-component changes reload the page; CSS and JavaScript use Vite's normal update handling. New `index.pug` pages are discovered automatically; create their JSON metadata first. Unknown routes return 404 rather than falling back to the homepage.

In WebStorm, open this repository, select your Node 24 interpreter and pnpm package manager, and run the scripts from `package.json` or the terminal. No IDE-specific configuration or global Pug/Tailwind command is needed. Mark `dist/` and `node_modules/` excluded if desired. Edit Pug files, not the ignored generated HTML under `src/`.

## Production build and checks

```sh
pnpm build
pnpm preview
pnpm test
```

`dist/` contains deployable HTML and hashed CSS/JavaScript assets. Preview normally serves `http://127.0.0.1:4173/`. The hosting server must serve directory indexes (`/contact/` → `contact/index.html`). There is no application server, contact form or runtime framework. `dist/` is ignored and must not be committed. No hosting, GitHub Pages or DNS setup is included.

Tests build the site themselves, parse its HTML, and start temporary local development/preview servers. They cover all six paths, navigation, email, metadata, absence of Shuffle branding/favicon, asset output, preserved homepage copy/classes, 404 behaviour, and mobile-menu state/focus. They do not request WordPress, Google Fonts or Unsplash. Linkedom is used only as a development-time HTML/DOM test utility; there are no JavaScript runtime dependencies.

## Project structure

```text
build/pug-pages.js          Small Vite adapter: discover, render and watch Pug pages
src/pages/**/index.pug      Page templates; directory structure determines URLs
src/pages/**/index.json     Per-page metadata
src/layouts/base.pug        Document head, landmarks, shared header/footer
src/layouts/placeholder.pug Shared development-placeholder content
src/components/            Header and combined contact/footer design
src/styles/main.css        Tailwind source, original fonts and accessibility styles
src/main.js                Vite entry, imports CSS and navigation
src/navigation.js          Progressive mobile navigation
public/                    Static files copied unchanged to dist (currently empty)
tests/site.test.js         Vitest build/HTTP/DOM tests
design-reference/          Original export, preserved unchanged
dist/                      Generated deployment output (ignored)
```

The adapter renders Pug to ignored `src/**/index.html` files before Vite resolves entries. Vite then handles HTML, module bundling, Tailwind and asset hashing normally. Only `src/pages/**/index.pug` files become entries, so the design reference never enters the build. Tailwind also explicitly scans application source only. Generated HTML is disposable; do not put authored HTML at those paths. Restart Vite after changing its config or the build adapter.

Removing a page while the dev server is running also removes its generated HTML. If removing or renaming a page while Vite is stopped, remove its old generated `src/.../index.html` too so it cannot remain accessible in development. Production builds always use only discovered Pug entries and empty `dist/` first.

## Add a Pug page

For `/example/`, create `src/pages/example/index.json` and `src/pages/example/index.pug`:

```json
{
  "title": "Example — Development placeholder | Annie's Curtains and Blinds",
  "heading": "Example",
  "noindex": true
}
```

```pug
extends ../../layouts/placeholder.pug
```

For migrated content, extend `../../layouts/base.pug` and define `block content` with one H1 and logical H2/H3 subsections. A deeper page uses the appropriate relative `extends` path. No entry list needs updating: the build produces `dist/example/index.html` automatically. Update navigation components intentionally when a page belongs in navigation.

Supported JSON fields: `title` (required), `description` (optional), `noindex`, `openGraph`, `image` (absolute Open Graph image URL), and `imageAlt`. `heading` is used by the placeholder layout. Canonicals are derived from each template's directory and the intended domain `https://anniescurtainsandblinds.co.uk`. With `openGraph: true`, the layout uses the page's title, description and canonical. No stock image is used as an Open Graph image. The homepage reuses the audited existing SEO title/description; unmigrated pages have no invented descriptions or social metadata and remain `noindex`.

## Shared components and accessibility

`base.pug` includes `header.pug` and `footer.pug`. The footer includes the export's contact strip to preserve its uninterrupted background and spacing. Changes to either component apply to all pages. The homepage content remains in its page template; no unnecessary component framework has been introduced.

The mobile menu is a native button controlling an ordinary navigation landmark: Enter/Space activate it, Escape closes it and returns focus, following a link closes it, and a desktop breakpoint change resets it. It updates `aria-expanded` and its accessible label. Without JavaScript the mobile links remain visible. Skip navigation, visible focus outlines and reduced-motion styles are included. Stock placeholders use empty alt text because they are decorative inspiration, not evidence of Annie's work; meaningful replacement photographs will need accurate alt text.

## Outstanding migration work

See [the migration audit](.codex/plans/SITE_MIGRATION_AUDIT.md) for the full legacy URL/content register. The following work is deliberately deferred:

- Migrate the five placeholder pages, articles and agreed legacy destinations; settle redirects and sitemap/robots handling before launch.
- Replace all five stock image slots listed below with approved assets and choose responsive sizes/crops, dimensions and descriptive alt text where meaningful. No WordPress media has been downloaded.
- Replace the explicitly labelled testimonial placeholder with a permitted, accurately attributed genuine quotation.
- Confirm business copy, services, contact details, coverage and image/testimonial permissions with the owner; review historical blind-safety advice before publishing it.
- Prepare final metadata for migrated pages, review indexing directives, and provide an approved favicon. The Shuffle favicon is removed rather than replaced with invented branding.
- Google Fonts and Unsplash remain external dependencies to preserve the reference design in this phase. Decide font self-hosting/privacy and local image delivery before launch. Their availability affects visual rendering, not builds or tests.
- Complete a desktop/mobile visual comparison in a browser. Automated checks confirm the homepage section classes and copy match the export, but the session's Computer Use tool stopped because it could not determine Chrome's URL confidently enough to enforce its policy. No visual browser sign-off is claimed.
- Complete hosting and domain/mail preservation decisions separately. No DNS changes have been made.

### Image replacement register

All slots are in `src/pages/index.pug`; exact source URLs remain there and in the preserved reference. None depicts verified Annie's work.

| Slot | Unsplash photo ID | Current crop/size treatment | Replacement needed |
| --- | --- | --- | --- |
| Hero | `photo-1616486338812-3dadae4b4ace` | 1600px request; 390/520/620px height; cover/centre | Approved lead interior/window photograph |
| Bespoke Curtains | `photo-1618221195710-dd6b41faaea6` | 1400px request; 300/420px height; cover | Genuine curtain work |
| Made-to-Measure Blinds | `photo-1600210492486-724fe5c67fb0` | 1200px request; 280/350px height; cover | Genuine blind work |
| Our Work, first | `photo-1616486029423-aaa4789e8c9a` | 1200px request; 280/360px height; cover | Approved project photograph |
| Our Work, second | `photo-1600607687939-ce8a6c25118c` | 1000px request; 240/300px height; cover | Approved project photograph |

The original `design-reference/shuffle-homepage/` remains untouched, including its old email, favicon and timestamped script for historical comparison. Those files are not published by this build.
