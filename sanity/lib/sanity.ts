import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

// Accept the existing deployment keys and the shorter documented aliases.
const projectId =
  process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID ||
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const hasSanityConfig = Boolean(projectId);
export const config = {
  dataset:
    process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET ||
    process.env.NEXT_PUBLIC_SANITY_DATASET ||
    "production",
  // A syntactically valid sentinel permits local rendering; callers must guard requests.
  projectId: projectId || "unconfigured",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_STUDIO_API_VERSION || "2024-03-08",
  useCdn: process.env.NODE_ENV === "production",
};
export const sanityClient = createClient(config);
export const urlFor = (
  source: Parameters<ReturnType<typeof createImageUrlBuilder>["image"]>[0],
) => createImageUrlBuilder(config).image(source);
