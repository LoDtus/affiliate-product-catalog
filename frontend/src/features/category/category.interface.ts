export enum CategoryType {
    SELECT = "SELECT",
    RANGE = "RANGE",
    CHECKBOX = "CHECKBOX",
    RADIO = "RADIO",
}

export interface CategorySeo {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
}

export interface CategoryFilter {
    key: string;
    label: string;
    type: CategoryType;
}

export interface CategoryItem {
    _id: string;
    slug: string;
    title: string;
    description: string;
    icon?: string;
    parentId: string | null;
    level: number;
    sortOrder: number;
    isActive: boolean;
    productCount: number;
    seo: CategorySeo;
    filters: CategoryFilter[];
    stats?: Record<string, any>;
    createdAt: string;
    updatedAt: string;
    children?: CategoryItem[]; // Dùng cho cấu trúc tree
}

export interface GetCategoriesQuery {
    isActive?: boolean;
    level?: number;
    parentId?: string;
    tree?: boolean;
}
