"use client";

import React from "react";
import { useTranslation } from "react-i18next";

interface Props {
    className?: string;
}

export const Form: React.FC<Props> = () => {
    const { t } = useTranslation("global");
    return (
        <form action="" className="form">
            <div className="form__block--row">
                <div className="form__block">
                    <label>{t("form.name")}</label>
                    <input type="text" placeholder="John Dou" />
                </div>
                <div className="form__block">
                    <label>{t("form.phone-number")}</label>
                    <input type="text" placeholder="+994 ## ### ## ##" />
                </div>
            </div>
            <div className="form__block">
                <label>{t("form.e-mail")}</label>
                <input type="text" placeholder="example@gmail.com" />
            </div>
            <div className="form__block">
                <label>{t("form.message")}</label>
                <textarea name="" id=""></textarea>
            </div>
            <button className="form__button button-1 ">{t("form.btn")}</button>
        </form>
    );
};
