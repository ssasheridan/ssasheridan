'use client'

import { motion } from 'framer-motion'
import { FaInstagram } from 'react-icons/fa'

interface InstagramEmbedProps {
  username?: string
}

export default function InstagramEmbed({
  username = 'ssa_sheridan',
}: InstagramEmbedProps) {
  const instagramUrl = `https://instagram.com/${username}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <div className="glass-card p-8 text-center rounded-2xl">
        <motion.div
          className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center"
          style={{
            background:
              'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
          }}
          whileHover={{ scale: 1.1 }}
        >
          <FaInstagram className="w-10 h-10 text-white" />
        </motion.div>
        
        <h3 className="text-xl font-display font-bold text-navy mb-2">
          Follow Us on Instagram
        </h3>
        <p className="text-softblue mb-6">
          Stay updated with our latest events, photos, and announcements!
        </p>

        <motion.a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 gradient-gold text-navy font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaInstagram className="w-5 h-5" />
          @{username}
        </motion.a>
      </div>
    </motion.div>
  )
}

