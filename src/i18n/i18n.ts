import TranslationsTypes from "./translations/TranslationsTypes";
import en from "./translations/en_translation.json"
import ru from "./translations/ru_translation.json"

import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const resources:Record<string, { translation: TranslationsTypes}> = {
    en:{translation:en},
    ru:{translation:ru}
};
i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({
    resources,
    detection:{
        order: ["localStorage", "navigator"],
        caches: ["localStorage"],
        lookupLocalStorage: "i18nextLng",
      },
      fallbackLng: "en",
      interpolation: {
        escapeValue: false,
      },
});
export default i18n;