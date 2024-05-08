"use client"

import {ColumnDef} from "@tanstack/react-table"
import {Copy, MoreHorizontal, ArrowUpDown, Eye} from "lucide-react"

import {Button} from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Badge} from "@/components/ui/badge"
import {Textarea} from "@/components/ui/textarea"
import {DataTableColumnHeader} from "@/components/datatable/column-header";
import {Checkbox} from "@/components/ui/checkbox"

export type Orders = {
    id: string
    customer: string
    product: string
    status: "Đang chờ" | "Hoàn thành" | "Đã hủy"
    createdAt: string
    amount: number
    total: string
}

export const columns: ColumnDef<Orders>[] = [
    {
        id: "select",
        header: ({table}) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({row}) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "customer",
        header: "Khách hàng đặt mua"
    },
    {
        accessorKey: "product",
        header: "Tên sản phẩm"
    },
    {
        accessorKey: "status",
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="Trạng thái"/>
        ),
        cell: ({row}) => {
            return (
                <Badge variant="outline">{row.getValue("status")}</Badge>
            );
        }
    },
    {
        accessorKey: "createdAt",
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="Ngày mua"/>
        ),
        cell: ({row}) => {
            return (
                <Badge>{row.getValue("createdAt")}</Badge>
            );
        }
    },
    {
        accessorKey: "amount",
        header: "Số lượng",
        cell: ({row}) => {
            return (
                <Badge variant="outline">{row.getValue("amount")}</Badge>
            );
        }
    },
    {
        accessorKey: "total",
        header: "Giá tiền",
        cell: ({row}) => {
            return (
                <Badge>{row.getValue("total")}đ</Badge>
            );
        }
    },
    {
        id: "actions",
        cell: ({row}) => {
            const orders = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open actions menu</span>
                            <MoreHorizontal className="h-4 w-4"/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel className="text-center">Thao tác</DropdownMenuLabel>
                        <DropdownMenuSeparator/>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(orders.id)}
                        >
                            <Copy className="mr-2 h-4 w-4"/> Copy ID
                        </DropdownMenuItem>

                        <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4"/> Xem hóa đơn
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]