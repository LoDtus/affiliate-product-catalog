export interface CookieContent {
    title: string;
    description: string;
    accept: string;
    reject: string;
}

export const EU_COUNTRIES = new Set([
    "gb",
    "de",
    "se",
    "no",
    "nl",
    "fr",
    "be",
    "es",
    "pt",
]);

export const COOKIE_TEXTS: Record<string, any> = {
    eu: {
        title: "We value your privacy",
        description: "We use cookies to analyze site traffic and track affiliate links. You can customize your choices below.",
        accept: "Accept All",
        reject: "Reject All",
        manage: "Manage Settings",
        save: "Save Preferences",
        categories: {
            necessary: {
                title: "Strictly Necessary Cookies",
                desc: "Required for the website to function properly (e.g., remembering your cookie choices, country routing). Cannot be switched off."
            },
            analytics: {
                title: "Analytics Cookies",
                desc: "Help us understand how visitors interact with our product tables and spec sheets so we can improve the performance."
            },
            marketing: {
                title: "Affiliate & Marketing Cookies",
                desc: "Used to track clicks on product redirect buttons to partner stores (e.g., Amazon, eBay) to credit our commission. Disabling this may affect link routing."
            }
        }
    },
    // Các quốc gia khác bạn có thể dùng chung hoặc dịch tương tự
    default: {
        title: "Cookie Consent",
        description: "This site uses cookies to enhance your experience.",
        accept: "Got it!",
        reject: "Decline",
        manage: "Preferences"
    }
};