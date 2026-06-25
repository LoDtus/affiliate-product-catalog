import Cart from "@/features/cart/Cart";
import { getDictionary } from "@/infrastructure/i18n/get-dictionary";
import { TranslationProvider } from "@/shared/providers/Translation.provider";

interface SearchPageProps {
    params: Promise<{ country: string }>;
}

export default async function Page({ params }: SearchPageProps) {
    const { country } = await params;
    const dictSearch = await getDictionary(country, "search");
    console.log(country);

    return (
        <TranslationProvider dict={dictSearch}>
            <Cart
                dict={dictSearch}
            />
        </TranslationProvider>
    )
}