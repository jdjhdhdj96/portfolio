import { useState, useEffect, useRef } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  fallbackColor?: string
  aspectRatio?: string
  onLoad?: () => void
  onError?: () => void
}

export const OptimizedImage = ({
  src,
  alt,
  className = '',
  fallbackColor = '3b82f6',
  aspectRatio = '16/10',
  onLoad,
  onError,
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!imgRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        rootMargin: '200px', // Start loading 200px before image enters viewport
      }
    )

    observer.observe(imgRef.current)

    return () => observer.disconnect()
  }, [])

  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  const handleError = () => {
    setHasError(true)
    onError?.()
  }

  const placeholderUrl = `https://via.placeholder.com/800x500/${fallbackColor}/ffffff?text=${encodeURIComponent(alt)}`

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden bg-slate-200 dark:bg-slate-700 ${className}`}
      style={{ aspectRatio }}
    >
      {/* Loading skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700" />
      )}

      {/* Actual image */}
      {isInView && (
        <img
          src={hasError ? placeholderUrl : src}
          alt={alt}
          loading="lazy"
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </div>
  )
}
