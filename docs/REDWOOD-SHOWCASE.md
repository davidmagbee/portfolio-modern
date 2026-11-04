# Redwood portfolio showcase

## Summary

Add Where in the Hell Is Redwood, NY? to the portfolio Projects section with a short description and an authentic screenshot of the local development app. Label the preview and demo content clearly; identify history, photos, and community notices as planned.

## Implementation

- Add Redwood as the first authored project in `data/featuredWork.ts`.
- Store the November 4, 2026 homepage capture in `public/projects/redwood-development.jpg`; retain the screenshot link for viewing the full image.
- Omit empty technology lists and action containers for description-and-screenshot cards. Redwood has no technology badges, live-app link, or source link.
- Record screenshot/content provenance in `docs/CONTENT-SOURCES.md`.

## Validation

- `npm run build`: passed production compilation, lint, type checks, and static generation. The build reported an outdated Browserslist data warning; no dependencies were changed.
- `git diff --check`: passed.
- Production preview returned HTTP 200. Browser checks at 1280, 390, and 320 CSS pixels found no page-level horizontal overflow; desktop and 390px card layouts were visually inspected.
- Redwood appeared once, its screenshot loaded, and pressing Enter on the screenshot link opened the full image. The card rendered no technology list or action container.
- Small Wins retained its technology list and both existing destinations; RepairVantage retained its technology list and screenshot. Existing CMS project cards remained present.
- Real-device and cross-browser behavior remain unverified. Contact delivery was outside this change's verification scope.

## Manual QA

1. Run `npm run build`, then `npm run start -- --port 3001`; open `http://localhost:3001/#projects`.
2. At desktop and narrow phone widths, confirm Redwood appears once with a readable title, short description, preview caption, and loaded screenshot. Check for horizontal overflow.
3. Open the screenshot by mouse and by keyboard; confirm the full development homepage and demo labels are readable.
4. Confirm Redwood has no technology badges or live/source buttons. Confirm Small Wins retains its technology badges, live-app link, and source link; RepairVantage retains its prototype card.

## Proposed commit

`feat(portfolio): showcase Redwood development preview`

Single staging group:

```sh
git add app/components/Projects.tsx data/featuredWork.ts public/projects/redwood-development.jpg docs/CONTENT-SOURCES.md docs/REDWOOD-SHOWCASE.md
```

## PR delta

Not applicable: this change has not been pushed and no PR has been created.
