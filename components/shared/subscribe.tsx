import React from "react";

interface Props {
    className?: string;
}

export const Subscribe: React.FC<Props> = () => {
    return (
        <div className="subscribe">
            <div className="subscribe__wrapper">
                <div className="subscribe__info">
                    <h2>Abunə Olun!</h2>
                    <p>
                        Xüsusi Təkliflər Və Yeniliklərdən Ilk Sizin Xəbəriniz
                        Olsun
                    </p>
                </div>
                <form action="" className="subscribe__form">
                    <input type="text" placeholder="Enter Email Address" />

                    <button className="subscribe__form-button">Göndər</button>
                </form>
            </div>
        </div>
    );
};
