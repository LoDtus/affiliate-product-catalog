import AppLayout from "@/shared/components/layouts/App.layout";
import { ReactNode } from "react";

export default function Layout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <AppLayout>
            { children }
        </AppLayout>
    )
}