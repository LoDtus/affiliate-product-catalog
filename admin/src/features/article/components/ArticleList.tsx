// stt, title, type, slug, priority, products, stats, isHIdden, publishedAt

import "../article.css";
import { MaterialReactTable } from "material-react-table";
import { useEffect, useState } from "react";
import { Button } from "antd";
import { UserRoundPlus } from "lucide-react";
import {
    ArchiveArticle,
    GenerateArticle,
    ProductList,
} from "@/features/article/components/ArticleToolbar";

export default function ArticleList() {
    const hideArticle = async (id: any) => {
        console.log(id)
    }

    const columns = [
        {
            accessorKey: "no",
            header: "STT",
            size: 10,
            minSize: 10,
            maxSize: 30,
            enableSorting: false,
            enableColumnActions: false,
            enableColumnDragging: false,
            muiTableHeadCellProps: {
                align: "center",
                sx: { justifyContent: "center" },
            },
            muiTableBodyCellProps: {
                align: "center",
                sx: { justifyContent: "center", textAlign: "center" },
            },
        },
        {
            accessorKey: "type",
            header: "Phân loại",
            muiTableHeadCellProps: {
                align: "center",
                sx: { justifyContent: "center" },
            },
            muiTableBodyCellProps: {
                align: "center",
                sx: { justifyContent: "center", textAlign: "center" },
            },
        },
        {
            accessorKey: "title",
            header: "Tiêu đề",
            muiTableHeadCellProps: {
                align: "center",
                sx: { justifyContent: "center" },
            },
        },
        {
            accessorKey: "priority",
            header: "Ưu tiên",
            muiTableHeadCellProps: {
                align: "center",
                sx: { justifyContent: "center" },
            },
            muiTableBodyCellProps: {
                align: "center",
                sx: { justifyContent: "center", textAlign: "center" },
            },
        },
        {
            accessorKey: "products",
            header: "Sản phẩm",
            muiTableHeadCellProps: {
                align: "center",
                sx: { justifyContent: "center" },
            },
            size: 250,
            maxSize: 300,
            muiTableBodyCellProps: {
                sx: {
                    maxWidth: 300,
                    width: 300,
                    overflow: "hidden",
                },
            },
            Cell: ({ row }) => <ProductList data={row?.original} />,
        },
        {
            accessorKey: "stats",
            header: "Chỉ số",
            muiTableHeadCellProps: {
                align: "center",
                sx: { justifyContent: "center" },
            },
            size: 250,
            maxSize: 300,
            muiTableBodyCellProps: {
                sx: {
                    maxWidth: 300,
                    width: 300,
                    overflow: "hidden",
                },
            },
            Cell: ({ row }) => <ProductList data={row?.original} />,
        },
        {
            accessorKey: "hide",
            header: "Ẩn bài viết",
            size: 30,
            minSize: 30,
            maxSize: 50,
            enableSorting: false,
            enableColumnActions: false,
            enableColumnDragging: false,
            muiTableHeadCellProps: {
                align: "center",
                sx: { justifyContent: "center" },
            },
            muiTableBodyCellProps: {
                align: "center",
                sx: { justifyContent: "center", textAlign: "center" },
            },
            Cell: ({ row }) => <Button
                className="font-semibold!"
                onClick={() => hideArticle(row?.original)}
                variant="solid"
                color="default"
            >
                Ẩn
            </Button>,
        },
        {
            accessorKey: "publishedAt",
            header: "Ngày xuất bản",
            size: 20,
            minSize: 20,
            maxSize: 30,
            enableSorting: false,
            enableColumnActions: false,
            enableColumnDragging: false,
            muiTableHeadCellProps: {
                align: "center",
                sx: { justifyContent: "center" },
            },
            muiTableBodyCellProps: {
                align: "center",
                sx: { justifyContent: "center", textAlign: "center" },
            },
        },
    ];

    const rowData = [
        {
            no: 1,
            type: "So sánh",
            title: "Bài viết 1",
            priority: 2,
            products: "Kế toán",
            stats: "Kế toán",
            publishedAt: "01-05-2026",
        },
    ];

    useEffect(() => {
        const startGetUsers = async () => {
            // const response = await handleGetUsers();
            // console.log(response);
        };
        startGetUsers();
    }, []);

    return (
        <div
            className="h-full flex flex-col border border-gray-line rounded-sm overflow-y-auto"
            style={{
                maxHeight: "calc(100vh - 52px)",
            }}
        >
            <div className="flex-1 flex flex-col">
                <MaterialReactTable
                    columns={columns}
                    data={rowData || []}
                    enableColumnOrdering
                    enableDensityToggle={false} // Tắt 'Toggle Density'
                    initialState={{ density: "compact" }} // Set mặc định 'Toggle Density'
                    enableFullScreenToggle={false} // Tắt 'Toggle Full Screen'
                    muiTableBodyCellProps={({ cell }) => ({
                        sx: {
                            backgroundColor:
                                cell.column.id === "username"
                                    ? "#f0f0f0"
                                    : "white",
                        },
                    })}
                    enableGlobalFilter={false}
                    getRowId={(row) => row.no.toString()}
                    renderDetailPanel={({ row }) => {
                        return (
                            <div className="p-3 bg-gray-100 rounded-lg">
                                Đây là DIV mở rộng cho row {row.id}
                            </div>
                        );
                    }}
                    enableExpanding
                    enableExpandAll={false}
                    displayColumnDefOptions={{
                        "mrt-row-expand": {
                            muiTableHeadCellProps: {
                                sx: { display: "none" }, // Ẩn header mũi tên
                            },
                            muiTableBodyCellProps: {
                                sx: { display: "none" }, // Ẩn ô mũi tên ở mỗi row
                            },
                        },
                    }}
                />
            </div>
        </div>
    );
}
