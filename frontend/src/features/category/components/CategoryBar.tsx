"use client";
import "../category.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Popover } from "antd";
import CategoryPopup from "@/features/category/components/CategoryPopup";
import { categoryApi } from "@/features/category/category.api";
import { CategoryItem } from "@/features/category/category.interface";

export default function CategoryBar() {
    const [categories, setCategories] = useState<CategoryItem[]>([]);
    const [hoveredCategory, setHoveredCategory] = useState<CategoryItem | null>(
        null,
    );
    const [loading, setLoading] = useState<boolean>(true);
    const [openPopoverId, setOpenPopoverId] = useState<string | null>(null);

    const selectCategory = (category: CategoryItem) => {
        setHoveredCategory(null);
        // chuyển hướng luôn
    };

    useEffect(() => {
        const startGetAllCategories = async () => {
            try {
                setLoading(true);
                const response = await categoryApi.getAll({
                    tree: true,
                    isActive: true,
                });
                if (response.success) {
                    setCategories(response.data);
                }
            } catch (err) {
                console.error("Error - category: ", err);
            } finally {
                setLoading(false);
            }
        };
        startGetAllCategories();
    }, []);

    if (loading) {
        // fix cố định tab khi mà data chưa được load
        return (
            <div className="max-w-960 w-full mx-auto flex items-center justify-center text-white text-sm py-2">
                Đang tải danh mục...
            </div>
        );
    }

    return (
        <div className="hidden lg:block w-full bg-blue-soft">
            <ul className="max-w-960 w-full mx-auto flex items-center text-white text-sm font-semibold">
                {categories?.map((category) => {
                    const isCurrentOpen = openPopoverId === category._id;
                    return (
                        <li
                            key={category._id}
                            className="flex justify-center"
                            style={{
                                flexBasis: `calc((100%) / ${categories?.length})`,
                            }}
                        >
                            <Popover
                                trigger="hover"
                                placement="bottom"
                                open={isCurrentOpen}
                                onOpenChange={(visible) => {
                                    if (visible) {
                                        setOpenPopoverId(category._id);
                                        setHoveredCategory(category);
                                    } else {
                                        setOpenPopoverId(null);
                                        setHoveredCategory(null);
                                    }
                                }}
                                content={
                                    <CategoryPopup
                                        hoveredCategory={hoveredCategory}
                                        // Truyền hàm hạ hàm đóng xuống popup nếu cần bấm đóng nhanh
                                        closePopup={() => {
                                            setOpenPopoverId(null);
                                            setHoveredCategory(null);
                                        }}
                                    />
                                }
                                className="w-full h-full"
                                id="categoryBar-popup"
                                mouseEnterDelay={0.1}
                                mouseLeaveDelay={0.1}
                                align={{ offset: [0, 0] }}
                            >
                                <Link
                                    href={`/vi/products/${category.slug}`}
                                    aria-label={category.title}
                                    title={category.title}
                                    className="w-full h-full py-1 text-center duration-500! active:scale-90! block"
                                    onClick={() => selectCategory(category)}
                                >
                                    {category.title}
                                </Link>
                            </Popover>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
