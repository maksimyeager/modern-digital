"use client";

import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import { useTranslation } from "react-i18next";

interface Props {
    className?: string;
}

export const HomeBanner: React.FC<Props> = () => {
    const { t } = useTranslation("global");
    return (
        <div className="home-banner">
            <div className="container">
                <div className="home-banner__wrapper">
                    <div className="home-banner__left">
                        <img
                            src="./images/home-banner/home-banner-1.png"
                            alt=""
                        />
                        <div className="home-banner__left-info">
                            <h2>r_keeper</h2>
                            <p>
                                {t("home-banner.left-desc-1")}
                                <Link href={"/r-keeper"} className="link-1">
                                    <FiArrowUpRight size={24} />
                                </Link>
                                {t("home-banner.left-desc-2")}
                            </p>
                        </div>
                    </div>
                    <div className="home-banner__center">
                        <img
                            src="./images/home-banner/home-banner-2.png"
                            alt=""
                        />
                        <Link href={"/site"} className="link-1">
                            {t("read-more-btn")} <FiArrowUpRight size={20} />
                        </Link>
                    </div>
                    <div className="home-banner__right">
                        <div className="home-banner__right-wrapper">
                            <p className="home-banner__right-data">
                                4 <span>+</span>
                            </p>
                            <p className="home-banner__right-desc">
                                {t("home-banner.right-desc-1")}
                            </p>
                        </div>
                        <div className="">
                            <p className="home-banner__right-data">
                                98 <span>%</span>
                            </p>
                            <p className="home-banner__right-desc">
                                {t("home-banner.right-desc-2")}
                            </p>
                        </div>
                        <div className="">
                            <p className="home-banner__right-data">
                                30 <span>+</span>
                            </p>
                            <p className="home-banner__right-desc">
                                {t("home-banner.right-desc-3")}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="home-banner__wrapper--mobile">
                    <div className="home-banner__top">
                        <div className="home-banner__center">
                            <img
                                className="home-banner__center-img home-banner__center-img--1"
                                src="./images/home-banner/home-banner-2.png"
                                alt=""
                            />
                            <img
                                className="home-banner__center-img home-banner__center-img--2"
                                src="./images/home-banner/home-banner-3.png"
                                alt=""
                            />
                            <Link href={"/site"} className="link-1">
                                {t("read-more-btn")}{" "}
                                <FiArrowUpRight size={20} />
                            </Link>
                        </div>
                    </div>
                    <div className="home-banner__bottom">
                        <div className="home-banner__left">
                            <img
                                src="./images/home-banner/home-banner-1.png"
                                alt=""
                            />

                            <div className="home-banner__left-info">
                                <h2>r_keeper</h2>
                                <p>
                                    {t("home-banner.left-desc-1")}
                                    <Link href={"/r-keeper"} className="link-1">
                                        <FiArrowUpRight size={24} />
                                    </Link>
                                    {t("home-banner.left-desc-2")}
                                </p>
                            </div>
                        </div>

                        <div className="home-banner__right">
                            <div className="home-banner__right-wrapper">
                                <p className="home-banner__right-data">
                                    4 <span>+</span>
                                </p>
                                <p className="home-banner__right-desc">
                                    {t("home-banner.right-desc-1")}
                                </p>
                            </div>
                            <div className="">
                                <p className="home-banner__right-data">
                                    98 <span>%</span>
                                </p>
                                <p className="home-banner__right-desc">
                                    {t("home-banner.right-desc-2")}
                                </p>
                            </div>
                            <div className="">
                                <p className="home-banner__right-data">
                                    30 <span>+</span>
                                </p>
                                <p className="home-banner__right-desc">
                                    {t("home-banner.right-desc-3")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
