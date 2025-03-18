import { Banner } from "@/components/shared";
import { Reviews } from "@/components/shared/reviews";
import { Button } from "@/components/ui";

export default function Site() {
    return (
        <>
            <Banner title="What Types Of Websites Do We Offer?" />
            <div className="container">
                <p className="sites__desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor <br /> incididunt ut labore et dolore
                    magna aliqua. 
                </p>
            </div>
            <section className="section section--site-types">
                <div className="container">
                    <div className="site-type">
                        <h2>Сайт визитка/Landing</h2>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur.
                        </p>
                        <img
                            src="./../images/card.png"
                            className="site-type__img site-type__img--1"
                            alt=""
                        />
                    </div>
                    <div className="site-type">
                        <h2>Корпоративный сайт</h2>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur.
                        </p>
                        <img
                            src="./../images/folder.png"
                            className="site-type__img site-type__img--2"
                            alt=""
                        />
                    </div>
                    <div className="site-type">
                        <h2>Блог/Новостной сайт</h2>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur.
                        </p>
                        <img
                            src="./../images/megaphone.png"
                            className="site-type__img site-type__img--3"
                            alt=""
                        />
                    </div>
                    <div className="site-type">
                        <h2>Онлайн магазин</h2>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur.
                        </p>
                        <img
                            src="./../images/cart.png"
                            className="site-type__img site-type__img--4"
                            alt=""
                        />
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <h2 className="text-center text-[40px] mb-2">
                        İş mərhələlərimiz
                    </h2>
                    <p className="text-center text-sm font-light mb-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do <br /> eiusmod tempor incididunt ut labore qua. 
                    </p>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <h2 className="text-center text-[40px] mb-2">
                        Download To Know More!
                    </h2>
                    <p className="text-center text-sm font-light mb-8">
                        Lorem ipsum dolor sit adipiscing elit, sed do eiusmod
                        tempor <br /> incididunt ut labore. 
                    </p>
                    <Button
                        variant={"default"}
                        className="block  w-[220px] h-[50px] mx-auto rounded-[18px]"
                    >
                        Download Presentation
                    </Button>
                </div>
            </section>
            <Reviews />
        </>
    );
}
