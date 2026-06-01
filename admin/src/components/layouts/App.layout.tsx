import NavigationBar from "@/components/ui/NavigationBar";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
    return (
        // <div className="h-full flex flex-col">
        <div className="h-screen w-screen flex flex-col overflow-y-hidden">
            <div className="flex-1 flex">
                <NavigationBar />
                <div className="w-full max-h-[95vh] border">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
