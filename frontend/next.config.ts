import type { NextConfig } from "next";

const BACKEND_URL = process.env.BACKEND_URL;
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const SOCKET_PATH = process.env.NEXT_PUBLIC_SOCKET_PATH;

const nextConfig: NextConfig = {
    // 1. Tối ưu hóa trình biên dịch của Next.js (SWC Compiler)
    compiler: {
        // Tự động xóa bỏ các lệnh console.log khi build, giữ lại console.error và console.warn
        removeConsole:
            process.env.NODE_ENV === "production"
                ? { exclude: ["error", "warn"] }
                : false,
    },
    experimental: {
        // Tối ưu hóa dung lượng Bundle từ các thư viện UI
        optimizePackageImports: [
            "@mui/material",
            "@mui/icons-material",
            "antd",
            "lucide-react",
        ],
    },
    async rewrites() {
        // Thiết lập để Frontend chỉ cần gọi tới /api/, thì mặc định sẽ được trỏ ngầm sang Backend cổng đã thiết lập
        return [
            {
                source: `${API_BASE_URL}/:path*`,
                destination: `${BACKEND_URL}${API_BASE_URL}/:path*`,
            },
            {
                source: `${SOCKET_PATH}/:path*`,
                destination: `${BACKEND_URL}${SOCKET_PATH}/:path*`,
            },
        ];
    },
    reactStrictMode: true, // Sử dụng Strict Mode
    images: {
        // Tối ưu hóa hình ảnh
        formats: ["image/webp", "image/avif"], // Giới hạn các định dạng ảnh chất lượng cao, dung lượng siêu nhẹ (Tự convert ảnh sang webp/avif)
        minimumCacheTTL: 86400, // 86400 giây = 24 giờ (1 ngày). Tăng thời gian cache ảnh trên trình duyệt/CDN để tải nhanh hơn ở lần sau
        remotePatterns: [
            // Khai báo domain/server bên ngoài (AWS S3, Cloudinary...) cho ảnh để tối ưu <Image>
            // { protocol: "https", hostname: "your-cdn-domain.com" },
        ],
    },
    poweredByHeader: false, // Tắt header X-Powered-By để bảo mật (Không cho hacker biết web dùng Next.js)
    trailingSlash: false, // Chuẩn hóa URL cho SEO (Ép bỏ dấu gạch chéo ở cuối URL để tránh trùng lặp nội dung)
};

export default nextConfig;
