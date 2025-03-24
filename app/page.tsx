"use client";

import { Subscribe } from "@/components/shared";
import { HomeBanner } from "@/components/shared/home-banner";
import { HomeSlider } from "@/components/shared/home-slider";
import { Reviews } from "@/components/shared/reviews";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { FiArrowUpRight } from "react-icons/fi";

export default function Home() {
    const { t } = useTranslation("global");
    return (
        <>
            <HomeBanner />
            <section className="section section--services">
                <div className="container">
                    <h2 className="section__title">
                        {t("home-slider.title-1")}{" "}
                        <span>{t("home-slider.title-span")}</span>
                    </h2>
                    <HomeSlider />
                </div>
            </section>
            <section className="section section--blog">
                <div className="container">
                    <div className="section__head">
                        <h2>{t("home-blog.title")}</h2>
                        <div className="section__link-wrapper">
                            <Link href={"/blogs"} className="blog__link link-3">
                                {t("home-blog.btn")}
                                <FiArrowUpRight size={20} />
                            </Link>
                        </div>
                    </div>
                    <div className="blogs__wrapper">
                        <div className="blogs__col blogs__col--1">
                            <div className="home-blog">
                                <div className="home-blog__img">
                                    <img
                                        src="./images/home-blog/home-blog-1.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="home-blog__info">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="blogs__col blogs__col--2">
                            <div className="home-blog">
                                <div className="home-blog__img">
                                    <img
                                        src="./images/home-blog/home-blog-2.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="home-blog__info">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>
                            <div className="home-blog">
                                <div className="home-blog__img">
                                    <img
                                        src="./images/home-blog/home-blog-3.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="home-blog__info">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section__link-wrapper section__link-wrapper--mobile">
                        <Link href={"/blogs"} className="blog__link link-3">
                            {t("home-blog.btn")} <FiArrowUpRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>
            <Reviews />
            <section className="section section--subscribe">
                <div className="container">
                    <div className="subscribe__head">
                        <h2>
                            {/* Got A <span>Project</span> In Mind? */}
                            {t("subscribe.title-1")}{" "}
                            <span>{t("subscribe.title-span")}</span>{" "}
                            {t("subscribe.title-2")}
                        </h2>
                        <div className="subscribe__img">
                            <img src="./images/subscribe.png" alt="" />
                        </div>
                    </div>
                    <Subscribe />
                </div>
            </section>
        </>
    );
}
