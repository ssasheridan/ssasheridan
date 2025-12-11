import { Metadata } from 'next'
import { safeFetch } from '@/sanity/client'
import { upcomingEventsQuery, pastEventsQuery } from '@/sanity/queries'
import { Event } from '@/types'
import EventCard from '@/components/cards/EventCard'
import SectionHeader from '@/components/ui/SectionHeader'
import PageHero from '@/components/sections/PageHero'

export const revalidate = 60

async function getEventsData() {
  const [upcomingEvents, pastEvents] = await Promise.all([
    safeFetch<Event[]>(upcomingEventsQuery),
    safeFetch<Event[]>(pastEventsQuery),
  ])
  return { upcomingEvents: upcomingEvents || [], pastEvents: pastEvents || [] }
}

export const metadata: Metadata = {
  title: 'Events',
  description:
    'Explore upcoming and past events hosted by SSA Sheridan. Join us for cultural celebrations, educational workshops, and community gatherings.',
  openGraph: {
    title: 'Events | SSA Sheridan',
    description:
      'Discover events hosted by the Sikh Students Association at Sheridan College.',
  },
}

export default async function EventsPage() {
  const { upcomingEvents, pastEvents } = await getEventsData()

  return (
    <div className="page-transition">
      <PageHero
        title="Events"
        subtitle="Join us at our events and be part of the SSA community"
      />

      {/* Upcoming Events */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <SectionHeader
            title="Upcoming Events"
            subtitle="Don't miss out on these exciting upcoming events"
          />

          {upcomingEvents && upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 justify-items-center">
              {upcomingEvents.map((event, index) => (
                <EventCard key={event._id} event={event} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 sm:py-16 glass-card rounded-2xl px-4">
              <p className="text-4xl sm:text-5xl mb-4">📅</p>
              <h3 className="text-lg sm:text-xl font-display font-bold text-navy mb-2">
                No Upcoming Events
              </h3>
              <p className="text-sm sm:text-base text-softblue">
                Check back soon for our next event announcement!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Past Events */}
      <section className="py-12 sm:py-16 md:py-24 bg-lightgrey">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <SectionHeader
            title="Past Events"
            subtitle="Relive the memories from our previous events"
          />

          {pastEvents && pastEvents.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 justify-items-center">
              {pastEvents.map((event, index) => (
                <EventCard key={event._id} event={event} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 sm:py-16 glass-card rounded-2xl px-4">
              <p className="text-4xl sm:text-5xl mb-4">🎉</p>
              <h3 className="text-lg sm:text-xl font-display font-bold text-navy mb-2">
                Events Coming Soon
              </h3>
              <p className="text-sm sm:text-base text-softblue">
                Our event gallery will be updated soon!
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

