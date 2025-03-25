import { useEffect, useState } from "react";
import { sanityClient } from "@/sanityClient";

// Тип для блога
interface Blog {
    id: number;
    title: string;
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
    description1: string;
    description2: string;
    shortDescription: string;
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
