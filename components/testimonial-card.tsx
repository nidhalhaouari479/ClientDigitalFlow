import type { Testimonial } from '@/lib/data'
import { cn } from '@/lib/utils'

export function TestimonialCard({ testimonial, className }: { testimonial: Testimonial; className?: string }) {
  return (
    <figure
      className={cn(
        'flex h-full flex-col justify-between gap-8 rounded-xl border border-border bg-card p-8',
        className,
      )}
    >
      <svg width="36" height="28" viewBox="0 0 36 28" fill="none" aria-hidden="true" className="text-primary/25">
        <path
          d="M0 28V16.8C0 7.52 5.6 1.44 15.2 0l1.6 4.32C11.36 5.6 8.32 9.12 8 14.4h6.4V28H0Zm19.2 0V16.8C19.2 7.52 24.8 1.44 34.4 0L36 4.32C30.56 5.6 27.52 9.12 27.2 14.4h6.4V28H19.2Z"
          fill="currentColor"
        />
      </svg>
      <blockquote className="text-pretty text-lg leading-relaxed text-foreground">{testimonial.quote}</blockquote>
      <figcaption className="flex flex-col gap-0.5 border-t border-border pt-5">
        <span className="text-sm font-semibold text-foreground">{testimonial.name}</span>
        <span className="text-sm text-muted-foreground">
          {testimonial.role}, {testimonial.company}
        </span>
        <span className="mt-1 text-xs font-medium uppercase tracking-wide text-primary">{testimonial.project}</span>
      </figcaption>
    </figure>
  )
}
