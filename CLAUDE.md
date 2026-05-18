@AGENTS.md

# Tomoyoshi0531 Portfolio — Codebase Guide

## Project Overview

A single-page AI implementation consultant portfolio built with Next.js 16, React 19, TypeScript 5, and Tailwind CSS 4. The entire site is one long static page (`src/app/page.tsx`) with all content hardcoded as TypeScript constants. There is no backend, no API routes, and no database.

The site is in **Japanese** and targets prospective clients for AI consulting services.

---

## Stack Versions (non-standard — read carefully)

| Package | Version | Notes |
|---|---|---|
| `next` | **16.2.4** | Major breaking changes from Next.js 13–15. Check `node_modules/next/dist/docs/` before writing any Next.js code. |
| `react` | **19.2.4** | React 19 — includes Actions, `use()`, new hooks. |
| `tailwindcss` | **^4** | Tailwind v4 — no `tailwind.config.js`, configured entirely via CSS. |

> **Before writing any Next.js code**, read the relevant guide in `node_modules/next/dist/docs/`. APIs, conventions, and file structure may differ from older training data.

---

## Directory Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout — Geist fonts, metadata, dark blue bg
│   ├── page.tsx          # Entire portfolio (one file, ~700 lines)
│   ├── globals.css       # Tailwind v4 import + CSS custom properties + utility classes
│   └── favicon.ico
└── components/
    ├── FadeInSection.tsx  # Scroll-triggered fade-in wrapper (Intersection Observer)
    └── FaqAccordion.tsx   # Controlled accordion for FAQ items
public/                    # Static SVG assets
```

---

## Development Commands

```bash
npm run dev     # Start dev server (default port 3000)
npm run build   # Production build
npm run start   # Serve production build
npm run lint    # ESLint (flat config, ESLint 9)
```

No test framework is configured. There are no test files.

---

## Architecture

### Single-page layout

`src/app/page.tsx` exports a single default React Server Component. All page content is defined as plain TypeScript constants at the top of the file, then rendered in JSX below. Sections in order:

1. Hero
2. Services (4 items)
3. KPIs (4 metrics)
4. Case studies (3 items)
5. Demo items (3 items)
6. Testimonials (3 quotes)
7. Implementation steps (4 phases)
8. FAQ (3 items — passed to `FaqAccordion`)
9. Profile
10. Contact form + direct contact info

The contact form has **no backend wiring** — it renders inputs but submits nowhere. The email/phone values are placeholders (`contact@example.com`, `03-1234-5678`).

### Client components

Both `FadeInSection` and `FaqAccordion` have `"use client"` at the top because they use browser APIs (`IntersectionObserver`) or React state (`useState`). Keep these isolated. Do not add `"use client"` to `page.tsx` or `layout.tsx`.

### Tailwind CSS v4

Tailwind v4 uses a CSS-first configuration model — **there is no `tailwind.config.js`**. Theme tokens and custom utilities live in `src/app/globals.css`:

```css
@import "tailwindcss";          /* replaces @tailwind directives */

@theme inline {
  --color-background: var(--background);
  --font-sans: var(--font-geist-sans);
}
```

Custom utility classes defined there (use these instead of duplicating inline styles):

| Class | Purpose |
|---|---|
| `.section-title` | Section headings (3xl/4xl, white, extrabold) |
| `.card-panel` | Rounded card with subtle border and backdrop blur |
| `.input-field` | Form input (dark bg, white text, gold focus ring) |
| `.fade-in-up` | Animation base state (opacity 0, shifted down) |
| `.fade-in-up.is-visible` | Animated end state — added by `FadeInSection` |

---

## Design Tokens

| Token | Value | Usage |
|---|---|---|
| `--background` | `#1a365d` | Dark navy — page and card backgrounds |
| `--foreground` | `#ffffff` | White — body text |
| `--accent` | `#d4a94a` | Gold — highlights, icons, borders, focus rings |

These are referenced in Tailwind utilities as `text-[#d4a94a]`, `border-[#ffffff]/25`, etc. (inline arbitrary values). Keep this pattern — do not introduce a separate design system.

---

## TypeScript

- Strict mode is on (`"strict": true`). No `any` without justification.
- Path alias `@/*` resolves to `src/*`. Use it for all internal imports.
- `moduleResolution: "bundler"` — do not use CommonJS `require()`.
- Config file: `tsconfig.json` (standard, no custom paths beyond `@/*`).

---

## Key Conventions

- **No comments in code** unless the reason is non-obvious.
- **No test framework** — do not add one unless explicitly requested.
- **No environment variables** — the site is fully static with no runtime config.
- **No API routes** — do not create a `src/app/api/` directory without explicit instruction.
- **Content lives in `page.tsx`** as typed constants — do not scatter content into separate JSON/MDX files unless asked.
- **Responsive breakpoints**: mobile-first; `md:` (768 px) and `lg:` (1024 px) are used throughout. `sm:` is used sparingly.
- **Font**: Geist Sans and Geist Mono are loaded via `next/font/google` in `layout.tsx` and exposed as CSS variables `--font-geist-sans` / `--font-geist-mono`.

---

## Component Patterns

### FadeInSection

Wraps a `<section>` tag. Adds `.fade-in-up` and toggles `.is-visible` via Intersection Observer when ≥15% of the element enters the viewport. Observation stops after first trigger.

```tsx
<FadeInSection className="px-6 py-20">
  {/* section content */}
</FadeInSection>
```

### FaqAccordion

Accepts `{ items: { question: string; answer: string }[] }`. First item is open by default (`openIndex` starts at `0`). Only one item can be open at a time.

```tsx
<FaqAccordion items={faqItems} />
```

---

## ESLint

Uses ESLint 9 flat config (`eslint.config.mjs`). Extends `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`. Run `npm run lint` before committing. Fix all errors; warnings are acceptable.

---

## Git

- Development branch: `claude/add-claude-documentation-5dNqV`
- Production branch: `main`
- Push with: `git push -u origin <branch-name>`
