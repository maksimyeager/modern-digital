"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Button } from "../ui";
import { Title } from ".";
import { FiArrowUpRight } from "react-icons/fi";

interface Props {
    className?: string;
}

export const HomeSlider: React.FC<Props> = ({ className }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef<any>(null);

    const handleSlideChange = (index: number) => {
        setActiveIndex(index);
        if (swiperRef.current) {
            swiperRef.current.slideTo(index);
        }
    };

    return (
        <div className="flex flex-col">
            <div className="flex md:flex-row flex-col justify-between items-center gap-8 mb-8">
                {["Website Development", "Proqram Təminatı", "Dizayn"].map(
                    (text, index) => (
                        <Button
                            key={index}
                            variant={"outline"}
                            className={`flex-1 w-full h-[58px] p-6 rounded-[18px] font-medium text-base`}
                            onClick={() => handleSlideChange(index)}
                        >
                            {text}
                        </Button>
                    )
                )}
            </div>

            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                className="w-full"
            >
                <SwiperSlide>
                    <div className="flex flex-col max-w-[650px] w-full p-8 border rounded-[43px]">
                        <Title
                            text={"Website Development"}
                            size="lg"
                            className="mb-4 text-[32px]"
                        />
                        <p className="text-[15px] text-white/50 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                        <div className="flex gap-8 items-center mt-auto">
                            <Button
                                variant={"default"}
                                className="w-[210px] py-6 rounded-[20px]"
                            >
                                Read More{" "}
                                <FiArrowUpRight className="ml-4" size={20} />
                            </Button>
                        </div>
                    </div>
                    <div>
                        <img
                            src="/images/sites.jpg"
                            alt=""
                            className="rounded-[43px] object-cover h-full"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col max-w-[650px] w-full p-8 border rounded-[43px]">
                        <Title
                            text={"Proqram Təminatı"}
                            size="lg"
                            className="mb-4 text-[32px]"
                        />
                        <p className="text-[15px] text-white/50 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                        <div className="flex gap-8 items-center mt-auto">
                            <Button
                                variant={"default"}
                                className="w-[210px] py-6 rounded-[20px]"
                            >
                                r_keeper{" "}
                                <FiArrowUpRight className="ml-4" size={20} />
                            </Button>
                            <Button
                                variant={"default"}
                                className="w-[210px] py-6 rounded-[20px]"
                            >
                                Tacir.Pro{" "}
                                <FiArrowUpRight className="ml-4" size={20} />
                            </Button>
                        </div>
                    </div>
                    <div>
                        <img
                            src="/images/software.jpg"
                            alt=""
                            className="rounded-[43px] object-cove h-full"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="max-w-[650px] w-full p-8 border rounded-[43px]">
                        <Title
                            text={"Dizayn"}
                            size="lg"
                            className="mb-4 text-[32px]"
                        />
                        <p className="text-[15px] text-white/50 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div>
                        <img
                            src="/images/design.jpg"
                            alt=""
                            className="rounded-[43px] object-cover h-full"
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
