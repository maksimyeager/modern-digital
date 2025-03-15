"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Button } from "../ui";
import { Container } from "./container";
import Link from "next/link";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa6";

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
    const [open, setOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <header className={cn("", className)}>
            <Container className="flex items-center justify-between py-8">
                <Link href={"/"}>
                    <Image
                        src={"/images/logo-1.png"}
                        alt={"Modern Digital"}
                        width={169.22421264648438}
                        height={69.73692321777344}
                    />
                </Link>
                <ul className="hidden lg:flex gap-16 items-center text-lg font-normal">
                    <li>
                        <Link href={"/site"}>Sayt</Link>
                    </li>
                    <li
                        className="relative"
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                    >
                        <Link href={"#"} className="flex items-center gap-2">
                            Proqram Təminatı <FaChevronDown />
                        </Link>
                        {dropdownOpen && (
                            <div className={"absolute bg-[#24193A] z-10 p-4"}>
                                <ul>
                                    <li>
                                        <Link href={"/r-keeper"}>r_kepper</Link>
                                    </li>
                                    <li>
                                        <Link href={"/tacir-pro"}>
                                            tacir.pro
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}
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
                        className="text-lg font-semibold shadow-secondary"
                    >
                        AZ
                    </Button>
                </div>
            </Container>
        </header>
    );
};
