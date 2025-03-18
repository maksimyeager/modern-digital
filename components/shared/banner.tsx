import React from "react";

interface Props {
    className?: string;
    title: string;
}

export const Banner: React.FC<Props> = ({ title }) => {
    return (
        <div className="banner">
            <div className="container">
                <h1>{title}</h1>
            </div>
        </div>
    );
};
