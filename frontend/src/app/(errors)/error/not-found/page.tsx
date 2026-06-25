import ErrorView from "@/features/error/ErrorView";
import { getDictionary } from "@/infrastructure/i18n/get-dictionary";
import { headers } from "next/headers";

export default async function Page() {
    // 1. Đọc quốc gia dựa trên IP/Trình duyệt từ Header (Ví dụ: "vn", "us")
    const headersList = await headers();
    const fallbackCountry = (
        headersList.get("x-user-country") || "us"
    ).toLowerCase();

    // 2. Tải trước bản dịch lỗi từ Server làm dữ liệu mồi (initial data)
    const errorDict = await getDictionary(fallbackCountry, "error");
    const fallbackDict = await getDictionary("us", "error");

    // Lấy đúng phân vùng chữ của Component ErrorView
    const initialContent =
        errorDict?.ErrorView || fallbackDict?.ErrorView || {};

    return <ErrorView type="notFound" initialContent={initialContent} />;
}
