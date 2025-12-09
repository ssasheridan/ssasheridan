'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { TeamMember } from '@/types'
import { urlFor } from '@/sanity/client'

interface TeamCardProps {
  member: TeamMember
  index?: number
}

export default function TeamCard({ member, index = 0 }: TeamCardProps) {
  const memberImageBuilder = member.image ? urlFor(member.image) : null
  const memberImageSrc = memberImageBuilder
    ? memberImageBuilder.width(400).height(400).url()
    : null

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group h-full w-full"
    >
      <div className="glass-card overflow-hidden hover:shadow-2xl transition-all duration-500 h-full text-center flex flex-col">
        {/* Image */}
        <div className="relative h-64 overflow-hidden flex-shrink-0">
          {memberImageSrc ? (
            <Image
              src={memberImageSrc}
              alt={member.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          ) : (
            <div className="w-full h-full gradient-navy flex items-center justify-center">
              <span className="text-6xl text-khalsa/50">
                {member.name.charAt(0)}
              </span>
            </div>
          )}
          
          {/* Overlay with Social Links */}
          <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
            {member.socialLinks?.instagram && (
              <motion.a
                href={member.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-khalsa hover:text-navy transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`${member.name}'s Instagram`}
              >
                <FaInstagram className="w-6 h-6" />
              </motion.a>
            )}
            {member.socialLinks?.linkedin && (
              <motion.a
                href={member.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-khalsa hover:text-navy transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`${member.name}'s LinkedIn`}
              >
                <FaLinkedin className="w-6 h-6" />
              </motion.a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-display font-bold text-navy mb-1">
            {member.name}
          </h3>
          
          <p className="text-khalsa font-medium mb-3">
            {member.role}
          </p>

          <div className="flex-grow">
            {member.program && (
              <p className="text-softblue text-sm mb-1">
                {member.program}
              </p>
            )}

            {member.academicYear && (
              <p className="text-softblue/70 text-sm">
                {member.academicYear}
              </p>
            )}
          </div>

          {/* Decorative Element */}
          <div className="mt-4 h-1 w-12 gradient-gold rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>
    </motion.div>
  )
}

