/** Repository-backed descriptions; screenshots depict the actual UI, not mockups. */
export const featuredWork = [
  {
    // Keep this development showcase limited to a short summary and real screenshot.
    id: "redwood",
    title: "Where in the Hell Is Redwood, NY?",
    category: "Community website · In development",
    summary:
      "A community website for Redwood, NY, currently in development. The preview includes a searchable events calendar, with local history, photos, and community notices planned.",
    technologies: [],
    image: "/projects/redwood-development.jpg",
    alt: "Redwood, NY development homepage with a preview notice, community introduction, and event search",
    caption: "Local development preview · demo events",
    href: null,
  },
  {
    id: "small-wins",
    title: "Small Wins",
    category: "Full-stack assessment",
    summary:
      "A private task workspace with guest and account lists, email-code sign-in, search and status filters, priorities, due dates, tags, and keyboard commands.",
    technologies: [
      "React",
      "TypeScript",
      "TanStack Start",
      "PostgreSQL",
      "Better Auth",
    ],
    image: "/projects/small-wins.png",
    alt: "Small Wins guest workspace showing search, status filters, and the task creation form",
    caption: "Live assessment · guest workspace",
    href: "https://small-wins-davidmagbee.vercel.app/",
    repositoryHref: "https://github.com/davidmagbee/small-wins",
  },
  {
    id: "repairvantage",
    title: "RepairVantage",
    category: "In-progress prototype",
    summary:
      "A repair-management interface exploring project progress, task organization, and upcoming deadlines. The current dashboard and project views use demo data; inventory and scheduling are planned features.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Apollo Client",
      "Tailwind CSS",
    ],
    image: "/projects/repairvantage.png",
    alt: "RepairVantage prototype dashboard with project totals, completion progress, and demo activity",
    caption: "Local prototype · demo data",
    href: null,
  },
];
