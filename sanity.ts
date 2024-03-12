import { createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'
import { dataset } from './sanity/env'

export const config = {
    dataset: process.env.SANITY_STUDIO_DATASET || 'production',
    projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
    apiVersion: process.env.SANITY_STUDIO_API_VERSION || '2024-03-08',
    useCdn: process.env.NODE_ENV === 'production',
}

export const sanityClient = createClient(config)
export const urlFor = (source: any) => createImageUrlBuilder(config).image(source)