'use client'

import { useState } from 'react'
import { ArrowRight, Check, Clock3, ShieldCheck } from 'lucide-react'
import { siteButtonClass } from '@/components/site-button'
import { cn } from '@/lib/utils'
import { useTranslation } from '@/hooks/useTranslation'

const projectTypes = [
  'Web Development',
  'Mobile Development',
  'SaaS Development',
  'ERP & CRM',
  'AI & Automation',
  'UI/UX Design',
  'Cloud & DevOps',
  'Maintenance & Support',
]

const budgets = ['< $10k', '$10k - $25k', '$25k - $50k', '$50k - $100k', '$100k+']

const timelines = [
  { key: 'contact.form.timelineSoon', fallback: 'As soon as possible' },
  { key: 'contact.form.timeline1to3', fallback: 'Within 1-3 months' },
  { key: 'contact.form.timeline3to6', fallback: 'Within 3-6 months' },
  { key: 'contact.form.timelineFlexible', fallback: 'Flexible / exploring' },
]

const fieldClass =
  'h-12 w-full rounded-lg border border-input bg-background px-3.5 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20'
const labelClass = 'mb-1.5 block text-sm font-medium text-foreground'

function FieldError({ messages }: { messages?: string[] }) {
  if (!messages?.length) return null
  return <p className="mt-1.5 text-xs text-destructive">{messages.join(' ')}</p>
}

export function ContactForm() {
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string[]>>({})
  const { t } = useTranslation()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('sending')
    const form = e.currentTarget
    const payload = Object.fromEntries(new FormData(form))

    try {
      const response = await fetch('/api/project-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (response.ok) {
        form.reset()
        setErrors({})
        setState('sent')
        return
      }
      const data = await response.json().catch(() => ({}))
      setErrors(data.fields ?? {})
    } catch {
      setErrors({})
    }
    setState('error')
  }

  if (state === 'sent') {
    return (
      <div aria-live="polite" className="flex min-h-[34rem] flex-col items-center justify-center gap-4 rounded-xl border border-border bg-card p-10 text-center">
        <span className="grid size-14 place-items-center rounded-full bg-accent text-primary">
          <Check className="size-7" />
        </span>
        <h3 className="text-xl font-semibold tracking-tight">{t('contact.form.successTitle', 'Request received')}</h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          {t('contact.form.successDescription', 'Thanks for reaching out. A member of our team will get back to you within one business day.')}
        </p>
        <button
          type="button"
          onClick={() => setState('idle')}
          className={siteButtonClass('outline', 'md', 'mt-2')}
        >
          {t('contact.form.sendAnother', 'Send another request')}
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-xl border border-border bg-card p-6 shadow-[0_18px_60px_-44px_rgba(15,23,42,0.7)] md:p-8">
      <div className="border-b border-border pb-6">
        <p className="text-sm font-medium text-primary">{t('contact.form.eyebrow', 'Project request')}</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight">
          {t('contact.form.title', 'Tell us what you want to build')}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {t('contact.form.description', 'Share the essentials. We will reply with clear next steps within one business day.')}
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            {t('contact.form.name', 'Name')} <span className="text-primary" aria-hidden="true">*</span>
          </label>
          <input id="name" name="name" autoComplete="name" required minLength={2} maxLength={120} className={fieldClass} placeholder={t('contact.form.namePlaceholder', 'Your name')} />
          <FieldError messages={errors.name} />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            {t('contact.form.company', 'Company')} <span className="font-normal text-muted-foreground">({t('contact.form.optional', 'optional')})</span>
          </label>
          <input id="company" name="company" autoComplete="organization" maxLength={160} className={fieldClass} placeholder={t('contact.form.companyPlaceholder', 'Company name')} />
          <FieldError messages={errors.company} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            {t('contact.form.email', 'Email')} <span className="text-primary" aria-hidden="true">*</span>
          </label>
          <input id="email" name="email" type="email" autoComplete="email" required className={fieldClass} placeholder="name@company.com" />
          <FieldError messages={errors.email} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            {t('contact.form.phone', 'Phone')} <span className="font-normal text-muted-foreground">({t('contact.form.optional', 'optional')})</span>
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={40} className={fieldClass} placeholder="+216 29 897 262" />
          <FieldError messages={errors.phone} />
        </div>
        <div>
          <label htmlFor="projectType" className={labelClass}>
            {t('contact.form.projectType', 'Project Type')} <span className="text-primary" aria-hidden="true">*</span>
          </label>
          <select id="projectType" name="project_type" required defaultValue="" className={cn(fieldClass, 'cursor-pointer')}>
            <option value="" disabled>
              {t('contact.form.selectService', 'Select a service')}
            </option>
            {projectTypes.map((projectType) => (
              <option key={projectType} value={projectType}>
                {t(`footer.link.${projectType.toLowerCase().replaceAll(' ', '').replaceAll('&', '&')}`, projectType)}
              </option>
            ))}
          </select>
          <FieldError messages={errors.project_type} />
        </div>
        <div>
          <label htmlFor="timeline" className={labelClass}>
            {t('contact.form.timeline', 'Timeline')}
          </label>
          <select id="timeline" name="timeline" defaultValue="" className={cn(fieldClass, 'cursor-pointer')}>
            <option value="" disabled>
              {t('contact.form.selectTimeline', 'Select a timeline')}
            </option>
            {timelines.map((timeline) => (
              <option key={timeline.key} value={timeline.fallback}>
                {t(timeline.key, timeline.fallback)}
              </option>
            ))}
          </select>
          <FieldError messages={errors.timeline} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="budget" className={labelClass}>
            {t('contact.form.budget', 'Budget')} <span className="font-normal text-muted-foreground">({t('contact.form.optional', 'optional')})</span>
          </label>
          <select id="budget" name="budget" defaultValue="" className={cn(fieldClass, 'cursor-pointer')}>
            <option value="" disabled>{t('contact.form.selectBudget', 'Select a range')}</option>
            {budgets.map((budget) => <option key={budget} value={budget}>{budget}</option>)}
          </select>
          <FieldError messages={errors.budget} />
        </div>
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>
          {t('contact.form.message', 'Message')} <span className="text-primary" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={5}
          className={cn(fieldClass, 'h-auto resize-none py-3')}
          placeholder={t('contact.form.messagePlaceholder', 'Tell us about your project, goals and timeline.')}
        />
        <FieldError messages={errors.message} />
      </div>
      {/* Honeypot: hidden from people, filled in by bots. */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <button
        type="submit"
        disabled={state === 'sending'}
        className={siteButtonClass('primary', 'lg', 'w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto')}
      >
        {state === 'sending' ? t('contact.form.sending', 'Sending...') : t('contact.form.submit', 'Send Project Request')}
        <ArrowRight className="size-4" />
      </button>
      {state === 'error' && (
        <p role="alert" className="text-sm text-destructive">
          {t('contact.form.error', 'Something went wrong. Please check the fields and try again.')}
        </p>
      )}
      <div className="flex flex-col gap-2 border-t border-border pt-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:gap-6">
        <span className="inline-flex items-center gap-2">
          <Clock3 className="size-4 text-primary" aria-hidden="true" />
          {t('contact.form.responseTime', 'Reply within one business day')}
        </span>
        <span className="inline-flex items-center gap-2">
          <ShieldCheck className="size-4 text-primary" aria-hidden="true" />
          {t('contact.form.privacyNote', 'Your information stays private')}
        </span>
      </div>
    </form>
  )
}
