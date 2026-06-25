"use client";
import { Dropdown, type MenuProps } from "antd";
import { MAPPING } from "@/shared/constants/mapping";
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

const items: NonNullable<MenuProps["items"]> = [
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

export default function SwitchModeButton({
    sortMode,
    setSortMode,
    viewMode,
    setViewMode,
}) {
    const [isClickSort, setIsClickSort] = useState(false);

    return (
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
                    <span className="font-bold">Sắp xếp:</span>
                    <button className="py-1 px-3 flex gap-1 items-center border-2 rounded-sm">
                        <span className="text-sm font-semibold">
                            {MAPPING?.SORT_MODE[sortMode]}
                        </span>
                        {isClickSort ? <ChevronUp /> : <ChevronDown />}
                    </button>
                </div>
            </Dropdown>
            <button
                className="p-1.5 aspect-square border-2 rounded-sm"
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
    );
}
