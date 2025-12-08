import { Metadata } from 'next'
import { safeFetch } from '@/sanity/client'
import { siteSettingsQuery, upcomingEventsQuery } from '@/sanity/queries'
import { SiteSettings, Event } from '@/types'
import Hero from '@/components/sections/Hero'
import ValuesSection from '@/components/sections/ValuesSection'
import SupportServicesSection from '@/components/sections/SupportServicesSection'
import EventsPreview from '@/components/sections/EventsPreview'
import CampusSection from '@/components/sections/CampusSection'
import SocialSection from '@/components/sections/SocialSection'
import JoinCTA from '@/components/sections/JoinCTA'

export const revalidate = 60 // Revalidate every 60 seconds

async function getPageData() {
  const [settings, upcomingEvents] = await Promise.all([
    safeFetch<SiteSettings>(siteSettingsQuery),
    safeFetch<Event[]>(upcomingEventsQuery),
  ])
  return { settings, upcomingEvents }
}

export const metadata: Metadata = {
  title: 'Home | Sikh Students Association, Sheridan',
  description:
    'Welcome to SSA Sheridan - Empowering Students, Celebrating Sikhi. Your Sheridan Support Hub for Sikh students at Sheridan College.',
}

export default async function HomePage() {
  const { settings, upcomingEvents } = await getPageData()

  return (
    <div className="page-transition">
      <Hero
        title={settings?.heroTitle || 'Sikh Students Association, Sheridan'}
        subtitle={settings?.heroSubtitle || 'Empowering Students, Celebrating Sikhi'}
        joinLink={settings?.joinFormLink || 'https://forms.office.com/r/ackW8bMdtn'}
      />
      <ValuesSection />
      <SupportServicesSection rehrasSahib={settings?.rehrasSahib} />
      <EventsPreview events={upcomingEvents || []} />
      <CampusSection />
      <SocialSection
        youtubeUrl={settings?.youtube}
        instagramUsername="ssa_sheridan"
      />
      <JoinCTA joinLink={settings?.joinFormLink || 'https://forms.office.com/r/ackW8bMdtn'} />
    </div>
  )
}

