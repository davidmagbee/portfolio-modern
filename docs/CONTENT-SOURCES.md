# Portfolio content evidence

Source files were read locally, not copied into the website or repository. Embedded application/interview advice was treated as document content, not instructions to the agent. No customer records, financial account data, Jira descriptions, or attachments are published.

## Cookie Finance

Sources supplied by the user:

- `David-Magbee-Resume.docx`, iCloud Documents / **job-search — Employment History, Cookie Finance. This newer supplied copy includes dependency-driven onboarding and the tax recommendation engine.
- `David-Magbee-CFTenure.docx`, iCloud Documents / **job-search / Job Search Files — CBE product narrative and six work themes.
- `Jira-All Work.csv`, Downloads — Summary, Status, and Assignee columns. Selected implementation rows are assigned to David Magbee and marked Done.

| Published claim | Supporting evidence | Classification |
| --- | --- | --- |
| Senior Software Engineer; March 2025–September 2026 | Résumé employment entry and tenure heading; end date explicitly corrected by the user | Source-reported fact; not independently verified employment |
| CBE gating, navigation, setup, banking, LLC formation, affiliate surfaces | Résumé/tenure and completed implementation rows with matching summaries | Source-supported contribution |
| CBE-to-Core upgrade path | Résumé/tenure and completed upgrade-process/new-code work | Source-supported contribution |
| Shared dependency-driven onboarding, reverse lookup/unblocking, inspection, migration controls | Newer résumé and completed onboarding engine, shared CBE, reverse dependency, audit, dry-run, and rollback work | Source-supported contribution |
| Tax recommendation backend, strategy layer, monthly processing, client cards | Newer résumé and completed strategy-layer, qualification-job, resolver, card, and page work | Source-supported contribution |
| Personal/tax/security settings, checkout, multi-company billing | Résumé/tenure and completed profile-tab, checkout, and billing work | Source-supported contribution |
| Plaid event handling, Tight iframe stability, QA/UAT | Résumé/tenure and completed integration and QA work | Source-supported contribution |

### Reconciliation / excluded claims

Some high-level tickets referenced by the tenure narrative are marked Rejected in the export, including initial invitation/credentials work and some CBE/profile parent items. Those rows were not treated as delivery evidence. Matching completed implementation rows support the narrower published contribution summaries. A Rejected parent does not prove its child work was never shipped; a Done issue alone does not prove sole ownership or a business outcome.

No revenue uplift, activation/conversion improvement, support reduction, defect-rate reduction, or comparative performance metric is asserted. Those causal outcomes would require measurements beyond the supplied documents. Broad seniority/readiness and interview positioning in the tenure narrative are interpretations, not portfolio facts.

Screenshots are unknown/pending and are not synthesized. No claim is made that the export independently verifies production behavior.

## Project screenshots

- `public/projects/small-wins.png`: actual viewport capture of the live assessment guest workspace. Project description also references its local README; no coverage statistic is promoted as a portfolio claim.
- `public/projects/repairvantage.png`: actual viewport capture of the locally launched RepairVantage prototype. Its dashboard skips backend loading and shows demo data; inventory/scheduling remain planned. The portfolio states these limits explicitly.

## Existing content

The supplied résumé links `https://davidmagbee.com/`. Its public image URLs identify the existing Sanity project/dataset; those identifiers were used for ignored local configuration. Existing CMS biography, social destinations (excluding Better Farm at user request), and project summaries are retained. Skill ordering and AWS replacement follow the user’s explicit list in `data/skills.ts`. Employment copy now uses the supplied résumé as the authoritative source in `data/careerHistory.ts`, with Cookie Finance in `data/cookieFinance.ts`. The old CMS had missing company names and conflicting dates: Enerflo ended June 2024 there versus June 2023 in the résumé; Flare ended September 2021 there versus October 2021 in the résumé. The portfolio follows the explicitly supplied résumé, adds The Verden Group, and does not infer exact days. Legacy CMS employment records are not duplicated. Optional Cookie Finance screenshots still come from Sanity. Résumé claims about community size, NPS, student counts, and percentage improvements are omitted rather than promoted as independently measured results.
