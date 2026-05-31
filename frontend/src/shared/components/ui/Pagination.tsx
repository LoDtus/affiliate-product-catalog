"use client";

import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    mode?: "long" | "short"; // Thêm prop để switch giữa 2 chế độ
}

export default function Pagination({
    currentPage,
    totalPages,
    onPageChange,
    mode = "long", // Mặc định là short nếu không truyền
}: PaginationProps) {
    if (totalPages <= 1) return null;

    // ==========================================
    // LOGIC 1: CHẾ ĐỘ SHORT (Giữ nguyên logic cũ)
    // ==========================================
    const getShortPages = () => {
        const pages: number[] = [];
        if (totalPages <= 4) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
            return pages;
        }
        if (currentPage <= 3) return [1, 2, 3, 4];
        if (currentPage >= totalPages - 2) {
            return [totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
        }
        return [currentPage - 1, currentPage, currentPage + 1];
    };

    // ==========================================
    // LOGIC 2: CHẾ ĐỘ LONG (Mới)
    // Return về mảng chứa cả số (number) và dấu ba chấm (string "...")
    // ==========================================
    const getLongPages = (): (number | string)[] => {
        // Trường hợp tổng số trang nhỏ hơn hoặc bằng 10 -> Hiển thị hết từ 1 đến totalPages
        if (totalPages <= 10) {
            const pages: number[] = [];
            for (let i = 1; i <= totalPages; i++) pages.push(i);
            return pages;
        }

        // Định nghĩa các vùng biên cố định (luôn hiển thị 2 trang đầu và 2 trang cuối)
        const startPages = [1, 2];
        const endPages = [totalPages - 1, totalPages];

        // Trường hợp ở các trang đầu (ví dụ: currentPage <= 5)
        if (currentPage <= 5) {
            // Hiển thị 6 phần tử đầu: 1 2 3 4 5 6
            return [1, 2, 3, 4, 5, 6, "...", ...endPages];
        }

        // Trường hợp ở các trang cuối (ví dụ: currentPage >= totalPages - 4)
        if (currentPage >= totalPages - 4) {
            // Hiển thị 6 phần tử cuối: (tổng - 5) đến tổng
            const lastSixPages: number[] = [];
            for (let i = totalPages - 5; i <= totalPages; i++) {
                lastSixPages.push(i);
            }
            return [...startPages, "...", ...lastSixPages];
        }

        // Trường hợp ở giữa: Hiện 2 đầu, dấu ..., 5 phần tử giữa (trang chọn nằm chính giữa), dấu ..., 2 cuối
        const middlePages = [
            currentPage - 2,
            currentPage - 1,
            currentPage,
            currentPage + 1,
            currentPage + 2
        ];

        return [...startPages, "...", ...middlePages, "...", ...endPages];
    };

    // ==========================================
    // RENDER CHO CHẾ ĐỘ SHORT
    // ==========================================
    if (mode === "short") {
        const visiblePages = getShortPages();
        const showPrevChevron = totalPages > 4 && currentPage > 3;
        const showNextChevron = totalPages > 4 && currentPage < totalPages - 2;

        return (
            <div className="flex items-center gap-1">
                {showPrevChevron && (
                    <button
                        onClick={() => onPageChange(1)}
                        className="w-10 aspect-square flex justify-center items-center border border-gray-line rounded-sm"
                    >
                        <ChevronsLeft />
                    </button>
                )}

                {visiblePages.map((page) => {
                    const isActive = page === currentPage;
                    return (
                        <button
                            key={page}
                            disabled={isActive}
                            onClick={() => onPageChange(page)}
                            data-active={isActive}
                            className="w-10 aspect-square flex justify-center items-center border border-gray-line rounded-sm
                                disabled:bg-blue-600 disabled:text-white disabled:border-none
                                disabled:cursor-default! disabled:active:scale-100!
                            "
                        >
                            {page}
                        </button>
                    );
                })}

                {showNextChevron && (
                    <button
                        onClick={() => onPageChange(totalPages)}
                        className="w-10 aspect-square flex justify-center items-center border border-gray-line rounded-sm"
                    >
                        <ChevronsRight />
                    </button>
                )}
            </div>
        );
    }

    // ==========================================
    // RENDER CHO CHẾ ĐỘ LONG
    // ==========================================
    const longPages = getLongPages();
    
    // Điều kiện ẩn hiện nút di chuyển cho chế độ Long
    const hasPrev = currentPage > 1;
    const hasNext = currentPage < totalPages;

    return (
        <div className="flex items-center gap-1">
            {/* Nút lùi 1 trang (<), chỉ hiện khi không phải ở trang 1 */}
            {hasPrev && (
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    className="w-10 aspect-square flex justify-center items-center border border-gray-line rounded-sm"
                >
                    <ChevronLeft />
                </button>
            )}

            {/* Render các phần tử số và dấu ba chấm */}
            {longPages.map((item, index) => {
                if (item === "...") {
                    // Dấu ba chấm là text thuần, không bấm được
                    return <span key={`ellipsis-${index}`}>...</span>;
                }

                const pageNumber = item as number;
                const isActive = pageNumber === currentPage;

                return (
                    <button
                        key={`page-${pageNumber}`}
                        disabled={isActive}
                        onClick={() => onPageChange(pageNumber)}
                        data-active={isActive}
                        className="w-10 aspect-square flex justify-center items-center border border-gray-line rounded-sm
                            disabled:bg-blue-600 disabled:text-white disabled:border-none
                            disabled:cursor-default! disabled:active:scale-100!
                        "
                    >
                        {pageNumber}
                    </button>
                );
            })}

            {/* Nút tiến 1 trang (>), chỉ hiện khi không phải ở trang cuối */}
            {hasNext && (
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    className="w-10 aspect-square flex justify-center items-center border border-gray-line rounded-sm"
                >
                    <ChevronRight />
                </button>
            )}
        </div>
    );
}