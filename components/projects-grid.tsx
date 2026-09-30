'use client'

import { useState } from 'react'
import { RefreshCw } from 'lucide-react'
import { ProjectCard, ProjectCardSkeleton } from '@/components/project-card'
import { cn } from '@/lib/utils'
import { API_PROJECT_FILTERS, projectFilterLabel, type ApiProjectFilter } from '@/lib/projects'
import { useProjects } from '@/hooks/useProjects'
import { useTranslation } from '@/hooks/useTranslation'

export function ProjectsGrid() {
  const { t, locale } = useTranslation()
  const { projects, loading, error, retry } = useProjects(locale)
  const [filter, setFilter] = useState<ApiProjectFilter>('All')

  const filteredProjects = filter === 'All' ? projects : projects.filter((p) => p.categoryKey === filter)

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-wrap gap-2">
        {API_PROJECT_FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={cn(
              'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
              filter === f
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border bg-background text-muted-foreground hover:border-foreground/30 hover:text-foreground',
            )}
          >
            {projectFilterLabel(f, locale)}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" aria-label={t('project.loading', 'Loading projects')}>
          {Array.from({ length: 6 }, (_, index) => <ProjectCardSkeleton key={index} />)}
        </div>
      ) : (
        <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}

      {error ? (
        <div className="flex flex-col items-center border-y border-border py-12 text-center">
          <p className="font-medium text-foreground">{t('project.errorTitle', 'Projects are temporarily unavailable.')}</p>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            {t('project.errorDescription', 'Please try again in a moment.')}
          </p>
          <button
            type="button"
            onClick={retry}
            className="mt-5 inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 text-sm font-medium transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-primary/50"
          >
            <RefreshCw className="size-4" />
            {t('project.retry', 'Try again')}
          </button>
        </div>
      ) : null}

      {!loading && !error && filteredProjects.length === 0 ? (
        <p className="py-12 text-center text-muted-foreground">
          {t('project.emptyCategory', 'No projects in this category yet.')}
        </p>
      ) : null}
    </div>
  )
}
