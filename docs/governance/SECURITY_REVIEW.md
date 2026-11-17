# SECURITY_REVIEW — Studio Costanzi & Pizzi website (cptax.it)

| | |
|---|---|
| Project | StudioPC (`C:\Projects\StudioPC`), GitHub `novodvorsky/studio-pizzi-costanzi` |
| Scope | whole project: one-page Next.js 15 site, IT/EN, no backend |
| Release / commit | `main` @ `fb22499` (fixes for L1, L2, L4 and security headers), 1 commit ahead of production `09b7d51`. No release tags |
| Deploy target | Vercel (`.vercel/`, `DEPLOYMENT.md`), domain `cptax.it` (`src/app/layout.tsx` `metadataBase`) |
| Review date | 17/11/2026 |

> This is a technical checklist for the owner and their legal adviser, not legal advice. The
> rules cited are the ones a site like this is usually checked against; Legal confirms what
> applies and how.

## Open blocking items (summary)

1. **L3 — Mandatory company information missing.** The footer bottom bar now always shows the register (*Iscritti all'Ordine dei Dottori Commercialisti e degli Esperti Contabili di Milano*) and, **only when filled**, the Partita IVA, the PEC and each partner's registration number. The values are not known yet: `firm.vatNumber`, `firm.pec` and `firm.registrations[].number` are empty in both `content/it.ts` and `content/en.ts`. For a VAT-registered professional firm, an Italian website is expected to show at least the **Partita IVA** (art. 35 DPR 633/1972), full name and address, PEC or email, and, as a regulated profession, the **professional register** with registration number and the applicable rules (D.Lgs. 70/2003 art. 7). **Stays open until the firm provides the values** (never invented). Consider also a link to the profession's rules (Codice deontologico CNDCEC).

## Release 17/11/2026 — `fb22499`

- **Dependencies changed**: `next` 15.5.19 → 15.5.29 (MIT), `eslint-config-next` 15.5.19 → 15.5.29 (MIT, dev only); transitive updates from `npm audit fix`. No new dependencies.
- **`npm audit`** (17/11/2026, after the change): 2 findings, 1 high + 1 moderate, both the `postcss` copy bundled inside `next` (see §2). 0 critical.
- **Secrets scan**: `grep` for api key / secret / token / password in `src/`, `content/`, `next.config.js` → none found.
- **New personal-data processing**: none. The new code only reads and writes two technical `localStorage` keys (`spc-lang`, `spc-map-consent`) that never leave the browser.
- **Verified in the browser** (production build, desktop and 375px width): no request to Google before "Mostra mappa"; security headers present (`curl -I`); `/privacy` and `/cookie` render in IT and EN.

## 1. Data governance

| # | Flow | Personal data | Third parties | Note |
|---|---|---|---|---|
| D1 | Contact form → builds a `mailto:` link (`Contact.tsx:64`) → the visitor's own mail client | name, email, phone, message | none: **no server receives the data** | good choice, minimal risk. The privacy notice must still cover emails received at `info@cptax.it` |
| D2 | Page view → Vercel | IP address, request logs | Vercel (US) | the privacy policy should name Vercel as hosting provider/processor |
| D3 | Google Maps iframe | IP, cookies | Google | loaded **only after the visitor clicks "Mostra mappa"** (`src/components/MapEmbed.tsx`); choice stored in localStorage, revocable from `/cookie`. L2 resolved |
| D4 | Fonts | none at runtime | — | `next/font/google` self-hosts the fonts at build time: **no runtime request to Google** ✅ (this avoids the "Google Fonts" GDPR issue) |

No analytics, tracking pixels, chat widgets or AI services found (grep of `src/`, `content/`).
Encryption in transit: HTTPS by Vercel. Security headers set in `next.config.js` (17/11/2026): CSP (`frame-src` limited to www.google.com and maps.google.com, `frame-ancestors 'none'`, `object-src 'none'`), HSTS (2 years, includeSubDomains), `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` (camera, microphone, geolocation, payment, usb, browsing-topics off). The CSP keeps `'unsafe-inline'` for scripts and styles: Next.js inline bootstrap scripts and Framer Motion inline styles need it without per-request nonces.

## 2. Dependencies & licensing

`npm audit` after the fix (17/11/2026): `next` and `eslint-config-next` 15.5.19 → **15.5.29** (latest 15.x), `npm audit fix`, and `brace-expansion` updated within its range. **Remaining: 1 high + 1 moderate, the same issue**: `postcss` ≤ 8.5.22 bundled inside `next` itself (`node_modules/next/node_modules/postcss`). It runs only at build time on the site's own CSS, so no attacker-controlled CSS reaches it. The only fix is `next@16` (major upgrade) → accepted residual risk, to revisit with the Next 16 upgrade.
Licenses: next, react, framer-motion, lucide-react (ISC), clsx, tailwind — MIT/ISC, compatible.
`.agents/` and `.claude/` (26 files: design and animation skills) are committed to the public repo. They aren't served by the site; it's just tidiness.

## 3. Threat model

Static site, no login, no database, no server-side form handling: the attack surface is minimal.
Main residual risks: domain/DNS or Vercel/GitHub account takeover → enable 2FA on Vercel, GitHub and the domain registrar (**to be confirmed by the owner**). `next` is now on the latest 15.x patch (L4 resolved); the residual `postcss` finding is build-time only.

| Threat (STRIDE) | Entry point | Mitigation |
|---|---|---|
| Clickjacking (Tampering) | site framed by another origin | CSP `frame-ancestors 'none'` ✅ |
| XSS (Tampering / Info disclosure) | none: no user-generated content is rendered; the form only builds a `mailto:` link | React escaping; CSP restricts sources to `'self'` (inline allowed, see COE C6) |
| Downgrade / MITM (Info disclosure) | HTTP access | HTTPS by Vercel + HSTS 2 years ✅ |
| Third-party data leak (Info disclosure) | Google Maps iframe | loaded only after consent (L2) ✅; `frame-src` limited to Google ✅ |
| Supply chain (Tampering) | npm dependencies | lock file committed, `npm audit` per release; residual `postcss` in `next` |
| Account takeover (Spoofing) | GitHub, Vercel, registrar | 2FA: *to be confirmed by the owner* |

## 4. Auth mechanisms

None needed. No secrets in the repo (no `.env`; `DEPLOYMENT.md` only mentions where to put them if a form API is added later).

## 5. Professional and consumer rules (questions for Legal / the firm)

1. **Advertising by commercialisti** (Codice deontologico CNDCEC; art. 4 DPR 137/2012): advertising must be truthful, accurate and not misleading. Can the firm document the numbers on the page: **"500+ clienti"**, **"20+ anni"**, **"dal 2002"** (`content/it.ts:16-18, 37-38`)? **"100% Dedizione al Cliente"** (`:39`) is a slogan, not a fact: keep it or remove it? The "massima precisione" and "pieno rispetto delle scadenze" wording is fine as long as it isn't presented as a guarantee.
2. **Titles**: "Dott. Giuseppe Costanzi" and "Rag. Mario Stefano Pizzi" (`content/it.ts:33`). Titles and register sections must match the Albo entries exactly.
3. **Privacy and cookie policy** (L1, now at `/privacy` and `/cookie`). Legal should confirm three choices in the draft: (a) **retention**: enquiry emails deleted within 12 months if no engagement follows; (b) the firm's **email provider**, described generically as a processor; (c) the transfer basis for **Vercel** (EU-U.S. Data Privacy Framework or SCCs). The controller block shows P.IVA and PEC automatically once filled (L3). The contact-form note no longer says "accetti": the legal basis is pre-contractual steps / legitimate interest, not consent.
4. **Accessibility**: the European Accessibility Act (D.Lgs. 82/2022) covers specific services (e-commerce, banking, transport, e-books…). An informational site of a professional firm is **likely out of scope**, and micro-enterprises are exempt for services. The commit `447a947` already fixed accessibility issues: good practice, not a legal gap.
5. **Insurance**: is the professional liability insurance mentioned where required (art. 5 DPR 137/2012 requires informing clients; not necessarily on the site)?

## EU AI Act and AI rules

**EU AI Act: not applicable to the website. No AI components found** (checked 17/11/2026: no AI SDKs or model APIs, no chatbot, no AI-generated images in `public/`, which only contains `logo.svg` and `favicon.svg`; share images are drawn by code in `opengraph-image.tsx`).

- **The site having been built with AI tools creates no AI Act obligation.** The Act regulates AI systems placed on the market or used, and AI-generated content in specific cases. It doesn't regulate code or a website written with AI assistance.
- **Art. 50(4)** (AI-generated text published to inform the public on matters of public interest) does not apply to a firm's own marketing page, and in any case doesn't apply when a person reviews the text and takes editorial responsibility. **The firm should review and approve all the copy**; that is also what professional advertising rules require (point 5.1).
- **Copyright**: in the EU and Italy, text produced by AI without meaningful human creative input is generally not protected by copyright (in Italy, Law 132/2025 art. 25 protects works only when they result from human intellectual effort). The firm's legal-information content is not affected. Just don't assume the AI-written copy is exclusively yours.
- **Italian AI law (Law 132/2025, in force since 10/10/2025), art. 13**: when a *professional* (an intellectual profession, such as a commercialista) uses AI **in the services provided to clients**, they must tell the client which AI systems are used, clearly and simply, and AI may only support, not replace, the professional's work. **This concerns the firm's work, not the website.** If the studio uses AI tools for client work (drafting, analysis, tax returns), it needs a sentence in its engagement letter (*lettera d'incarico*) or client information. → For the firm and Legal.

## Sign-off

| Gate | Reviewer | Date | Decision | Conditions |
|---|---|---|---|---|
| InfoSec | | | | |
| Legal | | | | |

## Resolved

| # | Item | Resolved | How |
|---|---|---|---|
| L1 | No privacy policy page | 17/11/2026 | `/privacy` and `/cookie` added (IT/EN through the language context, `src/components/LegalPage.tsx`), linked from the footer bottom bar and from the contact-form note, listed in `sitemap.ts` with their own canonical URLs. Privacy content per GDPR art. 13: controller, data (mailto form with no server; Vercel logs; Google only after click), purposes and legal bases (art. 6.1.b / 6.1.f), retention, recipients, rights (arts. 15–22), complaint to the Garante. Three points for Legal in §5.3 |
| L2 | Google Maps loaded before consent | 17/11/2026 | Click-to-load placeholder (`MapEmbed.tsx`): address, note with Cookie Policy link, "Mostra mappa" button (real button, visible focus, note linked with `aria-describedby`). Choice stored in localStorage (`spc-map-consent`), revocable from `/cookie`. Verified in the browser at desktop and 375px width: **no request to google.com before the click**; iframe and Google request only after it; choice persists on reload; revoking clears it |
| L4 | Vulnerable dependencies (1 critical, 4 high) | 17/11/2026 | `next` / `eslint-config-next` → 15.5.29, `npm audit fix`. The critical and the 4 high are resolved; residual `postcss` inside `next` documented in §2 (needs Next 16) |
