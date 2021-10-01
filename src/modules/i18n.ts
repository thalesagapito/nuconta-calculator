import { createI18n } from 'vue-i18n'

function extractLocaleFromFilepath(filepath: string) {
  const matches = filepath.match(/([a-z-]+)\.json/i)
  if (matches) return matches[1]
  return ''
}

const localeFiles = import.meta.globEager('../../locales/*.json')

const messages = Object.fromEntries(
  Object
    .entries(localeFiles)
    .map(([filepath, value]) => {
      const locale = extractLocaleFromFilepath(filepath)
      return [locale, value.default]
    }),
)

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages,
})
