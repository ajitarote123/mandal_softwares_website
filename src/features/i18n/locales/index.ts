import type { Locale } from '../types'
import { en } from './en'
import { hi } from './hi'
import { mr } from './mr'

export const messages = { en, hi, mr } as const

export function getMessages(locale: Locale) {
  return messages[locale] ?? messages.en
}
