'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaCalendarAlt, FaMapMarkerAlt, FaYoutube } from 'react-icons/fa'
import { Event } from '@/types'
import { urlFor } from '@/sanity/client'

interface EventCardProps {
  event: Event
  index?: number
}

export default function EventCard({ event, index = 0 }: EventCardProps) {
  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    weekday: 'short',
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
    ? bannerImageBuilder.width(600).height(300).url()
    : null

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/events/${event.slug?.current}`}>
        <div className="glass-card overflow-hidden hover:shadow-2xl transition-all duration-500 h-full">
          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            {bannerImageSrc ? (
              <Image
                src={bannerImageSrc}
                alt={event.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            ) : (
              <div className="w-full h-full gradient-navy flex items-center justify-center">
                <span className="text-5xl text-khalsa">ੴ</span>
              </div>
            )}
            
            {/* Upcoming Badge */}
            {event.isUpcoming && (
              <div className="absolute top-4 left-4 gradient-gold text-navy text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                Upcoming
              </div>
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-display font-bold text-navy mb-3 group-hover:text-khalsa transition-colors line-clamp-2">
              {event.title}
            </h3>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-softblue text-sm">
                <FaCalendarAlt className="w-4 h-4 text-khalsa flex-shrink-0" />
                <span>{formattedDate} at {formattedTime}</span>
              </div>

              {event.location && (
                <div className="flex items-center gap-2 text-softblue text-sm">
                  <FaMapMarkerAlt className="w-4 h-4 text-khalsa flex-shrink-0" />
                  <span className="line-clamp-1">{event.location}</span>
                </div>
              )}
            </div>

            {event.description && (
              <p className="text-softblue text-sm line-clamp-2 mb-4">
                {event.description}
              </p>
            )}

            <div className="flex items-center justify-between pt-4 border-t border-lightgrey-dark">
              <span className="text-khalsa font-medium text-sm group-hover:translate-x-1 transition-transform">
                View Details →
              </span>
              
              {event.youtubeLink && (
                <FaYoutube className="w-5 h-5 text-red-500" />
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

