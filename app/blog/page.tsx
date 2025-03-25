"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { FaCalendar } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { sanityClient } from "@/sanityClient";
import imageUrlBuilder from "@sanity/image-url";
import { useBlogs } from "@/hooks/useBlogs";

const builder = imageUrlBuilder(sanityClient);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const urlFor = (source: any) => builder.image(source);

export default function Blog() {
    const { t, i18n } = useTranslation("global");
    const { blogs, loading } = useBlogs();
    const lang = i18n.language as "en" | "ru" | "az";

    return (
        <div className="blog">
            {loading ? (
                <div className="container"></div>
            ) : (
                <div className="container">
                    {blogs.map((item) => (
                        <div key={item.id} className="blog__block">
                            <div className="blog__image">
                                <img
                                    src={urlFor(item.image1).url()}
                                    alt={item.title[lang]}
                                />
                            </div>
                            <div className="blog__info">
                                <div className="blog__info-top">
                                    <h2>{item.title[lang]}</h2>
                                    <p>{item.shortDescription[lang]}</p>
                                </div>
                                <div className="blog__info-bottom">
                                    <div className="data">
                                        <FaCalendar />{" "}
                                        <span>
                                            {new Date(item.date).toDateString()}
                                        </span>
                                    </div>
                                    <Link
                                        href={`/blog-page/${item.id}`}
                                        className="blog__link link-1"
                                    >
                                        {t("read-more-btn")}
                                        <FiArrowUpRight size={20} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
