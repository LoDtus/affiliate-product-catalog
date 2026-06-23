import "./layout.css";
import CategoryBar from "@/features/category/components/CategoryBar";
import Footer from "@/shared/components/ui/Footer";
import Header from "@/shared/components/ui/Header";
import { ReactNode } from "react";

export default function AppLayout({ children }: { children: ReactNode }) {
    return (
        <div className="relative min-h-screen w-full flex flex-col">
            <header>
                <Header />
                <CategoryBar />
            </header>

            <div className="mainLayout grow w-full flex flex-col justify-between items-center overflow-y-auto">
                <main className="max-w-960 w-full flex-1 flex flex-col">
                    {children}
                </main>

                <footer className="w-full bg-white border-t border-gray-line">
                    <Footer />
                </footer>
            </div>
        </div>
    );
}
