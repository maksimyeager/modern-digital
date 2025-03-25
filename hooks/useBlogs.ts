import { useEffect, useState } from "react";
import { sanityClient } from "@/sanityClient";

interface LocalizedText {
    en: string;
    ru: string;
    az: string;
}

interface Blog {
    id: number;
    title: LocalizedText;
    image1: {
        asset: {
            _ref: string;
        };
    };
    image2: {
        asset: {
            _ref: string;
        };
    };
    shortDescription: LocalizedText;
    description1: LocalizedText;
    description2: LocalizedText;
    date: string;
}

export function useBlogs() {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "blog"]`)
            .then((data) => {
                setBlogs(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Sanity fetch error:", error);
                setLoading(false);
            });
    }, []);

    return { blogs, loading };
}
