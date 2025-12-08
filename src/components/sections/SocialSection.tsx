'use client'

import SectionHeader from '@/components/ui/SectionHeader'
import YouTubeEmbed from '@/components/embeds/YouTubeEmbed'
import InstagramEmbed from '@/components/embeds/InstagramEmbed'

interface SocialSectionProps {
  youtubeUrl?: string
  instagramUsername?: string
}

export default function SocialSection({
  youtubeUrl,
  instagramUsername = 'ssa_sheridan',
}: SocialSectionProps) {
  return (
    <section className="py-24 bg-lightgrey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Connect With Us"
          subtitle="Follow our social media to stay updated with the latest from SSA Sheridan"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <YouTubeEmbed videoId={youtubeUrl} />
          <InstagramEmbed username={instagramUsername} />
        </div>
      </div>
    </section>
  )
}

