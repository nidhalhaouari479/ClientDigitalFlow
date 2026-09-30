import { Reveal } from '@/components/reveal'

type Step = { step: string; title: string; desc: string }

export function ProcessTimeline({ steps }: { steps: Step[] }) {
  return (
    <div>
      {/* Desktop: horizontal */}
      <div className="hidden lg:block">
        <div className="grid" style={{ gridTemplateColumns: `repeat(${Math.min(steps.length, 6)}, minmax(0, 1fr))` }}>
          {steps.slice(0, 6).map((s, i) => (
            <Reveal key={s.step} delay={i * 80} className="relative pr-6">
              <div className="mb-6 flex items-center gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-border bg-card text-sm font-semibold text-primary">
                  {s.step}
                </span>
                <span className="process-line h-px flex-1 bg-border" aria-hidden="true" />
              </div>
              <h3 className="mb-2 text-base font-semibold tracking-tight">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Mobile / tablet: vertical */}
      <div className="flex flex-col lg:hidden">
        {steps.map((s, i) => (
          <Reveal key={s.step} delay={i * 60} className="relative flex gap-4 pb-8 last:pb-0">
            <div className="flex flex-col items-center">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-border bg-card text-sm font-semibold text-primary">
                {s.step}
              </span>
              {i < steps.length - 1 ? <span className="process-line-vertical mt-2 w-px flex-1 bg-border" aria-hidden="true" /> : null}
            </div>
            <div className="pb-2 pt-1.5">
              <h3 className="mb-1.5 text-base font-semibold tracking-tight">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
