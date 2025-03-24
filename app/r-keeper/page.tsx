"use client";

import { Banner } from "@/components/shared";
import { useTranslation } from "react-i18next";

export default function RKeeper() {
    const { t } = useTranslation("global");

    const r_keeper_data = [
        {
            name: t("r-keeper.data-1"),
        },
        {
            name: t("r-keeper.data-2"),
        },
        {
            name: t("r-keeper.data-3"),
        },
        {
            name: t("r-keeper.data-4"),
        },
        {
            name: t("r-keeper.data-5"),
        },
        {
            name: t("r-keeper.data-6"),
        },
        {
            name: t("r-keeper.data-7"),
        },
        {
            name: t("r-keeper.data-8"),
        },
        {
            name: t("r-keeper.data-9"),
        },
    ];

    return (
        <>
            <Banner title="r_keeper" />
            <section className="r_keeper__info">
                <div className="container">
                    <div className="r_keeper__info-desc">
                        <h2>{t("r-keeper.title")}</h2>
                        <p>{t("r-keeper.desc")}</p>
                    </div>
                    <div className="r_keeper__info-img">
                        <img
                            src="/images/r-keeper/r-keeper.png"
                            alt=""
                            className=""
                        />
                    </div>
                </div>
            </section>
            <section className="section r_keeper__data">
                <div className="container">
                    <h2>{t("r-keeper.data-title")}</h2>
                    <div className="r_keeper__data-wrapper">
                        {r_keeper_data.map((item, index) => (
                            <div key={index} className="r_keeper__data-block">
                                <span>{index + 1}</span>
                                <p>{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="section possibilities">
                <div className="container">
                    <div className="possibilities__info">
                        <h2>{t("r-keeper.possibilities-title")}</h2>
                        <p>{t("r-keeper.possibilities-desc")}</p>
                    </div>
                    <div className="possibilities__wrapper">
                        <div className="possibility possibility--1">
                            <div className="possibility__info">
                                <h2>{t("r-keeper.possibility-1")}</h2>
                                <p>{t("r-keeper.possibility-desc-1")}</p>
                            </div>
                            <div className="possibility__image possibility__image--1">
                                <img
                                    src="./../images/r-keeper/possibility-1.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="possibility possibility--2">
                            <div className="possibility__image possibility__image--2">
                                <img
                                    src="./../images/r-keeper/possibility-2.png"
                                    alt=""
                                />
                            </div>

                            <div className="possibility__info">
                                <h2>{t("r-keeper.possibility-2")}</h2>
                                <p>{t("r-keeper.possibility-desc-2")}</p>
                            </div>
                        </div>
                        <div className="possibility possibility--3">
                            <div className="possibility__info">
                                <h2>{t("r-keeper.possibility-3")}</h2>
                                <p>{t("r-keeper.possibility-desc-3")}</p>
                            </div>
                            <div className="possibility__image possibility__image--3">
                                <img
                                    src="./../images/r-keeper/possibility-3.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
