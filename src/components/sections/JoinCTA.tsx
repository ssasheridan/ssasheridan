'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

interface JoinCTAProps {
  joinLink?: string
}

export default function JoinCTA({ joinLink = 'https://forms.office.com/r/ackW8bMdtn' }: JoinCTAProps) {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light" />
        
        {/* Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('/patterns/Khanda_Pattern.png')`,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px',
          }}
        />
        
        {/* Floating Elements - Hidden on mobile */}
        <motion.div
          className="absolute top-10 left-10 opacity-10 hidden md:block"
          animate={{
            y: [0, -15, 0],
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
            width={120}
            height={120}
            className="object-contain drop-shadow-lg"
          />
        </motion.div>
        
        <motion.div
          className="absolute bottom-10 right-10 opacity-10 hidden md:block"
          animate={{
            y: [0, 15, 0],
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
            width={100}
            height={100}
            className="object-contain drop-shadow-lg"
          />
        </motion.div>

        {/* Glowing Orb - Hidden on mobile */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-khalsa/10 blur-3xl hidden md:block"
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
      </div>

      <div className="relative max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Ik Onkar */}
          <motion.p
            className="text-4xl sm:text-5xl text-khalsa mb-4 sm:mb-6"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            ੴ
          </motion.p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 sm:mb-6 px-2">
            Become Part of Our{' '}
            <span className="text-khalsa drop-shadow-lg">Family</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-3 sm:mb-4 max-w-2xl mx-auto px-2">
            Join SSA Sheridan and connect with fellow students who share your values. 
            Experience community, seva, and spiritual growth together.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-khalsa/90 mb-6 sm:mb-8 max-w-2xl mx-auto font-medium px-2 leading-relaxed">
            📱 WhatsApp is our main support platform - Students from all campuses connect here to chat about issues, share experiences, and get personalized help from admins. The form verifies you&apos;re a Sheridan student.
          </p>

          <div className="flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 px-2">
            <Button href={joinLink} size="lg" className="glow-gold-strong" external>
              Join SSA Today
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>

          {/* Stats */}
          <motion.div
            className="mt-12 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {[
              { number: '500+', label: 'Members' },
              { number: '24/7', label: 'Student Support & Help' },
              { number: '3', label: 'Campuses' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-khalsa">
                  {stat.number}
                </p>
                <p className="text-white/60 text-xs sm:text-sm mt-1 leading-tight px-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

