import AppLayout from "@/shared/components/layouts/App.layout";
import { getDictionary } from "@/infrastructure/i18n/get-dictionary";
import { TranslationProvider } from "@/shared/providers/Translation.provider";
import { ReactNode } from "react";

export async function generateStaticParams() {
    const countries = [
        "us",
        "ca",
        "gb",
        "de",
        "se",
        "no",
        "nl",
        "fr",
        "be",
        "es",
        "pt",
        "jp",
        "kr",
        "vn",
        "au",
        "nz",
        "ae",
        "sa",
    ];
    return countries.map((country) => ({ country }));
}

interface LayoutProps {
    children: ReactNode;
    params: Promise<{ country: string }>;
}

export default async function Layout({ children, params }: LayoutProps) {
    const { country } = await params;
    const dictShared = await getDictionary(country, "shared");

    return (
        <TranslationProvider dict={dictShared}>
            <AppLayout>{children}</AppLayout>
        </TranslationProvider>
    );
}
