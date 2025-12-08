import { Metadata } from 'next'
import { safeFetch } from '@/sanity/client'
import { currentTeamQuery, pastTeamQuery } from '@/sanity/queries'
import { TeamMember } from '@/types'
import TeamCard from '@/components/cards/TeamCard'
import SectionHeader from '@/components/ui/SectionHeader'
import PageHero from '@/components/sections/PageHero'
import JoinCTA from '@/components/sections/JoinCTA'

export const revalidate = 60

async function getTeamData() {
  const [currentTeam, pastTeam] = await Promise.all([
    safeFetch<TeamMember[]>(currentTeamQuery),
    safeFetch<TeamMember[]>(pastTeamQuery),
  ])
  return { currentTeam: currentTeam || [], pastTeam: pastTeam || [] }
}

export const metadata: Metadata = {
  title: 'Our Team',
  description:
    'Meet the dedicated executive team behind SSA Sheridan. Our passionate leaders work tirelessly to promote Sikhi, seva, and community at Sheridan College.',
  openGraph: {
    title: 'Our Team | SSA Sheridan',
    description:
      'Meet the executive team behind the Sikh Students Association at Sheridan College.',
  },
}

export default async function TeamPage() {
  const { currentTeam, pastTeam } = await getTeamData()

  return (
    <div className="page-transition">
      <PageHero
        title="Our Team"
        subtitle="Meet the passionate individuals who make SSA Sheridan possible"
      />

      {/* Current Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Current Executive Team"
            subtitle="Our dedicated leaders for the current academic year"
          />

          {currentTeam && currentTeam.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {currentTeam.map((member, index) => (
                <TeamCard key={member._id} member={member} index={index} />
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {pastTeam.map((member, index) => (
                <TeamCard key={member._id} member={member} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      <JoinCTA joinLink="https://forms.office.com/r/ackW8bMdtn" />
    </div>
  )
}

