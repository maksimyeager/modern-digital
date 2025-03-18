"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Review } from "./review";

interface Props {
    className?: string;
}

const rewies = [
    {
        id: "1",
        company: "Azklima",
        rewiew: "I would like to express my deep gratitude to Modern Digital for their attention and care, and also wish Jamil Mehdiyev that his successes will be lasting. I also thank them in advance for the support they will provide in improving the website they have developed.",
        companyImg: "./images/rewiews/azklima.png",
        author: "Cavid Mikayilov",
        role: "Head of Marketing Department",
    },
    {
        id: "2",
        company: "BSS MMC",
        rewiew: "As BSS MMC, we are glad to cooperate with you. You have provided important services such as the development of our website, design work and logo design, and have proven your professionalism in every project. We have enjoyed your attention and creativity at every stage of our work.",
        companyImg: "./images/rewiews/bss.png",
        author: "Anar Sultanov",
        role: "CEO",
    },
    {
        id: "3",
        company: "MS clinic",
        rewiew: "As MS clinic, we were very pleased with our cooperation with Modern Digital. The website and software we ordered exceeded our expectations in terms of quality and timing. Thank you for your professionalism and attention to detail. We recommend them!",
        companyImg: "./images/rewiews/ms-clinic.png",
        author: "Gunel Isayeva",
        role: "CEO",
    },
    {
        id: "4",
        company: "Javelin Patisserie",
        rewiew: "As the founder and CEO of Javelin, I want to thank Modern Digital for the work they have done. The warehouse programs made our work accurate, the website they created and their design impressed everyone.",
        companyImg: "./images/rewiews/javelin.png",
        author: "Fagan Mehdi",
        role: "CEO",
    },
    {
        id: "5",
        company: "Brandbox",
        rewiew: "On behalf of Brandbox and its CEO Aydin Mehdiyev, we express our sincere gratitude to Modern Digital for efficient cooperation and high professionalism. We hope to continue successful partnerships and joint projects in the future.",
        companyImg: "./images/rewiews/brandbox.png",
        author: "Aydin Mehdiyev",
        role: "CEO",
    },
];

export const RewiewSlider: React.FC<Props> = () => {
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
                {rewies.map((item) => (
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
