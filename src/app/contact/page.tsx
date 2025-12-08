import { Metadata } from 'next'
import { safeFetch } from '@/sanity/client'
import { siteSettingsQuery } from '@/sanity/queries'
import { SiteSettings } from '@/types'
import PageHero from '@/components/sections/PageHero'
import ContactSection from '@/components/sections/ContactSection'

export const revalidate = 60

async function getSettings() {
  return safeFetch<SiteSettings>(siteSettingsQuery)
}

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with SSA Sheridan. Reach out for questions, collaborations, or to learn more about joining our community at Sheridan College.',
  openGraph: {
    title: 'Contact Us | SSA Sheridan',
    description:
      'Connect with the Sikh Students Association at Sheridan College.',
  },
}

export default async function ContactPage() {
  const settings = await getSettings()

  return (
    <div className="page-transition">
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out anytime!"
      />

      <ContactSection
        email={settings?.email}
        instagram={settings?.instagram}
        youtube={settings?.youtube}
        address={settings?.address}
        joinFormLink={settings?.joinFormLink}
      />
    </div>
  )
}

