'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  FaGraduationCap, 
  FaHome, 
  FaBook, 
  FaHeart, 
  FaGavel, 
  FaPrayingHands,
  FaClock,
  FaMapMarkerAlt
} from 'react-icons/fa'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'
import { urlFor } from '@/sanity/client'

interface RehrasSahibDetails {
  poster?: any // Sanity image object
  roomNumber?: string
  building?: string
  day?: string
  time?: string
  semester?: string
}

interface SupportServicesSectionProps {
  rehrasSahib?: RehrasSahibDetails
}

const supportServices = [
  {
    icon: FaGraduationCap,
    title: 'Academic Support',
    description: 'Get help with coursework, assignments, and academic challenges',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: FaHome,
    title: 'Housing Support',
    description: 'Assistance with finding accommodation and housing-related issues',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: FaBook,
    title: 'College Resources',
    description: 'Guidance on college services, programs, and resources',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: FaHeart,
    title: 'Mental Health Support',
    description: 'Confidential support for mental health and wellness concerns',
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: FaGavel,
    title: 'Advocacy Support',
    description: 'We support you no matter what - standing up for your rights and addressing any issues',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: FaPrayingHands,
    title: 'Spiritual Support',
    description: 'Weekly Rehras Sahib Path and spiritual guidance',
    color: 'from-khalsa to-kesri',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

export default function SupportServicesSection({ 
  rehrasSahib 
}: SupportServicesSectionProps) {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
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
          title="Comprehensive Student Support"
          subtitle="Your Sheridan Support Hub - We're here for you, no matter what"
        />

        {/* Support Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {supportServices.map((service, index) => (
            <motion.div
              key={service.title}
              variants={item}
              className="group"
            >
              <div className="glass-card p-6 h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-l-4 border-khalsa">
                <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-display font-bold text-navy mb-2">
                  {service.title}
                </h3>
                
                <p className="text-softblue leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Weekly Rehras Sahib Path Card */}
        <motion.div
          className="gradient-navy rounded-3xl p-8 md:p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 opacity-10">
            <div className="text-8xl text-khalsa font-serif">ੴ</div>
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 gradient-gold rounded-2xl flex items-center justify-center">
                  <FaPrayingHands className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
                    Weekly Rehras Sahib Path
                  </h3>
                  <p className="text-khalsa font-medium">ਰਹਿਰਾਸ ਸਾਹਿਬ</p>
                </div>
              </div>

              <p className="text-white/80 text-lg mb-6 leading-relaxed">
                Join us every week for Rehras Sahib Path - a time for spiritual connection, 
                community, and reflection. Open to all students seeking peace and guidance.
              </p>

              {rehrasSahib ? (
                <div className="space-y-3 mb-6">
                  {rehrasSahib.day && (
                    <div className="flex items-center gap-3 text-white/90">
                      <FaClock className="w-5 h-5 text-khalsa flex-shrink-0" />
                      <span className="font-medium">{rehrasSahib.day}</span>
                      {rehrasSahib.time && (
                        <span className="text-white/70">• {rehrasSahib.time}</span>
                      )}
                    </div>
                  )}
                  
                  {(rehrasSahib.building || rehrasSahib.roomNumber) && (
                    <div className="flex items-center gap-3 text-white/90">
                      <FaMapMarkerAlt className="w-5 h-5 text-khalsa flex-shrink-0" />
                      <span>
                        {rehrasSahib.building}
                        {rehrasSahib.roomNumber && `, Room ${rehrasSahib.roomNumber}`}
                      </span>
                    </div>
                  )}
                  
                  {rehrasSahib.semester && (
                    <p className="text-white/70 text-sm italic">
                      {rehrasSahib.semester}
                    </p>
                  )}
                </div>
              ) : (
                <div className="space-y-3 mb-6 text-white/70">
                  <div className="flex items-center gap-3">
                    <FaClock className="w-5 h-5 text-khalsa" />
                    <span>Wednesdays & Thursdays • 6:15 PM - 9:15 PM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaMapMarkerAlt className="w-5 h-5 text-khalsa" />
                    <span>Room details will be updated soon</span>
                  </div>
                  <p className="text-sm italic">Every semester</p>
                </div>
              )}

              <Button 
                href="https://forms.office.com/r/ackW8bMdtn" 
                variant="outline" 
                size="lg"
                external
                className="border-white/30 text-white hover:bg-white hover:text-navy"
              >
                Join Us for Rehras Sahib
              </Button>
            </div>

            {/* Right Side - Visual (Poster or Symbol) */}
            <div className="text-center lg:text-right">
              {rehrasSahib?.poster ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-khalsa/30"
                >
                  <div className="relative aspect-[3/4] w-full max-w-sm mx-auto lg:mx-0">
                    <Image
                      src={urlFor(rehrasSahib.poster).width(600).height(800).url()}
                      alt="Rehras Sahib Path Poster"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-khalsa/10 to-transparent pointer-events-none rounded-2xl" />
                </motion.div>
              ) : (
                <motion.div
                  className="inline-block"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <div className="text-9xl md:text-[12rem] text-khalsa/20 font-serif leading-none">
                    ੴ
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          className="mt-12 glass-card p-8 text-center rounded-2xl border-2 border-khalsa/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h4 className="text-2xl font-display font-bold text-navy mb-3">
            Need Help? We&apos;re Here For You
          </h4>
          <p className="text-softblue mb-6 max-w-2xl mx-auto">
            Whether you&apos;re facing academic challenges, housing issues, mental health concerns, 
            or need advocacy support - we provide full support no matter what. Reach out anytime!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              href="https://forms.office.com/r/ackW8bMdtn" 
              size="lg"
              external
            >
              Get Support Now
            </Button>
            <Button 
              href="/contact" 
              variant="outline" 
              size="lg"
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

