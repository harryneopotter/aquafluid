# Changelog

## 2026-06-11 — Contact forms, image migration, pricing removal

### New files
- `AGENTS.md` — compact repo guidance for OpenCode agents (dev commands, `@/` alias footgun, env quirks, Tailwind v4 setup, conventions)
- `.opencode/skills/pdf-reader/SKILL.md` — skill for extracting text from PDFs via PyMuPDF (`fitz`)
- `server/index.ts` — Express API server with `POST /api/contact` endpoint, sends email via BREVO SMTP
- `public/images/` — 48 product images migrated from `assets/img/` + 3 Wikipedia payment SVGs downloaded
- `src/components/ContactModal.tsx` — lead capture modal with product dropdown, name, email, phone, quantity, message + submit to `POST /api/contact`

### Modified files
- `src/types.ts` — removed `CartItem` type and `price` field from `Product`
- `src/constants.ts` — removed pricing, added **Dorron Hand Cleanser** and **Dorron Tile Cleaner** (8 products total), updated all image paths to local `/images/`
- `src/components/ProductGrid.tsx` — replaced price/cart with "Contact for Pricing" button wired to `ContactModal`
- `src/components/ProductDetailPage.tsx` — replaced price block and cart buttons with "Contact for Pricing" button, pre-selects current product in modal
- `src/components/Navbar.tsx` — removed `ShoppingCart` icon (no cart functionality)
- `src/components/B2BPortal.tsx` — converted uncontrolled form to controlled React component with all fields, submits to `POST /api/contact`
- `src/components/Footer.tsx` — real phone `+91-93525-43210`, real email `aquaglowenterprises@outlook.com`, payment SVGs switched to local and made visible on dark theme (`brightness-0 invert`)
- `src/components/Hero.tsx` — image switched from hotlink to `/images/dorron_floor_photoshoot-1.png`
- `src/components/SolutionsPage.tsx` — image switched from hotlink to `/images/white-floor-cleaner-1l.jpg`
- `src/components/DistributorsPage.tsx` — both images switched from hotlinks to `/images/dorron_floor_photoshoot-2.png`
- `src/components/AcademyPage.tsx` — all 3 images switched from hotlinks to local `/images/` equivalents
- `index.html` — title updated to "AquaGlow Enterprises — Dorron Cleaning Solutions"
- `package.json` — `dev` script now launches both Vite + Express, added `server` script, added `nodemailer` and `@types/nodemailer` deps
- `vite.config.ts` — added `/api` proxy to Express server on port 3001
- `.env.example` — added `BREVO_SMTP_*` and `API_PORT` environment variables

## 2026-06-11 — Security & SEO / Lighthouse audit

### Security fixes
- **Server input sanitization** — `escapeHtml()` helper prevents HTML injection in email body, subject, and from-name
- **Rate limiting** — `express-rate-limit` (20 requests per 15-min window) on `/api/*`
- **CORS** — `cors` middleware on Express server
- **Body size limit** — `express.json({ limit: '16kb' })`
- **Email validation** — regex check on email field server-side
- **Dependencies** — clean reinstalled `node_modules` (0 vulns vs previous 6)

### SEO / Lighthouse fixes
- **Meta tags** — `description` and `keywords` added to `index.html`
- **Open Graph** — `og:title`, `og:description`, `og:type`, `og:url` meta tags
- **Twitter Cards** — `twitter:card`, `twitter:title`, `twitter:description` meta tags
- **Per-route page titles** — each page component sets `document.title` via `useEffect`:
  - Home: "AquaGlow Enterprises — Dorron Cleaning Solutions"
  - Solutions: "Solutions — AquaGlow Enterprises"
  - Distributors: "Partner with Us — AquaGlow Distributors"
  - Academy: "Academy — AquaGlow University"
  - Product detail: dynamically shows product name
- **Image lazy loading** — `loading="lazy"` on all below-the-fold images (product grid cards, detail page, academy section, footer payment SVGs, secondary distributor image)

### Accessibility fixes
- **Modal focus trap** — `ContactModal` traps Tab/Shift+Tab cycling within focusable elements, closes on Escape, restores focus on close
- **ARIA attributes** — `role="dialog"`, `aria-modal="true"`, `aria-label` on modal container

### Pre-deployment items
- **Favicon** — SVG favicon (brand-aqua `A` logo) added to `index.html`
- **404 page** — `NotFoundPage` component + catch-all `*` route in `App.tsx`
- **Canonical link** — `rel="canonical"` in `index.html`
- **`robots.txt`** — allows all crawlers
- **`sitemap.xml`** — covers all 4 main routes
- **Layout fix** — `App.tsx` now wraps content in `flex flex-col` with `flex-1` main area so footer sits at bottom on short pages

### PDF content integration
Extracted text from all 3 PDFs (`AquaGlow Enterprises company profile.pdf`, `AquaGlow_Dorron_Future_Prospective.pdf`, `inventory.pd.._260503013322.pdf`) using PyMuPDF and updated site pages:
- **HomePage** — replaced generic testimonial with actual company vision ("Make Dorron India's most trusted household cleaning brand"), mission statement, and key stats (3+ years, 18+ SKUs, 30% YoY growth)
- **SolutionsPage** — added Sustainability Roadmap section (80% biodegradable by 2029, 100% recyclable packaging by 2028, 40% women workforce by 2028), introduced EcoShield Series
- **DistributorsPage** — added 4-phase geographic expansion timeline (2026–2030) with regional targets
- **Footer** — updated tagline to brand motto: "Clean Homes. Brighter Futures. Dorron."

### Vercel deployment preparation
- **`api/contact.ts`** — Vercel serverless function port of the Express email endpoint
- **`opencode.json`** — project-level config referencing AGENTS.md for OpenCode sessions
