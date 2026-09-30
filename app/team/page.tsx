"use client"

import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { TeamCard } from '@/components/team-card'
import { CTASection } from '@/components/cta-section'
import { TEAM, TEAM_CATEGORIES } from '@/lib/data'
import { contentKey, localizeTeamMember } from '@/lib/content-localization'
import { useTranslation } from '@/hooks/useTranslation'

export default function TeamPage() {
  const { t } = useTranslation()

  return (
    <>
      <PageHero
        eyebrow={t('pages.team.eyebrow', 'Team')}
        title={t('pages.team.title', 'The people behind the products.')}
        description={t('pages.team.description', 'A multidisciplinary team of developers, AI engineers, designers, QA engineers and project managers.')}
      />

      <div className="container-page flex flex-col gap-16 py-20 md:py-28">
        {TEAM_CATEGORIES.map((category) => {
          const members = TEAM
            .map((member, index) => ({ member, index }))
            .filter(({ member }) => member.category === category)
          if (!members.length) return null
          return (
            <section key={category}>
              <div className="mb-8 flex items-center gap-4">
                <h2 className="text-xl font-semibold tracking-tight">
                  {t(`team.category.${contentKey(category)}`, category)}
                </h2>
                <span className="h-px flex-1 bg-border" aria-hidden="true" />
                <span className="text-sm text-muted-foreground">{members.length}</span>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {members.map(({ member, index }, i) => (
                  <Reveal key={member.name} delay={i * 50}>
                    <TeamCard member={localizeTeamMember(member, index, t)} />
                  </Reveal>
                ))}
              </div>
            </section>
          )
        })}
      </div>

      <CTASection
        title={t('pages.team.ctaTitle', 'Want to join the team?')}
        description={t('pages.team.ctaDescription', 'We are always looking for talented people who care about craft.')}
        primaryLabel={t('pages.team.ctaButton', 'View Open Roles')}
        primaryHref="/careers"
      />
    </>
  )
}
