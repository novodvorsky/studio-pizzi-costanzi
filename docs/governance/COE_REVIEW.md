# COE_REVIEW — Studio Costanzi & Pizzi website (cptax.it)

| | |
|---|---|
| Project | StudioPC (`C:\Projects\StudioPC`) |
| Scope | whole project |
| Release / commit | `main` @ `fb22499` (1 commit ahead of production `09b7d51`). No release tags |
| Deploy target | Vercel, automatic production deploy on push to `main` (`novodvorsky/studio-pizzi-costanzi`), domain `cptax.it` |
| Review date | 17/11/2026 (updated for release `fb22499`) |

## Open blocking items (summary)

None at architecture level. The remaining blocking item is legal: **L3** (firm details) in `SECURITY_REVIEW.md`.

## Release 17/11/2026 — `fb22499`

Changes since production `09b7d51` (verified with `git log 09b7d51..HEAD`, one commit):

- New static routes `/privacy` and `/cookie` (`src/app/privacy/page.tsx`, `src/app/cookie/page.tsx`), both rendered by the client component `src/components/LegalPage.tsx` from the IT/EN content files, with their own canonical URLs.
- Google Maps behind a click-to-load placeholder (`src/components/MapEmbed.tsx`); the visitor's choice is stored in `localStorage` (`src/lib/mapConsent.ts`). No server component or new external service.
- Security headers on all routes (`next.config.js` `headers()`), resolving **C3**.
- `next` and `eslint-config-next` 15.5.19 → 15.5.29 (patch releases, same major).
- Verified: `npm run build` and `npm run lint` pass; production build checked in the browser at desktop and 375px width (17/11/2026).
- Rollback: unchanged (previous Vercel deployment `09b7d51` can be promoted again).

## 1. Architecture

A static Next.js 15 site (App Router): the one-page home plus `/privacy` and `/cookie`. Tailwind, framer-motion, with IT/EN content in `content/it.ts` and `content/en.ts` and a client-side language switch (`src/contexts/LanguageContext.tsx`). Hosted on Vercel. No backend, database or API. The contact form opens the visitor's mail client (`mailto:`). Google Maps loads only after the visitor opts in. Browser storage: `localStorage` keys `spc-lang` and `spc-map-consent` only. Generated SEO assets: sitemap, robots, Open Graph and Twitter images, icons.

| # | Deviation / note | Proposal |
|---|---|---|
| C1 | language switch is client-side only: the English version has no separate URL | fine for now. For SEO in English, use `/en` routes with `hreflang` |
| C2 | the `mailto:` form depends on the visitor having a mail client | acceptable and privacy-friendly. A form API (Resend, Formspree) would add a processor and a privacy-policy entry |
| C3 | no security headers | resolved 17/11/2026, see *Resolved* |
| C6 | CSP allows `'unsafe-inline'` scripts and styles (needed by Next.js bootstrap scripts and framer-motion without nonces) | acceptable for a static site with no user-generated content; nonce-based CSP would need dynamic rendering |
| C7 | `next lint` is deprecated and will be removed in Next.js 16 | migrate to the ESLint CLI when upgrading to Next 16 (`npx @next/codemod next-lint-to-eslint-cli .`) |
| C4 | `.dev-server*.log` files in the project root | already git-ignored (`.gitignore:12`) ✅ |
| C5 | rollback | Vercel keeps previous deployments (provider feature) |

## 2. Tech stack justification

| Choice | Reason |
|---|---|
| Next.js + Vercel | *to be filled by the owner* (static generation, free hosting tier, preview deploys) |
| Self-hosted Google fonts via `next/font` | no runtime calls to Google (privacy) |

## 3. Scalability

A static site served from Vercel's CDN: no scalability concerns. Expected traffic: *to be filled* (low).

## Sign-off

| Gate | Reviewer | Date | Decision | Conditions |
|---|---|---|---|---|
| CoE | | | | |

## Resolved

| # | Item | Resolved | How |
|---|---|---|---|
| C3 | No security headers | 17/11/2026 | `next.config.js`: CSP, HSTS, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` on all routes; verified with `curl -I` against the production build |
