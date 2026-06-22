import { NextResponse, type NextRequest } from "next/server";

const AVAILABLE_COUNTRIES = new Set([
    "us", // United States
    "ca", // Canada
    "gb", // United Kingdom
    "de", // Germany
    "se", // Sweden
    "no", // Norway
    "nl", // Netherlands
    "fr", // France
    "be", // Belgium
    "es", // Spain
    "pt", // Portugal
    "jp", // Japan
    "kr", // South Korea
    "vn", // Vietnam
    "au", // Australia
    "nz", // New Zealand
    "ae", // United Arab Emirates
    "sa", // Saudi Arabia
]);

export function proxy(request: NextRequest) {
    const url = request.nextUrl.clone();
    const pathname = url.pathname; // Ví dụ: "/" hoặc "/vn" hoặc "/vn/products"

    // 🌟 1. THẦN CHÚ BẢO VỆ SEO: Nếu là Bot, cho qua thẳng để cào dữ liệu tự do
    const userAgent = request.headers.get("user-agent") || "";
    const lowerUA = userAgent.toLowerCase();
    const isBot =
        lowerUA.includes("googlebot") ||
        lowerUA.includes("bingbot") ||
        lowerUA.includes("baiduspider") ||
        lowerUA.includes("yandexbot");

    if (isBot) {
        return NextResponse.next();
    }

    // 🌟 2. LẤY QUỐC GIA ƯU TIÊN: Cookie cũ -> Header Cloudflare -> Mặc định "en"
    const savedCountryCookie = request.cookies.get("user-country")?.value;
    const cfCountry = request.headers.get("cf-ipcountry") || "";
    const detectedCountry =
        savedCountryCookie ||
        (AVAILABLE_COUNTRIES.has(cfCountry.toLowerCase())
            ? cfCountry.toLowerCase()
            : "en");

    // 🌟 TRƯỜNG HỢP A: Người dùng vào trang chủ gốc "/"
    if (pathname === "/") {
        url.pathname = `/${detectedCountry}/products`;
        return NextResponse.redirect(url);
    }

    // 🌟 TRƯỜNG HỢP B: Người dùng cố tình gõ "/[country]" (Ví dụ: "/vn", "/us")
    // Tách đường dẫn ra thành các phần tử dựa trên dấu gạch chéo
    const segments = pathname.split("/").filter(Boolean); // Ví dụ: "/vn" -> ["vn"]

    if (segments.length === 1) {
        const potentialCountry = segments[0].toLowerCase();

        // Kiểm tra xem chữ họ gõ có phải là một quốc gia hợp lệ trong danh sách không
        if (AVAILABLE_COUNTRIES.has(potentialCountry)) {
            // Hợp lệ: Điều hướng thẳng tới /[country]/products
            url.pathname = `/${potentialCountry}/products`;
            return NextResponse.redirect(url);
        } else if (potentialCountry === "en") {
            // Nếu họ gõ /en thì về /en/products
            url.pathname = "/en/products";
            return NextResponse.redirect(url);
        }
        // Nếu họ gõ một chữ bất kỳ không thuộc quốc gia hợp lệ (ví dụ: /about, /contact)
        // thì cho qua thẳng, không can thiệp
    }

    // Đối với các tuyến đường hợp lệ khác (Ví dụ: /vn/products), tự động cập nhật/gia hạn Cookie quốc gia cho người dùng
    const response = NextResponse.next();
    response.headers.set("x-user-country", detectedCountry);
    if (!savedCountryCookie) {
        response.cookies.set("user-country", detectedCountry, {
            maxAge: 365 * 24 * 60 * 60, // 1 năm
            path: "/",
            httpOnly: false,
            secure: process.env.NODE_ENV === "production",
        });
    }
    return response;
}

// Cấu hình matcher để quét qua toàn bộ các route
export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
