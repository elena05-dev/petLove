import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import css from "./LanguageSwitcher.module.css";

const languages = [
  { value: "ru", label: "RU", name: "Русский" },
  { value: "en", label: "EN", name: "English" },
  { value: "he", label: "עב", name: "עברית" },
  { value: "ar", label: "عربي", name: "العربية" },
];

function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const currentLanguage = (i18n.resolvedLanguage || i18n.language).split(
    "-",
  )[0];

  useEffect(() => {
    const language = languages.some((item) => item.value === currentLanguage)
      ? currentLanguage
      : "ru";

    document.documentElement.lang = language;
    document.documentElement.dir = ["he", "ar"].includes(language)
      ? "rtl"
      : "ltr";
  }, [currentLanguage]);

  function handleLanguageChange(event) {
    const language = event.target.value;

    localStorage.setItem("petlove-language", language);
    i18n.changeLanguage(language);
  }

  return (
    <div className={css.wrapper}>
      <label className={css.label} htmlFor="language-select">
      
        <select
          id="language-select"
          className={css.select}
          value={
            languages.some((item) => item.value === currentLanguage)
              ? currentLanguage
              : "ru"
          }
          onChange={handleLanguageChange}
          aria-label={t("common.language")}
        >
          {languages.map((language) => (
            <option key={language.value} value={language.value}>
              {language.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default LanguageSwitcher;
