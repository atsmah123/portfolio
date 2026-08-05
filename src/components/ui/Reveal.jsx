import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

/**
 * Fades + slides its children into view on scroll.
 *
 *   <Reveal>            …content…      </Reveal>
 *   <Reveal delay={0.1} direction="left"> … </Reveal>
 *
 * Automatically disabled when the visitor has "reduce motion" turned on.
 */
const offsets = {
  up: { x: 0, y: 28 },
  down: { x: 0, y: -28 },
  left: { x: 34, y: 0 },
  right: { x: -34, y: 0 },
  none: { x: 0, y: 0 },
}

export const Reveal = ({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  as = 'div',
}) => {
  const reduceMotion = useReducedMotion()
  const MotionTag = motion[as] || motion.div
  const from = offsets[direction] ?? offsets.up

  if (reduceMotion) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, ...from }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}

/**
 * Parent wrapper that staggers its <RevealItem> children in one after another.
 * Use for grids and lists.
 */
export const RevealGroup = ({ children, className = '', stagger = 0.08, delay = 0 }) => {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  )
}

export const RevealItem = ({ children, className = '' }) => {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
