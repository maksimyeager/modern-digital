import React from "react";
import { Container, Title } from "@/components/shared";
import { cn } from "@/lib/utils";

interface Props {
    className?: string;
    title: string;
}

export const Banner: React.FC<Props> = ({ className, title }) => {
    return (
        <div className={cn("px-4 mb-8", className)}>
            <Container className="border bg-transparent py-16 rounded-[43px]">
                <Title
                    text={title}
                    size="xl"
                    className="font-normal text-center"
                />
            </Container>
        </div>
    );
};
