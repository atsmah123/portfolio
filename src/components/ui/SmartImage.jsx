import React, { useState } from 'react'
import { ImageOff } from 'lucide-react'

/**
 * Image with three safety nets:
 *   1. Lazy-loads, so off-screen images don't block first paint.
 *   2. Reserves space via an aspect-ratio box, so the page doesn't jump
 *      around as images arrive (no layout shift).
 *   3. If the file is missing or broken, shows a branded placeholder
 *      instead of the browser's broken-image icon.
 *
 * `src` is relative to the public/ folder, e.g. 'images/projects/turb.png'.
 */
const SmartImage = ({
  src,
  alt,
  className = '',
  imgClassName = '',
  ratio = '16 / 10',
  eager = false,
}) => {
  const [status, setStatus] = useState('loading') // loading | loaded | error
  const baseUrl = import.meta.env.BASE_URL
  const resolved = `${baseUrl}${String(src || '').replace(/^\//, '')}`

  return (
    <div
      className={`relative overflow-hidden bg-surface ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {/* Shimmer while loading */}
      {status === 'loading' && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-elevated to-surface" />
      )}

      {status === 'error' ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#141822] to-[#0d1015] text-muted">
          <ImageOff size={26} className="opacity-50" />
          <span className="px-4 text-center text-[11px] uppercase tracking-widest opacity-60">
            {alt}
          </span>
        </div>
      ) : (
        <img
          src={resolved}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
          className={`h-full w-full object-cover transition-opacity duration-700 ${
            status === 'loaded' ? 'opacity-100' : 'opacity-0'
          } ${imgClassName}`}
        />
      )}
    </div>
  )
}

export default SmartImage
