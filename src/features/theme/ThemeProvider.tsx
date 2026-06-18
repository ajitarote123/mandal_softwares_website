import { createContext, useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import {
  applyTheme,
  readStoredTheme,
  resolveTheme,
  storeTheme,
  type ResolvedTheme,
  type ThemeMode,
} from './theme'

interface ThemeContextValue {
  mode: ThemeMode
  resolved: ResolvedTheme
  setMode: (mode: ThemeMode) => void
  cycleMode: () => void
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)

const CYCLE: ThemeMode[] = ['system', 'light', 'dark']

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>(() => readStoredTheme())
  const [resolved, setResolved] = useState<ResolvedTheme>(() => resolveTheme(readStoredTheme()))

  const setMode = useCallback((next: ThemeMode) => {
    storeTheme(next)
    setModeState(next)
    setResolved(applyTheme(next))
  }, [])

  const cycleMode = useCallback(() => {
    const idx = CYCLE.indexOf(mode)
    const next = CYCLE[(idx + 1) % CYCLE.length]
    setMode(next)
  }, [mode, setMode])

  useEffect(() => {
    setResolved(applyTheme(mode))
  }, [mode])

  useEffect(() => {
    if (mode !== 'system') return

    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => setResolved(applyTheme('system'))
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [mode])

  const value = useMemo(
    () => ({ mode, resolved, setMode, cycleMode }),
    [mode, resolved, setMode, cycleMode],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
