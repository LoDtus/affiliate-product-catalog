"use client";

import { useState } from "react";

interface CategoryPopupProps {
    hoveredCategory: any;
    closePopup: () => void;
}

export default function CategoryPopup({
    hoveredCategory,
    closePopup,
}: CategoryPopupProps) {
    const subCategories = hoveredCategory?.children || [];
    const [activeSubId, setActiveSubId] = useState<string | null>(null);
    const currentActiveId = activeSubId || subCategories[0]?._id;

    const currentSubCategory = subCategories.find(
        (sub: any) => sub._id === currentActiveId,
    );

    const level3Categories = currentSubCategory?.children || [];

    return (
        <div className="p-5 text-black bg-white rounded-lg shadow-lg border border-gray-line">
            <span className="text-xl font-semibold block mb-3">
                {hoveredCategory?.title}
            </span>

            <div className="mt-2 flex min-w-100">
                <ul className="shrink-0 min-w-45">
                    {subCategories.length > 0 ? (
                        subCategories.map(
                            (menu2nd: any, menu2ndIndex: number) => {
                                const isCurrentHovered =
                                    currentActiveId === menu2nd._id;

                                return (
                                    <li
                                        key={`level2-${menu2nd._id}`}
                                        className={`py-1 px-4 border rounded-sm font-semibold
                                                is-button text-sm
                                                ${menu2ndIndex > 0 ? "mt-1" : ""}
                                                ${isCurrentHovered ? "bg-gray-input border-blue-500 text-blue-600" : "hover:bg-gray-input"}
                                            `}
                                        onMouseEnter={() =>
                                            setActiveSubId(menu2nd._id)
                                        }
                                        onClick={closePopup}
                                    >
                                        {menu2nd.title}
                                    </li>
                                );
                            },
                        )
                    ) : (
                        <li className="text-gray-400 py-1 px-4 text-xs italic">
                            Không có danh mục con
                        </li>
                    )}
                </ul>

                <ul className="w-full ml-4 pl-4 border-l border-gray-line min-w-[180px]">
                    {level3Categories.length > 0 ? (
                        level3Categories.map(
                            (menu3rd: any, menu3rdIndex: number) => (
                                <li
                                    key={`level3-${menu3rd._id}`}
                                    className={`py-1 px-4 border rounded-sm font-normal text-sm
                                    is-button hover:bg-gray-input hover:text-blue-500
                                    ${menu3rdIndex > 0 ? "mt-1" : ""}
                                `}
                                    onClick={closePopup}
                                    // Bạn có thể thêm thẻ <Link> bọc ở đây để chuyển hướng khi bấm cấp 3 nhé!
                                >
                                    {menu3rd.title}
                                </li>
                            ),
                        )
                    ) : (
                        <li className="text-gray-400 py-1 px-4 text-xs italic">
                            Không có danh mục cấp 3
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}
