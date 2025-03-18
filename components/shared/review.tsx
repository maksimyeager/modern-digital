/* eslint-disable @next/next/no-img-element */
import React from "react";

interface Props {
    className?: string;
    id: string;
    company: string;
    rewiew: string;
    companyImg: string;
    author: string;
    role: string;
}

export const Review: React.FC<Props> = ({
    id,
    company,
    rewiew,
    companyImg,
    author,
    role,
}) => {
    return (
        <div className="rewiew">
            <h2 className="rewiew__title">{company}</h2>
            <p className="rewiew__desc">{rewiew}</p>
            <div className="rewiew__info">
                <div className={`rewiew__image rewiew__image--${id}`}>
                    <img src={companyImg} alt="" />
                </div>
                <div>
                    <p className="rewiew__author">{author}</p>
                    <p className="rewiew__role">{role}</p>
                </div>
            </div>
        </div>
    );
};
