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

export const COOKIE_TEXTS: Record<string, CookieContent> = {
    eu: {
        title: "We value your privacy",
        description:
            "We use cookies to analyze site traffic and track affiliate links to maintain this platform. By clicking 'Accept All', you consent to our use of cookies.",
        accept: "Accept All",
        reject: "Reject All",
    },
    us: {
        title: "Cookie Notice",
        description:
            "We use cookies to optimize your comparison experience. We also use affiliate links which share tracking data with third-party networks.",
        accept: "Accept",
        reject: "Do Not Sell/Share My Info",
    },
    default: {
        title: "Cookie Consent",
        description:
            "This site uses cookies to enhance your product analysis experience and track affiliate links. By continuing, you agree to our cookie policy.",
        accept: "Got it!",
        reject: "Decline",
    },
};
