db = db.getSiblingDB("affiliate-product-catalog");
db.products.drop();

db.products.insertMany([
    {
        "_id": ObjectId("000000000000000000000001"),

        "title": "Chuột Không Dây Logitech MX Master 3S",
        "slug": "chuot-khong-day-logitech-mx-master-3s",
        "description": "Dòng chuột công sở cao cấp nhất của Logitech với mắt đọc 8000 DPI và nút cuộn MagSpeed siêu tốc.",
        "badge": "best-seller",
        "priority": 2, // trọng số, can thiệp thủ công từ quản trị viên để đưa sản phẩm này lên đầu

        "categoryId": ObjectId("000000000000000000000001"),
        "affiliateId": ObjectId("000000000000000000000001"),
        "shopId": ObjectId("000000000000000000000001"),

        "images": [
            ObjectId("000000000000000000000001"), // Ảnh đầu tiên là thumbnail
            ObjectId("000000000000000000000002"),
            ObjectId("000000000000000000000003"),
        ],

        "articles": [
            ObjectId("000000000000000000000001"),
            ObjectId("000000000000000000000002"),
        ],

        "attributes": [
            { "key": "brand", "label": "Thương hiệu", "value": "Logitech" },
            { "key": "connection", "label": "Kết nối", "value": "Bluetooth & Logi Bolt" },
            { "key": "dpi", "label": "Độ phân giải mắt đọc", "value": "8000 DPI" },
            { "key": "battery", "label": "Thời lượng pin", "value": "Sạc Type-C (Lên đến 70 ngày)" },
        ],

        "seo": {
            "metaTitle": "Đánh Giá Logitech MX Master 3S - Nơi Bán Giá Rẻ Nhất Hôm Nay",
            "metaDescription": "Xem thông số kỹ thuật chuột Logitech MX Master 3S chính hãng. Tổng hợp link Affiliate Shopee, Amazon giảm giá tốt nhất.",
            "keywords": ["logitech mx master 3s", "chuột công sở", "chuột logitech cao cấp"]
        },

        "stats": {
            "viewCount": 0,
            // tỉ lệ này, tỉ lệ kia
        },

        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    }
]);