import { Button } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function RecommendedArticle() {
    const arr = Array.from({ length: 20 });
    const products = Array.from({ length: 10 });
    const [expandedRows, setExpandedRows] = useState({});

    const toggleExpand = (index) => {
        setExpandedRows((prev) => ({
            ...prev,
            [index]: !prev[index], // Đảo ngược trạng thái đóng/mở của hàng đó
        }));
    };

    // compare, education, ranking, description
    return (
        <div className="h-full">
            <div className="mb-2 flex items-center border border-gray-line rounded-sm overflow-hidden">
                <div className="basis-[3%] flex justify-center items-center font-semibold border-r border-gray-line">
                    STT
                </div>
                <div className="basis-[10%] flex justify-center items-center font-semibold border-r border-gray-line">
                    Phân loại
                </div>
                <div className="basis-[25%] flex justify-center items-center font-semibold border-r border-gray-line">
                    Tiêu đề
                </div>
                <div className="basis-[44%] flex justify-center items-center font-semibold border-r border-gray-line">
                    Sản phẩm
                </div>
                <div className="basis-[10%] flex justify-center items-center font-semibold border-r border-gray-line">
                    Tạo tự động
                </div>
                <div className="basis-[8%] flex justify-center items-center font-semibold">
                    Lưu trữ
                </div>
            </div>

            <div className="border border-gray-line rounded-sm overflow-hidden">
                {arr?.map((article, articleIndex) => {
                    const isExpanded = !!expandedRows[articleIndex];
                    return (
                        <div
                            key={articleIndex}
                            className={`py-0.5 flex items-center
                                ${articleIndex > 0 && "border-t border-gray-line"}
                            `}
                        >
                            <div className="basis-[3%] flex justify-center items-center">
                                {articleIndex + 1}
                            </div>
                            <div className="basis-[10%] flex justify-center items-center">
                                So sánh
                            </div>
                            <Link
                                className="basis-[25%] px-2 font-semibold line-clamp-3
                                    duration-200 transition-all hover:text-blue-royal hover:underline active:scale-98
                                "
                                to="/article/id/123"
                            >
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Laborum nostrum fuga ea,
                                facere eligendi sequi consequuntur nulla eaque,
                                minus blanditiis et iusto in officiis voluptates
                                illo numquam laudantium placeat error!
                            </Link>
                            <div className="basis-[44%] p-1">
                                {products?.map((product, productIndex) => {
                                    // Điều kiện CSS: Nếu chỉ mục >= 3 VÀ hàng đó chưa bấm mở rộng thì thêm class "hidden" để ẩn bằng CSS
                                    const isHidden =
                                        productIndex >= 3 && !isExpanded;

                                    return (
                                        <Link
                                            key={productIndex}
                                            to="#"
                                            className={`py-0.5 px-2 rounded-sm bg-gray-input
                                                duration-200 transition-all hover:bg-gray-light-hover active:scale-98
                                                ${productIndex > 0 && "mt-1"}
                                                ${isHidden ? "hidden" : "block"} 
                                            `}
                                        >
                                            <span className="line-clamp-2">
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Natus cumque eum delectus
                                                accusamus illum facere officia
                                                necessitatibus, exercitationem
                                                consectetur voluptas molestias
                                                dicta molestiae ratione
                                                reiciendis amet? Ad obcaecati
                                                quaerat ipsa!
                                            </span>
                                        </Link>
                                    );
                                })}

                                {products.length > 3 && (
                                    <button
                                        type="button"
                                        onClick={() =>
                                            toggleExpand(articleIndex)
                                        }
                                        className="mt-1 text-blue-500 hover:underline font-medium text-left px-2 self-start"
                                    >
                                        {isExpanded
                                            ? "Thu gọn"
                                            : `Xem thêm ${products.length - 3} sản phẩm`}
                                    </button>
                                )}
                            </div>
                            <div className="basis-[10%] flex justify-center items-center">
                                <Button
                                    className="font-semibold!"
                                    onClick={() => {}}
                                    type="primary"
                                >
                                    Tạo bài viết
                                </Button>
                            </div>
                            <div className="basis-[8%] flex justify-center items-center">
                                <Button
                                    className="font-semibold!"
                                    onClick={() => {}}
                                    variant="solid"
                                    color="default"
                                >
                                    Lưu trữ
                                </Button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
