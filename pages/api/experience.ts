import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient, hasSanityConfig } from "../../sanity/lib/sanity";
import { Experience } from "@/typings";

const query = groq`*[_type == "experience"] {
    ...,
    technologies[]->
  }`;

type ResponseData = {
  experiences: Experience[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  // Missing local configuration must not issue requests to the sentinel project.
  if (!hasSanityConfig) return res.status(503).end("Sanity is not configured");
  if (req.method === "GET") {
    const experiences: Experience[] = await sanityClient.fetch(query);
    res.status(200).json({ experiences });
  } else {
    // Handle any other HTTP methods
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
