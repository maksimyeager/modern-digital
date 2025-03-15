/* eslint-disable @next/next/no-img-element */
import React from "react";

interface Props {
    className?: string;
}

export const Review: React.FC<Props> = () => {
    return (
        <div className="rewiew">
            <h2 className="rewiew__title">Azklima</h2>
            <p className="rewiew__desc">
                I would like to express my deep gratitude to Modern Digital for
                their attention and care, and also wish Jamil Mehdiyev that his
                successes will be lasting. I also thank them in advance for the
                support they will provide in improving the website they have
                developed.
            </p>
            <div className="rewiew__info">
                <div className="rewiew__image">
                    <img src="./images/azklima.png" alt="" />
                </div>
                <div>
                    <p className="rewiew__author">Cavid Mikayilov</p>
                    <p className="rewiew__role">Head of Marketing Department</p>
                </div>
            </div>
        </div>
    );
};
