'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import KhandaIcon from '@/components/ui/KhandaIcon'

export default function NotFound() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-navy relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light" />
        <motion.div
          className="absolute top-20 right-20 text-khalsa/5"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <KhandaIcon size={200} />
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-20 text-khalsa/5"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <KhandaIcon size={150} />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-8xl text-khalsa mb-6">404</p>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-white/70 text-lg mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/" size="lg">
              Go Home
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

