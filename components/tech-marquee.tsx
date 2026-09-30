"use client"

import { HOME_TECH } from '@/lib/data'

export function TechMarquee() {
  const items = [...HOME_TECH, 'Stripe', 'Redis', 'Kubernetes', 'Figma']
  const loop = [...items, ...items]

  return (
    <div className="overflow-hidden border-y border-border bg-background py-5">
      <div className="tech-marquee flex w-max gap-3">
        {loop.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="inline-flex h-10 items-center rounded-full border border-border bg-secondary px-4 text-sm font-medium text-muted-foreground"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
