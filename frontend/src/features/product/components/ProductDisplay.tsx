"use client";
import GridView from "@/features/product/components/GridView";
import Pagination from "@/shared/components/ui/Pagination";
import { Funnel } from "lucide-react";
import { useEffect, useState } from "react";
import ListView from "@/features/product/components/ListView";
import SwitchModeButton from "@/features/product/components/SwitchModeButton";

export default function ProductDisplay() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 30;
    const [products, setProducts] = useState([]);
    const [sortMode, setSortMode] = useState("default");
    const [viewMode, setViewMode] = useState("grid");

    // 1. Định nghĩa hàm xử lý khi số trang thay đổi
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        console.log("Đang lấy dữ liệu cho trang: ", pageNumber);
    };

    useEffect(() => {
        const handleGetProducts = async () => {
            try {
                const response = null;
                setProducts([]);
            } catch (error) {
                console.error("Error: ", error);
            }
        };
        handleGetProducts();
    }, []);

    return (
        <div className="p-3 flex-1">
            <div className="w-full flex justify-between lg:justify-end items-center">
                <button
                    className="lg:hidden flex gap-2 items-center"
                    onClick={() => {
                        console.log(1);
                    }}
                >
                    <Funnel />
                    <span>Filter</span>
                </button>
                <SwitchModeButton
                    sortMode={sortMode}
                    setSortMode={setSortMode}
                    viewMode={viewMode}
                    setViewMode={setViewMode}
                />
            </div>

            {viewMode === "grid" ? (
                <GridView products={products} />
            ) : (
                <ListView products={products} />
            )}

            <div className="w-full flex justify-center lg:justify-end">
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
