import { MapPin } from 'lucide-react'

type Location = {
  name: string
  href: string
  position: string
  labelPosition: string
}

type ContactLocationsMapProps = {
  title: string
  description: string
  usaLabel: string
  italyLabel: string
  tunisiaLabel: string
}

export function ContactLocationsMap({
  title,
  description,
  usaLabel,
  italyLabel,
  tunisiaLabel,
}: ContactLocationsMapProps) {
  const locations: Location[] = [
    {
      name: usaLabel,
      href: 'https://www.google.com/maps/search/?api=1&query=United%20States',
      position: 'left-[22%] top-[38%]',
      labelPosition: 'left-1/2 top-full mt-1 -translate-x-1/2',
    },
    {
      name: italyLabel,
      href: 'https://www.google.com/maps/search/?api=1&query=Milano%2C%20Italy',
      position: 'left-[53%] top-[35%]',
      labelPosition: 'bottom-full left-1/2 mb-1 -translate-x-1/2',
    },
    {
      name: tunisiaLabel,
      href: 'https://www.google.com/maps/search/?api=1&query=Tunisia',
      position: 'left-[52%] top-[51%]',
      labelPosition: 'left-full top-1/2 ml-2 -translate-y-1/2',
    },
  ]

  return (
    <div className="rounded-2xl border border-background/15 bg-background/5 p-5 backdrop-blur sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-background/60">{title}</p>
          <p className="mt-1 text-lg font-semibold tracking-tight">{description}</p>
        </div>
        <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
      </div>

      <div
        className="relative mt-5 aspect-[2/1] min-h-40 overflow-hidden rounded-xl border border-background/10 bg-background/[0.04]"
        role="img"
        aria-label={`${title}: ${usaLabel}, ${italyLabel}, ${tunisiaLabel}`}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 800 400"
          className="absolute inset-0 size-full text-background/20"
          preserveAspectRatio="xMidYMid meet"
        >
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
          <g fill="none" stroke="currentColor" strokeWidth="1" opacity="0.45">
            <path d="M0 200h800M400 0v400M0 120h800M0 280h800" />
            <ellipse cx="400" cy="200" rx="300" ry="190" />
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
            <span className="relative grid size-4 place-items-center rounded-full bg-primary shadow-[0_0_0_4px_rgba(255,255,255,0.14)] transition-transform group-hover:scale-125 group-focus-visible:scale-125">
              <span className="size-1.5 rounded-full bg-white" />
            </span>
            <span className={`absolute whitespace-nowrap rounded bg-foreground/90 px-2 py-1 text-[11px] font-semibold text-background shadow-sm ${location.labelPosition}`}>
              {location.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}
