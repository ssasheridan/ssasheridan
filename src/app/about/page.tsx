import { Metadata } from 'next'
import { safeFetch } from '@/sanity/client'
import { siteSettingsQuery, currentTeamQuery, pastTeamQuery } from '@/sanity/queries'
import { SiteSettings, TeamMember } from '@/types'
import PageHero from '@/components/sections/PageHero'
import ValuesSection from '@/components/sections/ValuesSection'
import JoinCTA from '@/components/sections/JoinCTA'
import AboutContent from '@/components/sections/AboutContent'
import SikhPhilosophy from '@/components/sections/SikhPhilosophy'
import ConstitutionSection from '@/components/sections/ConstitutionSection'
import TeamCard from '@/components/cards/TeamCard'
import SectionHeader from '@/components/ui/SectionHeader'

export const revalidate = 60

async function getPageData() {
  const [settings, currentTeam, pastTeam] = await Promise.all([
    safeFetch<SiteSettings>(siteSettingsQuery),
    safeFetch<TeamMember[]>(currentTeamQuery),
    safeFetch<TeamMember[]>(pastTeamQuery),
  ])
  return {
    settings,
    currentTeam: currentTeam || [],
    pastTeam: pastTeam || [],
  }
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
  const { settings, currentTeam, pastTeam } = await getPageData()

  return (
    <div className="page-transition">
      <PageHero
        title="About SSA"
        subtitle="Learn about our mission, values, and the Sikh philosophy that guides us"
      />

      <AboutContent missionText={settings?.missionText} />
      
      <ConstitutionSection
        title="Our Constitution"
        subtitle="Read our official constitution and bylaws that guide our organization"
      />

      <SikhPhilosophy />
      <ValuesSection />

      {/* Current Executive Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Current Executive Team"
            subtitle="Our dedicated leaders for the current academic year"
          />

          {currentTeam && currentTeam.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-8">
              {currentTeam.map((member, index) => (
                <div key={member._id} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] min-w-0 max-w-xs lg:max-w-none flex">
                  <TeamCard member={member} index={index} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 glass-card rounded-2xl">
              <p className="text-5xl mb-4">👥</p>
              <h3 className="text-xl font-display font-bold text-navy mb-2">
                Team Coming Soon
              </h3>
              <p className="text-softblue">
                Our executive team for this year will be announced soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Past Team */}
      {pastTeam && pastTeam.length > 0 && (
        <section className="py-24 bg-lightgrey">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Past Executives"
              subtitle="Honoring our previous leaders who shaped SSA Sheridan"
            />

            <div className="flex flex-wrap justify-center gap-8">
              {pastTeam.map((member, index) => (
                <div key={member._id} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] min-w-0 max-w-xs lg:max-w-none flex">
                  <TeamCard member={member} index={index} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <JoinCTA joinLink={settings?.joinFormLink || 'https://forms.office.com/r/ackW8bMdtn'} />
    </div>
  )
}

