'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaInstagram, FaYoutube, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import KhandaIcon from '@/components/ui/KhandaIcon'

const footerLinks = {
  navigation: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/events', label: 'Events' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ],
  resources: [
    { href: '/join', label: 'Join SSA' },
    { href: '/events', label: 'Upcoming Events' },
    { href: '/gallery', label: 'Photo Gallery' },
  ],
}

const socialLinks = [
  { href: 'https://forms.office.com/r/ackW8bMdtn', icon: FaWhatsapp, label: 'Join WhatsApp (Main Support Platform)' },
  { href: 'https://instagram.com/ssa_sheridan', icon: FaInstagram, label: 'Instagram' },
  { href: 'https://www.youtube.com/@SSA.Sheridan', icon: FaYoutube, label: 'YouTube' },
  { href: 'mailto:ssa@sheridancollege.ca', icon: FaEnvelope, label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('/patterns/Khanda_Pattern.png')`,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px',
            backgroundPosition: 'center',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logos/logo.png"
                alt="SSA Sheridan Logo"
                width={48}
                height={48}
                className="h-12 w-auto object-contain"
              />
              <div>
                <p className="font-display font-bold text-lg">SSA Sheridan</p>
                <p className="text-sm text-softblue">Sikh Students Association</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Empowering Students, Celebrating Sikhi. Your Sheridan Support Hub.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-khalsa hover:text-navy transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-display font-semibold text-lg mb-4 text-khalsa">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-khalsa transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-display font-semibold text-lg mb-4 text-khalsa">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-khalsa transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-display font-semibold text-lg mb-4 text-khalsa">
              Contact Us
            </h4>
            <div className="space-y-3 text-white/70 text-sm">
              <p>Sheridan College</p>
              <p>Davis Campus</p>
              <p>7899 McLaughlin Rd</p>
              <p>Brampton, ON L6Y 5H9</p>
              <a
                href="mailto:ssa@sheridancollege.ca"
                className="block hover:text-khalsa transition-colors"
              >
                ssa@sheridancollege.ca
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-white/50 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Sikh Students Association, Sheridan. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-white/50 text-sm">
            <span className="text-khalsa">ੴ</span>
            <span>Ik Onkar - There is One God</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

