"use client";
import "../shared.css";
import SearchBar from "@/features/search/components/SearchBar";
import { ChevronDown, Newspaper, Scale, ShoppingBag } from "lucide-react";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import * as Flags from "country-flag-icons/react/3x2";
import Link from "next/link";
import { useRouter } from "nextjs-toploader/app";

const COUNTRIES = [
    // { code: "us", name: "United States" },
    // { code: "ca", name: "Canada" },
    // { code: "gb", name: "United Kingdom" },
    // { code: "de", name: "Germany" },
    // { code: "se", name: "Sweden" },
    // { code: "no", name: "Norway" },
    // { code: "nl", name: "Netherlands" },
    // { code: "fr", name: "France" },
    // { code: "be", name: "Belgium" },
    // { code: "es", name: "Spain" },
    // { code: "pt", name: "Portugal" },
    // { code: "jp", name: "Japan" },
    // { code: "kr", name: "South Korea" },
    { code: "vn", name: "Vietnam" },
    { code: "au", name: "Australia" },
    { code: "nz", name: "New Zealand" },
    { code: "ae", name: "United Arab Emirates" },
    { code: "sa", name: "Saudi Arabia" },
];

export default function Header() {
    const params = useParams();
    const pathname = usePathname();
    const router = useRouter();
    const [openNationMenu, setOpenNationMenu] = useState(false);

    // Lấy country hiện tại từ URL (ví dụ: "vi" hoặc "en")
    const currentCountryRoute = (params?.country as string) || "vi";

    // Tìm quốc gia hiện tại để hiển thị cờ trên nút bấm
    const currentCountry =
        COUNTRIES.find((c) => c.code === currentCountryRoute) || COUNTRIES[0];

    // Khởi tạo Component Cờ động dựa trên Code (VN, US...)
    const CurrentFlag =
        Flags[currentCountry.code.toUpperCase() as keyof typeof Flags];

    const handleCountryChange = (targetRoute: string) => {
        setOpenNationMenu(false);
        if (targetRoute === currentCountryRoute) return;

        // Thay đổi phần [country] trên URL hiện tại mà không mất các nhánh phía sau (products, search...)
        const newPathname = pathname.replace(
            `/${currentCountryRoute}`,
            `/${targetRoute}`,
        );
        router.push(newPathname);
    };

    return (
        <div className="w-full bg-blue-royal">
            <div className="max-w-960 w-full mx-auto px-3 py-2 flex gap-2 items-center text-white">
                <Link
                    href="/vi/products"
                    aria-label="Go to homepage"
                    className="flex-1 shrink-0"
                >
                    <h1 className="hidden lg:block text-2xl font-bold">Product Review Website</h1>
                    <h1 className="block lg:hidden text-2xl font-bold">APC</h1>
                </Link>

                <SearchBar />

                <div className="flex-1 pl-4 flex gap-4 justify-end">
                    <Link
                        href="/vi/cart"
                        title="Article"
                        className="relative p-2 rounded-full
                        duration-200 active:scale-98
                    "
                    >
                        <Newspaper />
                    </Link>
                    <Link
                        href="/vi/cart"
                        title="Cart"
                        className="relative p-2 rounded-full
                        duration-200 active:scale-98
                    "
                    >
                        <span className="absolute -top-1 -right-1 w-6 aspect-square pt-0.5 flex justify-center items-center rounded-full text-sm bg-red-rouge">
                            2
                        </span>
                        <Scale />
                    </Link>
                    <Link
                        href="/vi/cart"
                        title="Cart"
                        className="relative p-2 rounded-full
                        duration-200 active:scale-98
                    "
                    >
                        <span className="absolute -top-1 -right-1 w-6 aspect-square pt-0.5 flex justify-center items-center rounded-full text-sm bg-red-rouge">
                            22
                        </span>
                        <ShoppingBag />
                    </Link>
                    <div className="relative">
                        <button
                            onClick={() => setOpenNationMenu(!openNationMenu)}
                            className="h-full px-3 py-1.5 flex items-center gap-2 border rounded-md text-sm"
                        >
                            {/* Hiển thị cờ hiện tại */}
                            {CurrentFlag && (
                                <CurrentFlag className="w-8 min-h-full rounded-sm" />
                            )}
                            {/* <span className="shrink-0">{currentCountry.name}</span> */}
                            <span className="shrink-0 font-semibold">VN</span>
                            <ChevronDown
                                className={`w-4 h-4 transition-transform ${openNationMenu ? "rotate-180" : ""}`}
                            />
                        </button>

                        {/* Thay sang dùng của antd */}
                        {openNationMenu && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg py-1 z-50">
                                {COUNTRIES.map((country) => {
                                    const ItemFlag =
                                        Flags[
                                            country.code.toUpperCase() as keyof typeof Flags
                                        ];
                                    return (
                                        <button
                                            key={country.code.toUpperCase()}
                                            onClick={() =>
                                                handleCountryChange(
                                                    country.code,
                                                )
                                            }
                                            className={`w-full flex items-center gap-3 px-4 py-2 text-left text-sm hover:bg-gray-100 transition-colors ${
                                                country.code ===
                                                currentCountryRoute
                                                    ? "bg-blue-50 font-semibold text-blue-600"
                                                    : "text-gray-700"
                                            }`}
                                        >
                                            {ItemFlag && (
                                                <ItemFlag className="w-5 h-auto rounded-sm" />
                                            )}
                                            <span>{country.name}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
