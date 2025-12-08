'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  FaEnvelope,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaWhatsapp,
} from 'react-icons/fa'
import Button from '@/components/ui/Button'

interface ContactSectionProps {
  email?: string
  instagram?: string
  youtube?: string
  address?: string
  joinFormLink?: string
}

export default function ContactSection({
  email = 'ssa@sheridancollege.ca',
  instagram = 'https://instagram.com/ssa_sheridan',
  youtube = 'https://www.youtube.com/@SSA.Sheridan',
  address = 'Sheridan College, Davis Campus\n7899 McLaughlin Rd\nBrampton, ON L6Y 5H9',
  joinFormLink = 'https://forms.office.com/r/ackW8bMdtn',
}: ContactSectionProps) {
  const contactMethods = [
    {
      icon: FaWhatsapp,
      label: 'WhatsApp (Main Support)',
      value: 'Join via Form',
      href: joinFormLink,
      color: 'bg-green-500',
      description: 'Main platform for student support from all campuses',
    },
    {
      icon: FaInstagram,
      label: 'Instagram',
      value: '@ssa_sheridan',
      href: instagram,
      color:
        'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500',
      description: 'Connect with us and see updates',
    },
    {
      icon: FaYoutube,
      label: 'YouTube',
      value: '@SSA.Sheridan',
      href: youtube,
      color: 'bg-red-500',
      description: 'Watch event highlights and videos',
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      value: email,
      href: `mailto:${email}`,
      color: 'bg-khalsa',
      description: 'General inquiries',
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-display font-bold text-navy mb-6">
              Get In Touch
            </h2>
            <p className="text-softblue text-lg mb-4">
              Have questions about SSA Sheridan? Want to collaborate or learn
              more about our community? We&apos;re here to help!
            </p>
            <p className="text-khalsa font-medium mb-10 text-base">
              📱 WhatsApp is our main support platform where students from all campuses connect to chat about issues, share experiences, and get personalized help from admins.
            </p>

            {/* Contact Methods */}
            <div className="space-y-6 mb-10">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div
                    className={`w-14 h-14 ${method.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-softblue text-sm">{method.label}</p>
                    <p className="text-navy font-semibold group-hover:text-khalsa transition-colors">
                      {method.value}
                    </p>
                    {method.description && (
                      <p className="text-softblue text-xs mt-1">{method.description}</p>
                    )}
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Address */}
            <motion.div
              className="glass-card p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <h3 className="text-navy font-semibold mb-2">Find Us</h3>
                  <p className="text-softblue whitespace-pre-line">{address}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Join CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="gradient-navy rounded-3xl p-10 h-full relative overflow-hidden">
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 opacity-10">
                <Image
                  src="/banners/Banner_khanda.png"
                  alt="Khanda Symbol"
                  width={200}
                  height={200}
                  className="object-contain drop-shadow-lg"
                />
              </div>

              <div className="relative">
                <motion.p
                  className="text-5xl text-khalsa mb-6"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                >
                  ੴ
                </motion.p>

                <h3 className="text-3xl font-display font-bold text-white mb-4">
                  Ready to Join?
                </h3>

                <p className="text-white/80 text-lg mb-4">
                  Become a part of SSA Sheridan! Fill out our membership form
                  and join a community that celebrates Sikhi, service, and
                  student success.
                </p>
                <p className="text-white/70 text-sm mb-8">
                  📱 Join our WhatsApp group - the main support platform where students from all campuses connect, share experiences, and get personalized help. The form verifies you&apos;re a Sheridan student.
                </p>

                <Button
                  href={joinFormLink}
                  size="lg"
                  className="w-full sm:w-auto"
                  external
                >
                  Join SSA Now
                </Button>

                {/* Benefits */}
                <div className="mt-10 pt-8 border-t border-white/20">
                  <p className="text-white/60 text-sm mb-4">
                    As a member, you&apos;ll get:
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Access to all SSA events',
                      'Community support network',
                      'Leadership opportunities',
                      'Volunteer hours',
                    ].map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-center gap-2 text-white/80"
                      >
                        <span className="text-khalsa">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.div
          className="mt-16 glass-card p-4 rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="aspect-[21/9] bg-lightgrey rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.8532727895!2d-79.73792688450865!3d43.72168267911889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b03f2b0e7c3a5%3A0x4a3c3b3b3b3b3b3b!2sSheridan%20College%20Davis%20Campus!5e0!3m2!1sen!2sca!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SSA Sheridan Location"
              className="w-full h-full min-h-[300px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

