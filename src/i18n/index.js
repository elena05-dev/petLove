import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ru from "./ru.json";
import en from "./en.json";
import he from "./he.json";
import ar from "./ar.json";

i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: ru },
    en: { translation: en },
    he: { translation: he },
    ar: { translation: ar },
  },
  lng: localStorage.getItem("petlove-language") || "ru",
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
