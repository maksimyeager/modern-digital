"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export const Subscribe: React.FC = () => {
    const { t } = useTranslation("global");
    const [email, setEmail] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setEmail("");
    };

    return (
        <div className="subscribe">
            <div className="subscribe__wrapper">
                <div className="subscribe__info">
                    <h2>{t("subscribe.form-title")}</h2>
                    <p>{t("subscribe.form-desc")}</p>
                </div>
                <form onSubmit={handleSubmit} className="subscribe__form">
                    <input
                        type="email"
                        placeholder={t("subscribe.form-input")}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button className="subscribe__form-button" type="submit">
                        {t("subscribe.form-btn")}
                    </button>
                </form>
            </div>
        </div>
    );
};
