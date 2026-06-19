import type { Locale } from '../types'
import { en } from './en'
import { mr } from './mr'

export const messages = { en, mr } as const

export function getMessages(locale: Locale) {
  return messages[locale] ?? messages.en
}
