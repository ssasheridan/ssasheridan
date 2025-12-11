'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { SanityImageWithCaption } from '@/types'
import { urlFor } from '@/sanity/client'

interface GalleryGridProps {
  images: SanityImageWithCaption[]
  columns?: 2 | 3 | 4
}

export default function GalleryGrid({ images, columns = 3 }: GalleryGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  const openLightbox = (index: number) => setSelectedIndex(index)
  const closeLightbox = () => setSelectedIndex(null)

  const goToPrevious = () => {
    if (selectedIndex === null) return
    setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1)
  }

  const goToNext = () => {
    if (selectedIndex === null) return
    setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1)
  }

  // Handle keyboard navigation globally (Arrow keys + Escape)
  useEffect(() => {
    if (selectedIndex === null) return

    const handleKeyboard = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedIndex(null)
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        setSelectedIndex(prev => {
          if (prev === null) return null
          return prev === 0 ? images.length - 1 : prev - 1
        })
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        setSelectedIndex(prev => {
          if (prev === null) return null
          return prev === images.length - 1 ? 0 : prev + 1
        })
      }
    }

    document.addEventListener('keydown', handleKeyboard)
    document.body.style.overflow = 'hidden' // Prevent background scrolling

    return () => {
      document.removeEventListener('keydown', handleKeyboard)
      document.body.style.overflow = 'unset'
    }
  }, [selectedIndex, images.length])

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowLeft') goToPrevious()
    if (e.key === 'ArrowRight') goToNext()
  }

  // Swipe handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    
    const distance = touchStartX.current - touchEndX.current
    const minSwipeDistance = 50

    if (distance > minSwipeDistance) {
      // Swipe left - go to next
      goToNext()
    } else if (distance < -minSwipeDistance) {
      // Swipe right - go to previous
      goToPrevious()
    }

    touchStartX.current = null
    touchEndX.current = null
  }

  const gridCols = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
  }

  return (
    <>
      {/* Grid */}
      <div className={`grid ${gridCols[columns]} gap-4`}>
        {images.map((image, index) => {
          const imageUrl = urlFor(image)
          if (!imageUrl) return null
          
          return (
            <motion.button
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              onClick={() => openLightbox(index)}
              className="group relative aspect-square overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-khalsa cursor-pointer"
            >
              <Image
                src={imageUrl.width(600).height(600).url()}
                alt={image.caption || `Gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/50 transition-colors duration-300 flex items-center justify-center">
              <motion.span
                className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
              >
                View
              </motion.span>
            </div>
            </motion.button>
          )
        })}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-dark/95 backdrop-blur-lg flex items-center justify-center"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            tabIndex={0}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                closeLightbox()
              }}
              className="absolute top-4 right-4 z-[110] w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-lg"
              aria-label="Close lightbox"
            >
              <HiX className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </button>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    goToPrevious()
                  }}
                  className="absolute left-2 sm:left-4 z-[110] w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-lg"
                  aria-label="Previous image"
                >
                  <HiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    goToNext()
                  }}
                  className="absolute right-2 sm:right-4 z-[110] w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-lg"
                  aria-label="Next image"
                >
                  <HiChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </button>
              </>
            )}

            {/* Image */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="relative max-w-5xl max-h-[85vh] mx-4"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {(() => {
                const lightboxImageBuilder = images[selectedIndex] ? urlFor(images[selectedIndex]) : null
                const lightboxImageSrc = lightboxImageBuilder
                  ? lightboxImageBuilder.width(1200).height(800).url()
                  : null
                
                return lightboxImageSrc ? (
                  <Image
                    src={lightboxImageSrc}
                    alt={images[selectedIndex].caption || `Gallery image ${selectedIndex + 1}`}
                    width={1200}
                    height={800}
                    className="object-contain rounded-lg"
                  />
                ) : null
              })()}

              {/* Caption */}
              {images[selectedIndex].caption && (
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark/80 to-transparent rounded-b-lg">
                  <p className="text-white text-center">
                    {images[selectedIndex].caption}
                  </p>
                </div>
              )}

              {/* Counter */}
              <div className="absolute top-4 left-4 bg-dark/50 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
                {selectedIndex + 1} / {images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

