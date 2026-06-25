"use client";
import "../product.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Grid } from "swiper/modules";
import ListView from "@/features/product/components/ListView";
import GridView from "@/features/product/components/GridView";
import { useState } from "react";
import SwitchModeButton from "@/features/product/components/SwitchModeButton";

/**
 * new, trend, best_seller, flash_sale
 */
export default function ProductDiscovery() {
    const categories = [1, 1, 1, 1, 1, 1];
    const prod = Array.from({ length: 100 });
    const [sortMode, setSortMode] = useState("default");
    const [viewMode, setViewMode] = useState("grid");

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
                modules={[Pagination]}
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
                grid={{
                    rows: 2,
                    fill: "row",
                }}
                breakpoints={{
                    768: {
                        slidesPerView: 4,
                        grid: { rows: 2, fill: "row" },
                    },
                    1024: {
                        slidesPerView: 5,
                        grid: { rows: 2, fill: "row" },
                    },
                }}
                modules={[Grid]}
            >
                {prod?.map((item, itemIndex) => {
                    return (
                        <SwiperSlide
                            key={itemIndex}
                            className="p-3 border rounded-md bg-white"
                        >
                            <div>Sản phẩm {itemIndex + 1}</div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>

            <h2 className="mt-5 mb-2 font-semibold text-xl">Title 4</h2>
            <Swiper
                className="mySwiper"
                spaceBetween={8}
                slidesPerView={3}
                grid={{
                    rows: 2,
                    fill: "row",
                }}
                breakpoints={{
                    768: {
                        slidesPerView: 4,
                        grid: { rows: 2, fill: "row" },
                    },
                    1024: {
                        slidesPerView: 5,
                        grid: { rows: 2, fill: "row" },
                    },
                }}
                modules={[Grid]}
            >
                {prod?.map((item, itemIndex) => {
                    return (
                        <SwiperSlide
                            key={itemIndex}
                            className="p-3 border rounded-md bg-white"
                        >
                            <div>Sản phẩm {itemIndex + 1}</div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>

            <h2 className="mt-5 mb-2 font-semibold text-xl">Title 5</h2>
            <Swiper
                className="mySwiper"
                spaceBetween={8}
                slidesPerView={3}
                grid={{
                    rows: 2,
                    fill: "row",
                }}
                breakpoints={{
                    768: {
                        slidesPerView: 4,
                        grid: { rows: 2, fill: "row" },
                    },
                    1024: {
                        slidesPerView: 5,
                        grid: { rows: 2, fill: "row" },
                    },
                }}
                modules={[Grid]}
            >
                {prod?.map((item, itemIndex) => {
                    return (
                        <SwiperSlide
                            key={itemIndex}
                            className="p-3 border rounded-md bg-white"
                        >
                            <div>Sản phẩm {itemIndex + 1}</div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>

            

            <h2 className="mt-5 mb-2 font-semibold text-xl">Title 6</h2>
            <SwitchModeButton
                sortMode={sortMode}
                setSortMode={setSortMode}
                viewMode={viewMode}
                setViewMode={setViewMode}
            />
            {viewMode === "grid" ? (
                <GridView products={prod} />
            ) : (
                <ListView products={prod} />
            )}
        </div>
    );
}
