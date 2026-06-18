import { useI18n } from '../i18n/useI18n'
import type { ThemeMode } from './theme'
import { useTheme } from './useTheme'
import './ThemeToggle.css'

const ICONS: Record<ThemeMode, string> = {
  system: '◐',
  light: '☀',
  dark: '☾',
}

function useThemeLabels() {
  const { t } = useI18n()
  const { mode } = useTheme()
  const labels: Record<ThemeMode, string> = {
    system: t.theme.auto,
    light: t.theme.light,
    dark: t.theme.dark,
  }
  return { mode, label: labels[mode] }
}

export function ThemeToggle() {
  const { mode, label } = useThemeLabels()
  const { cycleMode } = useTheme()

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={cycleMode}
      aria-label={`Theme: ${label}`}
      title={label}
    >
      <span className="theme-toggle__icon" aria-hidden="true">
        {ICONS[mode]}
      </span>
      <span className="theme-toggle__label">{label}</span>
    </button>
  )
}

export function ThemeToggleCompact() {
  const { mode, label } = useThemeLabels()
  const { cycleMode } = useTheme()

  return (
    <button
      type="button"
      className="theme-toggle theme-toggle--compact"
      onClick={cycleMode}
      aria-label={`Theme: ${label}`}
      title={label}
    >
      <span aria-hidden="true">{ICONS[mode]}</span>
    </button>
  )
}
