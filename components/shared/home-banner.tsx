import React from "react";
import { Container } from "@/components/shared";
import { cn } from "@/lib/utils";
import { Button } from "../ui";
import { FiArrowUpRight } from "react-icons/fi";

interface Props {
    className?: string;
}

export const HomeBanner: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn("home-banner px-4 mb-8", className)}>
            <Container className="flex gap-4">
                <div className="home-banner__left">
                    <img src="./images/home-banner-1.png" alt="" />
                    <p>
                        Set error sit voluptatem iste accusan aperiam, eaque
                        ipsa quae ab illoperspiciatis unde omnis iste natus
                        error sit voluptatem accusantium ...
                    </p>
                </div>
                <div className="home-banner__center">
                    <img src="./images/home-banner-2.png" alt="" />
                    <Button
                        variant={"default"}
                        className="w-[210px] py-6 rounded-[20px]"
                    >
                        Read More <FiArrowUpRight className="ml-4" size={20} />
                    </Button>
                </div>
                <div className="home-banner__right">
                    <div className="w-[130px]">
                        <p className="text-[64px] font-normal flex gap-2 leading-none">
                            98{" "}
                            <span className="mt-[10px] text-[32px] text-secondary font-bold">
                                %
                            </span>
                        </p>
                        <p className="text-[14px] font-light">Happy Clients</p>
                    </div>
                    <div className="">
                        <p className="text-[64px] font-normal flex gap-2 leading-none">
                            98{" "}
                            <span className="mt-[10px] text-[32px] text-secondary font-bold">
                                %
                            </span>
                        </p>
                        <p className="text-[14px] font-light">Happy Clients</p>
                    </div>
                    <div className="">
                        <p className="text-[64px] font-normal flex gap-2 leading-none">
                            98{" "}
                            <span className="mt-[10px] text-[32px] text-secondary font-bold">
                                %
                            </span>
                        </p>
                        <p className="text-[14px] font-light">Happy Clients</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};
