import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "../ui";

interface Props {
    className?: string;
}

export const Form: React.FC<Props> = ({ className }) => {
    return (
        <form action="" className={cn("form", className)}>
            <div className="form__block--row">
                <div className="form__block">
                    <label className="text-[15px] font-normal mb-2">
                        Name Surname
                    </label>
                    <input
                        type="text"
                        placeholder="John Dou"
                        className="bg-[#322847] text-white text-[15px] font-normal py-3 px-4 rounded-[16px]"
                    />
                </div>
                <div className="form__block">
                    <label className="text-[15px] font-normal mb-2">
                        Phone
                    </label>
                    <input
                        type="text"
                        placeholder="John Dou"
                        className="bg-[#322847] text-white text-[15px] font-normal py-3 px-4 rounded-[16px]"
                    />
                </div>
            </div>
            <div className="form__block">
                <label className="text-[15px] font-normal mb-2">
                    E-Mail Address
                </label>
                <input
                    type="text"
                    placeholder="John Dou"
                    className="bg-[#322847] text-white text-[15px] font-normal py-3 px-4 rounded-[16px]"
                />
            </div>
            <div className="form__block">
                <label className="text-[15px] font-normal mb-2">Message</label>
                <textarea
                    name=""
                    id=""
                    className="bg-[#322847] text-white text-[15px] font-normal py-3 px-4 rounded-[24px] h-[110px] resize-none"
                ></textarea>
            </div>
            <Button variant={"default"} className="form__button">
                Send
            </Button>
        </form>
    );
};
