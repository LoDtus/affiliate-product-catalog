import { CategoryItem } from "@/features/category/category.interface";
import {
    fetchAllCategories,
    fetchCategoryBySlug,
} from "@/features/category/category.service";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CategoryState {
    list: CategoryItem[];
    treeList: CategoryItem[];
    currentCategory: CategoryItem | null;
    loading: boolean;
    error: string | null;
}

const initialState: CategoryState = {
    list: [],
    treeList: [],
    currentCategory: null,
    loading: false,
    error: null,
};

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        clearCurrentCategory: (state) => {
            state.currentCategory = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // Xử lý fetchAllCategories
            .addCase(fetchAllCategories.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                fetchAllCategories.fulfilled,
                (
                    state,
                    action: PayloadAction<{
                        data: CategoryItem[];
                        isTree: boolean;
                    }>,
                ) => {
                    state.loading = false;
                    if (action.payload.isTree) {
                        state.treeList = action.payload.data;
                    } else {
                        state.list = action.payload.data;
                    }
                },
            )
            .addCase(fetchAllCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            // Xử lý fetchCategoryBySlug
            .addCase(
                fetchCategoryBySlug.fulfilled,
                (state, action: PayloadAction<CategoryItem>) => {
                    state.currentCategory = action.payload;
                },
            );
    },
});

export const categoryActions = categorySlice.actions;
export default categorySlice.reducer;
