"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import MobileLanguageSelector from "./mobile-language-selector";

interface Props {
    open: boolean;
    onClose: () => void;
    className?: string;
}

export const MobileNavbar: React.FC<Props> = ({ open, onClose }) => {
    const { t } = useTranslation("global");

    const mobileNavbarLinks = [
        { name: t("mobile-navbar.site"), path: "/site" },
        { name: t("mobile-navbar.r-keeper"), path: "/r-keeper" },
        { name: t("mobile-navbar.blog"), path: "/blog" },
        { name: t("mobile-navbar.contact-us"), path: "/contact-us" },
    ];

    useEffect(() => {
        if (open) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, [open]);

    return (
        <>
            <div
                className={`mobile-navbar--overlay ${
                    open ? "mobile-navbar--overlay--open" : ""
                }`}
            ></div>
            <div
                className={`mobile-navbar ${open ? "mobile-navbar--open" : ""}`}
            >
                <div className="mobile-navbar__close">
                    <button onClick={onClose}>
                        <IoClose size={48} color="#fff" />
                    </button>
                </div>

                <ul className="mobile-navbar__list">
                    {mobileNavbarLinks.map((link, id) => {
                        return (
                            <li key={id} className="mobile-navbar__item">
                                <Link
                                    href={link.path}
                                    className="mobile-navbar__link"
                                    onClick={() => onClose()}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <div className="mobile-navbar__settings">
                    <MobileLanguageSelector />
                </div>
            </div>
        </>
    );
};
