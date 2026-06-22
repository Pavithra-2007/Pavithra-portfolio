# Pavithra Muthusamy — Portfolio

A premium, minimal personal portfolio built with React, JavaScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

To build for production:

```bash
npm run build
npm run preview
```

## Before you launch

1. **Photo** — drop your background-removed photo into `public/profile.png`
   (transparent PNG, roughly square, looks best). The hero frame will pick it
   up automatically; until then it shows your initials as a placeholder.
2. **Resume** — add your resume as `public/resume.pdf`. The "Download Resume"
   button in the hero already links to `/resume.pdf`.
3. **Content** — everything text-based (name, bio, projects, skills,
   education, achievements, links) lives in one place:
   `src/data/content.js`. Edit that file to update the whole site.
4. **Certificates** — the certificate gallery in `src/components/Certificates.jsx`
   currently uses placeholder cards. Swap in real certificate images by adding
   them to `public/certificates/` and updating the `certificates` array in
   `src/data/content.js` with an `image` field, then rendering an `<img>`
   instead of the placeholder text.
5. **Contact form** — the form in `src/components/Contact.jsx` currently
   only shows a "sent" confirmation locally. Wire it up to a service like
   Formspree, EmailJS, or your own backend to actually deliver messages.

## Project structure

```
src/
  components/   reusable section + UI components
  data/         content.js — all site copy and data in one file
  App.jsx       assembles the page
  index.css     Tailwind + global styles
tailwind.config.js   design tokens (colors, fonts, motion)
```

## Design notes

- Palette: white / off-white / near-black ink / gray / a single blue accent
  (`#2563EB`) — no gradients, no colorful shadows.
- Type: Inter for body text, Inter Tight for display headings.
- Motion: fade/slide-up reveals on scroll, soft hover lifts, a subtle floating
  + mouse-parallax photo frame in the hero. Nothing bounces or spins.
- Navigation: a floating vertical pill on desktop (right edge), collapses to
  a floating icon bar on mobile.
