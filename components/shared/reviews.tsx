"use client";

import React from "react";
import { RewiewSlider } from "./review-slider";
import { useTranslation } from "react-i18next";

interface Props {
    className?: string;
}

export const Reviews: React.FC<Props> = () => {
    const { t } = useTranslation("global");
    return (
        <section className="section section--rewiews">
            <h2 className="section__title">{t("reviews.title")}</h2>
            <p className="section__subtitle">{t("reviews.desc")}</p>
            <RewiewSlider />
        </section>
    );
};
