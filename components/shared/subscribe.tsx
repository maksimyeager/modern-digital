/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "../ui";

interface Props {
    className?: string;
}

export const Subscribe: React.FC<Props> = () => {
    return (
        <div className="subscribe">
            <h2>Abunə Olun!</h2>
            <div className="subscribe__wrapper">
                <p>
                    Xüsusi Təkliflər Və Yeniliklərdən Ilk Sizin Xəbəriniz Olsun
                </p>
                <form action="" className="subscribe__form">
                    <input type="text" placeholder="Enter Email Address" />

                    <button className="subscribe__form-button">Göndər</button>
                </form>
            </div>
        </div>
    );
};
