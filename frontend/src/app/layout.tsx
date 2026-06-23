import "./globals.css";
import AppProvider from "@/shared/providers/App.provider";
import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import { ReactNode } from "react";
import CookieBanner from "@/features/legal/components/CookieBanner";
import { headers, cookies } from 'next/headers';

export const metadata: Metadata = {
    title: "Affiliate Product Catalog",
    description: "Affiliate Product Catalog",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    const headersList = await headers();
    const userCountry = headersList.get("x-user-country") || "US";
    const cookieStore = await cookies();
    const hasConsent = cookieStore.get('cookie-consent')?.value === 'granted';

    return (
        <html lang="en" className="w-full h-full antialiased">
            <head>
                {!hasConsent && (
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('consent', 'default', {
                                    'analytics_storage': 'denied',
                                    'ad_storage': 'denied'
                                });
                            `,
                        }}
                    />
                )}
            </head>

            <body className="w-full h-full flex flex-col overflow-hidden">
                <NextTopLoader
                    color="#FF6B35"
                    height={2}
                    showSpinner={false}
                    speed={300}
                    crawlSpeed={100}
                />
                <AppProvider>{children}</AppProvider>
                <CookieBanner country={userCountry} />
            </body>
        </html>
    );
}
