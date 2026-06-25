"use client";
import { EU_COUNTRIES } from "@/features/legal/constants/cookie.constants";
import { useState, useEffect } from "react";

interface CookieBannerProps {
    country: string;
    content: any; // Nhận object dữ liệu dịch tương ứng từ file JSON
}

export default function CookieBanner({ country, content }: CookieBannerProps) {
    const [showBanner, setShowBanner] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [analyticsAllowed, setAnalyticsAllowed] = useState(false);
    const [marketingAllowed, setMarketingAllowed] = useState(false);

    // Kiểm tra xem có thuộc khối EU không để cấu hình bật/tắt mặc định theo luật GDPR
    const isEU = EU_COUNTRIES.has(country.toLowerCase());

    const initTracking = (analytics: boolean, marketing: boolean) => {
        if (typeof window !== "undefined" && (window as any).gtag) {
            (window as any).gtag("consent", "update", {
                analytics_storage: analytics ? "granted" : "denied",
                ad_storage: marketing ? "granted" : "denied",
            });
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setMounted(true);
            const consent = localStorage.getItem("cookie-consent");

            if (!consent) {
                // Nếu thuộc EU: Mặc định không tự ý bật (Luật GDPR yêu cầu Opt-in công khai)
                // Nếu ngoài EU (như US/VN): Có thể mặc định bật trước (Opt-out)
                setAnalyticsAllowed(!isEU);
                setMarketingAllowed(!isEU);
                setShowBanner(true);
            } else {
                const savedAnalytics =
                    localStorage.getItem("cookie-analytics") === "true";
                const savedMarketing =
                    localStorage.getItem("cookie-marketing") === "true";
                setAnalyticsAllowed(savedAnalytics);
                setMarketingAllowed(savedMarketing);
                initTracking(savedAnalytics, savedMarketing);
            }
        }, 50);

        return () => clearTimeout(timer);
    }, [isEU]);

    const handleAcceptAll = () => {
        saveConsent(true, true);
    };

    const handleRejectAll = () => {
        saveConsent(false, false);
    };

    const handleSaveCustom = () => {
        saveConsent(analyticsAllowed, marketingAllowed);
    };

    const saveConsent = (analytics: boolean, marketing: boolean) => {
        localStorage.setItem("cookie-consent", "custom");
        localStorage.setItem("cookie-analytics", String(analytics));
        localStorage.setItem("cookie-marketing", String(marketing));

        const cookieValue = `analytics:${analytics}|marketing:${marketing}`;
        document.cookie = `cookie-consent=${cookieValue}; max-age=31536000; path=/; SameSite=Lax`;

        setShowBanner(false);
        initTracking(analytics, marketing);
    };

    if (!mounted || !showBanner) return null;

    return (
        <div className="fixed bottom-4 right-4 max-w-md w-full p-6 bg-white dark:bg-zinc-900 shadow-2xl rounded-2xl border border-zinc-200 dark:border-zinc-800 z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
            <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                {content.title}
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {content.description}
            </p>

            {isSettingsOpen && (
                <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800 space-y-4 max-h-60 overflow-y-auto pr-1">
                    {/* Hạng mục 1: Bắt buộc hệ thống */}
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <h4 className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                                {content.necessary_title}
                            </h4>
                            <p className="text-[11px] text-zinc-500">
                                {content.necessary_desc}
                            </p>
                        </div>
                        <input
                            type="checkbox"
                            checked
                            disabled
                            className="mt-1 h-4 w-4 accent-[#FF6B35] cursor-not-allowed"
                        />
                    </div>

                    {/* Hạng mục 2: Google Analytics */}
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <h4 className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                                {content.analytics_title}
                            </h4>
                            <p className="text-[11px] text-zinc-500">
                                {content.analytics_desc}
                            </p>
                        </div>
                        <input
                            type="checkbox"
                            checked={analyticsAllowed}
                            onChange={(e) =>
                                setAnalyticsAllowed(e.target.checked)
                            }
                            className="mt-1 h-4 w-4 accent-[#FF6B35] cursor-pointer"
                        />
                    </div>

                    {/* Hạng mục 3: Affiliate Links */}
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <h4 className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                                {content.marketing_title}
                            </h4>
                            <p className="text-[11px] text-zinc-500">
                                {content.marketing_desc}
                            </p>
                        </div>
                        <input
                            type="checkbox"
                            checked={marketingAllowed}
                            onChange={(e) =>
                                setMarketingAllowed(e.target.checked)
                            }
                            className="mt-1 h-4 w-4 accent-[#FF6B35] cursor-pointer"
                        />
                    </div>
                </div>
            )}

            {/* 🌟 HỆ THỐNG NÚT ĐIỀU KHIỂN */}
            <div className="mt-4 pt-2 flex flex-wrap gap-2 justify-between items-center border-t border-transparent">
                {!isSettingsOpen && content.manage && (
                    <button
                        onClick={() => setIsSettingsOpen(true)}
                        className="text-xs font-medium text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 underline transition"
                    >
                        {content.manage}
                    </button>
                )}

                <div className="flex gap-2 ml-auto w-full sm:w-auto justify-end">
                    {isSettingsOpen ? (
                        <button
                            onClick={handleSaveCustom}
                            className="w-full sm:w-auto px-3 py-1.5 text-xs font-medium text-white bg-[#FF6B35] rounded-lg hover:opacity-90 transition"
                        >
                            {content.save}
                        </button>
                    ) : (
                        <>
                            <button
                                onClick={handleRejectAll}
                                className="px-3 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition"
                            >
                                {content.reject}
                            </button>
                            <button
                                onClick={handleAcceptAll}
                                className="px-3 py-1.5 text-xs font-medium text-white bg-[#FF6B35] rounded-lg hover:opacity-90 transition"
                            >
                                {content.accept}
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
