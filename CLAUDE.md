@AGENTS.md

# Portfolio Codebase — AI Assistant Guide

## Project Overview

Japanese-language single-page portfolio site for an AI implementation consultancy. Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4. Deployed as a static marketing site showcasing services, case studies, testimonials, and a contact section.

**Read `node_modules/next/dist/docs/` before writing any Next.js code** — this is Next.js 16 with breaking changes from earlier versions.

---

## Tech Stack

| Layer | Tool | Version |
|---|---|---|
| Framework | Next.js (App Router) | 16.2.4 |
| UI | React | 19.2.4 |
| Language | TypeScript (strict) | ^5 |
| Styling | Tailwind CSS v4 | ^4 |
| CSS processing | PostCSS via `@tailwindcss/postcss` | ^4 |
| Linting | ESLint flat config | ^9 |

---

## Directory Structure

```
src/
  app/
    layout.tsx       # Root layout: fonts, metadata, body wrapper
    page.tsx         # Single-page portfolio (all content lives here)
    globals.css      # Tailwind import, CSS custom properties, utility classes
    favicon.ico
  components/
    FadeInSection.tsx   # Scroll-triggered fade-in wrapper (client component)
    FaqAccordion.tsx    # Collapsible FAQ list (client component)
public/              # Static SVG assets (next.svg, vercel.svg, etc.)
```

---

## Key Conventions

### Imports
- Use the `@/` alias for all imports from `src/`: `import Foo from "@/components/Foo"`.
- Never use relative paths like `../../components/`.

### Styling
- **Tailwind utility classes inline** — no CSS modules, no `styled-components`.
- Global utility classes defined in `globals.css`: `.section-title`, `.card-panel`, `.input-field`, `.fade-in-up`. Prefer these over duplicating the same Tailwind combos.
- Design tokens via CSS custom properties in `:root`:
  - `--background: #1a365d` (dark navy)
  - `--foreground: #ffffff` (white)
  - `--accent: #d4a94a` (gold)
- Gold/amber CTAs use Tailwind's `amber-400`/`amber-500` scale.
- Responsive breakpoints: `md:` (768 px) and `lg:` (1024 px). Mobile-first.

### Client vs Server Components
- Default to Server Components (no directive needed).
- Add `"use client"` only when you need browser APIs, `useState`, `useEffect`, or event handlers.
- Current client components: `FadeInSection`, `FaqAccordion`.

### TypeScript
- Strict mode is on — no `any`, no suppressed errors.
- Type component props explicitly; use `React.ComponentPropsWithoutRef<"tag">` for spread-able HTML props.
- Next.js `Metadata` type for page/layout metadata objects.

### Content
- All page content (services, KPIs, case studies, demos, testimonials, steps, FAQs) is stored as typed arrays at the top of `src/app/page.tsx`. Edit those arrays to change copy.
- Language: Japanese throughout. Keep all user-facing strings in Japanese.

### Animations
- Use `FadeInSection` to wrap any section that should fade in on scroll (IntersectionObserver, 0.15 threshold).
- The `.fade-in-up` CSS class (opacity + translateY transition, 700 ms) is applied by `FadeInSection`.

---

## Development Workflow

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run start    # Serve production build locally
npm run lint     # Run ESLint
```

There is no test suite. Lint is the only automated check before committing.

---

## Adding a New Section

1. Define a typed data array near the top of `page.tsx`.
2. Write the JSX inline in the page, wrapped in `<FadeInSection>` for scroll animation.
3. Apply `.section-title` to `<h2>` headings and `.card-panel` to card containers.
4. Use the gold accent (`text-amber-400`, `border-amber-500/30`, etc.) for highlights and CTAs.

## Adding a New Reusable Component

1. Create `src/components/ComponentName.tsx`.
2. Add `"use client"` only if browser APIs or hooks are required.
3. Export a single default export.
4. Import in consuming files via `@/components/ComponentName`.

---

## What NOT to Do

- Do not introduce a CSS-in-JS library, `styled-components`, or CSS modules — the project uses inline Tailwind exclusively.
- Do not add a state management library (Redux, Zustand, etc.) — this is a static marketing page.
- Do not convert page content into a CMS or database-backed system unless explicitly requested.
- Do not modify `AGENTS.md` (it is managed externally).
