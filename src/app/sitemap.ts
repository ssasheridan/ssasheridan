import { MetadataRoute } from 'next'
import { safeFetch } from '@/sanity/client'
import { allEventsQuery, allGalleriesQuery } from '@/sanity/queries'
import { Event, Gallery } from '@/types'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ssa-sheridan.vercel.app'

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/events`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  // Dynamic event pages
  const events = await safeFetch<Event[]>(allEventsQuery)
  const eventPages = (events || []).map((event) => ({
    url: `${baseUrl}/events/${event.slug?.current}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Dynamic gallery pages
  const galleries = await safeFetch<Gallery[]>(allGalleriesQuery)
  const galleryPages = (galleries || []).map((gallery) => ({
    url: `${baseUrl}/gallery/${gallery.slug?.current}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

  return [...staticPages, ...eventPages, ...galleryPages]
}

