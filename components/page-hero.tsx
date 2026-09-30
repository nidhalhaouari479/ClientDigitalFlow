import { Eyebrow } from '@/components/section'
import { Reveal } from '@/components/reveal'

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string
  title: React.ReactNode
  description?: React.ReactNode
  children?: React.ReactNode
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-secondary/40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
      <div className="container-page relative py-20 md:py-28">
        <Reveal className="flex max-w-3xl flex-col gap-6">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl md:leading-[1.05]">
            {title}
          </h1>
          {description ? (
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">{description}</p>
          ) : null}
          {children}
        </Reveal>
      </div>
    </section>
  )
}
