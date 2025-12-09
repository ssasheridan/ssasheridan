'use client'

import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaUsers, FaCalendarCheck } from 'react-icons/fa'
import SectionHeader from '@/components/ui/SectionHeader'

const campuses = [
  {
    name: 'Davis Campus',
    location: 'Brampton, ON',
    description: 'Home campus - Main hub for SSA activities and events',
    icon: FaMapMarkerAlt,
  },
  {
    name: 'Trafalgar Campus',
    location: 'Oakville, ON',
    description: 'Growing community of Sikh students',
    icon: FaUsers,
  },
  {
    name: 'HMC Campus',
    location: 'Mississauga, ON',
    description: 'Creative arts and media hub',
    icon: FaCalendarCheck,
  },
]

export default function CampusSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <SectionHeader
          title="Across Sheridan Campuses"
          subtitle="SSA Sheridan unites students across all three campuses, creating one strong community"
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {campuses.map((campus, index) => (
            <motion.div
              key={campus.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="glass-card p-6 sm:p-8 h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-t-4 border-khalsa">
                <div className="w-12 h-12 sm:w-14 sm:h-14 gradient-gold rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <campus.icon className="w-6 h-6 sm:w-7 sm:h-7 text-navy" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-display font-bold text-navy mb-2">
                  {campus.name}
                </h3>
                
                <p className="text-khalsa font-medium text-sm mb-3">
                  {campus.location}
                </p>
                
                <p className="text-sm sm:text-base text-softblue">
                  {campus.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Map */}
        <motion.div
          className="mt-12 sm:mt-16 glass-card p-3 sm:p-4 rounded-xl sm:rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="aspect-[21/9] bg-lightgrey rounded-lg sm:rounded-xl overflow-hidden min-h-[200px] sm:min-h-[300px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.8532727895!2d-79.73792688450865!3d43.72168267911889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b03f2b0e7c3a5%3A0x4a3c3b3b3b3b3b3b!2sSheridan%20College%20Davis%20Campus!5e0!3m2!1sen!2sca!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SSA Sheridan Location - Davis Campus"
              className="w-full h-full"
            />
          </div>
          <div className="mt-3 sm:mt-4 text-center px-2">
            <p className="text-navy font-display font-semibold mb-2 text-sm sm:text-base">
              Find Us at Sheridan College - Davis Campus
            </p>
            <a
              href="https://www.google.com/maps/place/Sheridan+College+Davis+Campus/@43.721683,-79.737927,15z/data=!4m6!3m5!1s0x882b03f2b0e7c3a5:0x4a3c3b3b3b3b3b3b!8m2!3d43.721683!4d-79.737927!16s%2Fg%2F1td_xvhp?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-khalsa hover:text-khalsa-dark font-medium text-xs sm:text-sm transition-colors inline-flex items-center gap-1 break-all sm:break-normal"
            >
              <FaMapMarkerAlt className="inline flex-shrink-0" />
              <span>7899 McLaughlin Rd, Brampton, ON L6Y 5H9</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

