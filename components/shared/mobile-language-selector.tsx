"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const MobileLanguageSelector = () => {
    const { i18n } = useTranslation();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); // Устанавливаем флаг, что мы на клиенте
    }, []);

    const changeLanguage = (lng: string) => {
        document.documentElement.lang = lng;
        i18n.changeLanguage(lng);
        localStorage.setItem("lng", lng);
    };

    const languages: string[] = ["en", "ru", "az"];

    if (!isClient) {
        return null;
    }

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
