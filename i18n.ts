import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(HttpApi) // Загружаем переводы
  .use(LanguageDetector) // Определяем язык (из localStorage, cookie, navigator)
  .use(initReactI18next) // Подключаем к React
  .init({
    supportedLngs: ["en", "ru"], // Доступные языки
    fallbackLng: "en", // Язык по умолчанию
    debug: false,
    detection: {
      order: ["localStorage", "cookie", "navigator"], // Источники определения языка
      caches: ["localStorage", "cookie"], // Сохраняем язык
    },
    backend: {
      loadPath: "/locales/{{lng}}/global.json", // Путь к JSON с переводами
    },
  });

export default i18n;
