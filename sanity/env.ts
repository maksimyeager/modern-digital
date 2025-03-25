export const sanityConfig = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
};

export const apiVersion =
    process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-03-24";

export const dataset = assertValue(
    process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
);

export const projectId = assertValue(
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "qimo67da",
    "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
    if (v === undefined) {
        throw new Error(errorMessage);
    }

    return v;
}

console.log(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
