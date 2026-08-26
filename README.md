# Shriya Patel — Software Engineer Portfolio

This repository contains the source for the portfolio website for Shriya Patel. It is built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Local setup

Install dependencies:

```bash
npm ci
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
npm start
```

## Environment

The site supports an optional `GITHUB_TOKEN` for higher-rate-limit requests to GitHub. Do not add a `NEXT_PUBLIC_` prefix for this secret.

Create a `.env.local` with:

```
GITHUB_TOKEN=
NEXT_PUBLIC_SITE_URL=https://shriya-patel-software-portfolio.vercel.app
NEXT_PUBLIC_GITHUB_USERNAME=spatel842002
```

## Resume

Drop the official PDF `Shriya_Patel_Software_Resume.pdf` into `public/`. The site will serve the file at `/Shriya_Patel_Software_Resume.pdf`.

## CI

A GitHub Actions workflow runs lint, typecheck, tests, and production build on push.

## Accessibility & Privacy

- No personal photograph is used anywhere.
- Contact is email-only: `mailto:spatel842002@gmail.com`.

## Vercel

This project is intended to deploy to Vercel project `shriya-patel-portfolio` under team `spatel842002-9253`.

## Notes for maintainers

See `AGENTS.md` for repository conventions.
