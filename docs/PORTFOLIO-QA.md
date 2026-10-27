# Portfolio update verification

## Verified in this checkout

- `npm run build`: production compilation, lint, type checks, and static generation passed.
- `npx tsc --noEmit`: passed.
- `git diff --check`: passed.
- In-app browser: 320×568, 375×812, 390×844, 667×375 (landscape), 768×1024, 1024×768, 1440×900. Document width matched viewport width; no main-content elements extended past the right edge.
- Hero and both project screenshots loaded successfully. No browser warning/error logs were recorded during the viewport check.
- In-page Projects, Experience, Contact, and Back to top navigation reached the corresponding URL fragments.
- Final viewport checks repeated with live CMS content and refreshed résumé-based experience: all seven widths passed. Native empty-form validation blocked submission and focused Name. Keyboard Tab moved from Name to Email with a visible solid focus outline. No email was sent.

## Verification limits / unknowns

- Public Sanity project/dataset identifiers were recovered from the existing live portfolio linked by the supplied résumé and saved in ignored `.env.local`. Earlier viewport checks used the unconfigured preview; final verification includes the existing CMS content.
- Real iOS Safari, Android Chrome, Firefox, Edge, browser zoom, screen readers, and OS-level reduced-motion/high-contrast settings have not been exercised. Viewport checks are not equivalent to testing those devices/browsers.
- Cookie Finance role, dates, and contributions are grounded in the user-supplied résumé, tenure document, and Jira export. Screenshots remain pending the external drive. Quantitative business outcomes are not claimed.
- These checks were performed before release. No CMS records were changed. See `docs/RELEASE.md` for the subsequent authorized commit/push workflow; live deployment status must be checked separately.

## Content provenance

- Small Wins: `../assessment-todo/README.md` and https://assessment-todo.vercel.app/. Screenshot captured from the live guest workspace; no task was created and no email was sent.
- RepairVantage: `../RepairVantage/client/src/pages/Dashboard.tsx`, `ProjectList.tsx`, `Inventory.tsx`, `Calendar.tsx`, and `client/package.json`. Local dashboard screenshot shows existing demo data. The dashboard skips its GraphQL query; inventory and calendar are placeholder pages. Copy explicitly describes an in-progress prototype, not completed production functionality.
- Cookie Finance: see `docs/CONTENT-SOURCES.md` for source reconciliation and exclusions.
- Existing identity and contact details: original portfolio source and local portrait asset.

## Manual QA before release

1. Copy `.env.example` to `.env.local`; set the existing public Sanity project ID/dataset. Legacy `NEXT_PUBLIC_SANITY_STUDIO_*` keys remain supported. Run `npm run build` and `npm run start`.
2. Confirm existing biography, skills, and projects remain present, and that the six experience entries match the supplied résumé. Verify long CMS entries and missing optional images. Confirm Cookie Finance is not duplicated if already in the CMS.
3. Open 320px phone, modern phone, tablet, desktop, and landscape layouts. Scroll every section; check no clipped text or page-level horizontal scrolling. Repeat in Safari, Firefox, Chrome, and Edge; include real iOS/Android devices where available.
4. Zoom to 200% and 400%; verify wrapping and access to all content. Use OS reduced-motion and high-contrast modes.
5. Navigate with Tab/Shift+Tab and Enter: skip link, section links, screenshots, live app, contact links, and form controls. Verify visible focus and readable labels.
6. Submit the empty contact form: native validation should block it. Fill a valid form with `A & B`, Unicode, and multiline text; verify the email draft preserves subject/body and requires the visitor to send it. Do not send a test email accidentally.
7. Open both screenshot links and the Small Wins live link. Check screenshot captions accurately distinguish live guest UI from prototype demo data.
8. Check Cookie Finance highlights against the supplied evidence. Upload external-drive screenshots to the Cookie Finance experience record in Sanity when available.

## Updating content

`data/featuredWork.ts` holds the two new highlights and local screenshot paths. Existing projects continue to come from Sanity. Full screenshot links remain available while card previews crop from the top for a readable, consistent frame.

Cookie Finance copy lives in `data/cookieFinance.ts` and renders once in `app/components/WorkExperience.tsx`. Matching CMS Cookie Finance records supply screenshots rather than duplicate cards. Upload assets to the experience’s optional `screenshots` array with alt text and captions; the gallery renders only when assets exist. Other career entries come from `data/careerHistory.ts`, which supersedes stale CMS employment copy using the supplied résumé.

## Navigation/content revision

Requested corrections: remove Better Farm from header/contact; restore icon social links and the original pointing portrait back-to-top control; remove the brand period; use the requested skill order with the existing AWS asset replacing Jest; set Cookie Finance end date to September 2026; add “Schedule a meeting”; and make Booking Clone’s plain-text video URL a labeled link.

Link verification: Booking Clone’s live URL returned HTTP 200 and rendered its search page in the browser. The supplied scheduling short URL, including its trailing period, redirected to a Google Calendar appointment schedule and returned HTTP 200. The video URL returned HTTP 200; this verifies reachability, not playback. No booking was made.

Manual QA additions: check social-icon destinations, footer portrait return-to-top, all skill labels in the requested order, AWS logo visibility, the September 2026 date, “Watch video demo,” and the scheduling link. Test on a narrow phone viewport as well as desktop.

Revision checks passed: production build (including lint/types), whitespace check, requested skill DOM order, all skill asset loads, the footer portrait load and return-to-top fragment, and 320/390/768/1440px layouts without page-level horizontal overflow. Visual inspection also corrected a mislabeled Tailwind SVG by using the existing Tailwind PNG and increased visibility of dark monochrome icons.
