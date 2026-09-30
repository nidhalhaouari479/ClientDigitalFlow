import type { Industry, Service, Solution, TeamMember, Testimonial } from '@/lib/data'

export type Translate = (key: string, fallback?: string) => string

export function contentKey(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '')
}

export function localizeService(service: Service, t: Translate): Service {
  const prefix = `service.${service.slug}`

  return {
    ...service,
    title: t(`${prefix}.title`, service.title),
    short: t(`${prefix}.short`, service.short),
    hero: t(`${prefix}.hero`, service.hero),
    problem: t(`${prefix}.problem`, service.problem),
    solution: t(`${prefix}.solution`, service.solution),
    capabilities: service.capabilities.map((capability, index) =>
      t(`${prefix}.capability${index + 1}`, capability),
    ),
    faqs: service.faqs.map((faq, index) => ({
      q: t(`${prefix}.faq${index + 1}.q`, faq.q),
      a: t(`${prefix}.faq${index + 1}.a`, faq.a),
    })),
  }
}

export function localizeProcess<T extends { step: string; title: string; desc: string }>(steps: T[], t: Translate) {
  return steps.map((step) => ({
    ...step,
    title: t(`process.${step.step}.title`, step.title),
    desc: t(`process.${step.step}.desc`, step.desc),
  }))
}

export function localizeIndustry(industry: Industry, t: Translate): Industry {
  const prefix = `industry.${contentKey(industry.name)}`
  return { ...industry, name: t(`${prefix}.name`, industry.name), desc: t(`${prefix}.desc`, industry.desc) }
}

export function localizeSolution(solution: Solution, t: Translate): Solution {
  const prefix = `solution.${contentKey(solution.title)}`
  return {
    ...solution,
    title: t(`${prefix}.title`, solution.title),
    desc: t(`${prefix}.desc`, solution.desc),
    points: solution.points.map((point, index) => t(`${prefix}.point${index + 1}`, point)),
  }
}

export function localizeTestimonial(testimonial: Testimonial, index: number, t: Translate): Testimonial {
  const prefix = `testimonial.${index + 1}`
  return {
    ...testimonial,
    quote: t(`${prefix}.quote`, testimonial.quote),
    role: t(`${prefix}.role`, testimonial.role),
  }
}

export function localizeTeamMember(member: TeamMember, index: number, t: Translate): TeamMember {
  const prefix = `team.${index + 1}`
  return {
    ...member,
    role: t(`${prefix}.role`, member.role),
    category: t(`team.category.${contentKey(member.category)}`, member.category),
    desc: t(`${prefix}.desc`, member.desc),
  }
}
