import React, { useState } from 'react'
import { ImageOff } from 'lucide-react'

/**
 * Image with three safety nets:
 *   1. Lazy-loads, so off-screen images don't block first paint.
 *   2. Reserves space via the wrapper's aspect-ratio class, so the page
 *      doesn't jump around as images arrive (no layout shift).
 *   3. If the file is missing or broken, shows a quiet placeholder instead of
 *      the browser's broken-image icon.
 *
 * `src` is relative to the public/ folder, e.g. 'images/projects/turb.png'.
 * `fit="contain"` shows the whole image on the light figure mat (for plots
 * and diagrams); the default crops to fill (for photos).
 */
const SmartImage = ({ src, alt, className = '', imgClassName = '', fit = 'cover', eager = false }) => {
  const [status, setStatus] = useState('loading') // loading | loaded | error
  const baseUrl = import.meta.env.BASE_URL
  const resolved = `${baseUrl}${String(src || '').replace(/^\//, '')}`
  const contain = fit === 'contain'

  return (
    <div className={`relative overflow-hidden ${contain ? 'figure-plate' : 'bg-border'} ${className}`}>
      {status === 'loading' && <div className="absolute inset-0 animate-pulse bg-border/60" />}

      {status === 'error' ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-surface text-muted">
          <ImageOff size={22} strokeWidth={1.75} />
          <span className="px-4 text-center text-xs">{alt}</span>
        </div>
      ) : (
        <img
          src={resolved}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
          className={`h-full w-full transition-opacity duration-500 ${
            contain ? 'object-contain p-3 sm:p-5' : 'object-cover'
          } ${status === 'loaded' ? 'opacity-100' : 'opacity-0'} ${imgClassName}`}
        />
      )}
    </div>
  )
}

export default SmartImage
