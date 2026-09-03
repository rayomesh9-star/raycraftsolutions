# codebyray — Portfolio

A premium, futuristic portfolio site for **codebyray** — *Design • Develop • Elevate.*

Built with **Next.js 16**, **React 19**, **Tailwind CSS v4**, and **Framer Motion**.

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **Fonts:** Space Grotesk (display), Inter (body), JetBrains Mono (code)

## Brand

- **Base / Background:** near-black `#0A0A0A` – `#121212`
- **Primary Accent:** neon green `#39FF14` – `#7CFF00`
- **Secondary Metal:** chrome gradient `#C9C9C9` → `#F5F5F5` → `#8A8A8A`
- **Neutrals:** charcoal `#1A1A1A`, `#232323`

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm start
```

## Deploy

The easiest path is [Vercel](https://vercel.com/new):

```bash
npm i -g vercel
vercel
```

## Project structure

```
src/
  app/
    layout.tsx        # root layout, fonts, metadata, OG
    page.tsx          # home page composition
    globals.css       # Tailwind + brand utilities (chrome, neon, glass, neu)
  components/
    sections/         # Hero, About, Skills, Projects, Process, Testimonials, Contact, Navbar, Footer
    ui/               # CursorGlow, FadeUp reveal helpers
  lib/
    utils.ts          # cn() helper
public/
  favicon.svg         # chrome-R + neon </> logomark
  og.svg              # OpenGraph card (1200x630)
```

## License

© codebyray. All rights reserved.
