import * as Localization from 'expo-localization'
import i18n from 'i18n-js'

i18n.translations = {
  en: require('./english.json'),
  pt: require('./portuguese.json'),
}

i18n.defaultLocale = 'en-US'
i18n.locale = Localization.locale
i18n.fallbacks = true

export default i18n
