import { Reviews } from "@/components/shared/reviews";

export default function Site() {
    return (
        <>
            <div className="banner">
                <div className="container">
                    <h1>
                        What Types Of <span>Websites</span> Do We Offer?
                    </h1>
                </div>
            </div>
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
            <section className="section section--stages">
                <div className="container">
                    <h2 className="section__title">İş mərhələlərimiz</h2>
                    <p className="section__desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do <br /> eiusmod tempor incididunt ut labore qua. 
                    </p>

                    <div className="stages__wrapper">
                        <div className="stages__row stages__row--1">
                            <div className="stage">
                                <div className="stage__number">1</div>
                                <div className="stage__info">
                                    <h2 className="stage__title">Brifinq</h2>
                                    <p className="stage__desc">
                                        Şirkət ilə görüş təyin edib, fəaliyyəti
                                        və tarixçəsi ilə tanış olunur.
                                        Müştərinin istəkləri və gözləntiləri
                                        qeyd olunur.
                                    </p>
                                </div>
                            </div>
                            <div className="stage">
                                <div className="stage__number">2</div>
                                <div className="stage__info">
                                    <h2 className="stage__title">
                                        Texniki təklif
                                    </h2>
                                    <p className="stage__desc">
                                        Brifinq əsasında, bizim tərəfimizdən
                                        saytın funksiyonallığı barədə texniki
                                        təklif hazırlanır.
                                    </p>
                                </div>
                            </div>
                            <div className="stage">
                                <div className="stage__number">3</div>
                                <div className="stage__info">
                                    <h2 className="stage__title">
                                        Müqavilə və texniki Tapşırıq
                                    </h2>
                                    <p className="stage__desc">
                                        Bütün məsələləri müzakirə etdikdən sonra
                                        texniki tapşırıq və müqavilə hazırlanır.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="stages__row stages__row--2">
                            <div className="stage">
                                <div className="stage__number">4</div>
                                <div className="stage__info">
                                    <h2 className="stage__title">UI dizayn</h2>
                                    <p className="stage__desc">
                                        Texniki tapşırıq əsasında saytın “Demo
                                        versiyası” 7 iş günü ərzindı hazırlanır.
                                    </p>
                                </div>
                            </div>
                            <div className="stage">
                                <div className="stage__number">5</div>
                                <div className="stage__info">
                                    <h2 className="stage__title">
                                        Saytın Yazılması
                                    </h2>
                                    <p className="stage__desc">
                                        UI Dizayn təsdiqləndiqdən sonra, saytın
                                        sıfırdan kod vasitəsi ilə yazılması
                                        başlayır.
                                    </p>
                                </div>
                            </div>
                            <div className="stage">
                                <div className="stage__number stage__number--final">
                                    <img src="../images/flag.svg" alt="" />
                                </div>
                                <div className="stage__info">
                                    <h2 className="stage__title">ödəniş</h2>
                                    <p className="stage__desc">
                                        50% ilkin ödəniş etdikdən sonra iş
                                        prosessi başlayır. Layihə təhvil
                                        verildikdən sonra qalan 50% ödənilir.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section section--presentation">
                <div className="container">
                    <h2 className="section__title">Download To Know More!</h2>
                    <p className="section__desc">
                        Lorem ipsum dolor sit adipiscing elit, sed do eiusmod
                        tempor <br /> incididunt ut labore. 
                    </p>
                    <button>Dowland Presentation</button>
                    {/* <Button
                        variant={"default"}
                        className="block  w-[220px] h-[50px] mx-auto rounded-[18px]"
                    >
                        Download Presentation
                    </Button> */}
                </div>
            </section>
            <Reviews />
        </>
    );
}
