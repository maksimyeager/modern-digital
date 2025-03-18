"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { IoClose } from "react-icons/io5";

interface Props {
    open: boolean;
    onClose: () => void;
    className?: string;
}

export const MobileNavbar: React.FC<Props> = ({ open, onClose }) => {
    // const { t } = useTranslation("global");

    const mobileNavbarLinks = [
        { name: "Sayt", path: "/site" },
        { name: "r_keeper", path: "/r-keeper" },
        { name: "Blog", path: "/blog" },
        { name: "Contact Us", path: "/contact-us" },
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
            </div>
        </>
    );
};
