import React from "react";
import { RewiewSlider } from "./review-slider";

interface Props {
    className?: string;
}

export const Reviews: React.FC<Props> = () => {
    return (
        <section className="section section--rewiews">
            <h2 className="section__title">Müştərilərimizin rəyləri</h2>
            <p className="section__subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor <br />
                incididunt ut labore et dolore magna aliqua. 
            </p>
            <RewiewSlider />
        </section>
    );
};
