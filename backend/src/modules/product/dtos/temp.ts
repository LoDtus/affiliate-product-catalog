const item = {
    _id: "001",
    title: "Sản phẩm A",
    slug: "san-pham-a",
    description: "Mô tả ngắn gọn về sản phẩm A, không cần chuẩn SEO",
    seo: {
        metaTitle: "Title chuẩn SEO",
        metaDescription: "Description chuẩn SEO",
        keywords: [
            "Keyword 1 chuẩn SEO",
            "Keyword 2 chuẩn SEO",
            "Keyword 3 chuẩn SEO",
        ]
    },
    badge: "BEST_SELLER | FLASH_SALE | NEW | TRENDING | AUTHENTIC | OFFICIAL | TRUSTED_SELLER | TOP_RATED | POPULAR",
    priority: 10,
    categoryId: "002",
    affiliate: {
        _id: "001",
        affiliateUrl: "...",
        price: 100,
        originalPrice: 200,
        discountPercent: 50,
        currency: "USD",
        stock: 12,
        sold: 32,
        rating: 4.2,
        ratingCount: 29,
    },
    shop: {
        _id: "...",
        platform: "AMAZON | EBAY | ALIEXPRESS | SHOPEE | TIKTOK_SHOP | UNKNOWN",
        name: "...",
        slug: "...",
        city: "...",
        country: "...",
    },
    images: [
        {
            _id: "001",
            path: "...",
            alt: "...",
        },
        {
            _id: "002",
            path: "...",
            alt: "...",
        },
    ],
    createdAt: "...",
    updatedAt: "...",
    deletedAt: null,
}

export enum Badge {
	BEST_SELLER = 'BEST_SELLER',
	FLASH_SALE = 'FLASH_SALE',
	NEW = 'NEW', // tự định nghĩa (dưới 30 ngày đều coi là mới)
	TRENDING = 'TRENDING', // tự định nghĩa (dựa vào số lượt xem)
	AUTHENTIC = 'AUTHENTIC',
	OFFICIAL = 'OFFICIAL',
	TRUSTED_SELLER = 'TRUSTED_SELLER', // Tùy nền tảng, dựa vào shop_rating nếu có
	TOP_RATED = 'TOP_RATED',
	POPULAR = 'POPULAR', // tự định nghĩa (dựa vào ratingCount > n ~ 200 đến 500)
}

export enum Platform {
	AMAZON = 'AMAZON',
	EBAY = 'EBAY',
	ALIEXPRESS = 'ALIEXPRESS',
	SHOPEE = 'SHOPEE',
	TIKTOK_SHOP = 'TIKTOK_SHOP',
	UNKNOWN = 'UNKNOWN',
}