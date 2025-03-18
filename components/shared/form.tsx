import React from "react";
import { Button } from "../ui";

interface Props {
    className?: string;
}

export const Form: React.FC<Props> = () => {
    return (
        <form action="" className="form">
            <div className="form__block--row">
                <div className="form__block">
                    <label>Name Surname</label>
                    <input type="text" placeholder="John Dou" />
                </div>
                <div className="form__block">
                    <label>Phone</label>
                    <input type="text" placeholder="+994 ## ### ## ##" />
                </div>
            </div>
            <div className="form__block">
                <label>E-Mail Address</label>
                <input type="text" placeholder="example@gmail.com" />
            </div>
            <div className="form__block">
                <label>Message</label>
                <textarea name="" id=""></textarea>
            </div>
            <button className="form__button button-1 ">
                Send
            </button>
        </form>
    );
};
