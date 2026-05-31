import { Button, DatePicker, Input } from "antd";
import { RotateCcw, X } from "lucide-react";

export default function AdvancedSearchPopup() {
    // Tìm chung chung, tìm theo category, tìm theo ngày đăng, theo
    return (
        <div>
            <div className="mb-2 flex gap-2 justify-between items-end">
                <span className="text-2xl font-semibold">
                    Tìm kiếm nâng cao
                </span>
                <button
                    className="p-1 rounded-sm
                        hover:bg-gray-input active:scale-90!
                    "
                >
                    <X />
                </button>
            </div>

            <span className="font-semibold">Danh mục</span>
            <div className="mb-2">
                <span>Thêm danh mục</span>
            </div>

            <span className="font-semibold">Nơi bán</span>
            <div className="mb-2 flex gap-2 items-center">
                <Input placeholder="Quốc gia" />
                <Input placeholder="Thành phố" />
                <Button
                    className="font-semibold! bg-blue-royal!"
                    type="primary"
                >
                    Thêm
                </Button>
            </div>

            <span className="font-semibold">Ngày đăng</span>
            <div className="mb-2 flex gap-2 items-center">
                <DatePicker />
                <DatePicker />
            </div>

            <div className="flex gap-1 justify-between items-center">
                <Button className="flex gap-1! font-semibold!">
                    <RotateCcw size={20} />
                    <span>Đặt lại</span>
                </Button>
                <div className="flex gap-1 items-center">
                    <Button
                        className="font-semibold! bg-gray-light-button!"
                        variant="filled"
                        color="default"
                    >
                        Hủy
                    </Button>
                    <Button
                        className="font-semibold! bg-blue-royal!"
                        type="primary"
                    >
                        Lưu
                    </Button>
                </div>
            </div>
        </div>
    );
}
