# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Layout

```
laywertemplate/
├── frontend/webapp/   # Active Next.js application (all frontend work goes here)
├── backend/           # Empty placeholder
└── infrastructure/    # Empty placeholder
```

All development commands must be run from `frontend/webapp/`.

## Commands

```bash
npm run dev    # Development server at localhost:3000
npm run build  # Production build
npm start      # Production server
npm run lint   # ESLint checks
```

## Tech Stack

- **Next.js 16.2.4** with App Router (not Pages Router)
- **React 19**, **TypeScript 5** (strict mode), **Tailwind CSS 4**
- Path alias: `@/*` → `frontend/webapp/` root

## Critical: Next.js 16 Breaking Changes

> **From `frontend/webapp/AGENTS.md`**: This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

Do not assume Next.js behavior matches earlier versions. Consult `frontend/webapp/node_modules/next/dist/docs/` when uncertain about any Next.js API, convention, or configuration.

## App Router Conventions

The app lives in `frontend/webapp/app/`. Key files:
- `layout.tsx` — root layout with metadata and font setup (Geist)
- `page.tsx` — home route
- `globals.css` — global styles; Tailwind imported here; CSS variables define the color theme with dark mode via `prefers-color-scheme`
