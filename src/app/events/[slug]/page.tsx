import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FaCalendarAlt, FaMapMarkerAlt, FaArrowLeft, FaYoutube } from 'react-icons/fa'
import { safeFetch } from '@/sanity/client'
import { eventBySlugQuery, allEventsQuery } from '@/sanity/queries'
import { urlFor } from '@/sanity/client'
import { Event } from '@/types'
import GalleryGrid from '@/components/gallery/GalleryGrid'
import Button from '@/components/ui/Button'

export const revalidate = 60

interface Props {
  params: { slug: string }
}

async function getEvent(slug: string) {
  return safeFetch<Event>(eventBySlugQuery, { slug })
}

export async function generateStaticParams() {
  const events = await safeFetch<Event[]>(allEventsQuery)
  return (events || []).map((event) => ({
    slug: event.slug?.current,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const event = await getEvent(params.slug)

  if (!event) {
    return {
      title: 'Event Not Found',
    }
  }

  const bannerImageBuilder = event.bannerImage ? urlFor(event.bannerImage) : null
  const bannerImageUrl = bannerImageBuilder
    ? bannerImageBuilder.width(1200).height(630).url()
    : undefined

  return {
    title: event.title,
    description: event.description || `Join us at ${event.title} hosted by SSA Sheridan.`,
    openGraph: {
      title: `${event.title} | SSA Sheridan`,
      description: event.description || `Join us at ${event.title}`,
      images: bannerImageUrl ? [{ url: bannerImageUrl }] : undefined,
    },
  }
}

export default async function EventPage({ params }: Props) {
  const event = await getEvent(params.slug)

  if (!event) {
    notFound()
  }

  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  const formattedTime = new Date(event.date).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  })

  const bannerImageBuilder = event.bannerImage ? urlFor(event.bannerImage) : null
  const bannerImageSrc = bannerImageBuilder
    ? bannerImageBuilder.width(1920).height(800).url()
    : null

  return (
    <div className="page-transition">
      {/* Banner */}
      <section className="relative pt-20 h-[50vh] min-h-[400px]">
        {bannerImageSrc ? (
          <Image
            src={bannerImageSrc}
            alt={event.title}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="absolute inset-0 gradient-navy" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
              <Link
                href="/events"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <FaArrowLeft />
                Back to Events
              </Link>

              {event.isUpcoming && (
                <span className="inline-block gradient-gold text-navy text-sm font-bold px-4 py-1.5 rounded-full shadow-lg">
                  Upcoming Event
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
              {event.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-khalsa" />
                <span>{formattedDate} at {formattedTime}</span>
              </div>
              {event.location && (
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-khalsa" />
                  <span>{event.location}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {event.description && (
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-softblue text-lg leading-relaxed whitespace-pre-line">
                {event.description}
              </p>
            </div>
          )}

          {event.youtubeLink && (
            <div className="mb-12">
              <h2 className="text-2xl font-display font-bold text-navy mb-6 flex items-center gap-3">
                <FaYoutube className="text-red-500" />
                Watch the Event
              </h2>
              <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  src={`https://www.youtube.com/embed/${extractYouTubeId(event.youtubeLink)}`}
                  title={event.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          )}

          {/* CTA for Upcoming Events */}
          {event.isUpcoming && (
            <div className="glass-card p-8 text-center rounded-2xl mb-12">
              <h3 className="text-2xl font-display font-bold text-navy mb-4">
                Don&apos;t Miss This Event!
              </h3>
              <p className="text-softblue mb-6">
                Join us and be part of this amazing experience.
              </p>
              <Button href="https://forms.office.com/r/ackW8bMdtn" size="lg" external>
                Register Now
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Photo Gallery */}
      {event.images && event.images.length > 0 && (
        <section className="py-16 bg-lightgrey">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-display font-bold text-navy mb-8 text-center">
              Event Gallery
            </h2>
            <GalleryGrid images={event.images} columns={3} />
          </div>
        </section>
      )}
    </div>
  )
}

function extractYouTubeId(url: string): string {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
  ]

  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match) return match[1]
  }

  return url
}

