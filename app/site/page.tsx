"use client";

import { Reviews } from "@/components/shared/reviews";
import { useTranslation } from "react-i18next";

export default function Site() {
    const { t } = useTranslation("global");
    return (
        <>
            <div className="banner">
                <div className="container">
                    <h1>
                        {t("site.banner-1")}{" "}
                        <span>{t("site.banner-span")}</span>{" "}
                        {t("site.banner-2")}
                        {/* What Types Of <span>Websites</span> Do We Offer? */}
                    </h1>
                </div>
            </div>
            <div className="container">
                <p className="sites__desc">{t("site.desc")}</p>
            </div>
            <section className="section section--site-types">
                <div className="container">
                    <div className="site-type">
                        <h2>{t("site.site-type-1")}</h2>
                        <p>{t("site.site-type-desc-1")}</p>
                        <img
                            src="./../images/site-types/card.png"
                            className="site-type__img site-type__img--1"
                            alt=""
                        />
                    </div>
                    <div className="site-type">
                        <h2>{t("site.site-type-2")}</h2>

                        <p>{t("site.site-type-desc-2")}</p>
                        <img
                            src="./../images/site-types/folder.png"
                            className="site-type__img site-type__img--2"
                            alt=""
                        />
                    </div>
                    <div className="site-type">
                        <h2>{t("site.site-type-3")}</h2>
                        <p>{t("site.site-type-desc-3")}</p>
                        <img
                            src="./../images/site-types/megaphone.png"
                            className="site-type__img site-type__img--3"
                            alt=""
                        />
                    </div>
                    <div className="site-type">
                        <h2>{t("site.site-type-4")}</h2>
                        <p>{t("site.site-type-desc-4")}</p>
                        <img
                            src="./../images/site-types/cart.png"
                            className="site-type__img site-type__img--4"
                            alt=""
                        />
                    </div>
                </div>
            </section>
            <section className="section section--stages">
                <div className="container">
                    <h2 className="section__title">{t("site.stages-title")}</h2>
                    <div className="stages__wrapper">
                        <div className="stages__row stages__row--1">
                            <div className="stage">
                                <div className="stage__number">1</div>
                                <div className="stage__info">
                                    <h2 className="stage__title">
                                        {t("site.stage-1")}
                                    </h2>
                                    <p className="stage__desc">
                                        {t("site.stage-desc-1")}
                                    </p>
                                </div>
                            </div>
                            <div className="stage">
                                <div className="stage__number">2</div>
                                <div className="stage__info">
                                    <h2 className="stage__title">
                                        {t("site.stage-2")}
                                    </h2>
                                    <p className="stage__desc">
                                        {t("site.stage-desc-2")}
                                    </p>
                                </div>
                            </div>
                            <div className="stage">
                                <div className="stage__number">3</div>
                                <div className="stage__info">
                                    <h2 className="stage__title">
                                        {t("site.stage-3")}
                                    </h2>
                                    <p className="stage__desc">
                                        {t("site.stage-desc-3")}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="stages__row stages__row--2">
                            <div className="stage">
                                <div className="stage__number">4</div>
                                <div className="stage__info">
                                    <h2 className="stage__title">
                                        {t("site.stage-4")}
                                    </h2>
                                    <p className="stage__desc">
                                        {t("site.stage-desc-4")}
                                    </p>
                                </div>
                            </div>
                            <div className="stage">
                                <div className="stage__number">5</div>
                                <div className="stage__info">
                                    <h2 className="stage__title">
                                        {t("site.stage-5")}
                                    </h2>
                                    <p className="stage__desc">
                                        {t("site.stage-desc-5")}
                                    </p>
                                </div>
                            </div>
                            <div className="stage">
                                <div className="stage__number stage__number--final">
                                    <img src="../images/flag.svg" alt="" />
                                </div>
                                <div className="stage__info">
                                    <h2 className="stage__title">
                                        {t("site.stage-final")}
                                    </h2>
                                    <p className="stage__desc">
                                        {t("site.stage-final-desc")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section section--presentation">
                <div className="container">
                    <h2 className="section__title">{t("site.presentation")}</h2>
                    <p className="section__desc">
                        {t("site.presentation-desc")}
                    </p>
                    <button>{t("site.presentation-btn")}</button>
                    {/* <Button
                        variant={"default"}
                        className="block  w-[220px] h-[50px] mx-auto rounded-[18px]"
                    >
                        Download Presentation
                    </Button> */}
                </div>
            </section>
            <Reviews />
        </>
    );
}
