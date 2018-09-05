import translationsPt from './pt.json'
import translationsEn from './en.json'

export default function (Vue) {
  Vue.i18n.add('en', translationsEn)
  Vue.i18n.add('pt', translationsPt)

  Vue.i18n.set(getLanguage())
}

const getLanguage = () => {
  return window.localStorage.getItem('language') || window.navigator.language.split('-')[0]
}
