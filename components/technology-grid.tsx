import { cn } from '@/lib/utils'

export function TechnologyGrid({ items, className }: { items: string[]; className?: string }) {
  return (
    <div className={cn('grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6', className)}>
      {items.map((item) => (
        <div
          key={item}
          className="flex items-center justify-center rounded-lg border border-border bg-card px-4 py-5 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
        >
          {item}
        </div>
      ))}
    </div>
  )
}
