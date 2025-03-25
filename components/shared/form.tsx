"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";

interface Props {
    className?: string;
}

export const Form: React.FC<Props> = () => {
    const { t } = useTranslation("global");

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    // Обработчик изменения данных в полях
    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);

        emailjs
            .send(
                "service_dg3idr8",
                "template_8e1175r",
                formData,
                "E7WqjMrw96px9jSKW"
            )
            .then(
                (response) => {
                    console.log("Success:", response);
                    alert("Сообщение отправлено!");
                },
                (error) => {
                    console.log("Error:", error);
                    alert("Что-то пошло не так, попробуйте снова.");
                }
            );

        setFormData({ name: "", phone: "", email: "", message: "" });
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <div className="form__block--row">
                <div className="form__block">
                    <label>{t("form.name")}</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Dou"
                    />
                </div>
                <div className="form__block">
                    <label>{t("form.phone-number")}</label>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+994 ## ### ## ##"
                    />
                </div>
            </div>
            <div className="form__block">
                <label>{t("form.e-mail")}</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="example@gmail.com"
                />
            </div>
            <div className="form__block">
                <label>{t("form.message")}</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                ></textarea>
            </div>
            <button className="form__button button-1">{t("form.btn")}</button>
        </form>
    );
};
