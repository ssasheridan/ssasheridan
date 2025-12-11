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

  const coverImageBuilder = gallery.coverImage ? urlFor(gallery.coverImage) : null
  const coverImageSrc = coverImageBuilder
    ? coverImageBuilder.width(600).height(400).url()
    : null

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/gallery/${gallery.slug?.current}`} className="block">
        <motion.div 
          className="glass-card overflow-hidden hover:shadow-2xl transition-all duration-300"
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
        >
          {/* Image */}
          <div className="relative h-64 overflow-hidden">
            {coverImageSrc ? (
              <Image
                src={coverImageSrc}
                alt={gallery.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full gradient-navy flex items-center justify-center">
                <FaImages className="w-16 h-16 text-khalsa/50" />
              </div>
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/60 to-navy/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
              <motion.span
                className="text-white font-semibold text-lg flex items-center gap-2"
                initial={{ y: 10, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                View Gallery
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  →
                </motion.span>
              </motion.span>
            </div>

            {/* Image Count Badge */}
            <div className="absolute top-4 right-4 bg-navy/80 backdrop-blur-sm text-white text-sm font-medium px-3 py-1 rounded-full flex items-center gap-2">
              <FaImages className="w-4 h-4 text-khalsa" />
              {imageCount} {imageCount === 1 ? 'Photo' : 'Photos'}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-display font-bold text-navy group-hover:text-khalsa transition-colors duration-300">
              {gallery.title}
            </h3>
          </div>
        </motion.div>
      </Link>
    </motion.article>
  )
}

