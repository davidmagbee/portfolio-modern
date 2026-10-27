# Portfolio release groups

The user authorized committing, pushing, and deploying the current update on October 27, 2026. The repository is `davidmagbee/portfolio-modern`, branch `main`. Local production build, lint/type checking, and whitespace checks passed before staging. Environment values remain in ignored `.env.local`.

## 1. CMS configuration

```sh
git add .env.example sanity/env.ts sanity/lib/sanity.ts 'app/sanity/[[...index]]/page.tsx' pages/api
git commit -m "fix(sanity): align CMS configuration and guard unconfigured API routes"
```

## 2. Career content and project assets

```sh
git add data public/projects sanity/schemaTypes/experience.ts typings.d.ts
git commit -m "feat(content): add sourced career highlights and project screenshots"
```

## 3. Responsive UI and navigation

```sh
git add app/components app/globals.css pages/index.tsx pages/_app.tsx pages/_document.tsx
git commit -m "feat(portfolio): refresh responsive layout navigation and contact flows"
```

## 4. Content provenance and QA documentation

```sh
git add README.md docs
git commit -m "docs(portfolio): document content evidence QA and release groups"
```

## Push

```sh
git push origin main
```

The existing Vercel project is `portfolio-modern` under `davidmagbees-projects`. Deployment success is not implied by a Git push: verify the deployed commit, production target, and `https://davidmagbee.com` content before declaring the release live.

## Manual release QA

- Verify the live site contains Cookie Finance ending September 2026, both new projects, and refreshed career entries.
- Check LinkedIn/GitHub icons, absence of Better Farm, scheduling, Booking Clone video/live links, and the footer portrait’s return-to-top behavior.
- Confirm TypeScript → Node.js → React → Postgres → GraphQL → JavaScript → Express → Next.js → Python → Django → MongoDB → HTML → CSS → Tailwind → Git → AWS order.
- Check phone/landscape and desktop layouts. Broader browser/device coverage and Cookie Finance screenshots remain pending; see `PORTFOLIO-QA.md`.
