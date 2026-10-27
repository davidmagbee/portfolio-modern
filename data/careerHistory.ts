/** Employment history transcribed/summarized from the user-supplied iCloud résumé.
 * Dates intentionally retain month precision; unverified performance metrics are omitted.
 */
export interface CareerEntry {
  id: string;
  company: string;
  role: string;
  dates: string;
  location: string;
  logo?: string;
  points: string[];
}
export const careerHistory: CareerEntry[] = [
  {
    id: "freelance",
    company: "Freelance / Contract",
    role: "Software Developer",
    dates: "March 2020 – Present",
    location: "Remote",
    logo: "/logos/freelance-dev.png",
    points: [
      "Deliver full-stack web and SaaS applications for healthcare, nonprofit, and technology clients, including Workers Benefit Fund, B4Project, SalmonState, and CalCAN.",
      "Build client-facing applications with React, TypeScript, Next.js, Node.js, and PostgreSQL, from scoping through deployment.",
      "Manage client relationships, timelines, and technical delivery across concurrent engagements.",
    ],
  },
  {
    id: "enerflo",
    company: "Enerflo",
    role: "Senior Software Developer",
    dates: "April 2023 – June 2023",
    location: "Remote",
    logo: "/logos/logo-enerflo.jpeg",
    points: [
      "Developed SaaS features with React, TypeScript, Next.js, Tailwind, and Chakra UI, integrating GraphQL, Nest.js, PostgreSQL, and gRPC APIs.",
      "Reviewed pull requests, enforced test coverage standards, and contributed to architecture decisions.",
      "Worked with product and executive stakeholders to translate product requirements into features.",
    ],
  },
  {
    id: "flare",
    company: "Flare Network",
    role: "Head of Developer Relations",
    dates: "August 2021 – October 2021",
    location: "Remote",
    logo: "/logos/logo-FLR.png",
    points: [
      "Led developer relations for the Songbird network launch and its developer community.",
      "Created developer-focused technical documentation and developed the network’s partnership roadmap.",
    ],
  },
  {
    id: "general-assembly",
    company: "General Assembly",
    role: "Software Engineering Lead Instructor",
    dates: "April 2020 – February 2023",
    location: "Remote",
    logo: "/logos/logo-GA.webp",
    points: [
      "Mentored students through the full-stack software engineering immersive.",
      "Delivered frontend and backend curriculum in individual and group settings, adapting instruction to cohort needs.",
      "Led an instructional team across multiple cohorts.",
    ],
  },
  {
    id: "verden",
    company: "The Verden Group",
    role: "Consultant / Web Developer / Special Projects",
    dates: "May 2016 – January 2019",
    location: "Remote",
    points: [
      "Managed new healthcare practice launches, coordinating medical board credentialing and operational workflows.",
      "Built and deployed websites for healthcare providers and redesigned client onboarding processes.",
    ],
  },
];
