'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaFilePdf, FaDownload, FaExternalLinkAlt } from 'react-icons/fa'

interface ConstitutionSectionProps {
  title?: string
  subtitle?: string
}

export default function ConstitutionSection({
  title = 'Our Constitution',
  subtitle = 'Read our official constitution and bylaws',
}: ConstitutionSectionProps) {
  const constitutionUrl = '/CONSTITUTION - SIKH STUDENTS ASSOCIATION, SHERIDAN COLLEGE.pdf'

  return (
    <motion.section
      className="py-24 bg-navy relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Banner Image */}
      <div className="absolute inset-0">
        <Image
          src="/banners/Banner_HarminderSahib.png"
          alt="Golden Temple Background"
          fill
          className="object-cover opacity-60"
          priority
          quality={90}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/70 via-navy/60 to-navy-light/70" />
      </div>

      {/* Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('/patterns/Khanda_Pattern.png')`,
          backgroundRepeat: 'repeat',
          backgroundSize: '300px 300px',
        }}
      />

      {/* Floating Khanda Symbols */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 right-10 opacity-10"
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
            width={120}
            height={120}
            className="object-contain drop-shadow-lg"
          />
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-10 opacity-10"
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
            width={100}
            height={100}
            className="object-contain drop-shadow-lg"
          />
        </motion.div>
      </div>

      {/* Glowing Accents */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-khalsa/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-softblue/15 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative p-8 md:p-12 rounded-3xl overflow-hidden"
          whileHover={{ scale: 1.02, rotateY: 2 }}
          transition={{ duration: 0.3 }}
          style={{ perspective: '1000px' }}
        >
          {/* Background Image */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <Image
              src="/banners/Banner_HarminderSahib.png"
              alt="Golden Temple Background"
              fill
              className="object-cover opacity-15"
              quality={90}
            />
            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy/80 via-navy/70 to-navy-dark/80 rounded-3xl" />
          </div>

          {/* Card Background with Gradient and Blur */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-md rounded-3xl border border-khalsa/30 shadow-2xl" />
          
          {/* Inner Glow with 3D effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-khalsa/20 via-transparent to-softblue/15 rounded-3xl" />
          
          {/* 3D Depth Effect - Top highlight */}
          <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/10 to-transparent rounded-t-3xl" />
          
          {/* 3D Depth Effect - Bottom shadow */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent rounded-b-3xl" />
          
          {/* Content */}
          <div className="relative z-10">
            {/* Icon with Glow Effect */}
            <motion.div
              className="relative w-24 h-24 mb-8 mx-auto"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, type: 'spring' }}
            >
              {/* Glow behind icon */}
              <div className="absolute inset-0 bg-khalsa/30 rounded-3xl blur-xl" />
              <div className="relative w-24 h-24 gradient-gold rounded-3xl flex items-center justify-center shadow-2xl border-2 border-khalsa/50">
                <FaFilePdf className="w-12 h-12 text-navy" />
              </div>
            </motion.div>

            {/* Title */}
            <motion.h2
              className="text-4xl md:text-5xl font-display font-bold text-white text-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-white via-khalsa to-white bg-clip-text text-transparent">
                {title}
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              className="text-white/90 text-center mb-10 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {subtitle}
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {/* View Button */}
              <motion.a
                href={constitutionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-3 bg-white text-navy font-bold px-10 py-5 rounded-full shadow-2xl hover:shadow-khalsa/50 transition-all duration-300 hover:bg-khalsa hover:text-white w-full sm:w-auto justify-center overflow-hidden"
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Button glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-khalsa/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <FaExternalLinkAlt className="w-5 h-5 relative z-10 group-hover:rotate-45 transition-transform duration-300" />
                <span className="relative z-10 text-lg">View Constitution</span>
              </motion.a>

              {/* Download Button */}
              <motion.a
                href={constitutionUrl}
                download
                className="group relative flex items-center gap-3 gradient-gold text-navy font-bold px-10 py-5 rounded-full shadow-2xl hover:shadow-khalsa/50 transition-all duration-300 w-full sm:w-auto justify-center overflow-hidden border-2 border-khalsa/30"
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Button glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-khalsa/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <FaDownload className="w-5 h-5 relative z-10 group-hover:translate-y-1 transition-transform duration-300" />
                <span className="relative z-10 text-lg">Download PDF</span>
              </motion.a>
            </motion.div>

            {/* Info Text */}
            <motion.p
              className="text-white/70 text-sm md:text-base text-center mt-8 font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Official document governing the Sikh Students Association, Sheridan College
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

