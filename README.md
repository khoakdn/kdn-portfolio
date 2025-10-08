# React Portfolio (Minimal, Clean, Structured)

A production‑ready starter using **React + Vite + Tailwind v4** with routes and a case‑study template.
Focus: NL internships (frontend / UI‑UX), fast performance, and scannable case studies.

## Quick start
```bash
npm i
npm run dev
```
Visit http://localhost:5173

## Scripts
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run preview` — preview the build locally

## Tech
- React 19, React Router
- Vite (blazing fast dev + static deploy)
- Tailwind v4 (`@tailwindcss/vite`) + `@tailwindcss/typography`, `@tailwindcss/forms`

## Structure
```
src/
  components/       UI building blocks
  data/             project metadata (edit here to add projects)
  lib/              helpers
  routes/           pages (Home, Work, CaseStudy, About, Contact)
```

## Add a project
1. Add an object to `src/data/projects.json` (use the existing shape).
2. Put a hero image at `public/images/your-hero.webp` (optional).
3. Write your case study content inside `routes/CaseStudy.tsx` or evolve to per‑project MD/MDX later.

## Minimal design rules
- 12‑col grid via container (`Section`), lots of whitespace
- grayscale + a single accent (`--brand`)
- typography via `@tailwindcss/typography`

## Accessibility & Performance
- semantic landmarks, alt text, focus styles
- Lighthouse targets: 90+ on Performance, A11y, SEO
- images: WebP/AVIF, explicit width/height, `loading="lazy"`

## Deployment
- Vercel: import this repo, set framework to Vite; auto deploy on push
- GitHub Pages: add `gh-pages` if you prefer (not included by default)

## Commit guide (so you can show process)
Create a public repo and commit small steps:

- `chore: bootstrap Vite React TS app`
- `feat: add Tailwind v4 with Vite plugin`
- `feat(routes): Home, Work, CaseStudy, About, Contact`
- `feat: project content model + cards`
- `style: apply minimalist typography, grid, spacing`
- `feat(case-study): sticky toc + prose`
- `chore(a11y): alt text, focus-visible`
- `chore: add CI build workflow`

## Notes
- Swap `you@example.com` with your email in Footer and Contact page.
- Replace sample projects and images with your own.
- If you want blog/MDX, we can add it later.
