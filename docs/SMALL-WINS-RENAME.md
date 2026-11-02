# Small Wins links — 2026-11-02

## Problem and result

Small Wins still linked to the assessment hostname. Update its live destination to https://small-wins-davidmagbee.vercel.app/ and expose https://github.com/davidmagbee/small-wins as a separate source link. Retain existing project copy and screenshot.

## Validation

Production build (including lint/type checks), standalone TypeScript check, and git diff --check pass. Hosted link verification pending.

## Limitations

Moving hostname does not migrate browser guest/account cookies. Email inbox acceptance requires a human check.

## PR delta

After d228dac: group live/source actions with a wrapping gap so adjacent destinations remain visually distinct at narrow widths. No PR was created.

## Manual QA

Open portfolio → Projects → Small Wins. Follow live app and source links. Create a disposable task, reload, edit, search/filter, then delete it. Verify email-code sign-in at the new origin.
