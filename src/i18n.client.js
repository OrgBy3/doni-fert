import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/common.json";
import al from "./locales/al/common.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: en },
      al: { common: al },
    },
    lng: "al",
    fallbackLng: "al",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
