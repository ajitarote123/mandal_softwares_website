import { I18nProvider } from './features/i18n/I18nProvider'
import { ThemeProvider } from './features/theme/ThemeProvider'
import { Site } from './app/Site'

export default function App() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <Site />
      </I18nProvider>
    </ThemeProvider>
  )
}
