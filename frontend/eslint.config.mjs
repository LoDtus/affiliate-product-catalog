import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import importPlugin from "eslint-plugin-import";

const eslintConfig = defineConfig([
    // Kế thừa các cấu hình chuẩn của Next.js (Bao gồm Core Web Vitals cho SEO)
    ...nextVitals,
    ...nextTs,

    // Định nghĩa các quy tắc cho dự án
    {
        plugins: {
            "import": importPlugin,
        },
        settings: {
            "import/resolver": {
                typescript: {
                    alwaysTryTypes: true,
                },
                node: true
            },
        },
        rules: {
            // --- Cấu hình quản lý Types & Biến (Theo yêu cầu) ---
            "@typescript-eslint/no-explicit-any": "warn", // Cảnh báo khi dùng any
            "@typescript-eslint/no-unused-vars": [
                "warn", // Biến chưa dùng chỉ cảnh báo
                {
                    "argsIgnorePattern": "^_", // Nếu cố tình viết, ta thêm dấu _ phía trước thì sẽ không bị báo lỗi
                    "varsIgnorePattern": "^_"
                }
            ],

            // --- Tối ưu hóa SEO & Hiệu năng Core Web Vitals ---
            "@next/next/no-html-link-for-pages": "error", // Bắt buộc dùng <Link> thay vì <a> để tối ưu SEO nội bộ
            "react/jsx-no-target-blank": "error", // Bắt buộc thêm rel="noopener noreferrer" khi dùng target="_blank"
            "@next/next/no-img-element": "warn", // Nhắc nhở sử dụng <Image> của Next.js để tối ưu hóa ảnh
            "jsx-a11y/alt-text": "warn", // Nhắc nhở bắt buộc phải có thuộc tính `alt` cho ảnh (Robot SEO rất thích)

            // --- Quản lý chất lượng mã nguồn khi Scale Team ---
            "no-console": ["warn", { allow: ["warn", "error"] }], // Cảnh báo khi sử dụng console.log, chỉ cho phép warn/error
            "eqeqeq": ["error", "always"], // Bắt buộc dùng === thay vì == để tránh lỗi ép kiểu
            "no-duplicate-imports": "error", // Không cho phép import trùng lặp thư viện trong cùng một file
            "react/react-in-jsx-scope": "off", // Next.js + React 19 không cần import React nữa
            "react/self-closing-comp": "error", // Tự động bắt đóng thẻ rút gọn (<Component />)
            "no-var": "error", // Không cho phép dùng var
            "prefer-template": "warn", // Ưu tiên dùng template string ${ }

            // --- Đảm bảo an toàn logic cho React Hooks ---
            "react-hooks/rules-of-hooks": "error", // Bắt buộc tuân thủ quy tắc viết Hooks
            "react-hooks/exhaustive-deps": "warn", // Cảnh báo khi thiếu dependency trong useEffect/useMemo
        },
    },

    // Cấu hình bỏ qua các thư mục hệ thống / build / tĩnh
    globalIgnores([
        ".next/**",
        "out/**",
        "build/**",
        "dist/**",
        "node_modules/**",
        "next-env.d.ts",
        "public/**"
    ]),
]);

export default eslintConfig;