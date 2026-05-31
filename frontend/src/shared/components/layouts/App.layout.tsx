import CategoryBar from "@/features/category/components/CategoryBar";
import Footer from "@/shared/components/ui/Footer";
import Header from "@/shared/components/ui/Header";
import { ReactNode } from "react";

export default function AppLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen w-full flex flex-col">
            <header className="fixed top-0 z-30 left-0 right-0">
                <Header />
                <CategoryBar />
            </header>

            <div className="grow w-full mt-21 flex flex-col justify-between items-center overflow-y-auto">
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
