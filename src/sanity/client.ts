import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { sanityConfig, isSanityConfigured } from './config'

// Create client with error handling
let client: ReturnType<typeof createClient> | null = null
let builder: ReturnType<typeof imageUrlBuilder> | null = null

if (isSanityConfigured) {
  try {
    client = createClient(sanityConfig)
    builder = imageUrlBuilder(client)
  } catch (error) {
    console.error('Failed to create Sanity client:', error)
  }
}

// Safe fetch wrapper that returns null if Sanity isn't configured
export async function safeFetch<T>(query: string, params?: any): Promise<T | null> {
  if (!isSanityConfigured || !client) {
    return null
  }
  
  try {
    return await client.fetch<T>(query, params)
  } catch (error) {
    console.warn('Sanity fetch error:', error)
    return null
  }
}

export { client }

export function urlFor(source: any) {
  if (!source || !builder) return null
  try {
    return builder.image(source)
  } catch (error) {
    console.warn('Error creating image URL:', error)
    return null
  }
}

