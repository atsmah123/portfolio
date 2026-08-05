import React, { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

/** Formats 12000 → "12,000" */
const format = (n) => n.toLocaleString('en-US')

/**
 * Counts up from 0 to `value` the first time it scrolls into view.
 * Shows the final number immediately if the visitor prefers reduced motion.
 */
const StatCounter = ({ value, prefix = '', suffix = '', duration = 1600 }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduceMotion = useReducedMotion()
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reduceMotion) {
      setDisplay(value)
      return
    }

    let frame
    const start = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      // easeOutExpo — fast start, gentle landing
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setDisplay(Math.round(value * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value, duration, reduceMotion])

  return (
    <span ref={ref}>
      {prefix}
      {format(display)}
      {suffix}
    </span>
  )
}

export default StatCounter
