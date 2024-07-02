import ar from "./ar.json"
import en from "./en.json"
export default defineI18nConfig(() => ({
   legacy: false,
   locale: "ar",
	fallbackLocale: 'ar',
   messages: {
      en,
      ar,
   },
}))
