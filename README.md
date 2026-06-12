# AquaGlow Enterprises — Dorron Cleaning Solutions

Corporate marketing site for **AquaGlow Enterprises** and its flagship brand **Dorron**.
Built with React 19, Vite, Tailwind CSS v4, and Framer Motion.

## Quick Start

```bash
npm install        # Install dependencies
npm run dev        # Vite dev server (port 3000) + Express API (port 3001)
npm run build      # Production build → dist/
npm run server     # Standalone Express email API
npm run lint       # tsc --noEmit (typecheck only)
```

## Email Contact Forms

Two lead capture forms (product inquiries and B2B quotes) POST to `/api/contact`
and send email via **BREVO SMTP**. Set these in `.env` or in your deployment's env vars:

```env
BREVO_SMTP_HOST="your-smtp-host"
BREVO_SMTP_PORT="587"
BREVO_SMTP_USER="your-brevo-login-email"
BREVO_SMTP_KEY="your-brevo-smtp-key"
BREVO_FROM_EMAIL="your-from-email@example.com"
```

- **Local dev:** Vite proxies `/api/*` to Express on port 3001.
- **Production (Vercel):** `api/contact.ts` runs as a serverless function — no Express needed.

## Tech Stack

| Layer | Choice |
|-------|--------|
| UI | React 19, Tailwind CSS v4 |
| Routing | React Router DOM v7 |
| Animations | Framer Motion (`motion/react`) |
| Icons | Lucide React |
| Email | BREVO SMTP via nodemailer |
| Build | Vite 6 |
| Server | Express (dev) / Vercel Functions (prod) |

## Routes

| Path | Page |
|------|------|
| `/` | Home — Hero, Product Grid, B2B Portal |
| `/solutions` | Solutions — Industry verticals, Bio-Crest, Sustainability |
| `/distributors` | Distributors — Partner program, Expansion map |
| `/product/:id` | Product detail — Sizes, benefits, contact for pricing |
| `/academy` | Academy — Courses, certifications |
| `*` | 404 Page |

## Project Structure

```
.
├── api/contact.ts          # Vercel serverless email function
├── public/images/          # Product photos and payment SVGs
├── server/index.ts         # Express email API (local dev)
├── src/
│   ├── components/         # All React components
│   ├── App.tsx             # Root component + routes
│   ├── constants.ts        # Product data (8 SKUs)
│   ├── types.ts            # TypeScript types
│   └── index.css           # Tailwind v4 + custom theme
├── AGENTS.md               # OpenCode session guidance
└── opencode.json           # OpenCode project config
```

## Design

- **Dark-first** theme with `.light-mode` class toggle
- **Glassmorphism** via `.glass-panel`, `.glass-card` utilities
- **CSS variables** for theming: `--bg-primary`, `--text-primary`, `--border-primary`
- **Brand colors:** `brand-aqua` (#006994), `brand-pink` (#FFC0CB), `brand-coral` (#FF7E67)
- **Fonts:** Inter (sans), Playfair Display (serif), Space Grotesk (display)

## Deployment

**Recommended: Netlify** (free tier, supports serverless functions).

### Option A — Git-based (simplest)
1. Push this repo to GitHub/GitLab
2. Import at [netlify.com](https://netlify.com)
3. Add `BREVO_SMTP_*` env vars in **Site settings → Environment variables**
4. Deploy — Netlify runs `npm run build`, serves `dist/`, and runs `netlify/functions/contact` as a serverless function

### Option B — Manual CLI deploy
```bash
npm install
npm run build
npx netlify deploy --prod --dir=dist --functions=netlify/functions
```

### Required env vars
| Variable | Description |
|----------|-------------|
| `BREVO_SMTP_HOST` | Your SMTP host from BREVO |
| `BREVO_SMTP_PORT` | Usually `587` |
| `BREVO_SMTP_USER` | Your BREVO login email |
| `BREVO_SMTP_KEY` | Your BREVO SMTP key |
| `BREVO_FROM_EMAIL` | Verified sender email configured in BREVO |
