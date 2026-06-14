# Montana Kush Community Foundation Website

A Next.js website for `montanakush.org`, built around the Montana Kush Community Foundation's Montana community work.

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Lucide icons

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

For a static production preview:

```bash
npm run build
npm run preview
```

## Structure

- `app/` contains the public routes: Home, About, Programs, Impact, Partners, Stories, Contact, and Sponsor / Donate.
- `components/` contains reusable UI sections and content modules.
- `lib/programs.ts` contains program, impact, and story placeholder data.
- `lib/site.ts` contains site metadata, navigation, keywords, and sponsor URL.
- `public/assets/` contains placeholder logo and landscape assets.
- `render.yaml` configures Render Static Site deployment for `www.montanakush.org`.

## Brand Assets Needed

Replace these placeholders after final brand approval:

- `public/assets/montana-kush-logo.svg` is the current public Montana Kush logo copied from the public Montana Kush site for preview use. Replace it with approved brand files before production if leadership provides official assets.
- `public/assets/logo-placeholder.svg`
- `public/assets/mt-kush-foundation-lockup-placeholder.svg`
- `public/assets/mt-kush-foundation-lockup-placeholder-light.svg`
- `public/assets/hero-mountains-placeholder.svg`
- `public/assets/montana-landscape-placeholder.svg`

Do not treat the current placeholder lockup as a final legal logo.

## Donation Integration

The Sponsor / Donate form is ready for a future donation provider such as Stripe, Donorbox, or Givebutter.
