"use client"

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTranslation } from '@/hooks/useTranslation'

type ProjectImageGalleryProps = {
  images?: string[]
  fallbackImage: string
  projectName: string
}

export function ProjectImageGallery({ images, fallbackImage, projectName }: ProjectImageGalleryProps) {
  const { t } = useTranslation()
  const galleryImages = useMemo(() => {
    const uniqueImages = Array.from(new Set([...(images || []), fallbackImage].filter(Boolean)))
    return uniqueImages.length ? uniqueImages : ['/placeholder.svg']
  }, [fallbackImage, images])
  const [activeIndex, setActiveIndex] = useState(0)
  const hasMultipleImages = galleryImages.length > 1

  const showPreviousImage = () => {
    setActiveIndex((current) => (current === 0 ? galleryImages.length - 1 : current - 1))
  }

  const showNextImage = () => {
    setActiveIndex((current) => (current === galleryImages.length - 1 ? 0 : current + 1))
  }

  const renderThumbnailRow = (limit: number, className: string) => {
    const visibleImages = galleryImages.slice(0, limit)
    const remainingImages = galleryImages.length - visibleImages.length

    return (
      <div className={className}>
        {visibleImages.map((image, index) => {
          const showsRemainingCount = index === visibleImages.length - 1 && remainingImages > 0

          return (
            <button
              key={image}
              type="button"
              aria-label={
                showsRemainingCount
                  ? t('project.gallery.showImageWithMore', 'Show project image {number}; {remaining} more images available')
                      .replace('{number}', String(index + 1))
                      .replace('{remaining}', String(remainingImages))
                  : t('project.gallery.showImage', 'Show project image {number}').replace('{number}', String(index + 1))
              }
              onClick={() => setActiveIndex(index)}
              className={cn(
                'relative aspect-[16/10] overflow-hidden rounded-lg border bg-muted transition',
                activeIndex === index ? 'border-primary ring-2 ring-primary/25' : 'border-border hover:border-primary/60',
              )}
            >
              <Image src={image} alt="" fill sizes="160px" className="object-cover" />
              {showsRemainingCount ? (
                <span className="absolute inset-0 grid place-items-center bg-black/65 text-lg font-semibold text-white">
                  +{remainingImages}
                </span>
              ) : null}
            </button>
          )
        })}
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-muted">
        <Image
          src={galleryImages[activeIndex]}
          alt={t('project.gallery.imageAlt', '{project} interface {number}')
            .replace('{project}', projectName)
            .replace('{number}', String(activeIndex + 1))}
          fill
          priority
          sizes="(max-width: 1280px) 100vw, 1200px"
          className="object-contain"
        />

        {hasMultipleImages ? (
          <>
            <button
              type="button"
              aria-label={t('project.gallery.previous', 'Previous project image')}
              onClick={showPreviousImage}
              className="absolute left-4 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-background/85 text-foreground shadow-lg backdrop-blur transition hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              aria-label={t('project.gallery.next', 'Next project image')}
              onClick={showNextImage}
              className="absolute right-4 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-background/85 text-foreground shadow-lg backdrop-blur transition hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            >
              <ChevronRight className="size-5" />
            </button>
            <div className="absolute bottom-4 right-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground shadow-sm backdrop-blur">
              {activeIndex + 1} / {galleryImages.length}
            </div>
          </>
        ) : null}
      </div>

      {hasMultipleImages ? (
        <>
          {renderThumbnailRow(4, 'grid grid-cols-4 gap-3 sm:hidden')}
          {renderThumbnailRow(6, 'hidden grid-cols-6 gap-3 sm:grid')}
        </>
      ) : null}
    </div>
  )
}
