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
        <div className="">
            <Swiper
                className="rewiew-slider w-full"
                slidesPerView={3.5}
                spaceBetween={30}
                loop={true}
                modules={[Navigation, Pagination]}
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
