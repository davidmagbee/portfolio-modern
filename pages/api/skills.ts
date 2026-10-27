import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient, hasSanityConfig } from "../../sanity/lib/sanity";
import { Skill } from "@/typings";

const query = groq`*[_type == "skill"]`;

type ResponseData = {
  skills: Skill[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  // Missing local configuration must not issue requests to the sentinel project.
  if (!hasSanityConfig) return res.status(503).end("Sanity is not configured");
  if (req.method === "GET") {
    const skills: Skill[] = await sanityClient.fetch(query);
    res.status(200).json({ skills });
  } else {
    // Handle any other HTTP methods
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
