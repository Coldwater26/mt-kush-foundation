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

## Visitor analytics (Google Analytics 4)

The website uses measurement ID `G-NDCKQTHES6` in the GA4 property Montana Kush
Community Foundation, owned through `pepper@montanakush.org`.
For replacement setup, create a GA4 property named Montana Kush Community
Foundation, with the America/Denver reporting timezone, and a Web data stream
for `https://www.montanakush.org`.

Put the public measurement ID in `analytics.config.json`, or set
`GA_MEASUREMENT_ID` in Render's build environment, then rebuild/deploy.
No password or Analytics API secret belongs in the repository. An empty ID
leaves tracking disabled; an invalid nonempty ID fails the build.

The final export step adds the tag to every HTML page, including the standalone
grant and survey pages. Tracking runs only on montanakush.org and
www.montanakush.org, excluding local/Render previews. Google signals and ad
personalization are disabled. Keep enhanced measurement Page views enabled,
including browser-history changes, to count Next.js client-side navigation.
Do not add a second pageview tracker. For the initial visitor-only setup, turn
off the other enhanced measurement options, including form interactions.

After deploying, open the live homepage, navigate to another site page, and
visit `/grants.html` and `/survey/`. Check GA4 Realtime and browser network
requests to verify collection and that a page view is not duplicated.
Realtime verifies incoming activity; Traffic acquisition shows session
source/medium and Pages and screens shows popular pages. Use UTM-tagged links
for email/social/QR campaigns, for example
`https://www.montanakush.org/?utm_source=newsletter&utm_medium=email&utm_campaign=community_grants`.
Analytics starts at activation and cannot reconstruct earlier visits.

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

Applications request $500, $1,000, or $1,500. Required fields are checked before a review screen. The project budget accepts free text, including numbers, ranges, words, and symbols; an exact total is not required. Applicants can edit their answers, then submit by HTTPS POST to FormSubmit for delivery to `pepper@montanakush.org`. Default CAPTCHA remains enabled. The page discloses FormSubmit and does not save data in browser storage.

Before announcing applications are open, submit a clearly labeled test, activate the FormSubmit confirmation sent to `pepper@montanakush.org`, and verify a subsequent test arrives in that inbox. Delivery is not verified until this step is complete. No API key or Render server migration is required. Use the provider's confirmation screen; do not claim delivery based solely on client-side form validation.
