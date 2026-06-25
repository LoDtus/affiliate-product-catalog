"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux"; // Dùng để kết nối với preference slice của bạn
import { SearchX, ShieldAlert, Lock, ServerCrash, AlertTriangle, Wrench } from "lucide-react";
import { getDictionary } from "@/infrastructure/i18n/get-dictionary";
import type { ErrorType } from "@/features/error/error.types";

const ERROR_ICONS: Record<ErrorType, typeof Lock> = {
    notFound: SearchX,
    forbidden: ShieldAlert,
    rbac: Lock,
    serverError: ServerCrash,
    generic: AlertTriangle,
    maintenance: Wrench,
};

interface ErrorTemplate {
    code: string | null;
    title: string;
    description: string[];
    showHomeButton: boolean;
    homeLabel: string;
    showRetry?: boolean;
}

interface ErrorViewProps {
    type: ErrorType;
    onRetry?: () => void;
    initialContent: any; // Nhận bản dịch mồi từ Server gửi xuống
}

export default function ErrorView({ type, onRetry, initialContent }: ErrorViewProps) {
    // 1. Lấy trạng thái quốc gia chuẩn đang được lưu trong Redux Store của bạn
    const currentCountry = useSelector((state: any) => state.preference.country);
    
    // 2. Tạo state lưu trữ content dịch
    const [content, setContent] = useState(initialContent);

    // 3. Nếu quốc gia trong Redux khác với quốc gia Server phán đoán, tiến hành tải lại file JSON ở Client
    useEffect(() => {
        let isMounted = true;
        
        async function loadClientTranslation() {
            try {
                // Hàm getDictionary chạy mượt mà ở cả Server lẫn Client nhờ cấu hình dynamic import
                const dict = await getDictionary(currentCountry, "error");
                if (isMounted && dict?.ErrorView) {
                    setContent(dict.ErrorView);
                }
            } catch {
                // Nếu lỗi, giữ nguyên initialContent từ Server
            }
        }

        if (currentCountry) {
            loadClientTranslation();
        }

        return () => { isMounted = false; };
    }, [currentCountry]);

    const data: ErrorTemplate = content?.templates?.[type];
    const Icon = ERROR_ICONS[type] || AlertTriangle;

    if (!data) return <div className="p-10 text-center">Loading error message...</div>;

    return (
        <div className="flex-1 flex flex-col justify-center items-center text-center px-6 py-12 max-w-xl mx-auto min-h-[60vh]">
            <div className="p-4 bg-zinc-100 dark:bg-zinc-800 rounded-2xl mb-6">
                <Icon className="w-16 h-16 text-[#FF6B35] stroke-[1.5]" />
            </div>

            {data.code && (
                <span className="mb-2 font-black tracking-tight text-5xl text-zinc-400">
                    {data.code}
                </span>
            )}

            <h1 className="mb-3 font-bold text-2xl md:text-3xl text-zinc-900 dark:text-zinc-100 tracking-tight">
                {data.title}
            </h1>

            <p className="flex flex-col items-center text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-md">
                {data.description?.map((line: string, idx: number) => (
                    <span key={idx} className="block">
                        {line}
                    </span>
                ))}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
                {data.showRetry && onRetry && (
                    <button
                        type="button"
                        onClick={onRetry}
                        className="w-full sm:w-auto py-2 px-6 rounded-xl border border-zinc-200 text-zinc-700 dark:text-zinc-300 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all"
                    >
                        {content.retry || "Try Again"}
                    </button>
                )}
                {data.showHomeButton && (
                    <Link
                        href="/"
                        className="w-full sm:w-auto py-2 px-8 rounded-xl bg-[#FF6B35] text-white text-sm font-medium shadow-sm hover:opacity-90 transition-all active:scale-[0.98]"
                    >
                        {data.homeLabel}
                    </Link>
                )}
            </div>
        </div>
    );
}