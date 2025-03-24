import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n.use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        supportedLngs: ["en", "ru", "az"],
        fallbackLng: "az",
        debug: false,
        detection: {
            order: ["localStorage", "cookie", "navigator"],
            caches: ["localStorage", "cookie"],
        },
        backend: {
            loadPath: "/locales/{{lng}}/global.json",
        },
        react: {
            useSuspense: false,
        },
    });

export default i18n;
