"use client";

import GridView from "@/features/product/components/GridView";
import Pagination from "@/shared/components/ui/Pagination";
import {
    ArrowDown01,
    ArrowDown10,
    ArrowUpDown,
    ChevronDown,
    ChevronUp,
    CircleDollarSign,
    Flame,
    LayoutGrid,
    ListOrdered,
    Sparkles,
} from "lucide-react";
import { useState } from "react";
import { Dropdown } from "antd";
import type { MenuProps } from "antd";
import { MAPPING } from "@/shared/constants/mapping";

const items: MenuProps["items"] = [
    {
        key: "default",
        label: (
            <button className="flex gap-2 items-center">
                <ArrowUpDown size={20} />
                <span className="font-semibold">Mặc định</span>
            </button>
        ),
    },
    {
        key: "newest",
        label: (
            <button className="flex gap-2 items-center">
                <Sparkles />
                <span className="font-semibold">Mới nhất</span>
            </button>
        ),
    },
    {
        key: "best-selling",
        label: (
            <button className="flex gap-2 items-center">
                <CircleDollarSign />
                <span className="font-semibold">Bán chạy nhất</span>
            </button>
        ),
    },
    {
        key: "trending",
        label: (
            <button className="flex gap-2 items-center">
                <Flame />
                <span className="font-semibold">Nổi bật</span>
            </button>
        ),
    },
    {
        key: "price-asc",
        label: (
            <button className="flex gap-2 items-center">
                <ArrowDown01 />
                <span className="font-semibold">Giá từ thấp đến cao</span>
            </button>
        ),
    },
    {
        key: "price-desc",
        label: (
            <button className="flex gap-2 items-center">
                <ArrowDown10 />
                <span className="font-semibold">Giá từ cao đến thấp</span>
            </button>
        ),
    },
];

export default function ProductDisplay() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 30; // Giả định tổng số trang lấy từ API về
    const [isClickSort, setIsClickSort] = useState(false);
    const [sortMode, setSortMode] = useState("default");
    const [viewMode, setViewMode] = useState("grid");

    // 1. Định nghĩa hàm xử lý khi số trang thay đổi
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        console.log("Đang lấy dữ liệu cho trang: ", pageNumber);
    };

    return (
        <div className="p-3 flex-1">
            <div className="w-full flex justify-end">
                <div className="flex gap-1 items-center">
                    <Dropdown
                        menu={{
                            items,
                            onClick: (e) => setSortMode(e.key),
                            selectedKeys: [sortMode],
                        }}
                        placement="bottomRight"
                        trigger={["click"]}
                        className="shrink-0"
                    >
                        <div
                            className="flex gap-2 items-center cursor-pointer"
                            onClick={() => setIsClickSort(!isClickSort)}
                        >
                            <span className="font-semibold">Sắp xếp:</span>
                            <button className="py-1 px-3 flex gap-1 items-center border border-gray-line rounded-sm">
                                <span className="text-sm">
                                    {MAPPING?.SORT_MODE[sortMode]}
                                </span>
                                {isClickSort ? <ChevronUp /> : <ChevronDown />}
                            </button>
                        </div>
                    </Dropdown>
                    <button
                        className="p-1.5 aspect-square border border-gray-line rounded-sm"
                        onClick={() =>
                            setViewMode(viewMode === "grid" ? "list" : "grid")
                        }
                    >
                        {viewMode === "grid" ? (
                            <LayoutGrid size={20} />
                        ) : (
                            <ListOrdered size={20} />
                        )}
                    </button>
                </div>
            </div>

            <GridView />

            <div className="w-full flex justify-end">
                <Pagination
                    mode="long"
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
}
