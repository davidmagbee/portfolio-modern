import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
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
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "GET") {
    const experiences: Experience[] = await sanityClient.fetch(query);
    res.status(200).json({ experiences });
  } else {
    // Handle any other HTTP methods
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
