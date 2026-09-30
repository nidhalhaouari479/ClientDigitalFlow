'use client'

import { cn } from '@/lib/utils'
import { useTranslation } from '@/hooks/useTranslation'

export function StatsSection({
  stats,
  className,
}: {
  stats: { value: string; label: string }[]
  className?: string
}) {
  const { t } = useTranslation()

  return (
    <div className={cn('grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4', className)}>
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col gap-1.5 bg-card p-6 md:p-8">
          <span className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">{stat.value}</span>
          <span className="text-sm text-muted-foreground">
            {t(`stats.${stat.label.toLowerCase().replaceAll(' ', '')}`, stat.label)}
          </span>
        </div>
      ))}
    </div>
  )
}
