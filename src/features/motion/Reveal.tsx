import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { useReducedMotion } from './useReducedMotion'

type RevealVariant = 'up' | 'fade' | 'left' | 'scale'

interface RevealProps {
  children: ReactNode
  variant?: RevealVariant
  delay?: number
  className?: string
  as?: keyof HTMLElementTagNameMap
  threshold?: number
}

const VARIANT_CLASS: Record<RevealVariant, string> = {
  up: '',
  fade: 'reveal--fade',
  left: 'reveal--left',
  scale: 'reveal--scale',
}

export function Reveal({
  children,
  variant = 'up',
  delay = 0,
  className = '',
  as: Tag = 'div',
  threshold = 0.15,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const [visible, setVisible] = useState(reduced)

  useEffect(() => {
    if (reduced) {
      setVisible(true)
      return
    }

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [reduced, threshold])

  const classes = [
    'reveal',
    VARIANT_CLASS[variant],
    visible ? 'reveal--visible' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const style = delay ? ({ '--reveal-delay': `${delay}ms` } as CSSProperties) : undefined

  return (
    // @ts-expect-error dynamic tag ref typing
    <Tag ref={ref} className={classes} style={style}>
      {children}
    </Tag>
  )
}
