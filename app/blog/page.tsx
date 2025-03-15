/* eslint-disable @next/next/no-img-element */

import { Container } from "@/components/shared";
import { Button } from "@/components/ui";
import Link from "next/link";
import { FaCalendar } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

export default function Blog() {
    return (
        <div className="blog">
            <Container className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
                <div className="blog__block">
                    <div className="blog__image">
                        <img src="./images/image.png" alt="" />
                    </div>
                    <div className="blog__info">
                        <div className="blog__info-top">
                            <h2>Blog 1</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis..
                            </p>
                        </div>
                        <div className="blog__info-bottom">
                            <div className="data">
                                <FaCalendar /> <span>Thur 17 Nov 2022</span>
                            </div>
                            <Link
                                href={"/blog-page/1"}
                                className="blog__link link-1"
                            >
                                Read More{" "}
                                <FiArrowUpRight className="ml-4" size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="blog__block">
                    <div className="blog__image">
                        <img src="./images/image.png" alt="" />
                    </div>
                    <div className="blog__info">
                        <div className="blog__info-top">
                            <h2>Blog 1</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis..
                            </p>
                        </div>
                        <div className="blog__info-bottom">
                            <div className="data">
                                <FaCalendar /> <span>Thur 17 Nov 2022</span>
                            </div>
                            <Link
                                href={"/blog-page/1"}
                                className="blog__link link-1"
                            >
                                Read More{" "}
                                <FiArrowUpRight className="ml-4" size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="blog__block">
                    <div className="blog__image">
                        <img src="./images/image.png" alt="" />
                    </div>
                    <div className="blog__info">
                        <div className="blog__info-top">
                            <h2>Blog 1</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis..
                            </p>
                        </div>
                        <div className="blog__info-bottom">
                            <div className="data">
                                <FaCalendar /> <span>Thur 17 Nov 2022</span>
                            </div>
                            <Link
                                href={"/blog-page/1"}
                                className="blog__link link-1"
                            >
                                Read More{" "}
                                <FiArrowUpRight className="ml-4" size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
