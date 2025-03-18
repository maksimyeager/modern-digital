import React from "react";
import { Container, Title } from "@/components/shared";
import { cn } from "@/lib/utils";

interface Props {
    className?: string;
    title: string;
}

export const Banner: React.FC<Props> = ({ className, title }) => {
    return (
        <div className={cn("banner", className)}>
            <div className="container">
                <h1>{title}</h1>
            </div>
        </div>
    );
};
