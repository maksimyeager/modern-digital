"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Review } from "./review";

interface Props {
    className?: string;
}

export const RewiewSlider: React.FC<Props> = () => {
    return (
        <div className="rewiew-slider__wrapper">
            <Swiper
                className="rewiew-slider w-full"
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                modules={[Navigation, Pagination]}
                breakpoints={{
                    768: {
                        slidesPerView: 1,
                    },
                    900: {
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerView: 3,
                    },
                    1560: {
                        slidesPerView: 4,
                    },
                }}
            >
                <SwiperSlide>
                    <Review />
                </SwiperSlide>
                <SwiperSlide>
                    <Review />
                </SwiperSlide>
                <SwiperSlide>
                    <Review />
                </SwiperSlide>
                <SwiperSlide>
                    <Review />
                </SwiperSlide>
                <SwiperSlide>
                    <Review />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
