/** Summaries cross-checked against the supplied résumé, tenure narrative, and completed Jira work.
 * End date corrected by the user to September 2026.
 * See docs/CONTENT-SOURCES.md. No quantitative business outcomes are asserted.
 */
export const cookieFinance = {
  role: "Senior Software Engineer",
  dates: "March 2025 – September 2026",
  summary:
    "Full-stack product and platform work across creator services, onboarding, tax recommendations, and financial workflows.",
  highlights: [
    {
      title: "Creator Business Essentials",
      description:
        "Built the CBE product experience for content creators, including feature gating, navigation, account setup, Unit banking, LLC formation, and affiliate-program surfaces.",
    },
    {
      title: "CBE-to-Core upgrades",
      description:
        "Designed and implemented the in-product upgrade path from Creator Business Essentials to full-service Core accounts.",
    },
    {
      title: "Dependency-driven onboarding",
      description:
        "Redesigned onboarding around shared Core and CBE workflows, with dependency resolution, reverse-dependency unblocking, inspection tools, and migration controls including dry-run reporting and rollback.",
    },
    {
      title: "Tax strategy recommendations",
      description:
        "Co-architected and built the recommendation backend with an extensible strategy layer and monthly eligibility processing, and contributed client-facing recommendation cards and page states.",
    },
    {
      title: "Self-service accounts & billing",
      description:
        "Delivered personal, tax, and security settings; improved proposal and checkout flows; and resolved billing issues for customers with multiple companies.",
    },
    {
      title: "Financial integrations & release quality",
      description:
        "Implemented Plaid Link event handling, fixed Tight iframe resets during OAuth, and carried out QA, UAT, and release stabilization across frontend, backend, and integration workflows.",
    },
  ],
};
