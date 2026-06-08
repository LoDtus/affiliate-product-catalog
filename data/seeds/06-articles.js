const TARGET_DB_NAME = "affiliate-product-catalog";
db = db.getSiblingDB(TARGET_DB_NAME);

db.articles.insertMany([
    {
        "_id": ObjectId("000000000000000000000001"),

        "title": "So Sánh Logitech MX Master 3S vs Razer Pro Click: Chuột Nào Code Êm Hơn?",
        "slug": "so-sanh-logitech-mx-master-3s-vs-razer-pro-click",
        "description": "Đánh giá chi tiết và so sánh trải nghiệm thực tế giữa hai dòng chuột công thái học đỉnh nhất 2026 cho lập trình viên.",
        "thumbnail": "https://cdn.yourdomain.com/uploads/comparison-banner.jpg",
        "priority": 2,

        "type": "vs", // detail: Chi tiết sản phẩm, vs: So sánh, rank: Xếp hạng/Ngân sách, edu: Thuật ngữ/Kiến thức
        "content": "### 1. Giới thiệu chung\n\nCả hai con chuột đều có form cầm công thái học...\n\n![Form cầm hai chuột cạnh nhau](https://cdn.com/anh-so-sanh.jpg)\n\n### 2. Video Trải nghiệm thực tế\n\n<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/dQw4w9WgXcQ\" frameborder=\"0\" allowfullscreen></iframe>\n\n### 3. Bảng so sánh thông số\n\n| Tính năng | MX Master 3S | Razer Pro Click |\n|---|---|---|\n| **DPI** | 8,000 | 16,000 |\n| **Tiếng click** | Siêu êm (Silent) | Clicky |",

        "products": [
            ObjectId("000000000000000000000001"),
            ObjectId("000000000000000000000002"),
        ],

        "stats": {},
        "status": "draft", // draft (AI viết xong nằm đây), published (Bạn duyệt đẩy lên web), archived (Ẩn bài)
        "isHidden": false,

        "publishedAt": ISODate(),
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null,
    }
]);