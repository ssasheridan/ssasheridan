import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { safeFetch } from '@/sanity/client'
import { siteSettingsQuery } from '@/sanity/queries'
import { SiteSettings } from '@/types'

export const metadata: Metadata = {
  title: 'Join SSA',
  description:
    'Join the Sikh Students Association at Sheridan College. Become a member and be part of our community.',
}

async function getSettings() {
  return safeFetch<SiteSettings>(siteSettingsQuery)
}

export default async function JoinPage() {
  const settings = await getSettings()

  // If we have a join form link, redirect to it
  if (settings?.joinFormLink) {
    redirect(settings.joinFormLink)
  }

  // Fallback page if no join link is configured
  return (
    <div className="min-h-screen pt-32 pb-24 bg-lightgrey">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-6xl mb-6">📝</p>
        <h1 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
          Membership Registration
        </h1>
        <p className="text-softblue text-lg mb-4">
          Join SSA Sheridan via our WhatsApp group! The form verifies you&apos;re a Sheridan student.
        </p>
        <p className="text-softblue text-base mb-8 max-w-xl mx-auto">
          📱 WhatsApp is our main support platform where students from all campuses connect to chat about issues, share experiences, and get personalized help from admins.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://forms.office.com/r/ackW8bMdtn"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all inline-flex items-center gap-2"
          >
            📱 Join WhatsApp Group
          </a>
          <a
            href="mailto:ssa@sheridancollege.ca"
            className="gradient-gold text-navy font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Email Us
          </a>
        </div>
      </div>
    </div>
  )
}

