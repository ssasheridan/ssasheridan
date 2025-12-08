import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FaArrowLeft } from 'react-icons/fa'
import { safeFetch } from '@/sanity/client'
import { galleryBySlugQuery, allGalleriesQuery } from '@/sanity/queries'
import { urlFor } from '@/sanity/client'
import { Gallery } from '@/types'
import GalleryGrid from '@/components/gallery/GalleryGrid'
import PageHero from '@/components/sections/PageHero'

export const revalidate = 60

interface Props {
  params: { slug: string }
}

async function getGallery(slug: string) {
  return safeFetch<Gallery>(galleryBySlugQuery, { slug })
}

export async function generateStaticParams() {
  const galleries = await safeFetch<Gallery[]>(allGalleriesQuery)
  return (galleries || []).map((gallery) => ({
    slug: gallery.slug?.current,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const gallery = await getGallery(params.slug)

  if (!gallery) {
    return {
      title: 'Gallery Not Found',
    }
  }

  const coverImageUrl = gallery.coverImage
    ? urlFor(gallery.coverImage).width(1200).height(630).url()
    : undefined

  return {
    title: gallery.title,
    description: `View photos from ${gallery.title} by SSA Sheridan.`,
    openGraph: {
      title: `${gallery.title} | SSA Sheridan Gallery`,
      description: `Photo gallery: ${gallery.title}`,
      images: coverImageUrl ? [{ url: coverImageUrl }] : undefined,
    },
  }
}

export default async function GalleryDetailPage({ params }: Props) {
  const gallery = await getGallery(params.slug)

  if (!gallery) {
    notFound()
  }

  return (
    <div className="page-transition">
      <PageHero title={gallery.title} />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-navy hover:text-khalsa mb-8 transition-colors"
          >
            <FaArrowLeft />
            Back to Gallery
          </Link>

          {gallery.images && gallery.images.length > 0 ? (
            <GalleryGrid images={gallery.images} columns={3} />
          ) : (
            <div className="text-center py-16 glass-card rounded-2xl">
              <p className="text-5xl mb-4">📷</p>
              <h3 className="text-xl font-display font-bold text-navy mb-2">
                No Photos Yet
              </h3>
              <p className="text-softblue">
                Photos for this album will be uploaded soon!
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

