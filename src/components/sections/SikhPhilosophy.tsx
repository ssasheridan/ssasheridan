'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'

const principles = [
  {
    gurmukhi: 'ਨਾਮ ਜਪੋ',
    english: 'Naam Japna',
    meaning: 'Meditate on God\'s Name',
    description:
      'Remember God in all actions, keeping a constant awareness of the divine presence in daily life.',
  },
  {
    gurmukhi: 'ਕਿਰਤ ਕਰੋ',
    english: 'Kirat Karo',
    meaning: 'Earn an Honest Living',
    description:
      'Work hard and earn your living through honest means, contributing positively to society.',
  },
  {
    gurmukhi: 'ਵੰਡ ਛਕੋ',
    english: 'Vand Chakko',
    meaning: 'Share with Others',
    description:
      'Share what you have with those in need, practicing generosity and community support.',
  },
]

const gurus = [
  { name: 'Guru Nanak Dev Ji', period: '1469-1539', number: 1 },
  { name: 'Guru Angad Dev Ji', period: '1504-1552', number: 2 },
  { name: 'Guru Amar Das Ji', period: '1479-1574', number: 3 },
  { name: 'Guru Ram Das Ji', period: '1534-1581', number: 4 },
  { name: 'Guru Arjan Dev Ji', period: '1563-1606', number: 5 },
  { name: 'Guru Hargobind Ji', period: '1595-1644', number: 6 },
  { name: 'Guru Har Rai Ji', period: '1630-1661', number: 7 },
  { name: 'Guru Har Krishan Ji', period: '1656-1664', number: 8 },
  { name: 'Guru Tegh Bahadur Ji', period: '1621-1675', number: 9 },
  { name: 'Guru Gobind Singh Ji', period: '1666-1708', number: 10 },
]

export default function SikhPhilosophy() {
  return (
    <section className="py-24 bg-lightgrey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Sikh Philosophy"
          subtitle="The timeless wisdom that guides our community and values"
        />

        {/* Core Principles */}
        <div className="mb-20">
          <motion.h3
            className="text-2xl font-display font-bold text-navy text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            The Three Pillars of Sikhi
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.english}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group"
              >
                <div className="glass-card p-8 h-full text-center hover:shadow-2xl transition-all duration-500 border-b-4 border-khalsa">
                  <p className="text-4xl text-khalsa mb-3 font-medium">
                    {principle.gurmukhi}
                  </p>
                  <h4 className="text-xl font-display font-bold text-navy mb-2">
                    {principle.english}
                  </h4>
                  <p className="text-khalsa font-medium mb-4">
                    {principle.meaning}
                  </p>
                  <p className="text-softblue">{principle.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* The Ten Gurus */}
        <motion.div
          className="glass-card p-8 rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-display font-bold text-navy text-center mb-8">
            The Ten Sikh Gurus
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {gurus.map((guru, index) => (
              <motion.div
                key={guru.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="text-center p-4 rounded-xl hover:bg-lightgrey transition-colors"
              >
                <div className="w-10 h-10 gradient-gold rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-navy font-bold">{guru.number}</span>
                </div>
                <p className="text-navy font-semibold text-sm leading-tight">
                  {guru.name}
                </p>
                <p className="text-softblue text-xs mt-1">{guru.period}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-8 text-center p-6 bg-lightgrey rounded-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-3xl text-khalsa mb-2">ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ</p>
            <p className="text-navy font-display font-semibold">
              Sri Guru Granth Sahib Ji
            </p>
            <p className="text-softblue text-sm mt-2">
              The eternal Guru of the Sikhs — a compilation of divine wisdom
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

