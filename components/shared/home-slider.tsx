"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FiArrowUpRight } from "react-icons/fi";
import { Swiper as SwiperCore } from "swiper";
import { useTranslation } from "react-i18next";

interface Props {
    className?: string;
}

export const HomeSlider: React.FC<Props> = () => {
    const { t } = useTranslation("global");
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef<SwiperCore | null>(null);

    const handleSlideChange = (index: number) => {
        setActiveIndex(index);
        console.log(activeIndex);
        if (swiperRef.current) {
            swiperRef.current.slideTo(index);
        }
    };

    return (
        <div className="services-slider__wrapper">
            <div className="services-slider__controls">
                {[
                    t("home-slider.btn-1"),
                    t("home-slider.btn-2"),
                    t("home-slider.btn-3"),
                ].map((text, index) => (
                    <button
                        key={index}
                        className={`services-slider__btn services-slider__btn--${
                            index + 1
                        } ${
                            activeIndex === index
                                ? "services-slider__btn--active"
                                : ""
                        }`}
                        onClick={() => handleSlideChange(index)}
                    >
                        {text}
                    </button>
                ))}
            </div>

            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                slidesPerView={1}
                spaceBetween={30}
                className="services-slider"
            >
                <SwiperSlide className="services-slider__slide">
                    <div className="service">
                        <div className="service__info">
                            <h2>{t("home-slider.service-1")}</h2>

                            <p>{t("home-slider.service-desc-1")}</p>
                            <div className="service__controls">
                                <Link href={"/site"} className="link-1">
                                    {t("read-more-btn")}
                                    <FiArrowUpRight size={20} />
                                </Link>
                            </div>
                        </div>
                        <div className="service__img">
                            <img src="/images/home-slider/sites.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="services-slider__slide">
                    <div className="service">
                        <div className="service__info">
                            <h2>{t("home-slider.service-2")}</h2>
                            <p>{t("home-slider.service-desc-2")}</p>
                            <div className="service__controls">
                                <Link href={"/r-keeper"} className="link-1">
                                    r_keeper <FiArrowUpRight size={20} />
                                </Link>
                            </div>
                        </div>
                        <div className="service__img">
                            <img
                                src="/images/home-slider/software.jpg"
                                alt=""
                                className="rounded-[43px] object-cove h-full"
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="services-slider__slide">
                    <div className="service">
                        <div className="service__info">
                            <h2>{t("home-slider.service-3")}</h2>
                            <p>{t("home-slider.service-desc-3")}</p>
                        </div>
                        <div className="service__img">
                            <img src="/images/home-slider/design.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
