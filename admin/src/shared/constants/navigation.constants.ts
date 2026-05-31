import { BookText, LayoutDashboard, Link, Package, Store, Tag } from 'lucide-react';

export const NAVIGATION = {
    SIDEBAR: [
        { key: 'dashboard', path: '/dashboard', label: 'Trang chủ', icon: LayoutDashboard },
        { key: 'products', path: '/products', label: 'Sản phẩm', icon: Package },
        { key: 'affiliate-links', path: '/affiliate-links', label: 'Liên kết', icon: Link },
        { key: 'articles', path: '/articles', label: 'Bài viết', icon: BookText },
        { key: 'categories', path: '/categories', label: 'Danh mục', icon: Tag },
        { key: 'shops', path: '/shops', label: 'Cửa hàng', icon: Store },
    ],
    ARTICLE: [
        { key: 'all', path: '/all', label: 'Tất cả' },
        { key: 'compare', path: '/compare', label: 'So sánh' },
        { key: 'ranking', path: '/ranking', label: 'Xếp hạng' },
        { key: 'education', path: '/education', label: 'Kiến thức' },
    ]
}