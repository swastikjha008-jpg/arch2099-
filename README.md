# ARCH//2099

> Your next-gen Linux desktop is here.

A polished, responsive, cyberpunk-themed landing page for a fictional next-generation Linux distribution. Built as a portfolio piece to demonstrate frontend implementation, component architecture, and motion design.

**[Live demo →](#)** &nbsp;•&nbsp; Built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Three.js

---

## Preview

<!--
Add a screenshot or screen recording here once deployed, e.g.:
![ARCH//2099 hero section](./docs/screenshot-hero.png)
-->

## Stack

| Layer        | Choice                                   |
| ------------ | ----------------------------------------- |
| Framework    | Next.js 14 (App Router)                   |
| Language     | TypeScript                                |
| Styling      | Tailwind CSS                              |
| Motion       | Framer Motion                             |
| 3D / WebGL   | Three.js + postprocessing (Hyperspeed bg) |
| Icons        | lucide-react                              |
| Fonts        | Chakra Petch, Inter, JetBrains Mono        |

## Features

- Full-viewport WebGL "hyperspeed" background in the hero, rendered with Three.js and bloom/SMAA postprocessing
- Glitch-effect wordmark, animated terminal boot sequence, and scroll-triggered animated stat counters
- Gooey, particle-based navigation menu
- Fully responsive: mobile, tablet, laptop, and large-desktop breakpoints
- Reduced-motion support (`prefers-reduced-motion`) baked into global styles
- Custom glitch-style 404 page
- Clean component architecture — one component, one job

## Project structure

```
app/
  layout.tsx          — fonts, metadata, root shell
  page.tsx             — assembles all landing page sections
  not-found.tsx         — custom 404 page
  globals.css           — design tokens, overlays, keyframes
components/
  Navbar.tsx            — logo, gooey nav, CTA, mobile menu
  Hero.tsx               — hero section (Hyperspeed bg + terminal panel)
  HyperspeedBackground.tsx — client wrapper that lazy-loads the WebGL scene
  Hyperspeed.tsx          — the WebGL "hyperspeed" effect itself
  GlitchText.tsx          — glitch-styled text component
  FuzzyText.tsx            — canvas-based fuzzy text (used on the 404 page)
  GooeyNav.tsx              — particle-based gooey navigation
  FeatureCard.tsx / FeaturesSection.tsx
  StatsGrid.tsx
  TerminalPanel.tsx
  PhilosophySection.tsx
  CTASection.tsx
  Footer.tsx
  ui/                       — Button, SectionHeading, GlowBorder, AnimatedCounter
lib/
  data.ts                    — all copy/content, separated from presentation
```

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Deploying to Render

1. Push this repository to GitHub.
2. In Render, create a new **Web Service** from the repo.
3. Settings:
   - **Build command:** `npm install && npm run build`
   - **Start command:** `npm run start`
   - **Node version:** 18+
4. Render will assign a port automatically — Next.js reads `process.env.PORT` out of the box, no config needed.

## Deploying to Vercel

This is a standard Next.js app — importing the repo into Vercel and clicking **Deploy** is all that's required.

## License

MIT — do whatever you'd like with this.
