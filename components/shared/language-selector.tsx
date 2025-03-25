"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronDown } from "react-icons/fa";

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); // Устанавливаем флаг, что мы на клиенте
    }, []);

    const changeLanguage = (lng: string) => {
        document.documentElement.lang = lng;
        i18n.changeLanguage(lng);
        localStorage.setItem("lng", lng);
        setIsOpen(false);
    };

    if (!isClient) {
        return null; // На сервере ничего не рендерим, только на клиенте
    }

    return (
        <div
            className={"language-selector"}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <div className="language-toggle">
                {i18n.language ? i18n.language.toUpperCase() : "EN"}{" "}
                <FaChevronDown className={`${isOpen ? "icon-reverse" :""}`}/>
            </div>
            <ul
                className={`language-menu ${
                    isOpen ? "language-menu--open" : ""
                }`}
            >
                {["ru", "en", "az"]
                    .filter((lang) => lang !== i18n.language)
                    .map((lang) => (
                        <li key={lang} onClick={() => changeLanguage(lang)}>
                            {lang.toUpperCase()}
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default LanguageSelector;
