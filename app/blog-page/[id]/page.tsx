"use client";

import { FaCalendar } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { useParams } from "next/navigation";
import { useBlogs } from "@/hooks/useBlogs";
import { sanityClient } from "@/sanityClient";
import imageUrlBuilder from "@sanity/image-url";
import { useTranslation } from "react-i18next";

const builder = imageUrlBuilder(sanityClient);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const urlFor = (source: any) => builder.image(source);

export default function BlogPage() {
    const { i18n } = useTranslation("global");
    const lang = i18n.language as "en" | "ru" | "az";

    const { id } = useParams();
    const { blogs, loading } = useBlogs();
    const findBlog = blogs.find((item) => item.id.toString() === id);

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    url: window.location.href,
                });
                console.log("Успешно поделились!");
            } catch (error) {
                console.log("Ошибка при попытке поделиться:", error);
            }
        } else {
            alert("Ваш браузер не поддерживает функцию поделиться.");
        }
    };

    if (!findBlog) return <div className="container"></div>;

    return (
        <div className="blog-page">
            {!loading && (
                <div className="container">
                    <div className="blog-page__top">
                        <div className="blog-page__image">
                            <img
                                src={urlFor(findBlog.image1.asset).url()}
                                alt={findBlog.title[lang]}
                            />
                        </div>
                        <div className="blog__page__info">
                            <div className="blog-page__info-top">
                                <h2>{findBlog.title[lang]}</h2>
                                <div className="blog-page__settings">
                                    <p className="data">
                                        <FaCalendar />{" "}
                                        <span>
                                            {new Date(
                                                findBlog.date
                                            ).toDateString()}
                                        </span>
                                    </p>
                                    <button
                                        onClick={handleShare}
                                        className="share-button"
                                    >
                                        <IoIosShareAlt color="#fff" />
                                    </button>
                                </div>
                            </div>
                            <div className="blog-page__info-bottom">
                                <p>{findBlog.description1[lang]}</p>
                            </div>
                        </div>
                    </div>
                    <div className="blog-page__bottom">
                        <p>{findBlog.description2[lang]}</p>
                        <div className="blog-page__image">
                            <img
                                src={urlFor(findBlog.image2.asset).url()}
                                alt={findBlog.title[lang]}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
