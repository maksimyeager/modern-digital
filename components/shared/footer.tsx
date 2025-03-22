"use client";

import React from "react";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { BiSolidEnvelope } from "react-icons/bi";
import { useTranslation } from "react-i18next";

interface Props {
    className?: string;
}

export const Footer: React.FC<Props> = () => {
    const { t } = useTranslation("global");

    return (
        <footer className="footer">
            <div className="container">
                <img
                    src="/images/absolute.png"
                    alt="Absolute Logo"
                    className="footer__absolute-logo"
                />
                <div className="footer__logo">
                    <Link href={"/"}>
                        <img
                            src={"/images/logo-1.png"}
                            alt={"Modern Digital"}
                            className="w-full"
                        />
                    </Link>
                    <div className="footer__contacts">
                        <div className="footer__contacts-block">
                            <BiSolidEnvelope color="#5800FF" size={24} />
                            <span className="text-[#131312]">
                                Example@gmail.com
                            </span>
                        </div>
                        <div className="footer__contacts-block">
                            <FaPhoneAlt color="#5800FF" size={20} />
                            <span className="text-[#131312]">
                                +777 77 777 77
                            </span>
                        </div>
                    </div>
                </div>
                <div className="footer__block">
                    <h2>{t("footer.our-links")}</h2>
                    <ul className="flex flex-col gap-4 text-lg font-light">
                        <li>
                            <Link href={"/blog"}>{t("footer.blog")}</Link>
                        </li>
                        <li>
                            <Link href={"/contact-us"}>{t("footer.contact-us")}</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer__block">
                    <h2>{t("footer.our-services")}</h2>
                    <ul className="flex flex-col gap-4 text-lg font-light">
                        <li>
                            <Link href={"/site"}>{t("footer.site")}</Link>
                        </li>
                        <li>
                            <Link href={"/r-keeper"}>{t("footer.r-keeper")}</Link>
                        </li>
                        <li>
                            <Link href={"/design"}>Dizayn</Link>
                        </li>
                        {/* <li>
                            <Link href={"/tacir-pro"}>tacir.pro</Link>
                        </li> */}
                    </ul>
                </div>
                <div className="footer__contacts footer__contacts--mobile">
                    <div className="footer__contacts-block">
                        <BiSolidEnvelope color="#5800FF" size={24} />
                        <span className="text-[#131312]">
                            Example@gmail.com
                        </span>
                    </div>
                    <div className="footer__contacts-block">
                        <FaPhoneAlt color="#5800FF" size={20} />
                        <span className="text-[#131312]">+777 77 777 77</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
