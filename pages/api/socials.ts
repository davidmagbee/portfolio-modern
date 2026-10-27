import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient, hasSanityConfig } from "../../sanity/lib/sanity";
import { Social } from "@/typings";

const query = groq`*[_type == "social"]`;

type ResponseData = {
  socials: Social[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  // Missing local configuration must not issue requests to the sentinel project.
  if (!hasSanityConfig) return res.status(503).end("Sanity is not configured");
  if (req.method === "GET") {
    const socials: Social[] = await sanityClient.fetch(query);
    res.status(200).json({ socials });
  } else {
    // Handle any other HTTP methods
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
