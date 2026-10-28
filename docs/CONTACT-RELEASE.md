# Contact release — October 28 recruiter meeting

## Summary

Replace mailto-only submission with POST /api/contact, server-side Resend delivery, and Cloudflare Turnstile verification. Restore the concise “Open to opportunities. Let’s talk” hero CTA. Retain charcoal/green styling and direct email, phone, and scheduling links.

## Implementation

- Native required/email validation, matching length limits, read-only fields while sending, disabled duplicate submission, persistent status/alert regions, and preserved drafts on errors.
- Server validates fields, body size, media type, exact origin, honeypot, and Turnstile success/hostname/action before sending plain-text mail. Sender/recipient are server-controlled; visitor email is Reply-To.
- Bounded upstream requests; provider failures never produce success. Success means provider acceptance, not proven inbox delivery.
- Missing public configuration disables submission with alternatives. Missing server configuration fails closed.

## Validation

Verified locally: `npm run build` (includes lint and TypeScript), `node --test tests/contact.test.cjs`, `git diff --check`.
Tests stub external HTTP; they do not send mail or prove live Turnstile/inbox delivery. Build reports an outdated Browserslist dataset warning.
Local browser submission passed real Turnstile verification, Resend accepted the message, and the form cleared its fields with a success announcement. The owner confirmed inbox receipt. Screen-reader checks and real-token replay testing remain pending. Production deployment and live-site delivery verification remain pending Vercel team authorization.

## Configured Cloudflare widgets

Both widgets use Managed mode with no pre-clearance:

- Local: `0x4AAAAAAFp-WvpdOJ7Ou5pa`, permitted hosts `localhost` and `127.0.0.1`.
- Production: `0x4AAAAAAFp-YOdYwL0mLBc2`, permitted host `davidmagbee.com`.

Local secret validation passed. Local configuration uses `http://localhost:3001` and sender `login@auth.davidmagbee.com`; the portfolio-specific Resend key is configured locally. Both `.env` and `.env.local` are Git-ignored. Production must use the production widget's matching secret, not the local secret.

## Required deployment environment

| Variable | Scope | Value |
| --- | --- | --- |
| NEXT_PUBLIC_TURNSTILE_SITE_KEY | Build/public | Cloudflare widget site key |
| TURNSTILE_SECRET_KEY | Server secret | Matching widget secret |
| RESEND_API_KEY | Server secret | Resend sending API key |
| CONTACT_FROM_EMAIL | Server | Sender on a Resend-verified domain |
| CONTACT_TO_EMAIL | Server | Destination inbox; normally david.magbee@me.com |
| CONTACT_SITE_ORIGIN | Server | Exact browser origin, normally https://davidmagbee.com |

Keep existing Sanity variables. Deploy to a Next.js server runtime, not a static export. Set the public site key before building and rebuild after changes. Configure the widget's allowed hostnames; use separate local/preview settings and credentials. The endpoint intentionally accepts only the configured origin; redirect alternate domains to the canonical domain.

Provider references: [Resend send API](https://resend.com/docs/api-reference/emails/send-email), [Turnstile client rendering](https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/), [server validation](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/).

## Manual QA

1. At phone and desktop widths, follow the hero CTA; tab through labeled inputs, verification, and Send. Confirm visible focus and no overflow. Confirm email/scheduling work without JavaScript.
2. Try blank fields, malformed email, and oversized input. Confirm rejection and readable feedback.
3. With deployment credentials, submit a unique message. Confirm pending state, no duplicate click, success announcement, cleared fields, actual inbox receipt, and correct Reply-To.
4. Simulate offline/API failure. Confirm error announcement, retained draft, renewed verification, and successful retry. Block the Turnstile script and confirm the fallback message.
5. Confirm invalid/reused tokens, wrong origin, and filled honeypot cannot send mail. Verify with keyboard and a screen reader; code review alone is not accessibility certification.
6. Check Resend delivery status for the test message before the meeting.

## Limits

Turnstile and a honeypot reduce automated abuse; no distributed rate limiter is included. Configure hosting-layer rate limits if traffic warrants it. A timeout after provider acceptance leaves delivery uncertain; retrying can duplicate mail. The UI reports uncertainty and preserves the draft. There is no durable outbox or delivery-webhook reconciliation.

## Commit and staging

Single cohesive task:

```sh
git add app/components/Contact.tsx app/components/Hero.tsx app/globals.css pages/api/contact.ts tests/contact.test.cjs .env.example README.md docs/CONTACT-RELEASE.md
git commit -m "feat(contact): add protected server-side delivery and opportunity CTA"
```

## PR delta

Prepared delta from the previously pushed portfolio refresh: replace encoded mailto submission with protected server delivery; add accessible pending/success/error states and recruiter CTA; document six deployment variables and release QA. This update has not been pushed. The sections Summary, Implementation, Validation, and Required deployment environment above form the PR body.
