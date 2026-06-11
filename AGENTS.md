# AquaGlow / Dorron Pro — AGENTS.md

## Dev commands

```bash
npm run dev        # Vite dev server on 0.0.0.0:3000 + Express API on :3001
npm run server     # Standalone Express API on :3001 (email endpoint)
npm run build      # Production build
npm run preview    # Preview production build
npm run lint       # tsc --noEmit (only typecheck — no linter/ESLint)
npm run clean      # rm -rf dist
```

No test suite exists.

## `@/` path alias resolves to project root, NOT `src/`

```ts
import { cn } from '@/src/lib/utils';     // correct
import { cn } from '@/lib/utils';         // WRONG — resolves to /lib/utils at project root
```

The alias is defined in `tsconfig.json` (`paths: {"@/*": ["./*"]}`) and `vite.config.ts` (`alias: {'@': path.resolve(__dirname, '.')}`).

## Environment & AI Studio quirks

- `GEMINI_API_KEY` is injected at **build time** via Vite `define` in `vite.config.ts`, not read at runtime.
- `DISABLE_HMR=true` disables HMR to prevent flickering during agent edits in Google AI Studio.
- Env vars are loaded via Vite's `loadEnv(mode, '.', '')` — see `.env.example`.

## Tailwind CSS

- **v4** via `@tailwindcss/vite` plugin — no PostCSS config, no `tailwind.config.*`.
- Custom theme tokens in `src/index.css` `@theme` block: `brand-aqua`, `brand-pink`, `brand-coral`, font families.
- Light/dark mode toggled by adding `.light-mode` class to `<html>`.
- Glassmorphism utility classes: `glass-panel`, `glass-card`, `btn-premium`, `btn-primary`, `btn-outline`.
- Use `cn()` from `src/lib/utils.ts` (clsx + tailwind-merge) for conditional class merging.

## Project structure

- **Entrypoint**: `src/main.tsx` → `src/App.tsx`
- **Route-level pages** live in `src/components/` (not a `pages/` dir): `HomePage`, `ProductDetailPage`, `DistributorsPage`, `SolutionsPage`, `AcademyPage`.
- **Product data**: hardcoded in `src/constants.ts` — `PRODUCTS: Product[]`.
- **Types**: `src/types.ts`.
- **Images**: stored in `public/images/`. Reference as `/images/<filename>`.

## Design conventions

- Dark theme default, light mode via `.light-mode` class.
- Fonts: `Inter` (sans), `Playfair Display` (serif headings), `Space Grotesk` (display).
- Animations: Framer Motion (`motion/react`), Lucide React icons.
- Scroll parallax blobs, glassmorphism cards, `duration-500` transitions.

## PDFs

Use the `pdf-reader` skill (PyMuPDF / pdfminer) to extract text from PDFs — the model cannot read them natively.

## Email API

A small Express server (`server/index.ts`) handles form submissions:

- `POST /api/contact` — sends email via BREVO SMTP to `aquaglowenterprisesjaipur@gmail.com`
- The dev server proxies `/api/*` to the API server on port 3001
- Set `BREVO_SMTP_*` vars in `.env` to enable email delivery

## Routes

| Path | Component |
|------|-----------|
| `/` | HomePage (Hero + ProductGrid + B2BPortal) |
| `/solutions` | SolutionsPage |
| `/distributors` | DistributorsPage |
| `/product/:id` | ProductDetailPage |
| `/academy` | AcademyPage |
