/* eslint-disable @next/next/no-img-element */
import { Subscribe } from "@/components/shared";
import { HomeBanner } from "@/components/shared/home-banner";
import { HomeSlider } from "@/components/shared/home-slider";
import { Reviews } from "@/components/shared/reviews";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function Home() {
    return (
        <>
            <HomeBanner />
            <section className="section section--services">
                <div className="container">
                    <h2 className="text-center text-[40px]">
                        Sizə Təklif Etdiyimiz{" "}
                        <span className="font-semibold text-secondary">
                            Xidmətlərimiz
                        </span>
                    </h2>
                    <p className="text-center text-sm font-light mb-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor <br /> incididunt ut labore et
                        dolore magna aliqua. 
                    </p>
                    <HomeSlider />
                </div>
            </section>
            <section className="section section--blog">
                <div className="container">
                    <div className="section__head">
                        <h2>Our Blog</h2>
                        <div className="section__link-wrapper">
                            <Link href={"/"} className="blog__link link-3">
                                See More Blogs <FiArrowUpRight size={20} />
                            </Link>
                        </div>
                    </div>
                    <div className="blogs__wrapper">
                        <div className="blogs__col blogs__col--1"></div>
                        <div className="blogs__col blogs__col--2"></div>
                    </div>
                </div>
            </section>
            <Reviews />
            <section className="section section--subscribe">
                <div className="container">
                    <div className="subscribe__head">
                        <h2>
                            Got A <span>Project</span> In Mind?
                        </h2>
                        <div className="subscribe__img">
                            <img src="./images/subscribe.png" alt="" />
                        </div>
                    </div>
                    <Subscribe />
                </div>
            </section>
        </>
    );
}
