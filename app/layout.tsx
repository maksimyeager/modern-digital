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
    return {
        title: "Modern Digital",
        lang: params.locale,
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
                <link rel="shortcut icon" href="/logo.png" />
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
