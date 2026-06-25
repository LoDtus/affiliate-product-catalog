"use client";
import "../product.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination as SwiperPagination, Grid } from "swiper/modules";
import ListView from "@/features/product/components/ListView";
import GridView from "@/features/product/components/GridView";
import { useEffect, useState } from "react";
import SwitchModeButton from "@/features/product/components/SwitchModeButton";
import Pagination from "@/shared/components/ui/Pagination";

/**
 * new, trend, best_seller, flash_sale
 */
export default function ProductDiscovery() {
    const categories = [1, 1, 1, 1, 1, 1];
    const prod = Array.from({ length: 100 });
    const [sortMode, setSortMode] = useState("default");
    const [viewMode, setViewMode] = useState("grid");
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 30;
    const [products, setProducts] = useState([]);

    function chunkArray<T>(arr: T[], size: number): T[][] {
        return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
            arr.slice(i * size, i * size + size),
        );
    }

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        console.log("Đang lấy dữ liệu cho trang: ", pageNumber);
    };

    useEffect(() => {
        const handleGetProducts = async () => {
            const response = [];
            setProducts(response);
        };
        handleGetProducts();
    }, []);

    return (
        <div className="p-3">
            <Swiper
                className="mySwiper"
                spaceBetween={10}
                slidesPerView={1.2}
                centeredSlides={true}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                pagination={true}
                modules={[SwiperPagination]}
                loop={true}
            >
                {categories?.map((item, itemIndex) => {
                    return (
                        <SwiperSlide
                            key={itemIndex}
                            className="p-5 border rounded-md"
                        >
                            Sản phẩm {itemIndex + 1}
                        </SwiperSlide>
                    );
                })}
            </Swiper>

            {/* Nhỏ hơn */}
            <h2 className="mt-5 mb-2 font-semibold text-xl">Title 1</h2>
            <Swiper
                className="mySwiper"
                spaceBetween={8}
                slidesPerView={4.5}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                loop={true}
            >
                {prod?.map((item, itemIndex) => {
                    return (
                        <SwiperSlide
                            key={itemIndex}
                            className="p-5 border rounded-sm"
                        >
                            Sản phẩm {itemIndex + 1}
                        </SwiperSlide>
                    );
                })}
            </Swiper>

            <h2 className="mt-5 mb-2 font-semibold text-xl">Title 2</h2>
            <ul className="grid grid-cols-2 gap-2">
                {categories?.map((tab, tabIndex) => {
                    return (
                        <li
                            key={tabIndex}
                            className="is-button p-3 border rounded-md"
                            onClick={() => {}}
                        >
                            Category {tabIndex + 1}
                        </li>
                    );
                })}
            </ul>

            <h2 className="mt-5 mb-2 font-semibold text-xl">Title 3</h2>
            <Swiper
                className="mySwiper"
                spaceBetween={8}
                slidesPerView={3}
                breakpoints={{
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 5 },
                }}
                // KHÔNG dùng modules={[Grid]} nữa
            >
                {chunkArray(prod, 2).map((pair, pairIndex) => (
                    <SwiperSlide key={pairIndex}>
                        <div className="flex flex-col gap-2">
                            {pair.map((item, i) => (
                                <div
                                    key={i}
                                    className="p-3 border rounded-md bg-white"
                                >
                                    <div>Sản phẩm {pairIndex * 2 + i + 1}</div>
                                </div>
                            ))}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <h2 className="mt-5 mb-2 font-semibold text-xl">Title 4</h2>
            <Swiper
                className="mySwiper"
                spaceBetween={8}
                slidesPerView={3}
                breakpoints={{
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 5 },
                }}
                // KHÔNG dùng modules={[Grid]} nữa
            >
                {chunkArray(prod, 2).map((pair, pairIndex) => (
                    <SwiperSlide key={pairIndex}>
                        <div className="flex flex-col gap-2">
                            {pair.map((item, i) => (
                                <div
                                    key={i}
                                    className="p-3 border rounded-md bg-white"
                                >
                                    <div>Sản phẩm {pairIndex * 2 + i + 1}</div>
                                </div>
                            ))}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <h2 className="mt-5 mb-2 font-semibold text-xl">Title 5</h2>
            <Swiper
                className="mySwiper"
                spaceBetween={8}
                slidesPerView={3}
                breakpoints={{
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 5 },
                }}
                // KHÔNG dùng modules={[Grid]} nữa
            >
                {chunkArray(prod, 2).map((pair, pairIndex) => (
                    <SwiperSlide key={pairIndex}>
                        <div className="flex flex-col gap-2">
                            {pair.map((item, i) => (
                                <div
                                    key={i}
                                    className="p-3 border rounded-md bg-white"
                                >
                                    <div>Sản phẩm {pairIndex * 2 + i + 1}</div>
                                </div>
                            ))}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <h2 className="mt-5 mb-2 font-semibold text-xl">
                Các sản phẩm khác
            </h2>
            <div className="w-full flex justify-end">
                <SwitchModeButton
                    sortMode={sortMode}
                    setSortMode={setSortMode}
                    viewMode={viewMode}
                    setViewMode={setViewMode}
                />
            </div>
            {viewMode === "grid" ? (
                <GridView products={prod} />
            ) : (
                <ListView products={prod} />
            )}
            <Pagination
                mode="long"
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
}
