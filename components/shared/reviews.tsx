import { cn } from "@/lib/utils";
import React from "react";
import { RewiewSlider } from "./review-slider";

interface Props {
    className?: string;
}

export const Reviews: React.FC<Props> = ({ className }) => {
    return (
        <section className={cn("py-16", className)}>
            <h2 className="text-center text-[40px] mb-2">
                Müştərilərimizin rəyləri
            </h2>
            <p className="text-center text-sm font-light mb-8">
                Lorem ipsum dolor sit adipiscing elit, sed do eiusmod tempor{" "}
                <br /> incididunt ut labore. 
            </p>
            <RewiewSlider />
        </section>
    );
};
