Repository conventions for automated agents:

- Do not add a personal photo, headshot, avatar, or LinkedIn links.
- Resume must be supplied as `Shriya_Patel_Software_Resume.pdf` and placed in `public/` unchanged.
- Contact mode is email-only; no server-side contact endpoints are permitted.
- Keep content facts centralized in `data/`.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
