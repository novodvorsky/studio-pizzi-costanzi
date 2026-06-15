# Studio Costanzi & Pizzi – Deployment Guide

## Quick Start (Local Development)

```bash
npm install
npm run dev
```

Open http://localhost:3000

---

## Vercel Deployment

### Option 1: CLI (Recommended)

```bash
npm install -g vercel
vercel login
vercel
```

Follow the prompts. Vercel will auto-detect Next.js and configure everything.

### Option 2: GitHub Integration

1. Push this project to a GitHub repository
2. Go to https://vercel.com/new
3. Import the repository
4. Click **Deploy** — Vercel detects Next.js automatically

### Environment Variables (Vercel Dashboard)

If you connect a contact form API (Formspree, Resend, etc.), add the keys in:
**Vercel Dashboard → Settings → Environment Variables**

---

## Customization Checklist

### 1. Replace Placeholder Content

| File | What to change |
|------|---------------|
| `content/it.ts` | Phone number (`+39 02 XXXXXXX`), email, P.IVA |
| `content/en.ts` | Same as above, in English |
| `src/app/layout.tsx` | `metadataBase` URL, Google verification code |
| `src/app/sitemap.ts` | Production URL |
| `src/app/robots.ts` | Production URL |

### 2. Hero Background Photo

To replace the CSS hero with the actual Milan Centrale photo:

1. Add the photo as `public/images/hero.jpg` (1920×1080+, WebP preferred)
2. In `src/components/Hero.tsx`, replace the `<section>` opening:

```tsx
// Before:
<section className="... hero-bg" ...>

// After:
<section className="... relative" style={{ backgroundColor: '#0a0505' }} ...>
  <Image
    src="/images/hero.jpg"
    alt="Milano Centrale"
    fill
    priority
    className="object-cover opacity-30"
    sizes="100vw"
  />
```

### 3. Contact Form — Connect Email Service

In `src/components/Contact.tsx`, find the comment block and replace with your provider:

**Formspree (simplest):**
```tsx
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  body: JSON.stringify(formData),
})
if (!res.ok) throw new Error()
```

**Resend (via Next.js API route):**
Create `src/app/api/contact/route.ts` and use the Resend SDK.

### 4. Google Maps

In `src/components/Location.tsx`, replace the iframe `src` with your real Google Maps embed URL:
1. Go to https://www.google.com/maps
2. Search "Via Panfilo Castaldi 8 Milano"
3. Share → Embed a map → Copy HTML → Use the `src` URL

### 5. OG Image

Create a 1200×630px branded image and save as `public/og-image.jpg`.

### 6. Favicon ICO

Convert `public/favicon.svg` to `public/favicon.ico` using:
- https://favicon.io/favicon-converter/
- Or: `npx @svgr/cli public/favicon.svg`

### 7. Google Analytics (Optional)

In `src/app/layout.tsx`, add your GA4 tracking after the `<body>` tag:
```tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
```

---

## SEO Checklist

- [ ] Update `content/it.ts` meta title/description
- [ ] Update `src/app/layout.tsx` metadata
- [ ] Add Google Search Console verification code
- [ ] Submit sitemap: `https://yourdomain.it/sitemap.xml`
- [ ] Add OG image (1200×630px)
- [ ] Register on Google My Business

---

## Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| Next.js | 14.x | Framework (App Router) |
| React | 18.x | UI |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 3.x | Styling |
| Framer Motion | 11.x | Animations |
| Lucide React | Latest | Icons |

---

## Project Structure

```
StudioPC/
├── content/
│   ├── it.ts          ← Italian translations (edit here)
│   └── en.ts          ← English translations (edit here)
├── public/
│   ├── favicon.svg
│   ├── logo.svg
│   └── og-image.jpg   ← Add this
├── src/
│   ├── app/
│   │   ├── layout.tsx  ← SEO metadata
│   │   ├── page.tsx    ← Home page
│   │   ├── globals.css ← Global styles
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── WhyUs.tsx
│   │   ├── Location.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── Logo.tsx
│   └── contexts/
│       └── LanguageContext.tsx
├── next.config.js
├── tailwind.config.ts
└── package.json
```
