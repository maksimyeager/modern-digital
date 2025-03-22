"use client";

import React, { useState } from "react";
import { Button } from "../ui";
import Link from "next/link";
import Image from "next/image";
import { MobileNavbar } from "./mobile-navbar";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./language-selector";

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = () => {
    const { t, i18n } = useTranslation("global");
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
        document.body.classList.add("no-scroll");
    };
    console.log(i18n.language);
    return (
        <>
            <header className="header">
                <div className="container">
                    <Link href={"/"}>
                        <Image
                            src={"/images/logo-1.png"}
                            alt={"Modern Digital"}
                            width={169.22421264648438}
                            height={69.73692321777344}
                        />
                    </Link>
                    <ul className="header__list">
                        <li>
                            <Link href={"/site"}>{t("header.site")}</Link>
                        </li>
                        <li>
                            <Link href={"/r-keeper"}>
                                {t("header.r-keeper")}
                            </Link>
                        </li>
                        <li>
                            <Link href={"/blog"}>{t("header.blog")}</Link>
                        </li>
                        <li>
                            <Link href={"/contact-us"}>
                                {t("header.contact-us")}
                            </Link>
                        </li>
                    </ul>
                    <div>
                        <LanguageSelector />
                        <button
                            className="header__btn"
                            onClick={() => setOpen(true)}
                        >
                            <img src="./images/hamburger.svg" alt="" />
                        </button>
                    </div>
                </div>
            </header>
            <MobileNavbar open={open} onClose={handleClose} />
        </>
    );
};
