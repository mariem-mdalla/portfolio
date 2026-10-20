# Creative Developer Portfolio

A distinctive, interactive single-page portfolio for a software engineering student seeking internships, freelance work, and a future cybersecurity master's. Built with React, TypeScript, Vite, and Tailwind CSS — no heavy 3D libraries, all visual effects achieved with CSS transforms.

## Features

- **Interactive 3D keyboard hero** — CSS perspective-based keyboard with hover-depress key states and a highlighted Enter key that scrolls to projects
- **Dual palette switcher** — compare two color directions live (Marine / Butter / Ivory vs. Chocolate / Peony / Vanilla)
- **Floating developer interface** — mock code editor, terminal, and browser windows at varying depths
- **Scroll-reveal animations** — sections fade and slide into view as you scroll (respects reduced-motion preferences)
- **Responsive** — adapts from mobile to desktop with a full-screen mobile nav
- **Accessible** — keyboard navigation, ARIA labels, focus rings, reduced-motion support
- **Placeholder content** — all projects, bio text, and personal info are clearly labeled for replacement

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Run locally

```bash
npm install
npm run dev
```

The dev server starts automatically — your site will be available in the preview pane.

### Build for production

```bash
npm run build
```

Output goes to the `dist/` folder. Preview the production build:

```bash
npm run preview
```

## How to Edit Content

All placeholder content is marked with `[brackets]`. Here's where to find each piece:

| What to change | File |
|---|---|
| Your name | `src/components/Navbar.tsx` (the `{YN}` logo), `src/components/sections/Hero.tsx`, `src/components/sections/About.tsx`, `src/components/sections/Contact.tsx` |
| Hero headline & subtitle | `src/components/sections/Hero.tsx` |
| Projects | `src/components/sections/Projects.tsx` — edit the `PROJECTS` array |
| About / bio text | `src/components/sections/About.tsx` |
| Portrait | `src/components/sections/About.tsx` — replace the SVG placeholder with an `<img>` tag |
| Skills / toolkit | `src/components/sections/Toolkit.tsx` — edit the `CATEGORIES` array |
| Education timeline | `src/components/sections/Journey.tsx` — edit the `MILESTONES` array |
| Email & social links | `src/components/sections/Contact.tsx` — replace `your.email@example.com`, GitHub and LinkedIn URLs |
| Floating window code text | `src/components/FloatingWindows.tsx` |
| Keyboard key labels | `src/components/Keyboard3D.tsx` — edit the `ROW_*` arrays |

## How to Edit Colors

Both palettes are defined as CSS custom properties in `src/index.css`:

- `:root, [data-theme='marine']` — the Marine palette (deep blue, butter yellow, warm ivory)
- `[data-theme='cocoa']` — the Cocoa palette (chocolate brown, soft peony pink, warm vanilla)

Each palette defines `--color-bg`, `--color-primary`, `--color-secondary`, `--color-accent`, `--color-key-*`, `--color-window-*`, `--color-terminal-*`, and gradient variables. Change any of these values to recolor the entire site instantly.

The theme definitions (labels and swatch previews for the toggle) live in `src/types/theme.ts`.

## Project Structure

```
src/
├── App.tsx                    # Root — wraps in ThemeProvider, renders all sections
├── index.css                  # Global styles, CSS variables for both palettes, animations
├── main.tsx                   # React entry point
├── components/
│   ├── Keyboard3D.tsx         # 3D CSS keyboard with interactive keys
│   ├── FloatingWindows.tsx    # Mock code editor, terminal, browser windows
│   ├── Navbar.tsx             # Fixed nav with mobile menu and palette switcher
│   ├── PaletteSwitcher.tsx    # Color palette toggle buttons
│   └── sections/
│       ├── Hero.tsx           # Hero section with keyboard + floating windows
│       ├── Projects.tsx       # Asymmetric project card grid
│       ├── About.tsx          # Bio with stylized portrait placeholder
│       ├── Toolkit.tsx        # Categorized skill cards
│       ├── Journey.tsx        # Vertical education timeline
│       └── Contact.tsx        # Email link, social icons, footer
├── context/
│   └── ThemeContext.tsx       # Theme provider (marine / cocoa)
├── hooks/
│   ├── useScrollReveal.ts     # Intersection Observer scroll reveal
│   └── useScrolled.ts         # Detects scroll position for nav styling
└── types/
    └── theme.ts               # Theme name and swatch definitions
```

## Save to GitHub

1. Create a new repository on [GitHub](https://github.com/new)

2. Initialize and push from your project folder:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

## Deploy

After pushing to GitHub, you can deploy the `dist/` folder to any static host:

- **Netlify / Vercel / Cloudflare Pages** — connect your GitHub repo, set the build command to `npm run build` and the output directory to `dist`
- **GitHub Pages** — build and push the `dist/` contents to a `gh-pages` branch

## Keyboard Accessibility

- Tab through navigation links and interactive elements
- Enter/Space activates buttons and links
- Escape closes the mobile menu
- Focus rings are visible on all interactive elements
- The Enter key on the 3D keyboard is a real button — keyboard accessible

## Reduced Motion

If the user has "reduce motion" enabled in their system settings, all animations and transitions are disabled and scroll-reveal elements appear immediately.

## Tech Stack

- **React 18** — UI framework
- **TypeScript** — type safety
- **Vite** — build tool and dev server
- **Tailwind CSS** — utility-first styling with CSS variable theming
- **Lucide React** — icons
