'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import EventCard from '@/components/cards/EventCard'
import Button from '@/components/ui/Button'
import { Event } from '@/types'

interface EventsPreviewProps {
  events: Event[]
}

export default function EventsPreview({ events }: EventsPreviewProps) {
  if (!events || events.length === 0) {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Upcoming Events"
            subtitle="Stay tuned for our upcoming events and activities"
          />
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-softblue text-lg mb-6">
              No upcoming events at the moment. Check back soon!
            </p>
            <Button href="/events" variant="secondary">
              View Past Events
            </Button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Upcoming Events"
          subtitle="Join us at our upcoming events and be part of the SSA community"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.slice(0, 3).map((event, index) => (
            <EventCard key={event._id} event={event} index={index} />
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Button href="/events" variant="secondary" size="lg">
            View All Events
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

