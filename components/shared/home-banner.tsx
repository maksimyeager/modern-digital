import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";

interface Props {
    className?: string;
}

export const HomeBanner: React.FC<Props> = () => {
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
                                Dünyaca tanınmış r_keeper proqram təminatının
                                Azərbaycan Respublikasında ki, rəsmi nümayəndəsi
                                olmağın{" "}
                                <Link href={"/r-keeper"} className="link-1">
                                    <FiArrowUpRight size={24} />
                                </Link>
                                müjdəsini sizin ilə paylaşmaq istəyirik. Ətraflı
                                məlumatlar üçün bizi izləməyi unutmayın!
                            </p>
                        </div>
                    </div>
                    <div className="home-banner__center">
                        <img
                            src="./images/home-banner/home-banner-2.png"
                            alt=""
                        />
                        <Link href={"/site"} className="link-1">
                            Read More <FiArrowUpRight size={20} />
                        </Link>
                    </div>
                    <div className="home-banner__right">
                        <div className="home-banner__right-wrapper">
                            <p className="home-banner__right-data">
                                4 <span>+</span>
                            </p>
                            <p className="text-[14px] font-light">
                                Years Experience{" "}
                            </p>
                        </div>
                        <div className="">
                            <p className="home-banner__right-data">
                                98 <span>%</span>
                            </p>
                            <p className="text-[14px] font-light">
                                Happy Clients
                            </p>
                        </div>
                        <div className="">
                            <p className="home-banner__right-data">
                                30 <span>+</span>
                            </p>
                            <p className="text-[14px] font-light">Websites</p>
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
                                Read More <FiArrowUpRight size={20} />
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
                                    Dünyaca tanınmış r_keeper proqram
                                    təminatının Azərbaycan Respublikasında ki,
                                    rəsmi nümayəndəsi olmağın{" "}
                                    <Link href={"/r-keeper"} className="link-1">
                                        <FiArrowUpRight size={24} />
                                    </Link>
                                    müjdəsini sizin ilə paylaşmaq istəyirik.
                                    Ətraflı məlumatlar üçün bizi izləməyi
                                    unutmayın!
                                </p>
                            </div>
                        </div>

                        <div className="home-banner__right">
                            <div className="home-banner__right-wrapper">
                                <p className="home-banner__right-data">
                                    4 <span>+</span>
                                </p>
                                <p className="text-[14px] font-light">
                                    Years Experience{" "}
                                </p>
                            </div>
                            <div className="">
                                <p className="home-banner__right-data">
                                    98 <span>%</span>
                                </p>
                                <p className="text-[14px] font-light">
                                    Happy Clients
                                </p>
                            </div>
                            <div className="">
                                <p className="home-banner__right-data">
                                    30 <span>+</span>
                                </p>
                                <p className="text-[14px] font-light">
                                    Websites
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
