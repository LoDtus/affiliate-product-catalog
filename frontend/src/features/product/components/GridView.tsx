import "../product.css";
import { Rate } from "antd";
import { ArrowRightLeft, Plus, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// bỏ khung bao (tham khảo ebay), bo góc tròn
export default function GridView() {
    const cols = 4;
    const arr = Array.from({ length: 40 });
    const images = [
        "https://i1-e.pinimg.com/736x/3c/58/69/3c586997e28a3ac7171258a5e66c2780.jpg",
        "https://i1-e.pinimg.com/736x/b3/21/1c/b3211c23a455b04d1fcfd7d467253c05.jpg",
        "https://i.pinimg.com/736x/4f/2b/ca/4f2bca76a8a63e5f687a70ba21cef369.jpg",
    ];
    const [selectedImages, setSelectedImages] = useState<
        Record<number, number>
    >({});

    // title, giá, giá gốc, % giảm, thêm vào giỏ hàng, lượt xem, số lượng sản phẩm, đã bán, rating, số lượt rating, nơi bán, tag (mới, best seller...)
    // nút so sánh

    // Còn: tag, số lượng sản phẩm, đã bán

    return (
        <ul
            className="flex-1 my-2 grid gap-5 grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
        >
            {arr?.map((item, itemIndex) => {
                return (
                    <li
                        key={itemIndex}
                        className="flex flex-col min-h-full"
                    >
                        <div className="relative flex flex-col gap-1">
                            <div className="absolute top-0 right-0">
                                <span
                                    id="grid-circleTop"
                                    className="absolute top-0 right-12 z-20 w-5 aspect-square bg-transparent rounded-full"
                                />
                                <span
                                    id="grid-circleRight"
                                    className="absolute top-12 right-0 z-20 w-5 aspect-square bg-transparent rounded-full"
                                />
                            </div>
                            <div className="relative rounded-lg overflow-hidden">
                                <span className="absolute top-0 left-0 z-10 pb-0.5 pt-1 px-3 text-sm text-white font-semibold bg-red-600 rounded-ee-lg">
                                    Best Seller
                                </span>
                                {/* bo góc đoạn này */}
                                <Link
                                    href="https://www.youtube.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute top-0 right-0 z-10 p-3 rounded-lg bg-white
                                        duration-200 active:scale-98
                                    "
                                    title="Trang gốc"
                                >
                                    <SquareArrowOutUpRight />
                                </Link>
                                <Link href="/vi/product/iphone">
                                    <img
                                        className="w-full aspect-square object-cover rounded-lg
                                            duration-200 hover:-translate-y-1
                                        "
                                        src={
                                            images[
                                                selectedImages[itemIndex] ?? 0
                                            ]
                                        }
                                    />
                                </Link>
                            </div>
                            <ul className="flex gap-1">
                                {images?.map((img, imgIndex) => {
                                    return (
                                        <li
                                            key={imgIndex}
                                            className="aspect-square rounded-lg overflow-hidden
                                                duration-200 cursor-pointer active:scale-98
                                            "
                                            style={{
                                                flexBasis: `calc((100% - 2 * 4px) / 3)`,
                                            }}
                                            onClick={() =>
                                                setSelectedImages((prev) => ({
                                                    ...prev,
                                                    [itemIndex]: imgIndex,
                                                }))
                                            }
                                        >
                                            <img
                                                src={images[imgIndex]}
                                                className="w-full h-full object-cover"
                                            />
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="pt-3 pb-8 flex flex-col grow">
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
                                className="line-clamp-2 duration-200 hover:text-yellow-500 hover:underline"
                            >
                                {itemIndex % 2 === 0
                                    ? `Sản phẩm ${itemIndex + 1}`
                                    : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt labore optio mollitia sapiente quia atque, esse culpa ipsum quidem nobis voluptas nemo sunt ad cumque obcaecati sit vitae laborum voluptatem."}
                            </Link>

                            <div className="mt-2 flex gap-1 items-center text-sm">
                                <Rate
                                    allowHalf
                                    value={2.8}
                                    size="small"
                                    disabled
                                />
                                <span>2.8</span>
                                <span>(522)</span>
                            </div>

                            <div className="mt-2 mb-1 flex gap-2 items-center">
                                <span className="text-2xl font-semibold text-orange-juice">
                                    100.000đ
                                </span>
                                <span className="line-through text-gray-subtitle">
                                    200.000đ
                                </span>
                                <span className="pb-0.5 pt-0.5 px-1.5 bg-orange-juice text-sm text-white font-semibold rounded-sm">
                                    -50%
                                </span>
                            </div>

                            <div className="flex gap-1 items-center text-sm text-gray-subtitle">
                                <span>Đã bán {20}</span>
                                <span className="pb-0.5">|</span>
                                <span>Còn lại {3}</span>
                            </div>

                            <div className="mt-3 grow"/>
                            <div className="flex gap-1">
                                <button
                                    className="py-1 px-4 flex gap-1 items-center rounded-md bg-gray-light-button
                                        font-semibold text-sm
                                        duration-200 hover:bg-gray-light-hover
                                    "
                                    title="So sánh"
                                >
                                    <ArrowRightLeft size={18} />
                                    <span className="shrink-0">So sánh</span>
                                </button>
                                <button
                                    className="grow py-1 px-5 flex gap-1 justify-center items-center rounded-md bg-blue-royal
                                        text-white font-semibold text-sm
                                    "
                                    title="Add to cart"
                                >
                                    <Plus size={18} />
                                    <span className="shrink-0">
                                        Add to cart
                                    </span>
                                </button>
                            </div>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}
