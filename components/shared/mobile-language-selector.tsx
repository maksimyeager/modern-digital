"use client";

import { useTranslation } from "react-i18next";

const MobileLanguageSelector = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        document.documentElement.lang = lng;
        i18n.changeLanguage(lng);
        localStorage.setItem("lng", lng);
    };

    const languages: string[] = ["en", "ru", "az"];

    return (
        <div className="mobile-language-selector">
            <ul>
                {languages.map((lang) => (
                    <li
                        key={lang}
                        className={`language-option ${
                            lang === i18n.language ? "active" : ""
                        }`}
                        onClick={() => changeLanguage(lang)}
                    >
                        {lang.toUpperCase()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MobileLanguageSelector;
