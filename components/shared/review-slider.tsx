"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Review } from "./review";
import { useTranslation } from "react-i18next";

interface Props {
    className?: string;
}

export const RewiewSlider: React.FC<Props> = () => {
    const { t } = useTranslation("global");
    const reviews = [
        {
            id: "1",
            company: "Azklima",
            rewiew: t("reviews.review-azklima"),
            companyImg: "./images/rewiews/azklima.png",
            author: "Cavid Mikayilov",
            role: t("reviews.review-azklima-role"),
        },
        {
            id: "2",
            company: "BSS MMC",
            rewiew: t("reviews.review-bss"),
            companyImg: "./images/rewiews/bss.png",
            author: "Anar Sultanov",
            role: t("reviews.review-bss-role"),
        },
        {
            id: "3",
            company: "MS clinic",
            rewiew: t("reviews.review-msclinic"),
            companyImg: "./images/rewiews/ms-clinic.png",
            author: "Gunel Isayeva",
            role: t("reviews.review-msclinic-role"),
        },
        {
            id: "4",
            company: "Javelin Patisserie",
            rewiew: t("reviews.review-javelin"),
            companyImg: "./images/rewiews/javelin.png",
            author: "Fagan Mehdi",
            role: t("reviews.review-javelin-role"),
        },
        {
            id: "5",
            company: "Brandbox",
            rewiew: t("reviews.review-brandbox"),
            companyImg: "./images/rewiews/brandbox.png",
            author: "Aydin Mehdiyev",
            role: t("reviews.review-brandbox-role"),
        },
    ];
    return (
        <div className="rewiew-slider__wrapper">
            <Swiper
                className="rewiew-slider"
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                modules={[Navigation, Autoplay, Pagination]}
                autoplay={{
                    delay: 5000,
                }}
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
                {reviews.map((item) => (
                    <SwiperSlide key={item.id} className="rewiew-slider__slide">
                        <Review
                            company={item.company}
                            rewiew={item.rewiew}
                            companyImg={item.companyImg}
                            author={item.author}
                            role={item.role}
                            id={item.id}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
