import ProductListing from "@/shared/components/layouts/ProductListing.layout";
import { ReactNode } from "react";

export default function Layout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <ProductListing>{children}</ProductListing>
    );
}
