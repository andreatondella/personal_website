# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Andrea Tondella (andreatondella.xyz), built with SvelteKit 5 and deployed on Vercel as a fully static site.

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build (outputs to `build/`)
- `npm run preview` — preview production build locally
- `npm run check` — type-check with svelte-check
- `npm run lint` — lint with ESLint

## Architecture

- **Framework**: SvelteKit 5 (Svelte 5 runes syntax — uses `$props()`, `$state()`, etc.)
- **Adapter**: `@sveltejs/adapter-static` — fully static output, all pages prerendered
- **Styling**: Scoped `<style>` blocks in Svelte components. Global CSS variables and font (DM Sans) defined in `src/app.css`
- **Preprocessing**: mdsvex for Markdown/Svelte hybrid files (`.svx` extension supported)
- **Contact form**: Formspree integration (POST to external endpoint)
- **Analytics**: Vercel Analytics injected in root layout

## Routes

Three pages: Home (`/`), Resume (`/resume`), Contact (`/contact`). Navigation and footer are in `src/routes/+layout.svelte`. Prerendering is enabled globally via `src/routes/+layout.ts`.

## Theme Colors

- Blue accent: `#708BDB`
- Yellow accent: `#DBC070` / `#f0d05d`
- Pink accent: `#DB70C0`
- Text: `#2c3e50` (headings), `#34495e` (body)
