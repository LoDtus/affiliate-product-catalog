import { CategoryItem, GetCategoriesQuery } from "@/features/category/category.interface";
import apiInstance from "@/shared/utils/api.utils";

export const categoryApi = {
    // 1. Lấy toàn bộ danh mục (hoặc theo query filter)
    getAll: (
        query?: GetCategoriesQuery,
    ) => {
        return apiInstance.get("/categories", { params: query });
    },

    // 2. Lấy chi tiết danh mục bằng ID
    getById: (id: string) => {
        return apiInstance.get(`/categories/id/${id}`);
    },

    // 3. Lấy chi tiết danh mục bằng Slug (Dùng cho trang SEO chi tiết danh mục)
    getBySlug: (slug: string) => {
        return apiInstance.get(`/categories/slug/${slug}`);
    },
};
