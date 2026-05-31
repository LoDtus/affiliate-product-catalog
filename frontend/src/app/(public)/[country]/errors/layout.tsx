import ErrorLayout from "@/shared/components/layouts/Error.layout";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    return <ErrorLayout>{children}</ErrorLayout>;
}
