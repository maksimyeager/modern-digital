"use client";

import React from "react";
import { useTranslation } from "react-i18next";

interface Props {
    className?: string;
}

export const Subscribe: React.FC<Props> = () => {
    const { t } = useTranslation("global");

    return (
        <div className="subscribe">
            <div className="subscribe__wrapper">
                <div className="subscribe__info">
                    <h2>{t("subscribe.form-title")}</h2>
                    <p>{t("subscribe.form-desc")}</p>
                </div>
                <form action="" className="subscribe__form">
                    <input
                        type="text"
                        placeholder={t("subscribe.form-input")}
                    />

                    <button className="subscribe__form-button">
                        {t("subscribe.form-btn")}
                    </button>
                </form>
            </div>
        </div>
    );
};
