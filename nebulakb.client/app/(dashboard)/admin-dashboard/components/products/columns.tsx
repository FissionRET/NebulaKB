"use client"

import {ColumnDef} from "@tanstack/react-table"
import {Copy, FilePenLine, MoreHorizontal, PackageX, ArrowUpDown} from "lucide-react"

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
import { Checkbox } from "@/components/ui/checkbox"

export type Products = {
    id: string
    name: string
    des: string
    price: string
    stock: number
    data: string
    images: string
    category: string
}

export const columns: ColumnDef<Products>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
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
        accessorKey: "id",
        header: "Mã sản phẩm"
    },
    {
        accessorKey: "name",
        header: "Tên sản phẩm"
    },
    {
        accessorKey: "des",
        header: "Chi tiết",
        cell: ({row}) => {
            return (
                <Textarea value={row.getValue("des")} disabled/>
            );
        }
    },
    {
        accessorKey: "price",
        header: "Giá bán",
        cell: ({row}) => {
            return (
                <Badge>{row.getValue("price")}</Badge>
            );
        }
    },
    {
        accessorKey: "stock",
        header: "Tồn kho",
        cell: ({row}) => {
            return (
                <Badge>{row.getValue("stock")}</Badge>
            );
        }
    },
    {
        accessorKey: "data",
        header: "Data",
        cell: ({row}) => {
            if (row.getValue("data") !== "") {
                return (
                    <Textarea value={row.getValue("data")} disabled/>
                );
            } else {
                return <Badge variant="secondary">Không có</Badge>
            }
        }
    },
    {
        accessorKey: "category",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Danh mục"/>
        ),
        cell: ({row}) => {
            return <Badge variant="outline">{row.getValue("category")}</Badge>
        }
    },
    {
        id: "actions",
        cell: ({row}) => {
            const product = row.original

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
                            onClick={() => navigator.clipboard.writeText(product.id)}
                        >
                            <Copy className="mr-2 h-4 w-4"/> Copy ID
                        </DropdownMenuItem>
                        
                        <DropdownMenuItem>
                            <FilePenLine className="mr-2 h-4 w-4"/> Chỉnh sửa
                        </DropdownMenuItem>
                        
                        <DropdownMenuItem className="text-danger">
                            <PackageX className="mr-2 h-4 w-4"/> Xóa
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]