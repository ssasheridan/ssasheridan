'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaImages } from 'react-icons/fa'
import { Gallery } from '@/types'
import { urlFor } from '@/sanity/client'

interface GalleryCardProps {
  gallery: Gallery
  index?: number
}

export default function GalleryCard({ gallery, index = 0 }: GalleryCardProps) {
  const imageCount = gallery.images?.length || 0

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/gallery/${gallery.slug?.current}`}>
        <div className="glass-card overflow-hidden hover:shadow-2xl transition-all duration-500">
          {/* Image */}
          <div className="relative h-64 overflow-hidden">
            {gallery.coverImage ? (
              <Image
                src={urlFor(gallery.coverImage).width(600).height(400).url()}
                alt={gallery.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            ) : (
              <div className="w-full h-full gradient-navy flex items-center justify-center">
                <FaImages className="w-16 h-16 text-khalsa/50" />
              </div>
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
              <span className="text-white font-medium">
                View Gallery →
              </span>
            </div>

            {/* Image Count Badge */}
            <div className="absolute top-4 right-4 bg-navy/80 backdrop-blur-sm text-white text-sm font-medium px-3 py-1 rounded-full flex items-center gap-2">
              <FaImages className="w-4 h-4 text-khalsa" />
              {imageCount} {imageCount === 1 ? 'Photo' : 'Photos'}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-display font-bold text-navy group-hover:text-khalsa transition-colors">
              {gallery.title}
            </h3>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

