import NavigationBar from "@/components/ui/NavigationBar";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
    return (
        <div className="h-full flex flex-col">
            <div className="flex-1 grow h-full flex">
                <NavigationBar />
                <div className="w-full h-full">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
