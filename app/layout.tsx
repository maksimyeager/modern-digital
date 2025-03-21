import type { Metadata } from "next";
import { Alexandria } from "next/font/google";
import { Header, Footer } from "@/components/shared";
import { cn } from "@/lib/utils";
import "./globals.css";
import "./../scss/app.scss";
import I18nProvider from "@/components/providers/i18n-provider";

const alexandria = Alexandria({
    subsets: ["latin"],
    variable: "--font-alexandria",
    weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    title: "Modern Digital",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="shortcut icon" href="./logo.png" />
            </head>
            <body className={cn("", alexandria.variable)}>
                <I18nProvider>
                    <Header />
                    {children}
                    <Footer />
                </I18nProvider>
            </body>
        </html>
    );
}
