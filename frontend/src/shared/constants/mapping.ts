export const MAPPING: {
    ROLE_COLOR: Record<string, string>;
    COUNTRY_CODE: Record<string, string>;
    SORT_MODE: Record<string, string>;
} = {
    ROLE_COLOR: {
        admin: "#ff4d4f",
        manager: "#1677ff",
        staff: "#52c41a",
        guest: "#0b0b0b",
        test01: "#13c2c2",
        test02: "#13c2c2",
    },
    COUNTRY_CODE: {
        us: "United States",
        ca: "Canada",
        gb: "United Kingdom",
        de: "Germany",
        se: "Sweden",
        no: "Norway",
        nl: "Netherlands",
        fr: "France",
        be: "Belgium",
        es: "Spain",
        pt: "Portugal",
        jp: "Japan",
        kr: "South Korea",
        vn: "Vietnam",
        au: "Australia",
        nz: "New Zealand",
        ae: "United Arab Emirates",
        sa: "Saudi Arabia",
    },
    SORT_MODE: {
        "default": "Mặc định",
        "newest": "Mới nhất",
        "best-selling": "Bán chạy nhất",
        "trending": "Nổi bật",
        "price-asc": "Giá từ thấp đến cao",
        "price-desc": "Giá từ cao đến thấp",
    }
};
