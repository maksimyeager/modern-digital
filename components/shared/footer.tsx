/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import Link from "next/link";
import { Title } from "./title";
import { FaPhoneAlt } from "react-icons/fa";
import { BiSolidEnvelope } from "react-icons/bi";

interface Props {
    className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
    return (
        <footer className={cn("pt-24 pb-16 relative", className)}>
            <Container className="flex gap-8 sm:gap-24 flex-wrap flex-col sm:flex-row items-center sm:items-start">
                <img
                    src="/images/absolute.png"
                    alt="Absolute Logo"
                    className="absolute z-0 bottom-0 right-0 sm:w-[300px] w-[220px]"
                />
                <div className="flex flex-col max-w-[280px] w-full md:mr-16">
                    <Link href={"/"}>
                        <img
                            src={"/images/logo-1.png"}
                            alt={"Modern Digital"}
                            className="w-full"
                        />
                    </Link>
                    <div className="mt-8 flex flex-col gap-2">
                        <div className="flex bg-white rounded-lg p-2 items-center gap-4">
                            <BiSolidEnvelope color="#5800FF" size={24} />
                            <span className="text-[#131312]">
                                Example@gmail.com
                            </span>
                        </div>
                        <div className="flex bg-white rounded-lg p-2 items-center gap-4">
                            <FaPhoneAlt color="#5800FF" size={20} />
                            <span className="text-[#131312]">
                                +777 77 777 77
                            </span>
                        </div>
                    </div>
                </div>
                <div className="text-center sm:text-start">
                    <Title text={"Our Links"} size="lg" className="mb-6" />
                    <ul className="flex flex-col gap-4 text-lg font-light">
                        <li>
                            <Link href={"/blog"}>Blog</Link>
                        </li>
                        <li>
                            <Link href={"/contact-us"}>Əlaqə</Link>
                        </li>
                    </ul>
                </div>
                <div className="text-center sm:text-start">
                    <Title text={"Our Services"} size="lg" className="mb-6" />
                    <ul className="flex flex-col gap-4 text-lg font-light">
                        <li>
                            <Link href={"/site"}>Sayt</Link>
                        </li>
                        <li>
                            <Link href={"/r-keeper"}>r_keeper</Link>
                        </li>
                        <li>
                            <Link href={"/design"}>Dizayn</Link>
                        </li>
                        <li>
                            <Link href={"/tacir-pro"}>tacir.pro</Link>
                        </li>
                    </ul>
                </div>
            </Container>
        </footer>
    );
};
