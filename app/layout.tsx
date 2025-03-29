import { Alexandria } from "next/font/google";
import { Header, Footer } from "@/components/shared";
import "./globals.css";
import "./../scss/app.scss";
import I18nProvider from "@/components/providers/i18n-provider";

const alexandria = Alexandria({
    subsets: ["latin"],
    variable: "--font-alexandria",
    weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export async function generateMetadata({
    params,
}: {
    params: { locale: string };
}) {
    const siteName = "Modern Digital";
    // const description =
    //     "Modern Digital - это платформа для цифровых решений. Мы предлагаем современные технологии, маркетинг и дизайн.";
    const imageUrl = "/logo.png";
    const url = "https://moderndigital.az";

    return {
        title: siteName,
        lang: params.locale,
        metadataBase: new URL(url),
        openGraph: {
            title: siteName,
            images: [{ url: imageUrl }],
            type: "website",
            url,
        },
        twitter: {
            card: "summary_large_image",
            title: siteName,
            images: [imageUrl],
        },
        icons: {
            icon: imageUrl,
        },
    };
}

export default function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {
    return (
        <html lang={params.locale}>
            <head>
                <link rel="shortcut icon" href="/favicon.ico" />
            </head>
            <body className={alexandria.variable}>
                <I18nProvider>
                    <Header />
                    {children}
                    <Footer />
                </I18nProvider>
            </body>
        </html>
    );
}
