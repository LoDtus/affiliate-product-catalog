"use client";
import {
    COOKIE_TEXTS,
    EU_COUNTRIES,
} from "@/features/legal/constants/cookie.constants";
import { useState, useEffect } from "react";

export default function CookieBanner({ country }: { country: string }) {
    const [showBanner, setShowBanner] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    // Trạng thái cho từng loại cookie (Mặc định FALSE cho EU)
    const [analyticsAllowed, setAnalyticsAllowed] = useState(false);
    const [marketingAllowed, setMarketingAllowed] = useState(false);

    const countryKey = country.toLowerCase();
    const isEU = EU_COUNTRIES.has(countryKey);
    const content = isEU ? COOKIE_TEXTS.eu : COOKIE_TEXTS[countryKey] || COOKIE_TEXTS.default;

    useEffect(() => {
        const timer = setTimeout(() => {
            setMounted(true);
            const consent = localStorage.getItem("cookie-consent");
            
            if (!consent) {
                setShowBanner(true);
            } else {
                // Nếu đã chọn từ trước, đọc tùy chỉnh chi tiết ra để kích hoạt
                const savedAnalytics = localStorage.getItem("cookie-analytics") === "true";
                const savedMarketing = localStorage.getItem("cookie-marketing") === "true";
                setAnalyticsAllowed(savedAnalytics);
                setMarketingAllowed(savedMarketing);
                initTracking(savedAnalytics, savedMarketing);
            }
        }, 50);

        return () => clearTimeout(timer);
    }, []);

    // Hàm kích hoạt tracking dựa trên lựa chọn thực tế của User
    const initTracking = (analytics: boolean, marketing: boolean) => {
        if (typeof window !== "undefined" && (window as any).gtag) {
            (window as any).gtag("consent", "update", {
                analytics_storage: analytics ? "granted" : "denied",
                ad_storage: marketing ? "granted" : "denied",
            });
        }
    };

    // Khi chọn Đồng ý tất cả (Accept All)
    const handleAcceptAll = () => {
        saveConsent(true, true);
    };

    // Khi chọn Từ chối tất cả (Reject All)
    const handleRejectAll = () => {
        saveConsent(false, false);
    };

    // Khi tự chỉnh sửa và bấm Lưu (Save Preferences)
    const handleSaveCustom = () => {
        saveConsent(analyticsAllowed, marketingAllowed);
    };

    // Hàm trung gian đóng gói dữ liệu để lưu vào LocalStorage và Cookie
    const saveConsent = (analytics: boolean, marketing: boolean) => {
        localStorage.setItem("cookie-consent", "custom");
        localStorage.setItem("cookie-analytics", String(analytics));
        localStorage.setItem("cookie-marketing", String(marketing));

        // Bắn trạng thái tổng hợp lên Cookie cho Server-side nhận biết
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

            {/* 🌟 VÙNG SETTINGS CHI TIẾT (Chỉ hiển thị khi bấm Manage) */}
            {isSettingsOpen && content.categories && (
                <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800 space-y-4 max-h-60 overflow-y-auto pr-1">
                    {/* Hạng mục 1: Bắt buộc */}
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <h4 className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">{content.categories.necessary.title}</h4>
                            <p className="text-[11px] text-zinc-500">{content.categories.necessary.desc}</p>
                        </div>
                        <input type="checkbox" checked disabled className="mt-1 h-4 w-4 accent-[#FF6B35] cursor-not-allowed" />
                    </div>

                    {/* Hạng mục 2: Phân tích (Google Analytics) */}
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <h4 className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">{content.categories.analytics.title}</h4>
                            <p className="text-[11px] text-zinc-500">{content.categories.analytics.desc}</p>
                        </div>
                        <input 
                            type="checkbox" 
                            checked={analyticsAllowed} 
                            onChange={(e) => setAnalyticsAllowed(e.target.checked)}
                            className="mt-1 h-4 w-4 accent-[#FF6B35] cursor-pointer" 
                        />
                    </div>

                    {/* Hạng mục 3: Affiliate Links */}
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <h4 className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">{content.categories.marketing.title}</h4>
                            <p className="text-[11px] text-zinc-500">{content.categories.marketing.desc}</p>
                        </div>
                        <input 
                            type="checkbox" 
                            checked={marketingAllowed} 
                            onChange={(e) => setMarketingAllowed(e.target.checked)}
                            className="mt-1 h-4 w-4 accent-[#FF6B35] cursor-pointer" 
                        />
                    </div>
                </div>
            )}

            {/* 🌟 HỆ THỐNG NÚT ĐIỀU KHIỂN ĐỘNG */}
            <div className="mt-4 pt-2 flex flex-wrap gap-2 justify-between items-center border-t border-transparent">
                {content.manage && !isSettingsOpen && (
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