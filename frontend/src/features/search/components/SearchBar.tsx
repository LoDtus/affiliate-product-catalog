"use client";
import "../search.css";
import AdvancedSearchPopup from "@/features/search/components/AdvancedSearchPopup";
import { Input, Popover } from "antd";
import { Search, SlidersHorizontal } from "lucide-react";
import { useEffect, useState } from "react";

export default function SearchBar() {
    const [keyword, setKeyword] = useState("");

    useEffect(() => {
        console.log(keyword)
    }, [keyword]);

    return (
        <>
            <div className="grow pl-3 pr-0 py-0.5 flex items-center">
                <Search />
                <Input
                    placeholder="Tìm kiếm"
                    variant="borderless"
                    onChange={(e) => setKeyword(e.target.value)}
                />
            </div>
            <Popover
                trigger="click"
                placement="bottom"
                content={
                    <AdvancedSearchPopup/>
                }
                className="w-full h-full"
                id="searchBar-advancedSearch"
                align={{ offset: [0, 0] }}
            >
                <button
                    className="px-3 text-gray-subtitle duration-200 hover:text-black"
                >
                    <SlidersHorizontal size={18}/>
                </button>
            </Popover>
            <div className="min-h-full shrink-0 flex justify-center items-center border-l rounded-e-full bg-orange-sunset text-white">
                <button className="shrink-0 w-full h-full py-0.5 px-5 flex gap-2 justify-center items-center font-semibold rounded-r-full">
                    <span className="shrink-0">Tìm kiếm</span>
                </button>
            </div>
        </>
    )
}