# AquaGlow / Dorron Pro Front-End Application

## Architecture Overview

This project is a modern Single Page Application (SPA) built using React 19 and Vite. The application provides a sleek, high-performing corporate and e-commerce-style marketing site for an industrial B2B cleaning products company. 

The architecture strictly adheres to a component-driven pattern, utilizing client-side routing to create a seamless, app-like experience.

## Core Technologies

- **Frontend Framework:** React 19 (Functional components, Hooks).
- **Build Tool:** Vite for instantaneous Hot Module Replacement (HMR) and optimized, minified production builds.
- **Styling:** Tailwind CSS v4, providing a utility-first methodology to structure complex responsive designs without leaving the TSX files.
- **Client-Side Routing:** React Router DOM (v7) for mapping URLs to specific dashboard views without triggering full page reloads.
- **Animations:** Framer Motion (`motion`) handles declarative physics-based animations, scroll-triggered reveals, and micro-interactions.
- **Iconography:** Lucide React for consistent, scalable SVG icons that blend cleanly into the text color scope.

## Project Structure

```text
/
├── public/                 # Static assets that bypass the bundler
├── src/                    # Primary application source
│   ├── components/         # Reusable structural and UI components
│   │   ├── B2BPortal.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProductGrid.tsx
│   │   ├── *Page.tsx       # Route-level components (HomePage, AcademyPage, etc.)
│   ├── lib/                # Shared utilities and helper functions
│   ├── App.tsx             # Root React component managing routes & theme logic
│   ├── constants.ts        # Hardcoded data/content arrays ensuring clean TSX
│   ├── index.css           # Global stylesheet containing core Tailwind directives and custom CSS variables
│   ├── main.tsx            # DOM initialization and strict-mode wrapper
│   └── types.ts            # TypeScript definitions/interfaces ensuring type safety
├── package.json            # Node.js dependencies and script registry
├── tsconfig.json           # TypeScript compiler configuration
└── vite.config.ts          # Vite bundler and plugin configuration
```

## Styling & Design Principles

- **Semantic Variables:** Core styling is standardized through custom CSS variables exposed via Tailwind extensions (`bg-primary`, `text-primary`, `border-primary`, `brand-aqua`, `brand-pink`). This ensures an adaptable, tokenized styling strategy capable of theme toggling and rapid brand iterations.
- **Transitions over Instant changes:** Smooth user experiences are guaranteed by extensive use of the `transition-colors`, `transition-all`, and `duration-500` tailwind classes.
- **Glassmorphism:** The overarching UI aesthetic relies heavily on "Glass" panels. We leverage `backdrop-blur-*`, combined with fractional opacity backgrounds (e.g., `bg-text-primary/5`) and semi-transparent borders to convey a pristine, clean, and futuristic brand feeling.
- **Responsive Fluid Layouts:** We employ a mobile-first philosophy, progressively layering on screen-space with `md:` and `lg:` prefixed layout breakpoints. Maximum widths (`max-w-7xl`) prevent unnatural text stretching on ultra-wide viewing windows.

## Data Flow & State Management

- **Local State Handling:** Contextual data points (e.g., active dropdown menus, product details tabs, theme toggles) are kept close to their usage using React's `useState` to prevent layout re-renders where they aren't necessary.
- **Derivation & Hooks:** Complex behavior derives directly from independent hooks. For instance, Framer Motion's `useScroll` is continually paired with `useTransform` to bind DOM translations with the user's viewport without demanding heavy state orchestration across components.
- **Routing:** Deep-linking state relies on React Router's parameter capabilities allowing users to bookmark specific areas naturally (e.g., `/product/:id`).

## Getting Started

1. Ensure you have Node.js installed.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Boot the local development server on Port 3000:
   ```bash
   npm run dev
   ```
4. Build for production context:
   ```bash
   npm run build
   ```
