import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity/lib/sanity";
import { Project } from "@/typings";

const query = groq`*[_type == "project"] {
    ...,
    technologies[]->
  }`;

type ResponseData = {
  projects: Project[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "GET") {
    const projects: Project[] = await sanityClient.fetch(query);
    res.status(200).json({ projects });
  } else {
    // Handle any other HTTP methods
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
