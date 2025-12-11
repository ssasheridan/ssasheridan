'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { FaImages } from 'react-icons/fa'
import { Gallery } from '@/types'
import { urlFor } from '@/sanity/client'

interface GalleryCardProps {
  gallery: Gallery
  index?: number
}

export default function GalleryCard({ gallery, index = 0 }: GalleryCardProps) {
  const [isClicked, setIsClicked] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const router = useRouter()
  const imageCount = gallery.images?.length || 0

  const coverImageBuilder = gallery.coverImage ? urlFor(gallery.coverImage) : null
  const coverImageSrc = coverImageBuilder
    ? coverImageBuilder.width(600).height(400).url()
    : null

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsClicked(true)
    
    // Instant navigation after visual feedback
    setTimeout(() => {
      router.push(`/gallery/${gallery.slug?.current}`)
    }, 150)
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link 
        href={`/gallery/${gallery.slug?.current}`} 
        className="block"
        prefetch={true}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div 
          className="glass-card overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer relative"
          whileHover={{ y: -4, scale: 1.02 }}
          whileTap={{ scale: 0.97, y: 0 }}
          animate={isClicked ? { scale: 0.95 } : {}}
          transition={{ 
            duration: isClicked ? 0.15 : 0.2,
            ease: 'easeOut'
          }}
        >
          {/* Click ripple effect */}
          <AnimatePresence>
            {isClicked && (
              <motion.div
                initial={{ scale: 0, opacity: 0.5 }}
                animate={{ scale: 2, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-khalsa/30 rounded-lg pointer-events-none z-10"
                style={{ borderRadius: 'inherit' }}
              />
            )}
          </AnimatePresence>
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
            <div 
              className={`absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/60 to-navy/30 flex items-end justify-center pb-6 transition-opacity duration-300 ${
                isHovered || isClicked ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <motion.span
                className="text-white font-semibold text-lg flex items-center gap-2"
                animate={isHovered || isClicked ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                View Gallery
                <motion.span
                  animate={isHovered ? { x: [0, 4, 0] } : { x: 0 }}
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

