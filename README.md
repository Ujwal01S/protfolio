Portfolio Website (Next.js 16, Tailwind CSS v4, shadcn/ui)

Overview

- Personal portfolio built with Next.js App Router and TypeScript.
- Clean, responsive UI powered by Tailwind CSS v4 and shadcn/ui (Radix primitives).
- Dark/light theme with next-themes, accessible components, and subtle motion.

Features

- Theme toggle: Persisted light/dark via `next-themes`.
- Dock navigation: Floating, magnifying dock with tooltips and grouped actions.
- Experience: Accordion with rotating chevron, keyboard accessible.
- Projects: Cards with images/video and external link badges (e.g., Globe icon for live site).
- Tech stack: Core skills vs Tools/Libraries presented as badges.
- Type-safe: Full TypeScript, modern Next.js 16 + React 19.

Tech Stack

- Next.js 16, React 19, TypeScript
- Tailwind CSS v4
- shadcn/ui (Radix UI: accordion, tooltip, dropdown, separator)
- lucide-react icons
- next-themes (theme switching)
- motion (framer-motion successor) and react-markdown (optional content)

Project Structure

```
src/
	app/
		layout.tsx        # Root layout + ThemeProvider
		page.tsx          # Home page
		_mocks/tech-stack.ts
	components/
		layouts/nav-bar.tsx          # Floating dock navigation
		modules/
			about-me.tsx
			education.tsx
			experience-section.tsx     # Accordion-based experience
			project.tsx                # Projects grid
			tech-stack.tsx             # Renders stack badges
		common/
			project-card.tsx           # Reusable project card
		ui/                          # shadcn/ui primitives
		svg/wen-svg.tsx              # Brand SVG
```

Getting Started

- Prerequisites: Node 18+ (recommended), pnpm.
- Install and run:

```powershell
pnpm install
pnpm dev
```

Open http://localhost:3000

Scripts

- `pnpm dev` – Start development server
- `pnpm build` – Production build
- `pnpm start` – Start production server
- `pnpm lint` – Run ESLint

- UI components are adapted from shadcn/ui and Radix primitives for accessibility.
- Keep frontend “Core” skills separate from “Tools & Libraries” for clearer scanning (helpful for recruiters/HR).
