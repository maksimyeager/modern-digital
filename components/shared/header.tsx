"use client";

import React, { useState } from "react";
import { Button } from "../ui";
import Link from "next/link";
import Image from "next/image";
import { MobileNavbar } from "./mobile-navbar";

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = () => {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
        document.body.classList.add("no-scroll");
    };
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
                            <Link href={"/site"}>Sayt</Link>
                        </li>
                        <li>
                            <Link href={"/r-keeper"}>r_keeper</Link>
                        </li>
                        <li>
                            <Link href={"/blog"}>Blog</Link>
                        </li>
                        <li>
                            <Link href={"/contact-us"}>Əlaqə</Link>
                        </li>
                    </ul>
                    <div>
                        <Button
                            variant={"secondary"}
                            className="hidden md:flex text-lg font-semibold shadow-secondary"
                        >
                            AZ
                        </Button>
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
