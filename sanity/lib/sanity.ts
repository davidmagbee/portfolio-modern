import { createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'
// import { dataset } from '../env'
import * as dotenv from "dotenv";
dotenv.config();

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID!,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_STUDIO_API_VERSION || '2024-03-08',
    useCdn: process.env.NEXT_PUBLIC_NODE_ENV === 'production',
}

export const sanityClient = createClient(config)
export const urlFor = (source: any) => createImageUrlBuilder(config).image(source)