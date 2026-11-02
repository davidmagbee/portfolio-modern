# Small Wins links — 2026-11-02

## Problem and result

Small Wins still linked to the assessment hostname. Update its live destination to https://small-wins-davidmagbee.vercel.app/ and expose https://github.com/davidmagbee/small-wins as a separate source link. Retain existing project copy and screenshot.

## Validation

Production build (including lint/type checks), standalone TypeScript check, and git diff --check pass. Hosted browser verified both destinations on davidmagbee.com: canonical Small Wins URL and renamed GitHub source. Vercel marked link deployment dpl_2bMijdNjLU6ckBtu6FUEng8tYYdu READY. Wrapping-action follow-up also passes production build, including lint/type checks.

## Limitations

Moving hostname does not migrate browser guest/account cookies. Email inbox acceptance requires a human check.

## PR delta

After d228dac: group live/source actions with a wrapping gap so adjacent destinations remain visually distinct at narrow widths. No PR was created.

## Manual QA

Open portfolio → Projects → Small Wins. Follow live app and source links. Create a disposable task, reload, edit, search/filter, then delete it. Verify email-code sign-in at the new origin.

## Commit and staging groups

- `fix(portfolio): update small-wins live and source links` (d228dac)
- `fix(portfolio): separate live and source link actions` (480e965)

```sh
cd /Users/interface/code/portfolio-modern
git add data/featuredWork.ts app/components/Projects.tsx docs/PORTFOLIO-QA.md docs/SMALL-WINS-RENAME.md
# Post-push layout follow-up
git add app/components/Projects.tsx app/globals.css docs/SMALL-WINS-RENAME.md
```

No PR created; changes pushed directly to main. This document supplies the PR body and post-push delta.
