import { ReactNode } from "react";

export default function ErrorLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div>
            error
            { children }
        </div>
    );
}
