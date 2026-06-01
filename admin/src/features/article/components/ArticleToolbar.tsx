import { Button } from "antd";
import { useState } from "react";

export function GenerateArticle({ data }) {
    return (
        <Button className="font-semibold!" onClick={() => {}} type="primary">
            Tạo bài viết
        </Button>
    );
}

export function ArchiveArticle({ data }) {
    return (
        <Button
            className="font-semibold!"
            onClick={() => {}}
            variant="solid"
            color="default"
        >
            Lưu trữ
        </Button>
    );
}

export function ProductList({ data }) {
    const [expanded, setExpanded] = useState(false);
    const products = Array.from({ length: 8 });
    const MAX_VISIBLE = 3;
    const visibleProducts = expanded
        ? products
        : products.slice(0, MAX_VISIBLE);

    return (
        <div>
            <ul className="flex flex-col gap-1">
                {visibleProducts.map((item, itemIndex) => (
                    <li
                        key={itemIndex}
                        className="pt-1 pb-0.5 px-2 rounded-sm bg-gray-input 
                            overflow-hidden line-clamp-2 break-all min-w-0"
                    >
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Reiciendis officiis quis tenetur molestias qui
                        inventore fuga ducimus, voluptatem, facilis eaque unde
                        consequuntur ea, et deserunt? Repudiandae fugit nisi
                        quod est?
                    </li>
                ))}
            </ul>

            {products.length > MAX_VISIBLE && (
                <button
                    className="
                        mt-1 text-xs text-blue-500
                        hover:underline
                    "
                    onClick={() => setExpanded((prev) => !prev)}
                >
                    {expanded
                        ? "Thu gọn"
                        : `+${products.length - MAX_VISIBLE} sản phẩm nữa`}
                </button>
            )}
        </div>
    );
}
