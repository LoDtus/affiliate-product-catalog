"use client";
import { InputNumber } from "antd";
import { Minus, Plus, Trash2 } from "lucide-react";
import Link from "next/link";

export default function Cart({
    dict
}) {
    const arr = Array.from({ length: 10 });

    const removeItem = () => {};

    // ảnh, tên sản phẩm, người bán, giá, nơi bán
    return (
        <div className="p-2 flex flex-col lg:flex-row gap-2">
            <div className="basis-[70%]">
                <div className="mb-1 py-1 flex items-center font-semibold border border-gray-line rounded-md">
                    <span className={`shrink-0 border basis-[4%] `}>STT</span>
                    <span className={`shrink-0 border basis-[40%] `}>
                        Sản phẩm
                    </span>
                    <span className={`shrink-0 border basis-[10%] `}>
                        Giá đang bán
                    </span>
                    <span className={`shrink-0 border basis-[15%] `}>
                        Số lượng
                    </span>
                    <span className={`shrink-0 border basis-[26%] `}>
                        Truy cập
                    </span>
                    <span className={`shrink-0 border basis-[5%] `}>Xóa</span>
                </div>
                <ul>
                    {arr?.map((item, itemIndex) => {
                        return (
                            <li
                                key={itemIndex}
                                className={`p-3 flex items-center border border-gray-line rounded-md
                                    ${itemIndex > 0 && "mt-1"}
                                `}
                            >
                                <span
                                    className={`shrink-0
                                        basis-[4%]
                                    `}
                                >
                                    {itemIndex + 1}
                                </span>
                                <div
                                    className={`shrink-0 flex gap-2 items-center
                                        basis-[40%]
                                    `}
                                >
                                    <img
                                        className="w-30 aspect-square object-cover rounded-md"
                                        src="https://i1-e.pinimg.com/1200x/d5/37/c2/d537c20d60ec8b3fa16462294bd0b18c.jpg"
                                        alt=""
                                    />
                                    <div className="flex flex-col">
                                        <span className="font-semibold">
                                            Sản phẩm {itemIndex}
                                        </span>
                                        <span className="text-sm">
                                            Aeon Mall | Hà Nội, Việt Nam
                                        </span>
                                        <span className="text-sm">
                                            Đã bán 20 | Còn lại 2
                                        </span>
                                    </div>
                                </div>

                                <div
                                    className={`shrink-0 flex flex-col
                                        basis-[10%]
                                    `}
                                >
                                    <span className="font-semibold">
                                        100.000đ
                                    </span>
                                    <span className="line-through text-sm text-gray-disable">
                                        200.000đ
                                    </span>
                                </div>

                                <div className="basis-[15%] flex justify-center">
                                    <InputNumber
                                        mode="spinner"
                                        min={1}
                                        max={10}
                                        defaultValue={3}
                                        placeholder="Outlined"
                                        className={`w-30!`}
                                    />
                                </div>

                                <div
                                    className={`shrink-0 flex flex-col justify-center items-center gap-1
                                        basis-[26%]
                                    `}
                                >
                                    <Link
                                        href="#"
                                        className="w-60 py-1 px-5 flex justify-center items-center
                                            font-semibold text-white bg-blue-royal rounded-md
                                            duration-200
                                        "
                                    >
                                        Tới trang bán
                                    </Link>
                                    <Link
                                        href="#"
                                        className="w-60 py-1 px-5 flex justify-center items-center
                                            font-semibold text-white bg-blue-soft rounded-md
                                            duration-200
                                        "
                                    >
                                        Xem thông tin sản phẩm
                                    </Link>
                                </div>

                                <button
                                    className={`shrink-0 aspect-square py-1 px-2 rounded-md
                                        hover:bg-red-tomato
                                        basis-[5%]
                                    `}
                                    onClick={() => removeItem()}
                                >
                                    <Trash2 />
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="basis-[30%] h-fit p-5 border border-gray-line rounded-md">
                <h2 className="font-semibold">Các sản phẩm đã chọn</h2>
                {arr?.map((item, itemIndex) => {
                    return (
                        <li
                            key={itemIndex}
                            className="py-1 flex items-center border-b border-gray-line"
                        >
                            <div className="basis-[70%]">
                                <h2 className="font-semibold leading-tight">Sản phẩm {itemIndex + 1}</h2>
                                <span className="text-sm text-gray-disable leading-tight">Số lượng: 2</span>
                            </div>
                            <span className="basis-[30%] shrink-0">15.000đ</span>
                        </li>
                    )
                })}
                <div className="py-1 flex items-center">
                    <span className="basis-[70%] shrink-0 font-bold">Tạm tính</span>
                    <span className="basis-[30%] shrink-0">2.000.000đ</span>
                </div>
            </div>
        </div>
    );
}
