import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { fallbackLng, languageOptions } from "./languages";

i18n
  .use(HttpApi) // load translations via http
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass i18n instance to react-i18next
  .init({
    fallbackLng, // default language
    debug: import.meta.env.DEV,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    react: {
      useSuspense: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"], // store detected language
    },
  });

const storedLang = localStorage.getItem("i18nextLng");
if (!storedLang || languageOptions.every((availableLng) => availableLng.code !== storedLang)) {
  i18n.changeLanguage(fallbackLng);
}

export default i18n;
