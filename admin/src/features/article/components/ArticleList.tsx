// stt, title, type, slug, priority, products, stats, isHIdden, publishedAt
import { MaterialReactTable } from "material-react-table";
import { useEffect } from "react";
import { Button } from "antd";
import { ProductList } from "@/features/article/components/ArticleToolbar";

export default function ArticleList() {
    const hideArticle = async (id: any) => {
        console.log(id);
    };

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
            size: 10,
            minSize: 10,
            maxSize: 30,
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
            Cell: ({ row }) => (
                <Button
                    className="font-semibold!"
                    onClick={() => hideArticle(row?.original)}
                    variant="solid"
                    color="default"
                >
                    Ẩn
                </Button>
            ),
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
        // {
        //     no: 1,
        //     type: "So sánh",
        //     title: "Bài viết 1",
        //     priority: 2,
        //     products: "Kế toán",
        //     stats: "Kế toán",
        //     publishedAt: "01-05-2026",
        // },
        // {
        //     no: 1,
        //     type: "So sánh",
        //     title: "Bài viết 1",
        //     priority: 2,
        //     products: "Kế toán",
        //     stats: "Kế toán",
        //     publishedAt: "01-05-2026",
        // },
        // {
        //     no: 1,
        //     type: "So sánh",
        //     title: "Bài viết 1",
        //     priority: 2,
        //     products: "Kế toán",
        //     stats: "Kế toán",
        //     publishedAt: "01-05-2026",
        // },
        // {
        //     no: 1,
        //     type: "So sánh",
        //     title: "Bài viết 1",
        //     priority: 2,
        //     products: "Kế toán",
        //     stats: "Kế toán",
        //     publishedAt: "01-05-2026",
        // },
        // {
        //     no: 1,
        //     type: "So sánh",
        //     title: "Bài viết 1",
        //     priority: 2,
        //     products: "Kế toán",
        //     stats: "Kế toán",
        //     publishedAt: "01-05-2026",
        // },
        // {
        //     no: 1,
        //     type: "So sánh",
        //     title: "Bài viết 1",
        //     priority: 2,
        //     products: "Kế toán",
        //     stats: "Kế toán",
        //     publishedAt: "01-05-2026",
        // },
        // {
        //     no: 1,
        //     type: "So sánh",
        //     title: "Bài viết 1",
        //     priority: 2,
        //     products: "Kế toán",
        //     stats: "Kế toán",
        //     publishedAt: "01-05-2026",
        // },
        // {
        //     no: 1,
        //     type: "So sánh",
        //     title: "Bài viết 1",
        //     priority: 2,
        //     products: "Kế toán",
        //     stats: "Kế toán",
        //     publishedAt: "01-05-2026",
        // },
        // {
        //     no: 1,
        //     type: "So sánh",
        //     title: "Bài viết 1",
        //     priority: 2,
        //     products: "Kế toán",
        //     stats: "Kế toán",
        //     publishedAt: "01-05-2026",
        // },
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
            className="h-full flex flex-col border border-gray-line rounded-sm overflow-hidden" // Thêm h-full, đổi sang overflow-hidden
            style={{
                maxHeight: "calc(100vh - 52px)",
            }}
        >
            {/* min-h-0 giúp flex-child biết giới hạn để không tự phình to */}
            <div className="flex-1 flex flex-col min-h-0">
                <MaterialReactTable
                    columns={columns}
                    data={rowData || []}
                    enableColumnOrdering
                    enableDensityToggle={false}
                    initialState={{ density: "compact" }}
                    enableFullScreenToggle={false}
                    enableGlobalFilter={false}
                    getRowId={(row) => row.no.toString()}
                    // 1. QUAY LẠI CHẾ ĐỘ SEMANTIC (Mặc định của HTML Table)
                    // Chế độ này sẽ giữ nguyên kích thước 'size' của cột và tự động đẩy tràn ra ngoài nếu thiếu đất
                    layoutMode="semantic"
                    // 2. KHÓA CHẶT CHIỀU CAO CONTAINER VỚI ĐỘ TRỪ HAO RỘNG RÃI
                    muiTableContainerProps={{
                        sx: {
                            // Ép vùng chứa table có chiều cao tối đa cố định
                            // Trừ đi 200px (cho header trang, navlink, và bộ toolbar của table)
                            // Đảm bảo thanh scroll ngang (nếu có) nằm lơ lửng cách đáy Outlet một khoảng an toàn
                            maxHeight: "calc(100vh - 200px)",
                            overflow: "auto", // Cho phép tự do scroll cả X lẫn Y nội bộ
                        },
                    }}
                    // 3. ĐẢM BẢO KHỐI GIẤY BỌC NGOÀI KHÔNG TỰ CO GIÃN THEO TRÌNH DUYỆT
                    muiPaperProps={{
                        sx: {
                            height: "100%",
                            maxHeight: "100%",
                            display: "flex",
                            flexDirection: "column",
                        },
                    }}
                    renderDetailPanel={({ row }) => (
                        <div className="p-3 bg-gray-100 rounded-lg">
                            Đây là DIV mở rộng cho row {row.id}
                        </div>
                    )}
                    enableExpanding
                    enableExpandAll={false}
                    displayColumnDefOptions={{
                        "mrt-row-expand": {
                            muiTableHeadCellProps: { sx: { display: "none" } },
                            muiTableBodyCellProps: { sx: { display: "none" } },
                        },
                    }}
                />
            </div>
        </div>
    );
}
