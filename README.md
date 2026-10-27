## Portfolio-Modern

> Version: 0.1.0

This is a modernized version of my portfolio site, leveraging cutting-edge technologies to showcase my work and skills effectively. Built with Next.js for server-side rendering and React for dynamic user interfaces, this portfolio incorporates smooth animations and transitions powered by Framer Motion.

Data management is handled efficiently using Sanity CMS, allowing for easy content updates and image handling with Sanity's powerful features like image URL generation and vision. React Hook Form ensures robust and user-friendly form functionality for seamless interactions.

Styled with Styled Components, the design of this portfolio site is sleek and responsive, offering a seamless experience across various devices. Tailwind CSS provides utility-first styling for quick and consistent layout and design adjustments.

## Key Features:

Next.js for server-side rendering and routing
React for dynamic UI components
Framer Motion for smooth animations and transitions
Sanity CMS for efficient data management and content updates
React Hook Form for robust form functionality
Styled Components for modular and styled UI components
Tailwind CSS for utility-first styling and responsive design
This portfolio showcases my projects, skills, and experiences in an engaging and interactive manner, reflecting my dedication to crafting exceptional digital experiences.
## Local preview and portfolio content

Copy `.env.example` to `.env.local` and configure the existing Sanity project ID/dataset, then run `npm ci`, `npm run build`, and `npm run start`. Legacy `NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID` and `NEXT_PUBLIC_SANITY_STUDIO_DATASET` remain supported. Static generation now queries Sanity directly; a running copy of the site's API is not required to build.

Without CMS configuration, local preview shows only the authored highlights and known identity/contact details, with a build warning. **Configure and verify the existing CMS before deploying** so prior portfolio content is included.

New project descriptions live in `data/featuredWork.ts`; authentic screenshots are in `public/projects/`. Employment history in `data/careerHistory.ts` follows the supplied résumé. Cookie Finance highlights in `data/cookieFinance.ts` are grounded in the supplied résumé, tenure narrative, and Jira export; screenshots remain pending. See [verification and manual QA](docs/PORTFOLIO-QA.md) and the [prepared PR body](docs/PR_BODY.md).
