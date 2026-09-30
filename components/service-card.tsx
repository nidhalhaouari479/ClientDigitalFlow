import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ServiceCard({
  title,
  description,
  icon: Icon,
  href,
  actionLabel = 'Learn more',
  className,
}: {
  title: string
  description: string
  icon: LucideIcon
  href: string
  actionLabel?: string
  className?: string
}) {
  return (
    <Link
      href={href}
      className={cn(
        'group relative flex h-full flex-col gap-5 rounded-xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_14px_45px_-20px_rgba(37,99,235,0.4)]',
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <span className="grid size-12 place-items-center rounded-lg bg-accent text-primary transition-all duration-300 group-hover:-rotate-3 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon className="size-5 transition-transform duration-300 group-hover:scale-110" />
        </span>
        <ArrowUpRight className="size-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
      <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all duration-300 group-hover:translate-x-1">
        {actionLabel}
        <ArrowUpRight className="size-4" />
      </span>
    </Link>
  )
}
