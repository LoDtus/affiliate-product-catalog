db = db.getSiblingDB("affiliate-product-catalog");
db.categories.drop();

db.categories.insertMany([
    // ==========================================
    // LEVEL 1: ELECTRONICS (ID: ...0101)
    // ==========================================
    {
        "_id": ObjectId("000000000000000000000101"),
        "slug": "electronics",
        "title": "Electronics",
        "description": "Các thiết bị điện tử tiêu dùng, máy tính, giải trí và thiết bị mạng thông minh.",
        "icon": "",
        "parentId": null,
        "level": 1,
        "sortOrder": 1,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Đồ Điện Tử & Phụ Kiện Công Nghệ Chính Hãng | Đánh Giá Chi Tiết",
            "metaDescription": "Tổng hợp, đánh giá chi tiết và so sánh thông số các thiết bị điện tử, máy tính, âm thanh, mạng chính hãng.",
            "keywords": ["đồ điện tử", "thiết bị công nghệ", "đồ chơi công nghệ"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "price-range", "label": "Mức giá", "type": "RANGE" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    // LEVEL 2: Computers (ID: ...0201)
    {
        "_id": ObjectId("000000000000000000000201"),
        "slug": "computers",
        "title": "Computers",
        "description": "Máy tính cá nhân, máy tính nhỏ gọn, màn hình hiển thị và các thiết bị lưu trữ ngoài.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000101"),
        "level": 2,
        "sortOrder": 1,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Máy Tính & Màn Hình Hiển Thị Tốt Nhất",
            "metaDescription": "Tư vấn chọn mua máy tính xách tay, mini PC, màn hình đồ họa chuyên dụng và lưu trữ dữ liệu ngoại vi.",
            "keywords": ["máy tính cá nhân", "màn hình máy tính", "lưu trữ máy tính"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "price-range", "label": "Mức giá", "type": "RANGE" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    // LEVEL 3 thuộc Computers
    {
        "_id": ObjectId("000000000000000000000301"),
        "slug": "laptops",
        "title": "Laptops",
        "description": "Máy tính xách tay văn phòng, gaming, đồ họa và cao cấp.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000201"),
        "level": 3,
        "sortOrder": 1,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "So Sánh Laptops Cấu Hình Cao | Đánh Giá Chi Tiết Nhất",
            "metaDescription": "Nơi so sánh thông số kĩ thuật laptop, thời lượng pin, hiệu năng CPU/GPU giúp bạn chọn chiếc máy tối ưu nhất.",
            "keywords": ["laptop gaming", "laptop văn phòng", "mua laptop nào"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "price-range", "label": "Mức giá", "type": "RANGE" },
            { "key": "cpu", "label": "Vi xử lý (CPU)", "type": "SELECT" },
            { "key": "ram-capacity", "label": "Dung lượng RAM", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000302"),
        "slug": "mini-pcs",
        "title": "Mini PCs",
        "description": "Máy tính mini nhỏ gọn tiết kiệm không gian làm việc.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000201"),
        "level": 3,
        "sortOrder": 2,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Tư Vấn Chọn Mini PC Siêu Nhỏ Gọn Cho Bàn Làm Việc",
            "metaDescription": "So sánh các dòng Mini PC hiệu năng cao, tản nhiệt tốt, tiết kiệm điện cho dân lập trình và văn phòng.",
            "keywords": ["mini pc", "máy tính siêu nhỏ", "asrock deskmini"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "cpu", "label": "Dòng CPU", "type": "SELECT" },
            { "key": "barebone", "label": "Loại Barebone/Sẵn RAM", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000303"),
        "slug": "monitors",
        "title": "Monitors",
        "description": "Màn hình máy tính chuyên đồ họa, lập trình, văn phòng và chơi game.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000201"),
        "level": 3,
        "sortOrder": 3,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "So Sánh Màn Hình Máy Tính Đồ Họa & Gaming Chính Hãng",
            "metaDescription": "Phân tích độ phủ màu sRGB, tần số quét Hz, tấm nền IPS/OLED giúp bạn tìm ra chiếc màn hình ưng ý.",
            "keywords": ["màn hình đồ họa", "màn hình 4k", "tần số quét màn hình"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "resolution", "label": "Độ phân giải", "type": "SELECT" },
            { "key": "refresh-rate", "label": "Tần số quét", "type": "SELECT" },
            { "key": "panel-type", "label": "Tấm nền", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000304"),
        "slug": "external-storage",
        "title": "External Storage",
        "description": "Ổ cứng di động, USB, thẻ nhớ và các hộp đựng ổ cứng di động.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000201"),
        "level": 3,
        "sortOrder": 4,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Ổ Cứng Di Động Tốc Độ Cao & Box HDD Tốt Nhất",
            "metaDescription": "Đánh giá tốc độ đọc ghi, độ bền bỉ của các dòng SSD di động, Box ổ cứng lưu trữ cắm ngoài.",
            "keywords": ["ổ cứng di động", "box hdd s d", "usb tốc độ cao"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "capacity", "label": "Dung lượng chứa", "type": "SELECT" },
            { "key": "interface", "label": "Cổng kết nối", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },

    // LEVEL 2: Mobile Devices (ID: ...0202)
    {
        "_id": ObjectId("000000000000000000000202"),
        "slug": "mobile-devices",
        "title": "Mobile Devices",
        "description": "Điện thoại thông minh, máy tính bảng, đồng hồ thông minh và máy đọc sách.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000101"),
        "level": 2,
        "sortOrder": 2,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Thiết Bị Di Động Thông Minh Đáng Mua",
            "metaDescription": "Cập nhật thông số công nghệ các mẫu điện thoại, máy tính bảng, đồng hồ theo dõi sức khỏe mới nhất.",
            "keywords": ["điện thoại", "máy tính bảng", "smartwatch"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "price-range", "label": "Mức giá", "type": "RANGE" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    // LEVEL 3 thuộc Mobile Devices
    {
        "_id": ObjectId("000000000000000000000305"),
        "slug": "smartphones",
        "title": "Smartphones",
        "description": "Điện thoại di động thông minh đa phân khúc.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000202"),
        "level": 3,
        "sortOrder": 1,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "So Sánh Cấu Hình Điện Thoại Thông Minh | Đánh Giá Pin & Camera",
            "metaDescription": "Nơi bóc tách chi tiết hiệu năng vi xử lý di động, chất lượng màn hình và camera chụp ảnh.",
            "keywords": ["điện thoại thông minh", "smartphone giá rẻ", "so sánh camera điện thoại"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "os", "label": "Hệ điều hành", "type": "SELECT" },
            { "key": "ram", "label": "Dung lượng RAM", "type": "SELECT" },
            { "key": "battery", "label": "Dung lượng Pin", "type": "RANGE" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000306"),
        "slug": "tablets",
        "title": "Tablets",
        "description": "Máy tính bảng phục vụ công việc học tập và giải trí vẽ đồ họa.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000202"),
        "level": 3,
        "sortOrder": 2,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Máy Tính Bảng Ghi Chép, Vẽ Đồ Họa Tốt Nhất",
            "metaDescription": "So sánh các dòng iPad, Android tablet kèm bút cảm ứng tối ưu cho học tập, làm việc di động.",
            "keywords": ["máy tính bảng", "ipad cho sinh viên", "tablet vẽ đồ họa"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "screen-size", "label": "Kích thước màn hình", "type": "SELECT" },
            { "key": "stylus-support", "label": "Hỗ trợ bút cảm ứng", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000307"),
        "slug": "smartwatches",
        "title": "Smartwatches",
        "description": "Đồng hồ thông minh và vòng đeo tay theo dõi sức khỏe thể thao.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000202"),
        "level": 3,
        "sortOrder": 3,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Đồng Hồ Thông Minh Đo Sức Khỏe & Chạy Bộ Chuyên Sâu",
            "metaDescription": "So sánh thời lượng pin, cảm biến đo nhịp tim, định vị GPS của các dòng Smartwatch phổ biến.",
            "keywords": ["đồng hồ thông minh", "vòng đeo tay sức khỏe", "smartwatch chạy bộ"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "compatibility", "label": "Tương thích hệ điều hành", "type": "SELECT" },
            { "key": "battery-life", "label": "Thời lượng pin", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000308"),
        "slug": "e-readers",
        "title": "E-readers",
        "description": "Máy đọc sách màn hình E-Ink bảo vệ mắt.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000202"),
        "level": 3,
        "sortOrder": 4,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Máy Đọc Sách E-Ink Chống Mỏi Mắt Đáng Mua Nhất",
            "metaDescription": "Đánh giá chi tiết các dòng máy đọc sách chuyên dụng, thời lượng pin chờ hàng tuần liền.",
            "keywords": ["máy đọc sách", "kindle chính hãng", "màn hình e-ink"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "screen-size", "label": "Kích thước màn hình", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },

    // LEVEL 2: Audio (ID: ...0203)
    {
        "_id": ObjectId("000000000000000000000203"),
        "slug": "audio",
        "title": "Audio",
        "description": "Thiết bị âm thanh nghe nhạc, giải trí cá nhân và gia đình.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000101"),
        "level": 2,
        "sortOrder": 3,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Thiết Bị Âm Thanh Đỉnh Cao | Tai Nghe & Loa",
            "metaDescription": "Đánh giá chất lượng âm thanh, dải tần số, chip giải mã âm thanh DAC âm thanh chất lượng cao.",
            "keywords": ["thiết bị âm thanh", "tai nghe bluetooth", "loa máy tính"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "price-range", "label": "Mức giá", "type": "RANGE" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    // LEVEL 3 thuộc Audio
    {
        "_id": ObjectId("000000000000000000000309"),
        "slug": "headphones",
        "title": "Headphones",
        "description": "Tai nghe chụp tai trùm đầu Over-ear và On-ear.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000203"),
        "level": 3,
        "sortOrder": 1,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Tai Nghe Chụp Tai Chống Ồn Chủ Động Cao Cấp",
            "metaDescription": "So sánh màng loa, khả năng cách âm cách âm và độ êm ái khi đeo tai nghe chụp tai thời gian dài.",
            "keywords": ["tai nghe chụp tai", "tai nghe over-ear", "tai nghe chống ồn chủ động"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "connection", "label": "Kết nối", "type": "SELECT" },
            { "key": "anc", "label": "Chống ồn ANC", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000310"),
        "slug": "earbuds",
        "title": "Earbuds",
        "description": "Tai nghe nhét tai nhỏ gọn, tai nghe True Wireless.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000203"),
        "level": 3,
        "sortOrder": 2,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Tai Nghe True Wireless Nhỏ Gọn Cho Thể Thao & Đi Làm",
            "metaDescription": "Đánh giá chất lượng micro đàm thoại, độ trễ âm thanh khi chơi game của tai nghe không dây nhỏ gọn.",
            "keywords": ["tai nghe bluetooth nhỏ gọn", "true wireless", "earbuds chống nước"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "waterproof", "label": "Chống nước IPX", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000311"),
        "slug": "speakers",
        "title": "Speakers",
        "description": "Loa máy tính để bàn giải trí, loa bluetooth di động dã ngoại.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000203"),
        "level": 3,
        "sortOrder": 3,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Hệ Thống Loa Vi Tính & Loa Di Động Công Suất Lớn",
            "metaDescription": "So sánh công suất loa (Watts), dải âm bass trầm ấm và khả năng kết nối không dây đa phòng.",
            "keywords": ["loa máy tính bàn", "loa bluetooth di động", "loa bookshelf"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "wattage", "label": "Công suất (Watts)", "type": "RANGE" },
            { "key": "speaker-type", "label": "Phân loại loa", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000312"),
        "slug": "dac-amplifiers",
        "title": "DAC & Amplifiers",
        "description": "Bộ giải mã âm thanh kỹ thuật số và âm ly khuếch đại tín hiệu.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000203"),
        "level": 3,
        "sortOrder": 4,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Bộ Giải Mã Âm Thanh DAC & Amply Chuyên Dụng Hi-Res",
            "metaDescription": "Đánh giá khả năng kéo các tai nghe trở kháng lớn, giải mã âm thanh lossless chất lượng phòng thu.",
            "keywords": ["dac amply rời", "bộ giải mã âm thanh", "soundcard máy tính"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "output-type", "label": "Cổng đầu ra", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },

    // LEVEL 2: Networking (ID: ...0204)
    {
        "_id": ObjectId("000000000000000000000204"),
        "slug": "networking",
        "title": "Networking",
        "description": "Thiết bị mạng nội bộ, định tuyến WiFi, bộ chia mạng và thiết bị lưu trữ NAS.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000101"),
        "level": 2,
        "sortOrder": 4,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Giải Pháp Mạng Nội Bộ & Lưu Trữ Máy Chủ NAS",
            "metaDescription": "Tối ưu hóa băng thông mạng gia đình, lựa chọn thiết bị lưu trữ mạng NAS ổn định cao.",
            "keywords": ["thiết bị mạng", "wifi gia đình", "lưu trữ mạng nas"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "price-range", "label": "Mức giá", "type": "RANGE" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    // LEVEL 3 thuộc Networking
    {
        "_id": ObjectId("000000000000000000000313"),
        "slug": "routers",
        "title": "Routers",
        "description": "Cục phát mạng WiFi định tuyến tiêu chuẩn.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000204"),
        "level": 3,
        "sortOrder": 1,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Cục Phát Router WiFi 6 Tốc Độ Cao, Chịu Tải Tốt",
            "metaDescription": "So sánh băng thông Mbps, số lượng ăng-ten phát sóng xuyên tường của router mạng hiện đại.",
            "keywords": ["cục phát wifi", "router wifi 6", "router xuyên tường tốt"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "wifi-standard", "label": "Chuẩn WiFi", "type": "SELECT" },
            { "key": "lan-speed", "label": "Tốc độ cổng LAN", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000314"),
        "slug": "mesh-wifi",
        "title": "Mesh WiFi",
        "description": "Hệ thống mạng không dây dạng lưới phủ sóng diện tích rộng nhà nhiều tầng.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000204"),
        "level": 3,
        "sortOrder": 2,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Hệ Thống Mạng Mesh WiFi Xóa Điểm Chết Sóng Nhà Tầng",
            "metaDescription": "Tư vấn cấu hình mạng mesh không góc chết, tự động chuyển vùng mượt mà cho biệt thự, nhà ống.",
            "keywords": ["mạng lưới mesh wifi", "kết nối không dây nhà tầng", "kích sóng wifi"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "pack-size", "label": "Số lượng node đóng gói", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000315"),
        "slug": "switches",
        "title": "Switches",
        "description": "Bộ chia cổng mạng dây LAN tốc độ cao.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000204"),
        "level": 3,
        "sortOrder": 3,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Switch Chia Cổng Mạng LAN 1Gbps / 2.5Gbps Mượt Mà",
            "metaDescription": "Đánh giá độ trễ tín hiệu, khả năng cấp nguồn PoE của các dòng Switch chia mạng chuyên dụng.",
            "keywords": ["bộ chia cổng mạng lan", "switch chia cổng", "switch poe camera"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "port-count", "label": "Số lượng cổng cắm", "type": "SELECT" },
            { "key": "poe-support", "label": "Hỗ trợ cấp nguồn PoE", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000316"),
        "slug": "nas",
        "title": "NAS",
        "description": "Thiết bị lưu trữ dữ liệu đám mây cá nhân kết nối mạng nội bộ.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000204"),
        "level": 3,
        "sortOrder": 4,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Ổ Cứng Mạng Cực Khủng NAS | Lưu Trữ Dữ Liệu An Toàn Tuyệt Đối",
            "metaDescription": "So sánh thông số ổ cứng lưu trữ mạng NAS Synology, cấu hình phần cứng chạy ảo hóa Docker cá nhân.",
            "keywords": ["ổ cứng mạng mạng nas", "lưu trữ đám mây cá nhân", "synology chính hãng"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "bay-count", "label": "Số khay ổ cứng (Bays)", "type": "SELECT" },
            { "key": "cpu-architecture", "label": "Kiến trúc chip xử lý", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },

    // ==========================================
    // LEVEL 1: PC HARDWARE (ID: ...0102)
    // ==========================================
    {
        "_id": ObjectId("000000000000000000000102"),
        "slug": "pc-hardware",
        "title": "PC Hardware",
        "description": "Linh kiện lắp ráp máy tính để bàn, phụ kiện setup góc máy chuyên nghiệp.",
        "icon": "",
        "parentId": null,
        "level": 1,
        "sortOrder": 2,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Linh Kiện Máy Tính Khủng | Tự Build PC Chuyên Nghiệp",
            "metaDescription": "Kho thông số so sánh CPU, VGA, bo mạch chủ, tản nhiệt giúp bạn tối ưu từng đồng khi tự dựng case máy tính.",
            "keywords": ["linh kiện lắp máy tính", "phần cứng pc", "tự build máy tính bàn"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "price-range", "label": "Mức giá", "type": "RANGE" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    // LEVEL 2: Core Components (ID: ...0205)
    {
        "_id": ObjectId("000000000000000000000205"),
        "slug": "core-components",
        "title": "Core Components",
        "description": "Các linh kiện cốt lõi quyết định trực tiếp đến hiệu năng xử lý của PC.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000102"),
        "level": 2,
        "sortOrder": 1,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Bộ Tứ Linh Kiện Cốt Lõi Quyết Định Sức Mạnh PC",
            "metaDescription": "Đánh giá sức mạnh vi xử lý CPU, card đồ họa rời VGA, dung lượng băng thông RAM và bo mạch chủ.",
            "keywords": ["bộ não máy tính cpu", "card màn hình rời vga", "ram ddr5"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    // LEVEL 3 thuộc Core Components
    {
        "_id": ObjectId("000000000000000000000317"),
        "slug": "cpus",
        "title": "CPUs",
        "description": "Bộ vi xử lý trung tâm của máy tính để bàn (Intel & AMD).",
        "icon": "",
        "parentId": ObjectId("000000000000000000000205"),
        "level": 3,
        "sortOrder": 1,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "So Sánh Chip Vi Xử Lý CPU Intel vs AMD Chi Tiết Điểm Số Benchmarks",
            "metaDescription": "Bảng đối chiếu số nhân, số luồng, xung nhịp đơn nhân và điện năng tiêu thụ của chip máy tính mới nhất.",
            "keywords": ["chip vi xử lý cpu", "intel core i7", "amd ryzen 7"]
        },
        "filters": [
            { "key": "brand", "label": "Nhà sản xuất", "type": "SELECT" },
            { "key": "cores", "label": "Số nhân xử lý", "type": "SELECT" },
            { "key": "socket", "label": "Chuẩn Socket chân cắm", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000318"),
        "slug": "gpus",
        "title": "GPUs",
        "description": "Card màn hình đồ họa rời chuyên render thiết kế và chơi game nặng.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000205"),
        "level": 3,
        "sortOrder": 2,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "So Sánh Hiệu Năng Card Đồ Họa Độc Lập VGA Mới Nhất",
            "metaDescription": "Nơi chấm điểm FPS thực tế game nặng, dung lượng bộ nhớ VRAM của card màn hình NVIDIA RTX, AMD Radeon.",
            "keywords": ["card đồ họa vga", "nvidia geforce rtx", "vram đồ họa chuyên nghiệp"]
        },
        "filters": [
            { "key": "brand", "label": "Chip đồ họa", "type": "SELECT" },
            { "key": "vram-capacity", "label": "Dung lượng VRAM", "type": "SELECT" },
            { "key": "power-draw", "label": "Công suất tiêu thụ (Watts)", "type": "RANGE" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000319"),
        "slug": "motherboards",
        "title": "Motherboards",
        "description": "Bo mạch chủ kết nối toàn bộ hệ thống linh kiện phần cứng.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000205"),
        "level": 3,
        "sortOrder": 3,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Bo Mạch Chủ Máy Tính Chính Hãng | Phân Tích Chipset",
            "metaDescription": "Đánh giá chất lượng dàn cấp điện VRM bo mạch chủ, khả năng hỗ trợ ép xung linh kiện mượt mà.",
            "keywords": ["bo mạch chủ mainboard", "chipset intel amd", "kích thước bo mạch chủ itx atx"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "form-factor", "label": "Kích thước bo mạch", "type": "SELECT" },
            { "key": "chipset", "label": "Dòng Chipset tích hợp", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000320"),
        "slug": "ram",
        "title": "RAM",
        "description": "Bộ nhớ truy cập dữ liệu ngẫu nhiên tạm thời hệ thống máy tính.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000205"),
        "level": 3,
        "sortOrder": 4,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Băng Thông Thanh Nhớ RAM DDR4 vs DDR5 Tốc Độ Cao",
            "metaDescription": "So sánh bus giao tiếp MHz, độ trễ thanh nhớ CAS Latency (CL) để tối ưu luồng chạy đa nhiệm máy tính.",
            "keywords": ["thanh nhớ ram ddr5", "bus ram bao nhiêu tốt", "ram máy tính bàn kit đôi"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "ram-type", "label": "Chuẩn chân RAM", "type": "SELECT" },
            { "key": "capacity", "label": "Tổng dung lượng kit", "type": "SELECT" },
            { "key": "speed-mhz", "label": "Tốc độ xung nhịp Bus (MHz)", "type": "RANGE" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },

    // LEVEL 2: Storage & Power (ID: ...0206)
    {
        "_id": ObjectId("000000000000000000000206"),
        "slug": "storage-power",
        "title": "Storage & Power",
        "description": "Ổ lưu trữ gắn trong, bộ nguồn cung cấp điện năng và bộ lưu điện dự phòng an toàn.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000102"),
        "level": 2,
        "sortOrder": 2,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Lưu Trữ Tốc Độ Cao & Giải Pháp Nguồn Điện PC Ổn Định",
            "metaDescription": "Lựa chọn ổ cứng thể rắn siêu tốc, bộ cấp nguồn máy tính đạt chứng nhận chuẩn 80 Plus tin cậy.",
            "keywords": ["ổ cứng thể rắn s d trong", "nguồn máy tính ổn định", "lưu điện dự phòng ups"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    // LEVEL 3 thuộc Storage & Power
    {
        "_id": ObjectId("000000000000000000000321"),
        "slug": "ssds",
        "title": "SSDs",
        "description": "Ổ cứng thể rắn gắn trong tốc độ đọc ghi dữ liệu siêu tốc.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000206"),
        "level": 3,
        "sortOrder": 1,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Ổ Cứng Thể Rắn SSD NVMe PCIe Gen 4 / Gen 5 Siêu Tốc",
            "metaDescription": "So sánh chip nhớ TLC/QLC, tốc độ đọc ghi liên tục IOPS và độ bền ghi chép TBW của ổ cứng SSD gắn trong.",
            "keywords": ["ổ cứng thể rắn ssd nvme", "ssd pcie gen 4", "ổ cứng ssd gắn trong máy tính"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "form-factor", "label": "Chuẩn khe cắm", "type": "SELECT" },
            { "key": "capacity", "label": "Dung lượng ổ cứng", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000322"),
        "slug": "hdds",
        "title": "HDDs",
        "description": "Ổ cứng cơ khí lưu trữ dung lượng lớn, độ bền lưu kho dữ liệu lâu dài.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000206"),
        "level": 3,
        "sortOrder": 2,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Ổ Cứng Cơ Khí HDD Dung Lượng Khủng Cho Lưu Kho Dữ Liệu",
            "metaDescription": "So sánh công nghệ ghi đĩa CMR vs SMR, tốc độ vòng quay vòng/phút giúp ổ cứng lưu trữ an toàn dài lâu.",
            "keywords": ["ổ cứng cơ khí hdd gắn trong", "ổ cứng cmr chuyên dụng", "ổ cứng lưu trữ cameranas"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "rpm", "label": "Tốc độ vòng quay (RPM)", "type": "SELECT" },
            { "key": "capacity", "label": "Dung lượng chứa", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000323"),
        "slug": "psus",
        "title": "PSUs",
        "description": "Bộ nguồn cung cấp năng lượng điện ổn định cho toàn bộ case PC.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000206"),
        "level": 3,
        "sortOrder": 3,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Bộ Nguồn Máy Tính PSU Chuẩn 80 Plus Vàng Gánh Card Khủng",
            "metaDescription": "Tư vấn tính toán tổng công suất tiêu thụ phần cứng, lựa chọn nguồn máy tính chống cháy nổ linh kiện.",
            "keywords": ["bộ nguồn máy tính psu", "nguồn chuẩn 80 plus gold", "nguồn modular rời dây"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "wattage", "label": "Tổng công suất điện (Watts)", "type": "RANGE" },
            { "key": "efficiency", "label": "Chứng chỉ chuyển đổi điện năng", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000324"),
        "slug": "ups",
        "title": "UPS",
        "description": "Bộ tích điện dự phòng bảo vệ an toàn cho PC và máy chủ NAS khi sập nguồn.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000206"),
        "level": 3,
        "sortOrder": 4,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Bộ Lưu Điện Dự Phòng UPS Sóng Sin Chuẩn Bảo Vệ Dữ Liệu",
            "metaDescription": "Đánh giá thời gian xả pin cứu hộ điện, công suất cổng tải VA của các dòng UPS máy chủ gia đình tốt nhất.",
            "keywords": ["bộ lưu điện dự phòng ups", "tích điện máy tính nas", "bộ tích điện cứu hộ"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "capacity-va", "label": "Công suất cổng tải (VA)", "type": "RANGE" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },

    // LEVEL 2: Cooling (ID: ...0207)
    {
        "_id": ObjectId("000000000000000000000207"),
        "slug": "cooling",
        "title": "Cooling",
        "description": "Hệ thống tản nhiệt khí, tản nhiệt nước và các phụ kiện làm mát tối ưu nhiệt độ PC.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000102"),
        "level": 2,
        "sortOrder": 3,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Hệ Thống Tản Nhiệt Toàn Diện | Giảm Nhiệt CPU Ép Xung",
            "metaDescription": "Giải pháp giải nhiệt tối ưu cho case máy tính giúp tăng tuổi thọ phần cứng, chạy êm ái không tiếng ồn.",
            "keywords": ["tản nhiệt máy tính chuyên dụng", "làm mát case pc", "keo tản nhiệt cpu"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    // LEVEL 3 thuộc Cooling
    {
        "_id": ObjectId("000000000000000000000325"),
        "slug": "air-coolers",
        "title": "Air Coolers",
        "description": "Tháp tản nhiệt làm mát bằng quạt khí truyền thống độ bền bỉ cao.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000207"),
        "level": 3,
        "sortOrder": 1,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Tháp Tản Nhiệt Khí Tháp Đôi Siêu Bền Bỉ Cho CPU",
            "metaDescription": "So sánh số lượng ống đồng dẫn nhiệt, độ ồn quạt làm mát của các dòng tản nhiệt khí quốc dân.",
            "keywords": ["tháp tản nhiệt khí cpu", "tản nhiệt khí tháp đôi", "quạt làm mát gió đồng"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "fan-size", "label": "Kích thước quạt thổi", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000326"),
        "slug": "aio-liquid-coolers",
        "title": "AIO Liquid Coolers",
        "description": "Hệ thống tản nhiệt chất lỏng tuần hoàn khép kín hiệu năng giải nhiệt cao.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000207"),
        "level": 3,
        "sortOrder": 2,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Tản Nhiệt Nước Toàn Diện AIO Két Nước 240mm / 360mm",
            "metaDescription": "Đánh giá độ bền bỉ của bơm đẩy nước, hiệu năng gom nhiệt mát lạnh cho các dòng CPU ăn nhiều điện.",
            "keywords": ["tản nhiệt nước toàn diện aio", "rad tản nhiệt nước 360", "làm mát chất lỏng khép kín"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "radiator-size", "label": "Kích thước Két nước (Rad)", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000327"),
        "slug": "case-fans",
        "title": "Case Fans",
        "description": "Quạt thổi luồng khí lưu thông giải nhiệt lắp quanh vỏ case PC.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000207"),
        "level": 3,
        "sortOrder": 3,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Quạt Case Điều Tốc PWM Thổi Luồng Khí Thông Thoáng",
            "metaDescription": "So sánh lưu lượng gió CFM, áp suất tĩnh quạt thổi đẩy khí nóng ra ngoài tối ưu thùng máy PC.",
            "keywords": ["quạt thùng máy case fan", "quạt điều tốc pwm", "quạt thổi gió lưu thông"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "size", "label": "Kích thước đường kính quạt", "type": "SELECT" },
            { "key": "rgb", "label": "Hỗ trợ đèn LED nhảy màu", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000328"),
        "slug": "thermal-paste",
        "title": "Thermal Paste",
        "description": "Keo dán truyền dẫn nhiệt tiếp xúc giữa bề mặt CPU và khối tản nhiệt.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000207"),
        "level": 3,
        "sortOrder": 4,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Keo Tản Nhiệt Kim Loại Lỏng & Gốm Dẫn Nhiệt Cực Khủng",
            "metaDescription": "So sánh hệ số dẫn nhiệt W/mK của các dòng keo tản nhiệt quốc dân, giúp hạ nhiệt độ CPU tức thì.",
            "keywords": ["keo truyền nhiệt cpu", "hệ số dẫn nhiệt wmk tốt", "tra keo làm mát máy"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "thermal-conductivity", "label": "Hệ số truyền nhiệt (W/mK)", "type": "RANGE" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },

    // LEVEL 2: Cases & Setup (ID: ...0208)
    {
        "_id": ObjectId("000000000000000000000208"),
        "slug": "cases-setup",
        "title": "Cases & Setup",
        "description": "Thùng vỏ máy tính, tay đỡ màn hình di động, phụ kiện giấu dây và đèn trang trí góc làm việc.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000102"),
        "level": 2,
        "sortOrder": 4,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Vỏ Thùng Máy Tính Đẹp & Phụ Kiện Decor Góc Máy Làm Việc",
            "metaDescription": "Tạo dựng góc làm việc tối giản cá tính nhờ tay nâng màn hình tiện lợi, đi dây gọn gàng thẩm mỹ.",
            "keywords": ["thùng máy vỏ case", "tay đỡ màn hình arm", "giấu dây bàn làm việc"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    // LEVEL 3 thuộc Cases & Setup
    {
        "_id": ObjectId("000000000000000000000329"),
        "slug": "pc-cases",
        "title": "PC Cases",
        "description": "Khung vỏ thùng máy lắp đặt chứa gọn toàn bộ linh kiện máy tính máy tính.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000208"),
        "level": 3,
        "sortOrder": 1,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Vỏ Case Máy Tính Bể Cá Kính Cường Lực Hoặc Lưới Lọc Bụi Thông Thoáng",
            "metaDescription": "So sánh khả năng đi dây giấu nguồn, không gian hỗ trợ gắn tản nhiệt nước của vỏ case máy tính để bàn.",
            "keywords": ["vỏ case máy tính để bàn", "case pc mini itx nhỏ gọn", "vỏ thùng máy bể cá kính"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "case-type", "label": "Kích thước hỗ trợ vỏ máy", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000330"),
        "slug": "monitor-arms",
        "title": "Monitor Arms",
        "description": "Giá treo tay đỡ nâng hạ màn hình máy tính linh hoạt tại góc làm việc.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000208"),
        "level": 3,
        "sortOrder": 2,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Tay Đỡ Nâng Màn Hình Arm Thủy Lực Chịu Tải Nặng",
            "metaDescription": "Đánh giá tay nâng màn hình trợ lực lò xo cơ khí, chuyển hướng xoay lật màn hình công thái học giải phóng mặt bàn.",
            "keywords": ["tay nâng đỡ màn hình máy tính", "arm giá treo thủy lực", "tay đỡ kẹp bàn góc máy"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "max-load-kg", "label": "Sức chịu tải tối đa (Kg)", "type": "RANGE" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000331"),
        "slug": "cable-management",
        "title": "Cable Management",
        "description": "Các thiết bị máng giấu dây, dây cuốn gai, hộp đựng ổ điện giúp giấu dây gọn gàng góc máy góc bàn.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000208"),
        "level": 3,
        "sortOrder": 3,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Máng Giấu Dây Bàn Làm Việc Thẩm Mỹ Tối Giản",
            "metaDescription": "Giải pháp kẹp gầm bàn đi dây thông minh, dọn dẹp đống dây điện lộn xộn khuất tầm nhìn an toàn.",
            "keywords": ["máng đi dây giấu điện gầm bàn", "kẹp giữ gọn dây sạc", "setup đi dây tối giản"]
        },
        "filters": [
            { "key": "material", "label": "Chất liệu cốt cấu thành", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000332"),
        "slug": "rgb-accessories",
        "title": "RGB Accessories",
        "description": "Dây đèn LED nhấp nháy, thanh dán sáng đổi màu RGB trang trí góc máy tính.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000208"),
        "level": 3,
        "sortOrder": 4,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Hệ Thống Đèn LED Dán RGB Đồng Bộ Nhịp Điệu Màn Hình",
            "metaDescription": "Trải nghiệm dải đèn thông minh đổi màu nhịp nhàng theo nội dung game hiển thị trên máy tính.",
            "keywords": ["dây đèn led dán rgb trang trí", "đèn đổi màu góc máy bàn", "led nhảy màu đồng bộ máy"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "smart-ecosystem", "label": "Hệ sinh thái đồng bộ app", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },

    // ==========================================
    // LEVEL 1: HOME APPLIANCES (ID: ...0103)
    // ==========================================
    {
        "_id": ObjectId("000000000000000000000103"),
        "slug": "home-appliances",
        "title": "Home Appliances",
        "description": "Thiết bị điện gia dụng gia đình phục vụ dọn dẹp, nhà bếp, giặt là và điều hòa không khí không khí gia đình.",
        "icon": "",
        "parentId": null,
        "level": 1,
        "sortOrder": 3,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Thiết Bị Điện Gia Dụng Thông Minh Cho Gia Đình Hiện Đại",
            "metaDescription": "Nơi tổng hợp so sánh chi tiết công suất, dung tích, tính năng tiết kiệm điện năng các dòng máy gia dụng gia đình.",
            "keywords": ["điện gia dụng thông minh", "thiết bị nhà bếp", "máy gia dụng gia đình"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "price-range", "label": "Mức giá", "type": "RANGE" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    // LEVEL 2: Cleaning (ID: ...0209)
    {
        "_id": ObjectId("000000000000000000000209"),
        "slug": "cleaning",
        "title": "Cleaning",
        "description": "Thiết bị hỗ trợ giải phóng sức lao động quét dọn, hút bụi, lau chùi sàn nhà vệ sinh sàn nhà.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000103"),
        "level": 2,
        "sortOrder": 1,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Giải Pháp Robot Hút Bụi & Lau Sàn Nhà Thông Minh Sạch Sẽ",
            "metaDescription": "Đánh giá chi tiết lực hút Pa, trạm sạc tự đổ rác giặt giẻ tiện lợi của thiết bị hút bụi làm sạch.",
            "keywords": ["thiết bị làm sạch hút bụi", "robot quét lau nhà", "máy hút bụi cầm tay"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    // LEVEL 3 thuộc Cleaning
    {
        "_id": ObjectId("000000000000000000000333"),
        "slug": "robot-vacuums",
        "title": "Robot Vacuums",
        "description": "Robot tự động di chuyển hút bụi và lau sàn nhà.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000209"),
        "level": 3,
        "sortOrder": 1,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Robot Hút Bụi Lau Nhà Tự Giặt Giẻ Sấy Khô Thông Minh",
            "metaDescription": "So sánh cảm biến né vật cản LiDAR, lực hút Pa cực mạnh của dòng robot hút bụi lau nhà phân khúc cao cấp.",
            "keywords": ["robot hút bụi lau sàn nhà", "robot tự giặt giẻ sấy khô", "robot vẽ bản đồ thông minh nhạy"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "suction-power", "label": "Lực hút tối đa (Pa)", "type": "RANGE" },
            { "key": "auto-clean-dock", "label": "Trạm sạc tự đổ rác giặt giẻ", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000334"),
        "slug": "vacuum-cleaners",
        "title": "Vacuum Cleaners",
        "description": "Máy cầm tay hút bụi truyền thống hoặc không dây đa năng.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000209"),
        "level": 3,
        "sortOrder": 2,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Máy Hút Bụi Cầm Tay Không Dây Lực Hút Khủng Siêu Nhẹ",
            "metaDescription": "Đánh giá dung lượng thời lượng xả pin pin máy hút bụi không dây cầm tay, bộ màng lọc mịn Hepa chặn bụi mịn.",
            "keywords": ["máy hút bụi cầm tay không dây", "máy hút bụi giường đệm", "màng lọc bụi mịn hepa"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "power-source", "label": "Nguồn cấp năng lượng", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000335"),
        "slug": "steam-cleaners",
        "title": "Steam Cleaners",
        "description": "Máy làm sạch sàn nhà bằng luồng hơi nước nhiệt độ cao diệt khuẩn tốt.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000209"),
        "level": 3,
        "sortOrder": 3,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Cây Lau Nhà Hơi Nước Nhiệt Độ Cao Diệt Khuẩn Nền Sàn",
            "metaDescription": "So sánh áp suất đẩy hơi nước nóng làm sạch vết dầu mỡ cứng đầu bám sàn nhà không cần hóa chất.",
            "keywords": ["cây lau nhà hơi nước nóng", "máy làm sạch bằng hơi nước", "diệt khuẩn nền sàn nhà gỗ"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "wattage", "label": "Công suất đun (Watts)", "type": "RANGE" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },

    // LEVEL 2: Kitchen (ID: ...0210)
    {
        "_id": ObjectId("000000000000000000000210"),
        "slug": "kitchen",
        "title": "Kitchen",
        "description": "Thiết bị điện máy hỗ trợ đun nấu, chuẩn bị thực phẩm bữa ăn nhà bếp.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000103"),
        "level": 2,
        "sortOrder": 2,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Đồ Điện Gia Dụng Nhà Bếp Nấu Nướng Nhanh Chóng Tiện Lợi",
            "metaDescription": "Tìm hiểu thông số lò chiên không dầu, máy pha cà phê tại nhà tiện dụng chuẩn vị chất lượng cao.",
            "keywords": ["đồ điện nhà bếp đun nấu", "nồi chiên không dầu tốt", "máy pha cà phê gia đình"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    // LEVEL 3 thuộc Kitchen
    {
        "_id": ObjectId("000000000000000000000336"),
        "slug": "air-fryers",
        "title": "Air Fryers",
        "description": "Nồi chiên không khí nóng đối lưu làm chín thực phẩm thực phẩm giảm mỡ.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000210"),
        "level": 3,
        "sortOrder": 1,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Nồi Chiên Không Dầu Dung Tích Lớn Cho Cả Gia Đình",
            "metaDescription": "Đánh giá công nghệ nhiệt đối lưu Rapid Air, lòng nồi phủ chống dính ceramic an toàn sức khỏe tốt.",
            "keywords": ["nồi chiên không dầu đối lưu", "nồi chiên dung tích lớn lít", "lò chiên nướng không dầu"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "capacity-liters", "label": "Dung tích lòng nồi (Lít)", "type": "RANGE" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000337"),
        "slug": "microwaves",
        "title": "Microwaves",
        "description": "Lò vi sóng rã đông hâm nóng thức ăn thức ăn siêu tốc.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000210"),
        "level": 3,
        "sortOrder": 2,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Lò Vi Sóng Có Nướng Đối Lưu Tiết Kiệm Điện Inverter",
            "metaDescription": "So sánh công suất vi sóng, tính năng rã đông thông minh theo trọng lượng thực phẩm chính xác.",
            "keywords": ["lò vi sóng rã đông nhanh", "lò vi sóng kèm nướng", "lò vi sóng tiết kiệm điện"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "control-type", "label": "Bảng điều khiển cơ/điện tử", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000338"),
        "slug": "coffee-machines",
        "title": "Coffee Machines",
        "description": "Máy chiết xuất pha cà phê espresso viên nén hoặc hạt xay tại nhà.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000210"),
        "level": 3,
        "sortOrder": 3,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Máy Pha Cà Phê Espresso Áp Suất Bơm 15 Bar Đậm Vị",
            "metaDescription": "Đánh giá khả năng ổn định nhiệt độ nước pha, vòi đánh bọt sữa mịn làm Cappuccino tại nhà.",
            "keywords": ["máy pha cà phê tại nhà espresso", "máy pha cafe viên nén", "máy pha cà phê tự xay hạt"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "pressure-bar", "label": "Áp suất bơm chiết xuất (Bar)", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000339"),
        "slug": "blenders",
        "title": "Blenders",
        "description": "Máy xay sinh tố, xay đá hạt khô công suất lớn cầm tay cầm tay di động.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000210"),
        "level": 3,
        "sortOrder": 4,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Máy Xay Sinh Tố Lưỡi Dao Thép Không Gỉ Phá Đá Siêu Mịn",
            "metaDescription": "So sánh công suất động cơ máy xay sinh tố đa năng cầm tay, cối thủy tinh chịu lực an toàn cao.",
            "keywords": ["máy xay sinh tố sinh tố đá", "máy xay đa năng cối thủy tinh", "máy xay sinh tố cầm tay nhỏ gọn"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "wattage", "label": "Công suất động cơ (Watts)", "type": "RANGE" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },

    // LEVEL 2: Laundry (ID: ...0211)
    {
        "_id": ObjectId("000000000000000000000211"),
        "slug": "laundry",
        "title": "Laundry",
        "description": "Thiết bị giặt quần áo, sấy khô quần áo và bàn là hơi nước bảo vệ sợi vải sợi vải sạch sẽ.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000103"),
        "level": 2,
        "sortOrder": 3,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Hệ Thống Thiết Bị Giặt Sấy Quần Áo Sạch Khô Thơm Tho",
            "metaDescription": "Phân tích công nghệ giặt lồng ngang inverter tiết kiệm nước, máy sấy quần áo chống nhăn vải hiệu quả.",
            "keywords": ["máy giặt cửa ngang cửa đứng", "máy sấy quần áo thông minh", "bàn là hơi nước đứng quần áo"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    // LEVEL 3 thuộc Laundry
    {
        "_id": ObjectId("000000000000000000000340"),
        "slug": "washing-machines",
        "title": "Washing Machines",
        "description": "Máy giặt quần áo lồng ngang hoặc lồng đứng lồng đứng gia đình.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000211"),
        "level": 3,
        "sortOrder": 1,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Máy Giặt Lồng Ngang Inverter Truyền Động Trực Tiếp Êm Ái",
            "metaDescription": "So sánh sức chứa khối lượng giặt Kg, khả năng giặt hơi nước diệt khuẩn quần áo trẻ em an toàn.",
            "keywords": ["máy giặt lồng ngang cửa trước", "máy giặt truyền động trực tiếp", "khối lượng giặt máy kg"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "load-capacity-kg", "label": "Sức chứa giặt tối đa (Kg)", "type": "RANGE" },
            { "key": "drive-type", "label": "Kiểu động cơ truyền động", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000341"),
        "slug": "dryers",
        "title": "Dryers",
        "description": "Máy sấy khô quần áo chuyên dụng bằng nhiệt gió đối lưu hoặc bơm nhiệt Heatpump.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000211"),
        "level": 3,
        "sortOrder": 2,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Máy Sấy Quần Áo Bơm Nhiệt Heatpump Bảo Vệ Sợi Vải Cao Cấp",
            "metaDescription": "Đánh giá khả năng sấy khô thông minh cảm biến độ ẩm, chống nhăn sợi vải tiết kiệm điện năng.",
            "keywords": ["máy sấy quần áo heatpump", "máy sấy ngưng tụ quần áo", "máy sấy khô vải sợi mềm mại"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "drying-tech", "label": "Công nghệ sấy khô tích hợp", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000342"),
        "slug": "garment-steamers",
        "title": "Garment Steamers",
        "description": "Bàn là hơi nước dạng đứng là phẳng quần áo treo móc treo váy.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000211"),
        "level": 3,
        "sortOrder": 3,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Bàn Là Hơi Nước Đứng Phun Hơi Luồng Mạnh Mẽ Khô Nhanh",
            "metaDescription": "So sánh công suất phun hơi nóng làm phẳng áo sơ mi, váy đầm dạ hội cao cấp không cháy sợi vải.",
            "keywords": ["bàn là hơi nước đứng quần áo", "máy là quần áo dạng đứng treo", "là phẳng áo sơ mi nhanh"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "wattage", "label": "Công suất đun hơi (Watts)", "type": "RANGE" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000343"),
        "slug": "irons",
        "title": "Irons",
        "description": "Bàn là khô hoặc bàn là hơi nước cầm tay kiểu nằm nằm truyền thống.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000211"),
        "level": 3,
        "sortOrder": 4,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Bàn Ủi Cầm Tay Chống Dính Mặt Đế Lướt Mượt Mà",
            "metaDescription": "Đánh giá chất liệu phủ chống dính mặt bàn ủi, khả năng phun hơi nước tăng cường là phẳng nếp gấp ly quần tây.",
            "keywords": ["bàn ủi điện cầm tay nằm", "bàn là chống dính vải", "bàn ủi hơi nước cầm tay mini"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },

    // LEVEL 2: Climate (ID: ...0212)
    {
        "_id": ObjectId("000000000000000000000212"),
        "slug": "climate",
        "title": "Climate",
        "description": "Thiết bị điều hòa nhiệt độ không khí, máy lọc không khí sạch và máy điều chỉnh độ ẩm gia đình.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000103"),
        "level": 2,
        "sortOrder": 4,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Hệ Thống Xử Lý Không Khí & Điều Hòa Nhiệt Độ Môi Trường",
            "metaDescription": "Tối ưu hóa môi trường sống trong lành nhờ máy lọc bụi mịn, máy hút ẩm chống nấm mốc mùa nồm ẩm.",
            "keywords": ["điều hòa nhiệt độ không khí", "máy lọc bụi mịn không khí", "máy hút ẩm mùa nồm"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    // LEVEL 3 thuộc Climate
    {
        "_id": ObjectId("000000000000000000000344"),
        "slug": "air-conditioners",
        "title": "Air Conditioners",
        "description": "Máy điều hòa làm lạnh không khí treo tường gia đình.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000212"),
        "level": 3,
        "sortOrder": 1,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Máy Lạnh Điều Hòa Treo Tường Inverter Tiết Kiệm Điện Vượt Trội",
            "metaDescription": "So sánh công suất làm lạnh BTU tương ứng diện tích mét vuông phòng ngủ, độ ồn cục lạnh hoạt động đêm.",
            "keywords": ["máy điều hòa không khí lạnh", "máy lạnh treo tường inverter", "công suất điều hòa btu phòng"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "cooling-capacity-btu", "label": "Công suất làm lạnh (BTU)", "type": "SELECT" },
            { "key": "inverter", "label": "Công nghệ tiết kiệm điện Inverter", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000345"),
        "slug": "fans",
        "title": "Fans",
        "description": "Quạt điện làm mát dạng cây đứng, quạt bàn hoặc quạt không cánh thông minh.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000212"),
        "level": 3,
        "sortOrder": 2,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Quạt Cây Đứng Điều Khiển Từ Xa Động Cơ DC Êm Ái",
            "metaDescription": "So sánh luồng gió quạt không cánh an toàn trẻ nhỏ, quạt động cơ DC biến tần chạy gió thoảng dịu nhẹ.",
            "keywords": ["quạt cây đứng làm mát gió", "quạt không cánh thông minh", "quạt điện động cơ dc siêu êm"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "fan-type", "label": "Cấu trúc thiết kế quạt", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000346"),
        "slug": "heaters",
        "title": "Heaters",
        "description": "Quạt sưởi ấm mùa đông bằng gốm Ceramic hoặc sưởi dầu ấm bảo vệ da.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000212"),
        "level": 3,
        "sortOrder": 3,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Máy Sưởi Gốm Ceramic Ấm Nhanh Không Đốt Cháy Oxy",
            "metaDescription": "Tư vấn chọn máy sưởi ấm mùa đông an toàn phòng tắm trẻ sơ sinh, sưởi dầu không làm khô ráp bề mặt da.",
            "keywords": ["máy sưởi gốm ceramic ấm phòng", "quạt sưởi ấm mùa đông phòng tắm", "máy sưởi dầu giữ ẩm da tốt"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "heater-tech", "label": "Công nghệ đốt nóng phát sưởi", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000347"),
        "slug": "dehumidifiers",
        "title": "Dehumidifiers",
        "description": "Máy hút hơi ẩm không khí ngưng tụ bảo vệ đồ gỗ mùa nồm.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000212"),
        "level": 3,
        "sortOrder": 4,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Máy Hút Ẩm Không Khí Cân Bằng Độ Ẩm Chống Mốc Sàn",
            "metaDescription": "Đánh giá công suất hút ẩm lít/ngày, tính năng sấy quần áo khô ráo nhanh của máy hút ẩm gia đình.",
            "keywords": ["máy hút ẩm không khí khô sàn", "máy hút ẩm chống mốc tường", "công suất hút ẩm lít ngày phòng"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "capacity-per-day", "label": "Công suất hút (Lít/Ngày)", "type": "RANGE" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000348"),
        "slug": "air-purifiers",
        "title": "Air Purifiers",
        "description": "Máy lọc bụi mịn không khí mang lại bầu không khí trong lành trong phòng.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000212"),
        "level": 3,
        "sortOrder": 5,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Máy Lọc Không Khí Bụi Mịn HEPA H13 Khử Mùi Hôi Hiệu Quả",
            "metaDescription": "So sánh màng lọc carbon khử mùi khói thuốc thú cưng, chỉ số lưu lượng không khí sạch CADR phòng sinh hoạt.",
            "keywords": ["máy lọc không khí bụi mịn", "màng lọc hepa h13 chính hãng", "chỉ số lọc khí sạch cadr"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "coverage-area", "label": "Diện tích phòng đáp ứng (m2)", "type": "RANGE" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },

    // ==========================================
    // LEVEL 1: FURNITURE (ID: ...0104)
    // ==========================================
    {
        "_id": ObjectId("000000000000000000000104"),
        "slug": "furniture",
        "title": "Furniture",
        "description": "Sản phẩm nội thất công thái học văn phòng, nội thất phòng ngủ, phòng khách và giải pháp chiếu sáng trang trí.",
        "icon": "",
        "parentId": null,
        "level": 1,
        "sortOrder": 4,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Nội Thất Công Thái Học & Trang Trí Nhà Cửa Tối Giản",
            "metaDescription": "Bảng so sánh kích thước chịu lực, chất liệu vải lưới thông thoáng của nội thất bảo vệ sức khỏe cột sống.",
            "keywords": ["nội thất nhà ở tối giản", "nội thất công thái học tốt", "decor không gian phòng làm việc"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "price-range", "label": "Mức giá", "type": "RANGE" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    // LEVEL 2: Office Furniture (ID: ...0213)
    {
        "_id": ObjectId("000000000000000000000213"),
        "slug": "office-furniture",
        "title": "Office Furniture",
        "description": "Nội thất chuyên dụng văn phòng góc làm việc tại nhà bảo vệ tư thế ngồi đúng tư thế đúng.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000104"),
        "level": 2,
        "sortOrder": 1,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Nội Thất Phòng Làm Việc Công Thái Học Đỉnh Cao",
            "metaDescription": "Tư vấn setup trọn bộ ghế ngồi lưới thông thoáng, bàn thông minh nâng hạ thay đổi tư thế linh hoạt chống mỏi.",
            "keywords": ["nội thất văn phòng công thái học", "ghế ngồi bảo vệ cột sống", "bàn nâng hạ thông minh"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    // LEVEL 3 thuộc Office Furniture
    {
        "_id": ObjectId("000000000000000000000349"),
        "slug": "ergonomic-chairs",
        "title": "Ergonomic Chairs",
        "description": "Ghế công thái học điều chỉnh đa điểm hỗ trợ thắt lưng giảm đau mỏi lưng đau lưng mỏi cổ.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000213"),
        "level": 3,
        "sortOrder": 1,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Ghế Công Thái Học Đỡ Thắt Lưng Chống Đau Lưng Ngồi Lâu",
            "metaDescription": "So sánh cơ chế ngả lưng đệm lưới, bệ tỳ tay 3D/4D của các thương hiệu ghế Sihoo, GTChair cao cấp.",
            "keywords": ["ghế ngồi công thái học tốt", "ghế lưới đỡ thắt lưng mỏi", "so sánh ghế văn phòng chống đau"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "mesh-material", "label": "Chất liệu lưới bề mặt bọc", "type": "SELECT" },
            { "key": "armrest-type", "label": "Cấu trúc bệ tỳ tay tay đỡ", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000350"),
        "slug": "standing-desks",
        "title": "Standing Desks",
        "description": "Bàn làm việc thay đổi chiều cao nâng hạ bằng động cơ điện thông minh.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000213"),
        "level": 3,
        "sortOrder": 2,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Bàn Nâng Hạ Thông Minh Thay Đổi Tư Thế Đứng Làm Việc",
            "metaDescription": "Đánh giá chân bàn động cơ kép chịu tải nặng di chuyển êm ái, bộ nhớ vị trí chiều cao lập trình sẵn.",
            "keywords": ["bàn nâng hạ động cơ điện", "bàn đứng làm việc thông minh", "chân bàn sắt hộp nâng hạ cao"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "motor-count", "label": "Số lượng động cơ nâng", "type": "SELECT" },
            { "key": "max-weight-load", "label": "Tải trọng chịu lực mặt bàn (Kg)", "type": "RANGE" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000351"),
        "slug": "monitor-stands",
        "title": "Monitor Stands",
        "description": "Kệ gỗ hoặc giá kê nâng cao góc nhìn màn hình máy tính để bàn.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000213"),
        "level": 3,
        "sortOrder": 3,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Kệ Gỗ Kê Màn Hình Góc Máy Setup Tối Giản Tự Nhiên",
            "metaDescription": "Tối ưu hóa tầm nhìn ngang mắt cằm, tạo không gian trống giấu bàn phím gọn gàng dưới chân kệ.",
            "keywords": ["kệ gỗ nâng màn hình máy tính", "giá kê màn hình để bàn làm", "kệ kê thớt gỗ sồi setup"]
        },
        "filters": [
            { "key": "material", "label": "Cốt chất liệu tạo hình", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000352"),
        "slug": "storage-cabinets",
        "title": "Storage Cabinets",
        "description": "Tủ tài liệu di động ba ngăn kéo dưới gầm bàn gầm bàn làm việc.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000213"),
        "level": 3,
        "sortOrder": 4,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Tủ Tài Liệu Khóa Ba Ngăn Kéo Di Động Gầm Bàn",
            "metaDescription": "Đánh giá chất liệu thép sơn tĩnh điện, bánh xe di chuyển mượt mà tủ hộc đựng tài liệu văn phòng cá nhân.",
            "keywords": ["tủ hộc ngăn kéo di động gầm", "tủ sắt đựng hồ sơ cá nhân", "tủ khóa ba ngăn văn phòng"]
        },
        "filters": [
            { "key": "material", "label": "Chất liệu vỏ khung tủ", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },

    // LEVEL 2: Bedroom (ID: ...0214)
    {
        "_id": ObjectId("000000000000000000000214"),
        "slug": "bedroom",
        "title": "Bedroom",
        "description": "Nội thất giường ngủ, nệm cao su non nâng đỡ, tủ quần áo phòng ngủ ấm cúng thoải mái.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000104"),
        "level": 2,
        "sortOrder": 2,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Nội Thất Phòng Ngủ Thoải Mái | Đệm Cao Su Nâng Đỡ Cột Sống",
            "metaDescription": "Lựa chọn dòng nệm cao su tự nhiên nâng đỡ đốt sống cổ lưng êm ái ngủ sâu giấc ngủ ngon lành.",
            "keywords": ["nội thất không gian giường phòng ngủ", "đệm cao su tự nhiên thiên", "khung giường ngủ chắc chắn"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    // LEVEL 3 thuộc Bedroom
    {
        "_id": ObjectId("000000000000000000000353"),
        "slug": "mattresses",
        "title": "Mattresses",
        "description": "Nệm cao su tự nhiên, nệm lò xo túi độc lập nâng đỡ giấc ngủ ngon.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000214"),
        "level": 3,
        "sortOrder": 1,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Nệm Cao Su Thiên Nhiên Độ Đàn Hồi Cao Chống Đau Vai",
            "metaDescription": "So sánh nệm cao su foam hoạt tính đàn hồi tốt, nệm lò xo túi độc lập không rung lắc khi xoay người.",
            "keywords": ["nệm cao su thiên nhiên êm", "nệm lò xo túi độc lập giảm chấn", "nệm chống đau mỏi cột sống vùng"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "material", "label": "Chất liệu đệm lõi", "type": "SELECT" },
            { "key": "thickness-cm", "label": "Độ dày bề mặt nệm (Cm)", "type": "RANGE" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000354"),
        "slug": "bed-frames",
        "title": "Bed Frames",
        "description": "Giường ngủ khung sắt bọc da hoặc khung gỗ sồi chắc chắn chịu lực tốt.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000214"),
        "level": 3,
        "sortOrder": 2,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Khung Giường Gỗ Sồi Chắc Chắn Không Tiếng Cót Két",
            "metaDescription": "Đánh giá kết cấu giát giường chịu lực nặng tải, khung giường bọc da cao cấp tối giản phòng ngủ ngủ.",
            "keywords": ["khung giường ngủ chắc chắn gỗ", "giường sắt hộp sơn tĩnh điện", "giường bọc da tối giản sang"]
        },
        "filters": [
            { "key": "material", "label": "Chất liệu cấu thành khung", "type": "SELECT" },
            { "key": "size", "label": "Kích thước lòng giường rộng", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000355"),
        "slug": "wardrobes",
        "title": "Wardrobes",
        "description": "Tủ lớn chứa đựng bảo quản quần áo phòng ngủ cánh lùa tiện ích.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000214"),
        "level": 3,
        "sortOrder": 3,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Tủ Quần Áo Gỗ Công Nghiệp Cánh Lùa Tiết Kiệm Không Gian",
            "metaDescription": "So sánh ngăn chia phân bổ hộc tủ quần áo hợp lý, bản lề giảm chấn mở đóng êm mượt không tiếng động.",
            "keywords": ["tủ đựng quần áo phòng ngủ", "tủ cánh lùa kịch trần gọn", "tủ mdf chống ẩm mốc vải"]
        },
        "filters": [
            { "key": "material", "label": "Cốt gỗ bề mặt phủ", "type": "SELECT" },
            { "key": "door-type", "label": "Cơ chế mở cánh cửa tủ", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000356"),
        "slug": "nightstands",
        "title": "Nightstands",
        "description": "Tủ kệ nhỏ kê đầu giường chứa đồ cá nhân tiện lợi đèn ngủ.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000214"),
        "level": 3,
        "sortOrder": 4,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Tab Đẩu Giường Kệ Nhỏ Để Đèn Sạc Điện Thoại Tiện Lợi",
            "metaDescription": "Đánh giá thiết bị tủ nhỏ đầu giường bọc da mộc mạc, thiết kế có ngăn kéo nhỏ chứa đồ kín đáo.",
            "keywords": ["tab kệ nhỏ để đầu giường", "tủ mini phòng ngủ đèn", "kệ gỗ sồi nhỏ đầu giường"]
        },
        "filters": [
            { "key": "material", "label": "Chất liệu hoàn thiện bề mặt", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },

    // LEVEL 2: Living Room (ID: ...0215)
    {
        "_id": ObjectId("000000000000000000000215"),
        "slug": "living-room",
        "title": "Living Room",
        "description": "Nội thất không gian phòng khách, ghế sofa đón khách êm ái, kệ tivi vững chãi thẩm mỹ.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000104"),
        "level": 2,
        "sortOrder": 3,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Nội Thất Phòng Khách Sang Trọng Hiện Đại Gắn Kết",
            "metaDescription": "Nâng tầm không gian sống gia đình nhờ sofa da cao cấp, bàn trà mặt đá chống trầy xước dễ lau lau.",
            "keywords": ["nội thất phòng khách đẹp", "bộ ghế sofa gia đình đón", "kệ tivi gỗ tự nhiên phòng"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    // LEVEL 3 thuộc Living Room
    {
        "_id": ObjectId("000000000000000000000357"),
        "slug": "sofas",
        "title": "Sofas",
        "description": "Băng ghế dài bọc nỉ hoặc da ngồi đón khách gia đình thư giãn.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000215"),
        "level": 3,
        "sortOrder": 1,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Ghế Sofa Băng Dài Bọc Vải Nỉ Thô Chống Lún Đệm Mút",
            "metaDescription": "So sánh mút lò xo đàn hồi chống xẹp lún sofa da phòng khách, chất liệu vải nỉ chống bám bụi bẩn dơ.",
            "keywords": ["ghế sofa băng dài phòng khách", "sofa chữ L bọc da mịn", "sofa nỉ chống lún mút êm"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "material", "label": "Bề mặt bọc đệm sofa", "type": "SELECT" },
            { "key": "shape", "label": "Kiểu dáng kết cấu hình", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000358"),
        "slug": "tv-consoles",
        "title": "TV Consoles",
        "description": "Kệ dài tủ đặt nâng tivi màn hình lớn vững chãi chịu lực lực tốt.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000215"),
        "level": 3,
        "sortOrder": 2,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Kệ Tivi Mặt Đá Cường Lực Sang Trọng Chống Trầy Xước",
            "metaDescription": "Đánh giá chiều dài kệ tivi gỗ sồi tự nhiên, thiết kế có lỗ giấu luồn dây cáp điện thiết bị âm amply sạch sẽ.",
            "keywords": ["kệ gỗ tivi phòng khách đẹp", "tủ kệ đặt màn hình tivi lớn", "kệ tivi rút chiều dài thông minh"]
        },
        "filters": [
            { "key": "material", "label": "Chất liệu cốt thân tủ kệ", "type": "SELECT" },
            { "key": "length-range", "label": "Chiều dài tủ (Mét)", "type": "RANGE" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000359"),
        "slug": "coffee-tables",
        "title": "Coffee Tables",
        "description": "Bàn trà nhỏ thấp đặt giữa sofa tiếp nước trò chuyện chuyện.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000215"),
        "level": 3,
        "sortOrder": 3,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Bàn Trà Sofa Mặt Đá Tròn Đôi Khung Chân Sắt Vàng",
            "metaDescription": "So sánh bàn trà mặt kính chịu lực dễ vệ lau sạch lau, kết cấu bàn trà tròn đôi thu gọn diện tích nhỏ phòng khách.",
            "keywords": ["bàn trà sofa phòng khách nhỏ", "bàn sofa tròn đôi đá", "bàn uống nước mặt kính trà"]
        },
        "filters": [
            { "key": "material", "label": "Bề mặt chất liệu mặt bàn", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000360"),
        "slug": "recliners",
        "title": "Recliners",
        "description": "Ghế sofa đơn lười thư giãn có cơ chế nâng ngả ngả chân lưng cơ khí.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000215"),
        "level": 3,
        "sortOrder": 4,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Ghế Sofa Đơn Lười Thư Giãn Đọc Sách Xem Phim Êm Ái",
            "metaDescription": "Đánh giá trục xoay bập bênh bọc vải da êm mịn, cơ chế ngả phẳng chân thư giãn cột sống mệt mỏi.",
            "keywords": ["ghế sofa lười đơn ngả chân", "ghế bập bênh đọc sách thư", "ghế tựa lưng đơn êm ái phòng"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "mechanism", "label": "Cơ chế vận hành ngả lưng", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },

    // LEVEL 2: Lighting (ID: ...0216)
    {
        "_id": ObjectId("000000000000000000000216"),
        "slug": "lighting",
        "title": "Lighting",
        "description": "Đèn bàn bảo vệ mắt làm việc, đèn đứng trang trí góc tối và hệ thống ánh sáng thông minh thông minh điều khiển từ xa.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000104"),
        "level": 2,
        "sortOrder": 4,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Giải Pháp Chiếu Sáng Thông Minh & Đèn Học Bảo Vệ Mắt",
            "metaDescription": "Tối ưu hóa nguồn ánh sáng phòng làm việc chống cận thị cận, thiết kế dải led chiếu sáng nền tạo không khí cảm hứng.",
            "keywords": ["đèn chiếu sáng phòng làm làm", "đèn học chống cận thị mắt", "hệ thông smart lighting đổi màu"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    // LEVEL 3 thuộc Lighting
    {
        "_id": ObjectId("000000000000000000000361"),
        "slug": "desk-lamps",
        "title": "Desk Lamps",
        "description": "Đèn để bàn học tập làm việc có chỉ số hoàn màu CRI cao chống cận chống cận.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000216"),
        "level": 3,
        "sortOrder": 1,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Đèn Kẹp Bàn Làm Việc Chỉ Số Hoàn Màu Cao CRI Thật",
            "metaDescription": "So sánh đèn treo màn hình máy tính giảm chói lóa mắt, quầng sáng tỏa đều không nhấp nháy mỏi mắt.",
            "keywords": ["đèn học kẹp bàn làm việc", "đèn treo màn hình chống chói", "đèn led có chỉ số cri cao"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "cri", "label": "Chỉ số hoàn màu ánh sáng (CRI)", "type": "RANGE" },
            { "key": "lamp-style", "label": "Kiểu dáng lắp đặt cơ khí", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000362"),
        "slug": "floor-lamps",
        "title": "Floor Lamps",
        "description": "Đèn đứng dáng cao chiếu góc tối decor không gian phòng khách làm việc làm việc.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000216"),
        "level": 3,
        "sortOrder": 2,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Đèn Sàn Đứng Góc Tối Decor Phòng Khách Tối Giản Nordic",
            "metaDescription": "Đánh giá chiều cao thân đèn sắt nghệ thuật mộc mạc mộc mạc, chụp đèn tỏa ánh sáng vàng ấm áp góc phòng đọc sách.",
            "keywords": ["đèn đứng sàn góc tường phòng", "đèn sàn decor không gian tối", "đèn đứng bắc âu đọc sách"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000363"),
        "slug": "smart-lighting",
        "title": "Smart Lighting",
        "description": "Bóng đèn điều khiển bằng điện thoại điện thoại, thay đổi nhiệt độ màu sắc linh hoạt linh hoạt.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000216"),
        "level": 3,
        "sortOrder": 3,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Bóng Đèn Thông Minh Đổi Màu Điều Khiển Giọng Nói Từ Xa",
            "metaDescription": "Tích hợp kết nối hệ sinh thái nhà thông minh Apple HomeKit, Google Home điều chỉnh độ sáng Dimmer thuận tiện mượt.",
            "keywords": ["bóng đèn thông minh đổi màu", "đèn led điều khiển bằng app", "smart lighting wifi bluetooth"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" },
            { "key": "smart-ecosystem", "label": "Hệ sinh thái kết nối app", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000364"),
        "slug": "ambient-lighting",
        "title": "Ambient Lighting",
        "description": "Thanh dán đèn sáng nền tạo không khí cảm xúc dịu mắt khi xem tivi ban đêm đêm.",
        "icon": "",
        "parentId": ObjectId("000000000000000000000216"),
        "level": 3,
        "sortOrder": 4,
        "isActive": true,
        "productCount": 0,
        "seo": {
            "metaTitle": "Đèn LED Chiếu Nền Ambient Tạo Không Gian Xem Phim Rạp",
            "metaDescription": "Giảm mỏi điều tiết mắt khi xem màn hình lớn tivi trong bóng tối tối ban đêm nhờ dải ánh sáng hắt tường êm dịu.",
            "keywords": ["đèn led ambient hắt tường tivi", "đèn chiếu nền tạo cảm xúc", "led dán sau lưng màn hình"]
        },
        "filters": [
            { "key": "brand", "label": "Thương hiệu", "type": "SELECT" }
        ],
        "stats": {},
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    }
]);