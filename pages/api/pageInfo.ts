import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { PageInfo } from "@/typings";

const query = groq`*[_type == "pageInfo"][0]`;

type ResponseData = {
  pageInfo: PageInfo[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "GET") {
    const pageInfo: PageInfo[] = await sanityClient.fetch(query);
    res.status(200).json({ pageInfo });
  } else {
    // Handle any other HTTP methods
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
