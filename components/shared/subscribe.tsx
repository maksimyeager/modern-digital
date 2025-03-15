/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "../ui";
import { Title } from "./title";

interface Props {
    className?: string;
}

export const Subscribe: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn("relative subscribe w-full bg-[#24193A] p-12 rounded-[42px] border z-20", className)}>
            <Title text={"Abunə Olun!"} size="lg" className="mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                <p className="text-xl font-light">
                    Xüsusi Təkliflər Və Yeniliklərdən Ilk Sizin Xəbəriniz Olsun
                </p>
                <form action="" className="flex items-center gap-4 flex-1">
                    <input
                        type="text"
                        placeholder="Enter Email Address"
                        className="font-light h-[48px] w-full py-2 px-4 rounded-[56px] text-black"
                    />
                    <Button
                        variant={"secondary"}
                        className="px-6 rounded-[56px] h-[48px] font-medium text-base shadow-secondary"
                    >
                        Göndər
                    </Button>
                </form>
            </div>
            <img src="./images/subscribe.png" alt="" />
        </div>
    );
};
