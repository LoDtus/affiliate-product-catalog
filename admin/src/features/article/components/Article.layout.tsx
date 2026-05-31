import { NavLink, Outlet } from "react-router-dom";

export default function ArticleLayout() {
    return (
        <div className="h-full p-2 flex flex-col">
            <div className="mb-2 flex gap-10 items-center">
                <NavLink
                    to="/articles"
                    end
                    className={({ isActive }) => `
                        font-semibold text-lg text-gray-subtitle
                        cursor-pointer duration-200 transition-all hover:text-black active:scale-98
                        ${isActive && "text-black! underline"}
                    `}
                >
                    Bài viết đang có
                </NavLink>
                <NavLink
                    to="/articles/recommended"
                    className={({ isActive }) => `
                        font-semibold text-lg text-gray-subtitle
                        cursor-pointer duration-200 transition-all hover:text-black active:scale-98
                        ${isActive && "text-black! underline"}
                    `}
                >
                    Bài viết đề xuất
                </NavLink>
                <NavLink
                    to="/articles/archived"
                    className={({ isActive }) => `
                        font-semibold text-lg text-gray-subtitle
                        cursor-pointer duration-200 transition-all hover:text-black active:scale-98
                        ${isActive && "text-black! underline"}
                    `}
                >
                    Đã lưu trữ
                </NavLink>
            </div>

            <div className="flex-1 h-full">
                <Outlet/>
            </div>
        </div>
    );
}
