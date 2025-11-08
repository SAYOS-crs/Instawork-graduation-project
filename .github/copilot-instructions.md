This repository is a Next.js (v16) TypeScript app with Tailwind and HeroUI. The goal of this file is to give an AI coding agent the minimal, concrete guidance needed to be productive here.

Key facts (big picture)
- App uses the Next.js /app router layout under `src/app/` and React 19.
- Authentication is handled via NextAuth credentials provider at `src/app/api/auth/[...nextauth]/route.ts` which POSTS to an external auth API (`https://ecommerce.routemisr.com/api/v1/auth/signin`).
- Global providers (session + HeroUI) are wired in `src/app/providers.tsx`; `RootLayout` adds `Navbar` and `Footer` around pages.
- Path alias: `@/*` -> `./src/*` (see `tsconfig.json`).

Developer workflows
- Run locally: `npm run dev` (this runs `next dev --turbopack`). Use that command for iterative work.
- Build: `npm run build` (`next build --turbopack`). Start production with `npm run start`.
- Lint: `npm run lint` (eslint is configured, use this before PRs).

Project-specific conventions and patterns
- Auth flow:
  - `src/app/api/auth/[...nextauth]/route.ts` implements NextAuth CredentialsProvider.
  - The authorize callback returns an object with `token` and `user` and the code stores them on the JWT as `token.IncodedToken` and `token.IncodedUser` and exposes `session.user = token.IncodedUser`.
  - The login page uses `signIn('credentials', { email, password, redirect, callbackUrl })` (see `src/app/(Auth)/Login/page.tsx`). If you refactor the token or JWT key names, update the callbacks and `src/app/types/next-auth.d.ts` accordingly.
- UI and forms:
  - The project uses HeroUI components (see `src/components/*`) and `react-hook-form` + `zod` schemas under `src/app/(Auth)/_Schemas/Schema.ts`.
- Files of interest to inspect when changing behavior:
  - `src/app/api/auth/[...nextauth]/route.ts` (auth callbacks)
  - `src/app/(Auth)/Login/page.tsx` (client sign-in usage)
  - `src/app/providers.tsx` (SessionProvider wiring)
  - `src/Interface/Auth/LoginRespons.ts` (auth API response types)
  - `src/app/types/next-auth.d.ts` (NextAuth typings)

Integration notes and gotchas
- External API: the credentials provider POSTs to a remote URL (hardcoded). Changes to auth endpoints must consider CORS and environment secrets—do not commit secrets. Prefer environment variables for URLs and tokens.
- Token property names are non-standard (`IncodedToken`/`IncodedUser`)—search the repo for those exact keys before renaming to avoid breaking session/jwt callbacks.
- Next version and flags: repo uses `next` v16 and runs with `--turbopack` in npm scripts; hot-reload behavior and build output may differ from older Next versions.

What to do when editing auth or sessions
- If you modify the shape of the user/token returned by NextAuth, update:
  1) `src/app/api/auth/[...nextauth]/route.ts` callbacks
  2) `src/app/types/next-auth.d.ts` for TS safety
  3) Any client code that reads `session.user` (Login page, Navbar, etc.)

Quick examples
- Signing in (client): `await signIn('credentials', { email, password, redirect: true, callbackUrl: '/' })` (see `src/app/(Auth)/Login/page.tsx`).
- JWT callback stores values on the token: `token.IncodedToken = user.token; token.IncodedUser = user.LogedUser;`.

Safety & testing
- No test harness detected. Run `npm run dev` and exercise pages manually. Run `npm run lint` before commits.

Where to update this file
- If you add CI, tests, or change auth endpoints/keys, update this doc with the exact commands, env vars, and file references.

If anything here is unclear or you want more detail about build, CI, or any specific file, tell me which area to expand and I'll update this doc.
