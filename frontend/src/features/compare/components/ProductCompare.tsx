"use client"

import "../compare.css";
import { MaterialReactTable } from "material-react-table";
import { useEffect, useState } from "react";
import { Button } from "antd";
import { UserRoundPlus } from "lucide-react";

export const TABLE = {
    LABEL: {
        rowsPerPage: 'Số dòng mỗi trang',
        showHideFilters: 'Ẩn/Hiện filter',
        showHideColumns: 'Ẩn/Hiện cột',
        sortByColumnAsc: 'abc',
        sortByColumnDesc: 'abc',
        move: 'Kéo thả vị trí cột',
        columnActions: 'Tương tác khác',
        filterByColumn: '123',
    }
}

export default function ProductCompare() {
    const [cols, setCols] = useState([]);
    const [expandedUsers, setExpandedUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);

    const columns = [
        {
            accessorKey: "no",
            header: "Hạng mục",
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
            accessorKey: "product-01",
            header: "product-01",
            // Cell: ({ row }) => (
            //     <UserInforCell
            //         user={row?.original}
            //         field="username"
            //         isUpdating={editingUser === row?.original?.no}
            //     />
            // ),
        }
    ];

    const rowData = [
        {
            no: 1,
            username: "Nguyễn Văn A",
            email: "Nhân viên",
            department: "Kế toán",
            description: "Đang làm việc",
        },
        {
            no: 2,
            username: "Trần Thị B",
            email: "Trưởng phòng",
            department: "Nhân sự",
            status: "Nghỉ phép",
        },
        {
            no: 3,
            username: "Lê Văn C",
            email: "Nhân viên",
            department: "Kỹ thuật",
            status: "Đang làm việc",
        },
        {
            no: 4,
            username: "Phạm Thị D",
            email: "Thực tập sinh",
            department: "Marketing",
            status: "Đang học việc",
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
        <div className="h-full p-2 flex flex-col">
            <div className="mb-2 flex justify-between items-center">
                <h2 className="text-2xl font-semibold">So sánh</h2>
            </div>

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
                    state={{
                        expanded: Object.fromEntries(
                            expandedUsers.map((id) => [id, true]),
                        ),
                    }}
                    localization={TABLE?.LABEL}
                />
            </div>
        </div>
    );
}
