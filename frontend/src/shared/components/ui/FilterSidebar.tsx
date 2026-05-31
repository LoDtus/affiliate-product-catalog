import { InputNumber, Rate } from "antd";

export default function FilterSidebar() {
    // khoảng giá, nơi bán, rating, cate list
    // với quần áo: size, màu,
    return (
        <div className="p-2 flex flex-col border-r border-gray-line">
            <span>Khu vực</span>

            <span>Khoảng giá</span>
            <div className="flex gap-2">
                <InputNumber
                    min={0}
                />

                <InputNumber
                    min={0}
                />
            </div>

            <span>Rating</span>
            <Rate value={5} size="small" disabled />
            <Rate value={4} size="small" disabled />
            <Rate value={3} size="small" disabled />

            <span>Tags</span>
            {/* bán chạy, mới... */}
        </div>
    );
}
