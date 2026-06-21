const TARGET_DB_NAME = "affiliate-product-catalog";
db = db.getSiblingDB(TARGET_DB_NAME);

db.affiliate.insertOne({
    "_id": ObjectId("000000000000000000000001"),
    "productId": ObjectId("000000000000000000000001"),
    "shopId": ObjectId("000000000000000000000001"),
    "platform": "SHOPEE",
    "originUrl": "https://drive.google.com/drive/my-drive",
    "affiliateUrl": "https://drive.google.com/drive/my-drive",
    "price": 2190000,
    "originalPrice": 2490000,
    "discountPercent": 12,
    "currency": "VND",
    "city": "",
    "country": "vn",
    "stock": 20,
    "sold": 40,
    "rating": 3.7,
    "ratingCount": 38,
    "badges": [],
    "rawResponse": {},
    "stats": {},
    "isActive": true,
    "lastSyncedAt": ISODate(),
    "createdAt": ISODate(),
    "updatedAt": ISODate(),
    "deletedAt": null,
});

// --- TỰ ĐỘNG SINH 20 RECORDS TIẾP THEO (TỪ ID 02 ĐẾN 21) ---
const newRecords = [];

// Khai báo data pool để random chuẩn chỉ
const platforms = ["AMAZON", "EBAY", "ALIEXPRESS", "SHOPEE", "TIKTOK_SHOP"];
const badgesPool = ["BEST_SELLER", "FLASH_SALE", "NEW", "TRENDING", "AUTHENTIC", "OFFICIAL", "TRUSTED_SELLER", "TOP_RATED", "POPULAR"];

const countryConfig = [
    { country: 'us', currency: 'USD', cities: ['New York', 'Los Angeles', 'Chicago', 'San Francisco'] },
    { country: 'ca', currency: 'CAD', cities: ['Toronto', 'Vancouver', 'Montreal', 'Ottawa'] },
    { country: 'gb', currency: 'GBP', cities: ['London', 'Manchester', 'Birmingham', 'Liverpool'] },
    { country: 'de', currency: 'EUR', cities: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg'] },
    { country: 'se', currency: 'SEK', cities: ['Stockholm', 'Gothenburg', 'Malmo', 'Uppsala'] },
    { country: 'no', currency: 'NOK', cities: ['Oslo', 'Bergen', 'Trondheim', 'Stavanger'] },
    { country: 'nl', currency: 'EUR', cities: ['Amsterdam', 'Rotterdam', 'The Hague', 'Utrecht'] },
    { country: 'fr', currency: 'EUR', cities: ['Paris', 'Marseille', 'Lyon', 'Nice'] },
    { country: 'be', currency: 'EUR', cities: ['Brussels', 'Antwerp', 'Ghent', 'Bruges'] },
    { country: 'es', currency: 'EUR', cities: ['Madrid', 'Barcelona', 'Valencia', 'Seville'] },
    { country: 'pt', currency: 'EUR', cities: ['Lisbon', 'Porto', 'Braga', 'Coimbra'] },
    { country: 'jp', currency: 'JPY', cities: ['Tokyo', 'Osaka', 'Kyoto', 'Yokohama'] },
    { country: 'kr', currency: 'KRW', cities: ['Seoul', 'Busan', 'Incheon', 'Daegu'] },
    { country: 'vn', currency: 'VND', cities: ['Hanoi', 'Ho Chi Minh City', 'Da Nang', 'Nha Trang'] },
    { country: 'au', currency: 'AUD', cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth'] },
    { country: 'nz', currency: 'NZD', cities: ['Auckland', 'Wellington', 'Christchurch', 'Hamilton'] }
];

// Hàm bổ trợ tiện ích
const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

for (let i = 2; i <= 100; i++) {
    // 1. Tạo chuỗi ID tăng dần (Hex 24 ký tự)
    const hexId = i.toString(16).padStart(24, '0');
    const currentObjectId = ObjectId(hexId);

    // 2. Random Shop ID từ 001 đến 005
    const randomShopInt = getRandomInt(1, 5);
    const randomShopHex = randomShopInt.toString(16).padStart(24, '0');
    const shopObjectId = ObjectId(randomShopHex);

    // 3. Random Quốc gia -> Tự động map Tiền tệ & Thành phố tiếng Anh tương ứng
    const geo = getRandomElement(countryConfig);
    const randomCity = getRandomElement(geo.cities);

    // 4. Tính toán Giá bán hợp lý (Price <= OriginalPrice)
    const isVND_or_KRW = ['VND', 'KRW'].includes(geo.currency);
    const originalPrice = isVND_or_KRW ? getRandomInt(50, 500) * 10000 : getRandomInt(20, 500);
    const discountChance = Math.random();

    let price = originalPrice;
    let discountPercent = 0;

    if (discountChance > 0.3) { // 70% sản phẩm có giảm giá
        const randomPercent = getRandomInt(5, 75); // giảm từ 5% đến 75%
        price = isVND_or_KRW
            ? Math.round((originalPrice * (1 - randomPercent / 100)) / 1000) * 1000 // Làm tròn tiền nghìn cho đẹp
            : Math.round(originalPrice * (1 - randomPercent / 100));

        // Tính toán discountPercent chính xác theo công thức: (1 - price/originalPrice) * 100
        discountPercent = Math.round((1 - (price / originalPrice)) * 100);
    }

    // 5. Sinh mảng Badges ngẫu nhiên từ 0-5 phần tử và đảo lộn thứ tự (Shuffle)
    const badgesCount = getRandomInt(0, 5);
    const shuffledBadges = [...badgesPool]
        .sort(() => 0.5 - Math.random()) // Đảo trộn ngẫu nhiên toàn bộ pool
        .slice(0, badgesCount);          // Lấy số lượng phần tử chỉ định

    // 6. Push object vào mảng tạm
    newRecords.push({
        "_id": currentObjectId,
        "productId": currentObjectId, // Khớp hoàn toàn với _id của sản phẩm chính
        "shopId": shopObjectId,
        "platform": getRandomElement(platforms),
        "originUrl": "https://drive.google.com/drive/my-drive",
        "affiliateUrl": "https://drive.google.com/drive/my-drive",
        "price": price,
        "originalPrice": originalPrice,
        "discountPercent": discountPercent,
        "currency": geo.currency,
        "city": randomCity,
        "country": geo.country,
        "stock": getRandomInt(0, 350),
        "sold": getRandomInt(0, 2000),
        "rating": parseFloat((Math.random() * (5.0 - 3.0) + 3.0).toFixed(1)), // Đảm bảo >= 3 và có 1 chữ số thập phân
        "ratingCount": getRandomInt(0, 500),
        "badges": shuffledBadges,
        "rawResponse": {},
        "stats": {},
        "isActive": true,
        "lastSyncedAt": ISODate(),
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    });
}

// Thực hiện insert hàng loạt 20 bản ghi vào Database
db.affiliate.insertMany(newRecords);
// In thông báo kiểm tra số lượng