import type { Metadata, NextPageContext } from "next";

// export const metadata: Metadata = {
//   title: "David Magbee | Full Stack Developer",
//   description: "A modern retelling of a developer's portfolio.",
// };

export async function getAllMetadata(context: NextPageContext) {
    // Generate your metadata based on the context or other factors
    const { pathname, query, locale } = context;
    return {
        title: "David Magbee | Full Stack Developer",
        description: "A modern retelling of a developer's portfolio.",
      // Add more metadata properties as needed
    };
  }