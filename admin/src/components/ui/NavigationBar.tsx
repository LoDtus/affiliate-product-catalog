import { NavLink } from "react-router-dom";
import { NAVIGATION } from "@/shared/constants/navigation.constants";

export default function NavigationBar() {
    return (
        <ul className="h-full p-2 shrink-0 flex flex-col gap-1 border-r border-gray-line">
            {NAVIGATION?.SIDEBAR?.map((tab) => {
                const Icon = tab.icon;
                return (
                    <li key={tab.key}>
                        <NavLink
                            to={tab.path}
                            className={({ isActive }) =>
                                `
                                py-1 px-8 rounded-sm font-semibold
                                flex gap-2 items-center
                                duration-200 transition-all active:scale-98
                                ${
                                    isActive
                                        ? "bg-blue-royal text-white"
                                        : "hover:bg-light-gray"
                                }
                            `
                            }
                        >
                            <Icon size={18} />
                            <span>{tab.label}</span>
                        </NavLink>
                    </li>
                );
            })}
        </ul>
    );
}
