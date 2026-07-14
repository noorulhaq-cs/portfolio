# Noor Ul Haq — Portfolio

A modern, animated personal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- **Next.js 16** (App Router) + TypeScript
- **Tailwind CSS v4** — design tokens (colors, fonts) live in `src/app/globals.css`
- **Framer Motion** — scroll reveals, hero animation, nav underline, floating icons
- **lucide-react** — icons

> Note on Shadcn UI: the brief listed Shadcn UI, but this build uses hand-crafted Tailwind components tuned to the design's specific tokens instead, since Shadcn's default primitives would have meant fighting its styling to match the custom palette/type system. If you'd like true Shadcn primitives (Dialog, Command palette, etc.) wired in, they can be added with `npx shadcn@latest init`.

## Content & customization

All copy, skills, projects, education, and experience live in one place:

```
src/lib/data.ts
```

Edit that file to update anything — no need to touch components for content changes.

### Resume

Replace `public/resume.pdf` with your real resume (same filename), or update `profile.resumeUrl` in `src/lib/data.ts` if you rename the file.

### Colors & fonts

Design tokens (light/dark palettes, fonts) are defined at the top of `src/app/globals.css` under `:root` and `.dark`. Fonts are loaded via `next/font/google` in `src/app/layout.tsx`:

- Display: Space Grotesk
- Body: Inter
- Mono (labels/tags): JetBrains Mono

### Contact form

The contact form opens the visitor's email client via a `mailto:` link (no backend required). To wire it to a real backend or service like Formspree/Resend, replace the `handleSubmit` function in `src/components/contact.tsx`.

### Social links, email, phone

Update `profile` in `src/lib/data.ts`.

## Deploying

This is a standard Next.js app — deploy directly to [Vercel](https://vercel.com/new) (recommended), or any host that supports Next.js (Netlify, Render, a Node server, etc.).

```bash
npm run build
npm start
```
