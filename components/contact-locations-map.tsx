export type MapLocation = {
  name: string
  href: string
  position: string
  labelPosition: string
}

export function ContactLocationsMap({
  title,
  description,
  locations,
}: {
  title: string
  description: string
  locations: MapLocation[]
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
      <p className="text-sm font-medium text-muted-foreground">{title}</p>
      <p className="mt-1 text-lg font-semibold tracking-tight">{description}</p>

      <div
        className="relative mt-5 aspect-[2/1] overflow-hidden rounded-xl bg-secondary/60"
        role="img"
        aria-label={`${title}: ${locations.map((location) => location.name).join(', ')}`}
      >
        <svg aria-hidden="true" viewBox="0 0 800 400" className="absolute inset-0 size-full text-foreground/10" preserveAspectRatio="xMidYMid meet">
          <g fill="currentColor">
            <path d="M56 91 89 55l61-18 57 13 31 32 50 11 21 37-21 28-43 9-23 35-31 14-21 48-34-18-9-48-35-21-31-44-37-12Z" />
            <path d="m227 246 36 20 20 44-7 54-30 26-21-29 7-42-18-38Z" />
            <path d="m354 65 35-24 43 10 19 23-15 20-45-2Z" />
            <path d="m376 120 34-24 37 7 18 24 30 4 28 28-10 28-31 8-15 38-30 14-28-26-8-41-29-20Z" />
            <path d="m430 238 47 9 38 33-9 59-35 42-30-23-12-57-22-37Z" />
            <path d="m466 83 60-33 82 4 44 25 65 10 53 42-12 42-39 13-42-19-34 23-33-10-31 24-43-13-19-34-48-8-15-28Z" />
            <path d="m624 263 41-19 56 16 24 35-24 38-49 4-38-27Z" />
            <path d="m736 220 19-8 15 13-11 20-20-7Z" />
          </g>
        </svg>

        {locations.map((location) => (
          <a
            key={location.name}
            href={location.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={location.name}
            title={location.name}
            className={`group absolute z-10 -translate-x-1/2 -translate-y-1/2 ${location.position}`}
          >
            <span className="ping-soft absolute inset-0 rounded-full bg-primary/40" aria-hidden="true" />
            <span className="relative grid size-4 place-items-center rounded-full bg-primary shadow-[0_0_0_4px_rgba(37,99,235,0.15)] transition-transform group-hover:scale-125 group-focus-visible:scale-125">
              <span className="size-1.5 rounded-full bg-white" />
            </span>
            <span className={`absolute whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-[11px] font-semibold text-background shadow-sm ${location.labelPosition}`}>
              {location.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}
