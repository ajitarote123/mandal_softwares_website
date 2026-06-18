;(function () {
  try {
    var mode = localStorage.getItem('ms-theme')
    var dark =
      mode === 'dark' ||
      (mode !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches)
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
    if (mode === 'light' || mode === 'dark' || mode === 'system') {
      document.documentElement.dataset.themeMode = mode
    }

    var locale = localStorage.getItem('ms-locale')
    if (!locale) {
      var lang = (navigator.language || 'en').toLowerCase()
      if (lang.indexOf('hi') === 0) locale = 'hi'
      else if (lang.indexOf('mr') === 0) locale = 'mr'
      else locale = 'en'
    }
    if (locale === 'en' || locale === 'hi' || locale === 'mr') {
      document.documentElement.lang = locale
    }
  } catch (_) {
    document.documentElement.dataset.theme = 'dark'
    document.documentElement.lang = 'en'
  }
})()
