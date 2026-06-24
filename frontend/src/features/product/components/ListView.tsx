"use client";
import { Rate } from "antd";
import { ArrowRightLeft, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ListView({ products }) {
    const arr = Array.from({ length: 40 });
    const images = [
        "https://i1-e.pinimg.com/736x/3c/58/69/3c586997e28a3ac7171258a5e66c2780.jpg",
        "https://i1-e.pinimg.com/736x/b3/21/1c/b3211c23a455b04d1fcfd7d467253c05.jpg",
        "https://i.pinimg.com/736x/4f/2b/ca/4f2bca76a8a63e5f687a70ba21cef369.jpg",
    ];
    const [selectedImages, setSelectedImages] = useState<
        Record<number, number>
    >({});

    return (
        <ul className="flex-1 my-2 flex flex-col gap-5">
            {arr?.map((item, itemIndex) => {
                return (
                    <li
                        key={itemIndex}
                        className="flex items-stretch gap-5 overflow-hidden bg-white"
                    >
                        <Link 
                            href="/vi/product/iphone" 
                            className="w-28 sm:w-40 md:w-48 aspect-square object-cover shrink-0 block relative group"
                        >
                            <img
                                className="h-full w-full object-cover rounded-lg duration-200 group-hover:-translate-y-1"
                                src={images[selectedImages[itemIndex] ?? 0]}
                                alt="Product"
                            />
                        </Link>

                        <div className="flex-1 flex flex-col justify-between min-w-0">
                            <div>
                                <Link
                                    href="/vi/shop/aeon"
                                    className="flex gap-1 items-center text-gray-subtitle duration-200 hover:text-black"
                                >
                                    <span className="pt-0.5 text-sm">
                                        Aeon Mall Hà Nội
                                    </span>
                                    <span>|</span>
                                    <span className="pt-0.5 text-sm">
                                        Hà Nội, Việt Nam
                                    </span>
                                </Link>

                                <Link
                                    href="/vi/product/iphone"
                                    className="block mt-1 font-semibold line-clamp-2 overflow-hidden! duration-200 hover:text-yellow-500 hover:underline text-base text-gray-900"
                                    style={{
                                        display: "-webkit-box",
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: "vertical",
                                        overflow: "hidden",
                                    }}
                                >
                                    {itemIndex % 2 === 0
                                        ? `Sản phẩm ${itemIndex + 1}`
                                        : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt labore optio mollitia sapiente quia atque, esse culpa ipsum quidem nobis voluptas nemo sunt ad cumque obcaecati sit vitae laborum voluptatem."}
                                </Link>

                                <div className="mt-1.5 flex gap-1 items-center text-sm text-gray-600">
                                    <Rate
                                        allowHalf
                                        defaultValue={2.8}
                                        size="small"
                                        disabled
                                    />
                                    <span className="ml-1 font-medium text-gray-800">2.8</span>
                                    <span className="text-gray-400">(522)</span>
                                </div>
                            </div>

                            <div className="mt-3">
                                <div className="mb-2 flex gap-2 items-center flex-wrap">
                                    <span className="text-xl font-bold text-orange-juice">
                                        100.000đ
                                    </span>
                                    <span className="line-through text-sm text-gray-subtitle">
                                        200.000đ
                                    </span>
                                    <span className="text-xs px-1.5 py-0.5 bg-orange-juice text-white font-semibold rounded-sm">
                                        -50%
                                    </span>
                                </div>

                                <div className="flex items-start justify-between gap-2 flex-wrap">
                                    <div className="flex gap-1 items-center text-xs sm:text-sm text-gray-subtitle">
                                        <span>Đã bán 20</span>
                                        <span className="pb-0.5">|</span>
                                        <span>Còn lại 3</span>
                                    </div>
                                    
                                    <div className="flex gap-2">
                                        <button
                                            className="py-1.5 px-3 flex gap-1 items-center rounded-md bg-gray-light-button
                                                font-semibold text-sm duration-200 hover:bg-gray-light-hover"
                                            title="So sánh"
                                        >
                                            <ArrowRightLeft size={16} />
                                        </button>
                                        <button
                                            className="py-1.5 px-4 flex gap-1 justify-center items-center rounded-md bg-blue-royal
                                                text-white font-semibold text-sm duration-200 opacity-90 hover:opacity-100"
                                            title="Add to cart"
                                        >
                                            <ShoppingBag size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}