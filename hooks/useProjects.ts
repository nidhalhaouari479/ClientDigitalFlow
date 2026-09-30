'use client'

import { useEffect, useState } from 'react'
import type { Locale } from '@/lib/i18n'
import type { Project } from '@/lib/data'
import { REALIZED_PROJECTS_API_URL, toRealizedProject, toRealizedProjects } from '@/lib/projects'

type ProjectsApiResponse = {
  data?: Parameters<typeof toRealizedProject>[0][]
}

export function useProjects(locale: Locale) {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [refreshKey, setRefreshKey] = useState(0)

  useEffect(() => {
    let mounted = true

    setLoading(true)
    setError(false)
    setProjects([])
    fetch(REALIZED_PROJECTS_API_URL)
      .then((response) => {
        if (!response.ok) throw new Error('Unable to fetch projects')
        return response.json() as Promise<ProjectsApiResponse>
      })
      .then((payload) => {
        if (!mounted) return

        const apiProjects = Array.isArray(payload.data)
          ? toRealizedProjects(payload.data, locale)
          : []

        setProjects(apiProjects)
      })
      .catch(() => {
        if (mounted) {
          setProjects([])
          setError(true)
        }
      })
      .finally(() => {
        if (mounted) setLoading(false)
      })

    return () => {
      mounted = false
    }
  }, [locale, refreshKey])

  return {
    projects,
    loading,
    error,
    retry: () => setRefreshKey((key) => key + 1),
  }
}
