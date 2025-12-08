import { Metadata } from 'next'
import { safeFetch } from '@/sanity/client'
import { allGalleriesQuery } from '@/sanity/queries'
import { Gallery } from '@/types'
import GalleryCard from '@/components/cards/GalleryCard'
import SectionHeader from '@/components/ui/SectionHeader'
import PageHero from '@/components/sections/PageHero'

export const revalidate = 60

async function getGalleries() {
  return safeFetch<Gallery[]>(allGalleriesQuery) || []
}

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Browse through photos from SSA Sheridan events, celebrations, and community gatherings. Relive the memories and see our vibrant community in action.',
  openGraph: {
    title: 'Gallery | SSA Sheridan',
    description:
      'Photo gallery of the Sikh Students Association at Sheridan College.',
  },
}

export default async function GalleryPage() {
  const galleries = await getGalleries()

  return (
    <div className="page-transition">
      <PageHero
        title="Photo Gallery"
        subtitle="Capturing moments of community, celebration, and seva"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Albums"
            subtitle="Browse through memories from our events and activities"
          />

          {galleries && galleries.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleries.map((gallery, index) => (
                <GalleryCard key={gallery._id} gallery={gallery} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 glass-card rounded-2xl">
              <p className="text-5xl mb-4">📸</p>
              <h3 className="text-xl font-display font-bold text-navy mb-2">
                Gallery Coming Soon
              </h3>
              <p className="text-softblue">
                Our photo albums will be available soon. Stay tuned!
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

