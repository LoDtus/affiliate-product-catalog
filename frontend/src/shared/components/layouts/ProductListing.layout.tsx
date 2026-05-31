import ProductDisplay from "@/features/product/components/ProductDisplay";
import FilterSidebar from "@/shared/components/ui/FilterSidebar";
import { ReactNode } from "react";

export default function ProductListing({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div className="flex-1 flex">
            <FilterSidebar/>
            <main className="flex-1">
                <ProductDisplay/>
            </main>
        </div>
    );
}
