'use client'

import { motion } from 'framer-motion'

interface YouTubeEmbedProps {
  videoId?: string
  channelUrl?: string
  title?: string
}

export default function YouTubeEmbed({
  videoId,
  channelUrl = 'https://www.youtube.com/@SSA.Sheridan',
  title = 'SSA Sheridan YouTube',
}: YouTubeEmbedProps) {
  // Extract video ID from various YouTube URL formats
  const getVideoId = (url?: string): string | null => {
    if (!url) return null
    
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    ]
    
    for (const pattern of patterns) {
      const match = url.match(pattern)
      if (match) return match[1]
    }
    
    return url // Assume it's already a video ID
  }

  const id = videoId ? getVideoId(videoId) : null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      {id ? (
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl glass-card">
          <iframe
            src={`https://www.youtube.com/embed/${id}?rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      ) : (
        <div className="glass-card p-8 text-center rounded-2xl">
          <motion.div
            className="w-20 h-20 mx-auto mb-4 bg-red-500 rounded-full flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
          >
            <svg
              className="w-10 h-10 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </motion.div>
          <h3 className="text-xl font-display font-bold text-navy mb-2">
            Watch Our Videos
          </h3>
          <p className="text-softblue mb-6">
            Check out our YouTube channel for event highlights and more!
          </p>
          <motion.a
            href={channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Visit Our Channel
          </motion.a>
        </div>
      )}
    </motion.div>
  )
}

