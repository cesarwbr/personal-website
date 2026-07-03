# Implementation Plan: World Cup 2026 site at `cesarwilliam.com/worldcup`

## Overview
Deploy `~/dev/extensions/world-cup-monorepo/apps/website` **in place** as its own Vercel
project (no copy), configure it with `basePath: '/worldcup'`, and **proxy** it from the
personal site via a Next.js rewrite. The two apps stay fully isolated — the World Cup app
keeps its Tailwind v4, next-intl (5 languages), and middleware untouched; the personal site
keeps its CSS Modules with zero collision risk. This is the Next.js **Multi-Zones** pattern.

## Architecture Decisions
- **Separate app + proxy (Multi-Zones), not a merge.** Chosen to avoid Tailwind v4's
  global reset restyling the personal site and to avoid reworking next-intl's `[locale]`
  middleware into a nested segment. Cost: a second Vercel deployment.
- **Keep all 5 languages** (en/es/pt/fr/ar, RTL Arabic) exactly as the source app has them.
- **Single source of truth for URLs.** Every canonical/OG/sitemap URL derives from
  `SITE_URL` (`= NEXT_PUBLIC_SITE_URL`). Setting that one env var to
  `https://cesarwilliam.com/worldcup` makes all SEO output correct.
- **Deploy in place, no copy.** The app stays at `apps/website` in the monorepo; Vercel's
  **Root Directory** feature points the deployment at it. Self-contained app + pinned
  `outputFileTracingRoot` make this safe.

## Key facts confirmed
- App is self-contained: no `@world-cup/*` / `workspace:` deps; `@/*` → `./src/*`.
- `localePrefix: 'as-needed'` → default `en` has no prefix; others are `/worldcup/es` etc.
- `robots.ts` / `sitemap.ts` / `manifest.ts` live at app root → under basePath they serve
  at `/worldcup/robots.txt`, `/worldcup/sitemap.xml`, and won't collide with the personal
  site's own root `robots.txt` / `sitemap.xml`.
- No live backend — uses static `demo-data.ts`. Only env vars are
  `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_CHROME_STORE_URL`.

---

## Task List

### Phase 1: Configure the in-place app

#### Task 2: Add `basePath` and prefix-aware config
**Description:** Set `basePath: '/worldcup'` in `next.config.ts` so all routes and assets
serve under `/worldcup`. Confirm `assetPrefix` is not separately required (basePath covers
same-origin assets in this Multi-Zones layout).

**Acceptance criteria:**
- [ ] `next.config.ts` sets `basePath: '/worldcup'`.
- [ ] Existing `outputFileTracingRoot`, `images.remotePatterns`, and `headers()` retained.
- [ ] Local asset refs (e.g. `EMBLEM_URL = '/world-cup-2026.png'`) resolve to
      `/worldcup/world-cup-2026.png` automatically (no manual edits needed — Next prefixes them).

**Verification:**
- [ ] `bun run build` succeeds.
- [ ] `bun run start`, then `curl -I localhost:3000/worldcup` → 200; `localhost:3000/` → 404.

**Dependencies:** None
**Files likely touched:** `apps/website/next.config.ts`
**Estimated scope:** Small

#### Task 3: Point all canonical URLs at the production path
**Description:** Set production env so every SEO/OG/sitemap/manifest/JSON-LD URL points at
`https://cesarwilliam.com/worldcup`. No code change — it all flows through `SITE_URL`.

**Acceptance criteria:**
- [ ] `.env.production` (or Vercel env) sets `NEXT_PUBLIC_SITE_URL=https://cesarwilliam.com/worldcup`.
- [ ] `NEXT_PUBLIC_CHROME_STORE_URL` set to the real store listing (or kept as default).
- [ ] `.env.example` updated to document the new canonical value.

**Verification:**
- [ ] Build, then check `/worldcup/sitemap.xml` lists `…/worldcup/`, `…/worldcup/es`, etc.
- [ ] Check `/worldcup/robots.txt` `host` and `sitemap` lines use the `/worldcup` base.
- [ ] View-source a page: `<link rel="canonical">` and `og:url` use `cesarwilliam.com/worldcup`.

**Dependencies:** Task 2
**Files likely touched:** `.env.production`, `.env.example`
**Estimated scope:** Small

### Checkpoint: Standalone app correct
- [ ] App builds and runs standalone, fully served under `/worldcup`.
- [ ] All 5 locales reachable: `/worldcup`, `/worldcup/es`, `/worldcup/pt`, `/worldcup/fr`, `/worldcup/ar`.
- [ ] Arabic renders RTL; locale switcher navigates within `/worldcup`.
- [ ] SEO URLs all point at `cesarwilliam.com/worldcup`.

---

### Phase 2: Deploy the zone

#### Task 4: Deploy the World Cup app as its own Vercel project (in place)
**Description:** Create a new Vercel project from the `world-cup-monorepo` repo with
**Root Directory = `apps/website`** and "Include source files outside of the Root Directory"
enabled (so the root `bun.lock` is available). Set the two `NEXT_PUBLIC_*` env vars and
deploy to production.

**Acceptance criteria:**
- [ ] New Vercel project created with Root Directory `apps/website`; env vars set for Production.
- [ ] Production deploy succeeds; note the stable production alias (e.g. `worldcup-website.vercel.app`).

**Verification:**
- [ ] `https://worldcup-website.vercel.app/worldcup` loads the home page.
- [ ] `https://worldcup-website.vercel.app/worldcup/es` loads Spanish.

**Dependencies:** Task 3
**Files likely touched:** Vercel project config (no repo files)
**Estimated scope:** Small

### Phase 3: Wire the proxy from the personal site

#### Task 5: Add the `/worldcup` rewrite in the personal site
**Description:** Append rewrites to `personal-website/next.config.js` so the personal site
transparently proxies `/worldcup` and everything under it to the zone deployment.

**Acceptance criteria:**
- [ ] `rewrites()` returns the existing entries **plus**:
      `{ source: '/worldcup', destination: 'https://worldcup-website.vercel.app/worldcup' }`
      and `{ source: '/worldcup/:path*', destination: 'https://worldcup-website.vercel.app/worldcup/:path*' }`.
- [ ] Existing `/privacy`, `/terms-of-service`, etc. rewrites and the `/nfl-live-hub` redirect are preserved.

**Verification:**
- [ ] `yarn build` (personal site) succeeds.
- [ ] Local: `yarn start`, then `localhost:3000/worldcup` proxies the World Cup home.
- [ ] After deploy: `https://cesarwilliam.com/worldcup` and `/worldcup/es` load correctly;
      assets (CSS/fonts/images) 200 (no broken `/worldcup/_next/...`).

**Dependencies:** Task 4
**Files likely touched:** `personal-website/next.config.js`
**Estimated scope:** Small

### Checkpoint: End-to-end
- [ ] `cesarwilliam.com/worldcup` serves the World Cup site through the personal domain.
- [ ] All locales, locale switcher, and middleware geo-redirect behave (geo redirect lands on `/worldcup/<lang>`).
- [ ] No regressions on the existing personal site (home, /about, /uses, /olympic-games-paris-2024).

---

### Phase 4: Polish (optional)

#### Task 6: Cross-link sitemaps/discovery
**Description:** Optionally reference `/worldcup/sitemap.xml` from the personal site's
`robots.ts`/`sitemap.ts` (or Search Console) so the zone's pages are discoverable.

**Acceptance criteria:**
- [ ] Personal `robots.txt` or sitemap index points at the World Cup sitemap (or it's submitted to GSC).

**Dependencies:** Task 5
**Estimated scope:** XS

---

## Risks and Mitigations
| Risk | Impact | Mitigation |
|------|--------|------------|
| Tailwind v4 global reset leaks into personal site | High | Avoided by isolation — separate app/deploy; reset never loads on personal pages. |
| `_next` asset paths break behind the proxy | High | `basePath` prefixes assets to `/worldcup/_next/...`; the `:path*` rewrite covers them. Verify asset 200s post-deploy. |
| next-intl middleware matcher misbehaves under basePath | Med | Next strips basePath before matcher eval; verify `/worldcup` (en) and geo-redirect to `/worldcup/<lang>` locally. |
| Rewrite host hardcoded; zone URL changes | Low | Use the stable Vercel production alias/domain as the rewrite destination, not a per-deploy URL. |
| Two robots/sitemaps confuse crawlers | Low | They live on distinct paths; cross-link in Task 6 and set canonical via `SITE_URL`. |

## Open Questions
1. **Chrome store URL:** keep the placeholder `NEXT_PUBLIC_CHROME_STORE_URL` default, or
   point it somewhere real?
2. **Custom domain on the zone project:** optional. The rewrite works against the
   `*.vercel.app` alias; a custom domain is not required for Multi-Zones.
