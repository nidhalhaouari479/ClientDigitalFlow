'use client'

import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import type { TeamMember } from '@/lib/data'
import { useTranslation } from '@/hooks/useTranslation'

export function TeamCard({ member }: { member: TeamMember }) {
  const { t } = useTranslation()

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_14px_45px_-24px_rgba(37,99,235,0.4)]">
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <Image
          src={member.image || '/placeholder.svg'}
          alt={t('team.portraitAlt', 'Portrait of {name}').replace('{name}', member.name)}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1 p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-base font-semibold tracking-tight">{member.name}</h3>
            <p className="text-sm text-primary">{member.role}</p>
          </div>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('team.linkedInLabel', '{name} on LinkedIn').replace('{name}', member.name)}
            className="grid size-8 shrink-0 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <ExternalLink className="size-4" />
          </a>
        </div>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{member.desc}</p>
      </div>
    </div>
  )
}
