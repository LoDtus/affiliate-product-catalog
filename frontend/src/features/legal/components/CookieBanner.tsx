"use client";
import {
    COOKIE_TEXTS,
    EU_COUNTRIES,
} from "@/features/legal/constants/cookie.constants";
import { useState, useEffect } from "react";

export default function CookieBanner({ country }: { country: string }) {
    const [showBanner, setShowBanner] = useState(false);
    const [mounted, setMounted] = useState(false);

    const countryKey = country.toLowerCase();
    const content = EU_COUNTRIES.has(countryKey)
        ? COOKIE_TEXTS.eu
        : COOKIE_TEXTS[countryKey] || COOKIE_TEXTS.default;

    const initTracking = () => {
        if (typeof window !== "undefined" && (window as any).gtag) {
            (window as any).gtag("consent", "update", {
                analytics_storage: "granted",
                ad_storage: "granted",
            });
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setMounted(true);

            const consent = localStorage.getItem("cookie-consent");
            if (!consent) {
                setShowBanner(true);
            } else if (consent === "granted") {
                initTracking();
            }
        }, 50);

        return () => clearTimeout(timer);
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "granted");
        document.cookie =
            "cookie-consent=granted; max-age=31536000; path=/; SameSite=Lax";
        setShowBanner(false);
        initTracking();
    };

    const handleReject = () => {
        localStorage.setItem("cookie-consent", "denied");
        document.cookie = "cookie-consent=denied; max-age=31536000; path=/; SameSite=Lax";
        setShowBanner(false);
    };

    if (!mounted || !showBanner) return null;

    return (
        <div className="fixed bottom-4 left-4 max-w-md p-6 bg-white dark:bg-zinc-900 shadow-2xl rounded-2xl border border-zinc-200 dark:border-zinc-800 z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
            <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                {content.title}
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {content.description}
            </p>
            <div className="mt-4 flex gap-2 justify-end">
                <button
                    onClick={handleReject}
                    className="px-3 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition"
                >
                    {content.reject}
                </button>
                <button
                    onClick={handleAccept}
                    className="px-3 py-1.5 text-xs font-medium text-white bg-orange-sunset rounded-lg hover:opacity-90 transition"
                >
                    {content.accept}
                </button>
            </div>
        </div>
    );
}
