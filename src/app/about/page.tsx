import { Metadata } from 'next'
import { safeFetch } from '@/sanity/client'
import { siteSettingsQuery } from '@/sanity/queries'
import { SiteSettings } from '@/types'
import PageHero from '@/components/sections/PageHero'
import ValuesSection from '@/components/sections/ValuesSection'
import JoinCTA from '@/components/sections/JoinCTA'
import AboutContent from '@/components/sections/AboutContent'
import SikhPhilosophy from '@/components/sections/SikhPhilosophy'

export const revalidate = 60

async function getSettings() {
  return safeFetch<SiteSettings>(siteSettingsQuery)
}

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about SSA Sheridan - our mission, values, and commitment to promoting Sikhi, seva, and inclusivity at Sheridan College. Discover Sikh philosophy and how we serve our community.',
  openGraph: {
    title: 'About Us | SSA Sheridan',
    description:
      'Learn about the Sikh Students Association at Sheridan College and our mission.',
  },
}

export default async function AboutPage() {
  const settings = await getSettings()

  return (
    <div className="page-transition">
      <PageHero
        title="About SSA"
        subtitle="Learn about our mission, values, and the Sikh philosophy that guides us"
      />

      <AboutContent missionText={settings?.missionText} />
      <SikhPhilosophy />
      <ValuesSection />
      <JoinCTA joinLink={settings?.joinFormLink || 'https://forms.office.com/r/ackW8bMdtn'} />
    </div>
  )
}

