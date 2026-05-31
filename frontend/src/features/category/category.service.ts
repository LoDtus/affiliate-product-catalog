import { categoryApi } from "@/features/category/category.api";
import {
    GetCategoriesQuery,
} from "@/features/category/category.interface";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Async Thunk lấy mảng phẳng danh mục công khai
export const fetchAllCategories = createAsyncThunk(
    "category/fetchAll",
    async (query: GetCategoriesQuery = {}, { rejectWithValue }) => {
        try {
            const response = await categoryApi.getAll(query);
            return { data: response.data, isTree: !!query.tree };
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    },
);

// Async Thunk lấy chi tiết 1 danh mục theo slug
export const fetchCategoryBySlug = createAsyncThunk(
    "category/fetchBySlug",
    async (slug: string, { rejectWithValue }) => {
        try {
            const response = await categoryApi.getBySlug(slug);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    },
);
