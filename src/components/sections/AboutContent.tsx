'use client'

import { motion } from 'framer-motion'
import { FaHeart, FaGraduationCap, FaHandsHelping, FaStar } from 'react-icons/fa'
import SectionHeader from '@/components/ui/SectionHeader'

interface AboutContentProps {
  missionText?: string
}

const highlights = [
  {
    icon: FaHandsHelping,
    title: 'Complete Student Support',
    description: 'Full support for college, housing, academics, and mental health - we help with any issue',
  },
  {
    icon: FaHeart,
    title: 'Community & Advocacy',
    description: 'Building a supportive family and providing advocacy support no matter what',
  },
  {
    icon: FaGraduationCap,
    title: 'Education & Awareness',
    description: 'Spreading awareness about Sikh history, values, and culture',
  },
  {
    icon: FaStar,
    title: 'Spiritual Growth',
    description: 'Weekly Rehras Sahib Path and supporting personal development',
  },
]

export default function AboutContent({ missionText }: AboutContentProps) {
  const defaultMission = `SSA Sheridan is a non-profit student club dedicated to promoting Sikhi, seva, inclusivity, and comprehensive student support at Sheridan College. We strive to create a welcoming environment where students can learn about Sikh values, participate in community service, and build meaningful connections.

Our mission is to empower students through the timeless teachings of Sikhi while fostering a sense of belonging and purpose. We believe in the principles of equality, compassion, and selfless service that form the foundation of Sikh philosophy.

As "Your Sheridan Support Hub," we provide full support for any issue you may face - whether it's related to college, housing, academics, or mental health. We also offer advocacy support, standing with you no matter what challenges arise. Additionally, we host weekly Rehras Sahib Path sessions every semester, providing a space for spiritual connection and community reflection.

We are committed to being a resource for all students—regardless of background—who seek community, guidance, and opportunities for growth.`

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Mission Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              title="Our Mission"
              subtitle="Your Sheridan Support Hub"
              centered={false}
            />
            <div className="prose prose-lg">
              <p className="text-softblue leading-relaxed whitespace-pre-line">
                {missionText || defaultMission}
              </p>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="glass-card p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-navy" />
                  </div>
                  <h3 className="font-display font-bold text-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-softblue text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Quote Banner */}
        <motion.div
          className="mt-20 gradient-navy rounded-3xl p-12 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Background Decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4 text-8xl text-khalsa">&ldquo;</div>
            <div className="absolute bottom-4 right-4 text-8xl text-khalsa">&rdquo;</div>
          </div>

          <div className="relative">
            <p className="text-3xl md:text-4xl font-display text-white mb-4">
              ਸਰਬੱਤ ਦਾ ਭਲਾ
            </p>
            <p className="text-xl text-khalsa font-medium mb-2">
              Sarbat Da Bhala
            </p>
            <p className="text-white/70 text-lg">
              &ldquo;May everyone prosper&rdquo; — A prayer for the welfare of all humanity
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

