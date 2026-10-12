// Simple light hero background: one soft blue glow at the top, nothing else.
export function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute left-1/2 top-[-35%] h-[620px] w-[min(1000px,140%)] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(37,99,235,0.14),transparent)]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-border" />
    </div>
  )
}
