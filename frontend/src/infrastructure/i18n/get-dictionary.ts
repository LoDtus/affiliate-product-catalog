// Định nghĩa các tính năng cần dịch trong hệ thống
export type DictionaryFeature =
    | "shared"
    | "category"
    | "detail"
    | "error"
    | "legal"
    | "product"
    | "search";

const importFeatureDictionary = async (
    country: string,
    feature: DictionaryFeature,
) => {
    switch (feature) {
        case "shared":
            return (await import(`@/shared/locales/${country}.json`)).default;
        case "category":
            return (await import(`@/features/category/locales/${country}.json`)).default;
        case "detail":
            return (await import(`@/features/detail/locales/${country}.json`)).default;
        case "error":
            return (await import(`@/features/error/locales/${country}.json`)).default;
        case "legal":
            return (await import(`@/features/legal/locales/${country}.json`)).default;
        case "product":
            return (await import(`@/features/product/locales/${country}.json`)).default;
        case "search":
            return (await import(`@/features/search/locales/${country}.json`)).default;
        default:
            return {};
    }
};

// Hàm chính load động bản dịch
export const getDictionary = async (
    country: string,
    feature: DictionaryFeature,
) => {
    try {
        return await importFeatureDictionary(country, feature);
    } catch {
        console.warn(`Missing translation file for country: [${country}] in feature: [${feature}]. Falling back to [us].`);
        try {
            return await importFeatureDictionary("us", feature);
        } catch {
            console.error(`Critical: Even [us] translation is missing for feature: [${feature}]`);
            return {};
        }
    }
};
