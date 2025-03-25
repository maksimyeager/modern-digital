import type { NextConfig } from "next";

console.log("NEXT_PUBLIC_SANITY_PROJECT_ID:", process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
console.log("NEXT_PUBLIC_SANITY_DATASET:", process.env.NEXT_PUBLIC_SANITY_DATASET);

const nextConfig: NextConfig = {
    /* config options here */
};

export default nextConfig;
