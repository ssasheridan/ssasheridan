'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

interface HeroProps {
  title?: string
  subtitle?: string
  showCTA?: boolean
  joinLink?: string
}

export default function Hero({
  title = 'Sikh Students Association, Sheridan',
  subtitle = 'Empowering Students, Celebrating Sikhi',
  showCTA = true,
  joinLink = 'https://forms.office.com/r/ackW8bMdtn',
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy">
      {/* Background Banner Image */}
      <div className="absolute inset-0">
        <Image
          src="/banners/Banner_Updated.png"
          alt="SSA Sheridan Background"
          fill
          className="hero-bg-image opacity-60"
          priority
          quality={90}
          sizes="100vw"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/70 via-navy/60 to-navy-light/70" />
      </div>
      
      {/* Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url('/patterns/Khanda_Pattern.png')`,
          backgroundRepeat: 'repeat',
          backgroundSize: '300px 300px',
        }}
      />
      
      {/* Animated Background Elements - Hidden on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        {/* Floating Khanda Symbols */}
        <motion.div
          className="absolute top-20 left-10 opacity-10"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Image
            src="/banners/Banner_khanda.png"
            alt="Khanda Symbol"
            width={150}
            height={150}
            className="object-contain drop-shadow-lg"
          />
        </motion.div>
        
        <motion.div
          className="absolute top-40 right-20 opacity-5"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Image
            src="/banners/Banner_khanda.png"
            alt="Khanda Symbol"
            width={200}
            height={200}
            className="object-contain drop-shadow-lg"
          />
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 left-1/4 opacity-5"
          animate={{
            y: [0, 15, 0],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Image
            src="/banners/Banner_khanda.png"
            alt="Khanda Symbol"
            width={180}
            height={180}
            className="object-contain drop-shadow-lg"
          />
        </motion.div>

        {/* Glowing Orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-khalsa/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-48 h-48 rounded-full bg-softblue/20 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>

      {/* Ik Onkar Symbol - Top Right Corner */}
      <motion.p
        className="absolute top-6 right-6 sm:top-8 sm:right-8 md:top-12 md:right-12 z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-khalsa font-serif drop-shadow-lg"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        ੴ
      </motion.p>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 sm:pt-20 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Title */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-white mb-4 sm:mb-6 leading-tight px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="block">{title.split(',')[0]}</span>
            <span className="block text-khalsa drop-shadow-lg">
              {title.includes(',') ? title.split(',')[1] : ''}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/80 mb-3 sm:mb-4 font-light px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {subtitle}
          </motion.p>

          {/* Tagline */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-khalsa font-medium mb-6 sm:mb-10 px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Your Sheridan Support Hub
          </motion.p>

          {/* CTA Buttons */}
          {showCTA && (
            <motion.div
              className="flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-20 px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button href={joinLink} size="lg" className="glow-gold" external>
                Join SSA Today
              </Button>
              <Button href="/events" variant="outline" size="lg">
                Explore Events
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Scroll Indicator - Positioned relative to section, not content container */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { duration: 1, delay: 1.5 },
          y: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
        }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2 backdrop-blur-sm bg-white/5">
          <motion.div
            className="w-2 h-2 bg-khalsa rounded-full shadow-lg shadow-khalsa/50"
            animate={{ y: [0, 16, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: 'easeInOut' 
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}

