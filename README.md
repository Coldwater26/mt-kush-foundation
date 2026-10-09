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

## Grant application

`public/grants.html` is the complete standalone grant page, exported unchanged to `/grants.html`. Navigation and the Programs page link to it. Edit that HTML directly; it uses the approved Foundation branding and six program areas.

Applications request $500, $1,000, or $1,500. Required fields and the project budget are checked before a review screen. Applicants can edit their answers, then submit by HTTPS POST to FormSubmit for delivery to `pepper@montanakush.org`. Default CAPTCHA remains enabled. The page discloses FormSubmit and does not save data in browser storage.

Before announcing applications are open, submit a clearly labeled test, activate the FormSubmit confirmation sent to `pepper@montanakush.org`, and verify a subsequent test arrives in that inbox. Delivery is not verified until this step is complete. No API key or Render server migration is required. Use the provider's confirmation screen; do not claim delivery based solely on client-side form validation.
