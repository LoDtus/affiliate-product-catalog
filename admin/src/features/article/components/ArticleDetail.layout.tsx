import { Link, Outlet } from "react-router-dom";

export default function ArticleDetail() {
    return (
        <div className="p-2">
            <div className="flex gap-5 items-center">
                <Link
                    to="/article/id/123"
                    className=""
                >
                    Chi tiết bài viết
                </Link>
                <Link
                    to="/article/edit/123"
                    className=""
                >
                    Chỉnh sửa
                </Link>
            </div>

            <div className="">
                <Outlet/>
            </div>
        </div>
    )
}