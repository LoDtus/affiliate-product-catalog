const TARGET_DB_NAME = "affiliate-product-catalog";
db = db.getSiblingDB(TARGET_DB_NAME);

db.shops.insertMany([
    {
        "_id": ObjectId("000000000000000000000001"),

        "platform": "SHOPEE",
        "platformShopId": "123456789", // ID của Shop do chính sàn đó cấp
        "name": "Store 01",
        "slug": "store-01",
        "logo": "https://i.pinimg.com/736x/59/2c/bf/592cbf3658d9fb4a6eddc2d776e95fd6.jpg",
        "url": "https://drive.google.com/drive/my-drive",
        "city": "",
        "country": "vn",

        // Các thông tin được đưa lên giao diện chính của shop đó
        "isOfficial": true, // Shop Mall, Shop Yêu Thích, Authorized Seller...
        "rating": 4.9,
        "totalFollowers": 850000,
        "responseRate": 82, // tỉ lệ phản hồi

        "products": [
            ObjectId("000000000000000000000001"),
            ObjectId("000000000000000000000002"),
        ],

        "rawResponse": {}, // Lưu toàn bộ raw data mà API của sàn trả về

        "stats": {},

        "isActive": true,
        "lastSyncedAt": ISODate(), // Thời gian gọi API cập nhật gần nhất
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    }
]);