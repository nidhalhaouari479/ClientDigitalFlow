"use client"

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock3, ExternalLink, LockKeyhole } from 'lucide-react'
import type { Project } from '@/lib/data'
import { localizePath } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { useTranslation } from '@/hooks/useTranslation'

export function ProjectCard({ project, className }: { project: Project; className?: string }) {
  const { t, locale } = useTranslation()
  const caseStudyHref = localizePath(`/projects/${project.slug}`, locale)
  const status = project.status || (project.projectUrl || project.githubUrl ? 'live' : 'private')
  const statusLabel = status === 'in-progress'
    ? t('project.status.inProgress', 'In progress')
    : status === 'private'
      ? t('project.status.private', 'Private')
      : t('project.status.live', 'Live')
  const createdAt = project.createdAt || project.timeline
  const externalUrl = project.projectUrl || project.githubUrl

  return (
    <article
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_14px_50px_-20px_rgba(10,10,10,0.28)]',
        className,
      )}
    >
      <Link href={caseStudyHref} className="relative block aspect-[16/10] overflow-hidden bg-muted">
        <Image
          src={project.image || '/placeholder.svg'}
          alt={t('project.previewAlt', '{project} project preview').replace('{project}', project.name)}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
          {project.category}
        </span>
        {status !== 'live' ? (
          <span className="absolute right-4 top-4 rounded-full bg-foreground/85 px-3 py-1 text-xs font-semibold text-background backdrop-blur">
            {statusLabel}
          </span>
        ) : null}
      </Link>

      <div className="flex flex-1 flex-col gap-4 p-6 pb-7">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <span className="text-primary">{project.industry}</span>
            <span aria-hidden="true">-</span>
            <span>{createdAt}</span>
          </div>
          <h3 className="pr-14 text-xl font-semibold tracking-tight">
            <Link href={caseStudyHref} className="hover:text-primary">
              {project.name}
            </Link>
          </h3>
          <p className="line-clamp-3 min-h-[4.5rem] text-sm leading-relaxed text-muted-foreground">{project.short}</p>
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-2 pr-14">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-md border border-border px-2.5 py-1 text-xs text-muted-foreground">
              {tech}
            </span>
          ))}
        </div>

        <Link href={caseStudyHref} className="mt-2 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-primary">
          {t('project.viewCaseStudy', 'View Case Study')}
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      {externalUrl ? (
        <a
          href={externalUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={t('project.openWebsite', 'Open {project} website').replace('{project}', project.name)}
          className="absolute bottom-6 right-6 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_14px_30px_-12px_rgba(37,99,235,0.7)] transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <ExternalLink className="size-5" />
        </a>
      ) : (
        <div
          aria-label={statusLabel}
          title={statusLabel}
          className="absolute bottom-6 right-6 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_14px_30px_-12px_rgba(37,99,235,0.7)]"
        >
          {status === 'in-progress' ? <Clock3 className="size-5" /> : <LockKeyhole className="size-5" />}
        </div>
      )}
    </article>
  )
}

export function ProjectCardSkeleton() {
  return (
    <div
      aria-hidden="true"
      className="flex h-full animate-pulse flex-col overflow-hidden rounded-xl border border-border bg-card motion-reduce:animate-none"
    >
      <div className="aspect-[16/10] bg-muted" />
      <div className="flex flex-1 flex-col gap-4 p-6 pb-7">
        <div className="h-3 w-2/5 rounded bg-muted" />
        <div className="h-6 w-4/5 rounded bg-muted" />
        <div className="space-y-2">
          <div className="h-3 w-full rounded bg-muted" />
          <div className="h-3 w-11/12 rounded bg-muted" />
          <div className="h-3 w-3/5 rounded bg-muted" />
        </div>
        <div className="mt-auto flex gap-2 pt-3">
          <div className="h-7 w-16 rounded bg-muted" />
          <div className="h-7 w-20 rounded bg-muted" />
          <div className="h-7 w-14 rounded bg-muted" />
        </div>
        <div className="h-4 w-28 rounded bg-muted" />
      </div>
    </div>
  )
}
