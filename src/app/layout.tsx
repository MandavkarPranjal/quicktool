import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import PlausibleProvider from "next-plausible";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "QuickTools - Simple tools for Devs",
    description: "Simple tools for developers to use without any sign-in. All Free. No BS.",
    icons: {
        icon: "/favicon.svg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <PlausibleProvider domain="quicklink-s.vercel.app" />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
