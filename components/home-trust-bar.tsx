'use client'

import { Clock3, Globe2, Layers3 } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

const items = [
  {
    icon: Globe2,
    titleKey: 'home.trust.marketsTitle',
    title: '3 international markets',
    descriptionKey: 'home.trust.marketsDescription',
    description: 'USA, Italy and Tunisia',
  },
  {
    icon: Clock3,
    titleKey: 'home.trust.replyTitle',
    title: 'Reply within one business day',
    descriptionKey: 'home.trust.replyDescription',
    description: 'Clear next steps from the first call',
  },
  {
    icon: Layers3,
    titleKey: 'home.trust.deliveryTitle',
    title: 'End-to-end delivery',
    descriptionKey: 'home.trust.deliveryDescription',
    description: 'Strategy, design, engineering and support',
  },
]

export function HomeTrustBar() {
  const { t } = useTranslation()

  return (
    <section className="border-b border-border bg-foreground text-background" aria-label={t('home.trust.label', 'Key commitments')}>
      <div className="container-page grid divide-y divide-background/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {items.map((item) => (
          <div key={item.titleKey} className="flex min-h-28 items-center gap-4 py-6 sm:px-5 first:sm:pl-0 last:sm:pr-0">
            <item.icon className="size-5 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold">{t(item.titleKey, item.title)}</p>
              <p className="mt-1 text-xs leading-relaxed text-background/60">
                {t(item.descriptionKey, item.description)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
