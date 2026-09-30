"use client"

import { FAQAccordion } from '@/components/faq-accordion'
import { SectionHeading } from '@/components/section'
import { useTranslation } from '@/hooks/useTranslation'

export function HomeFAQ() {
  const { t } = useTranslation()
  const items = [
    {
      q: t('home.faq.q1', 'Can you build the product from idea to launch?'),
      a: t('home.faq.a1', 'Yes. We cover discovery, UX/UI, development, testing, deployment and long-term support with one integrated team.'),
    },
    {
      q: t('home.faq.q2', 'Can you improve an existing website or app?'),
      a: t('home.faq.a2', 'Yes. We can audit the current product, fix performance and UX issues, then add new features without forcing a full rebuild.'),
    },
    {
      q: t('home.faq.q3', 'Do you work with AI automation?'),
      a: t('home.faq.a3', 'Yes. We build assistants, RAG systems, workflow automations and internal AI tools grounded in your own data.'),
    },
  ]

  return (
    <section className="container-page py-20 md:py-28">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading
          eyebrow={t('home.faq.eyebrow', 'FAQ')}
          title={t('home.faq.title', 'Questions before we start?')}
          description={t('home.faq.description', 'A few quick answers for teams comparing partners for software, automation or AI work.')}
        />
        <FAQAccordion items={items} />
      </div>
    </section>
  )
}
