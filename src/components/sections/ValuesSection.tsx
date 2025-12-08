'use client'

import { motion } from 'framer-motion'
import { FaHandHoldingHeart, FaUsers, FaPrayingHands } from 'react-icons/fa'
import SectionHeader from '@/components/ui/SectionHeader'

const values = [
  {
    icon: FaPrayingHands,
    title: 'Humility',
    punjabi: 'ਨਿਮਰਤਾ',
    description:
      'We embrace humility as a core virtue, treating everyone with respect and recognizing the divine light in all beings.',
  },
  {
    icon: FaHandHoldingHeart,
    title: 'Service',
    punjabi: 'ਸੇਵਾ',
    description:
      'Through selfless service (Seva), we support our community, helping fellow students and giving back to those in need.',
  },
  {
    icon: FaUsers,
    title: 'Inclusivity',
    punjabi: 'ਸਮਾਵੇਸ਼',
    description:
      'We welcome everyone regardless of background, fostering a diverse and inclusive environment where all belong.',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

export default function ValuesSection() {
  return (
    <section className="py-24 bg-lightgrey relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/patterns/Khanda_Pattern.png')`,
            backgroundRepeat: 'repeat',
            backgroundSize: '150px 150px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Core Values"
          subtitle="Rooted in Sikh philosophy, these principles guide everything we do at SSA Sheridan"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              variants={item}
              className="group"
            >
              <div className="glass-card p-8 h-full text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                {/* Icon */}
                <motion.div
                  className="w-20 h-20 mx-auto mb-6 gradient-gold rounded-2xl flex items-center justify-center shadow-lg group-hover:glow-gold transition-all duration-500"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <value.icon className="w-10 h-10 text-navy" />
                </motion.div>

                {/* Punjabi Title */}
                <p className="text-khalsa text-2xl mb-2 font-medium">
                  {value.punjabi}
                </p>

                {/* English Title */}
                <h3 className="text-2xl font-display font-bold text-navy mb-4">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-softblue leading-relaxed">
                  {value.description}
                </p>

                {/* Decorative Line */}
                <div className="mt-6 h-1 w-16 gradient-gold rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <blockquote className="text-xl md:text-2xl text-navy/80 font-display italic max-w-3xl mx-auto">
            &ldquo;ਕਿਰਤ ਕਰੋ, ਨਾਮ ਜਪੋ, ਵੰਡ ਛਕੋ&rdquo;
          </blockquote>
          <p className="text-softblue mt-4">
            Work honestly, Meditate on God&apos;s name, Share with others
          </p>
        </motion.div>
      </div>
    </section>
  )
}

