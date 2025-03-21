"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FiArrowUpRight } from "react-icons/fi";
import { Swiper as SwiperCore } from "swiper";

interface Props {
    className?: string;
}

export const HomeSlider: React.FC<Props> = () => {
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
                {["Website Development", "Proqram Təminatı", "Dizayn"].map(
                    (text, index) => (
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
                    )
                )}
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
                            <h2> Website Development</h2>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </p>
                            <div className="service__controls">
                                <Link href={"/site"} className="link-1">
                                    Read More{" "}
                                    <FiArrowUpRight
                                        className="ml-4"
                                        size={20}
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="service__img">
                            <img src="/images/sites.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="services-slider__slide">
                    <div className="service">
                        <div className="service__info">
                            <h2>Proqram Təminatı</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </p>
                            <div className="service__controls">
                                <Link href={"/r-keeper"} className="link-1">
                                    r_keeper{" "}
                                    <FiArrowUpRight
                                        className="ml-4"
                                        size={20}
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="service__img">
                            <img
                                src="/images/software.jpg"
                                alt=""
                                className="rounded-[43px] object-cove h-full"
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="services-slider__slide">
                    <div className="service">
                        <div className="service__info">
                            <h2>Dizayn</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className="service__img">
                            <img src="/images/design.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
