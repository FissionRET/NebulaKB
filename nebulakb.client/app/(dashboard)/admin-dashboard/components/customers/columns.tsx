"use client"

import {ColumnDef} from "@tanstack/react-table"
import {Copy, MoreHorizontal, ArrowUpDown, Eye, FilePenLine, UserRoundX, Check} from "lucide-react"

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
import {Input} from "@/components/ui/input";
import { useState } from "react"

export type Customers = {
    id: string
    customer: string
    email: string
    gender: "Nam" | "Nữ"
    DoB: string
    phone: string
    address: string
    rank: string
    point: number
}

export const columns: ColumnDef<Customers>[] = [
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
        header: "Họ tên"
    },
    {
        accessorKey: "email",
        header: "Email",
        cell: ({row}) => {
            const [copied, setCopied] = useState(false);

            const handleCopy = (value: any) => {
                navigator.clipboard.writeText(value);
                setCopied(true);

                setTimeout(() => {
                    setCopied(false);
                }, 1500);
            }
            
            return (
                <div className="relative">
                    <Input value={row.getValue("email")} disabled/>
                    <span
                        className="absolute opacity-0 transition-opacity right-0 top-0 px-3 py-3 hover:opacity-100 hover:bg-transparent h-full" onClick={() => handleCopy(row.getValue("email"))}>
                        {copied ? (
                            <>
                                <Check className="h-4 w-4" />
                                <span className="sr-only">Copied</span>
                            </>
                        ) : (
                            <>
                                <Copy className="h-4 w-4" />
                                <span className="sr-only">Copy email</span>
                            </>
                        )}
                    </span>
                </div>
            );
        }
    },
    {
        accessorKey: "gender",
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="Giới tính"/>
        ),
        cell: ({row}) => {
            return (
                <Badge variant="secondary">{row.getValue("gender")}</Badge>
            );
        }
    },
    {
        accessorKey: "DoB",
        header: "Ngày sinh",
        cell: ({row}) => {
            return (
                <Badge>{row.getValue("DoB")}</Badge>
            );
        }
    },
    {
        accessorKey: "phone",
        header: "Số điện thoại",
        cell: ({row}) => {
            const [copied, setCopied] = useState(false);

            const handleCopy = (value: any) => {
                navigator.clipboard.writeText(value);
                setCopied(true);

                setTimeout(() => {
                    setCopied(false);
                }, 1500);
            }
            
            return (
                <div className="relative">
                    <Input value={row.getValue("phone")} disabled/>
                    <span
                        className="absolute opacity-0 transition-opacity right-0 top-0 px-3 py-3 hover:opacity-100 hover:bg-transparent h-full"
                        onClick={() => handleCopy(row.getValue("phone"))}>
                        {copied ? (
                            <>
                                <Check className="h-4 w-4"/>
                                <span className="sr-only">Copied</span>
                            </>
                        ) : (
                            <>
                                <Copy className="h-4 w-4"/>
                                <span className="sr-only">Copy phone number</span>
                            </>
                        )}
                    </span>
                </div>
            );
        }
    },
    {
        accessorKey: "address",
        header: "Địa chỉ",
        cell: ({row}) => {
            return (
                <Textarea value={row.getValue("address")} disabled/>
            );
        }
    },
    {
        accessorKey: "rank",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Hạng / Rank"/>
        ),
        cell: ({row}) => {
            return (
                <Badge variant="outline">{row.getValue("rank")}</Badge>
            );
        }
    },
    {
        accessorKey: "point",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Điểm thưởng"/>
        ),
        cell: ({row}) => {
            return (
                <Badge>{row.getValue("point")}pt</Badge>
            );
        }
    },
    {
        id: "actions",
        cell: ({row}) => {
            const user = row.original

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
                            onClick={() => navigator.clipboard.writeText(user.id)}
                        >
                            <Copy className="mr-2 h-4 w-4"/> Copy ID
                        </DropdownMenuItem>

                        <DropdownMenuItem>
                            <FilePenLine className="mr-2 h-4 w-4"/> Chỉnh sửa
                        </DropdownMenuItem>

                        <DropdownMenuItem className="text-danger">
                            <UserRoundX className="mr-2 h-4 w-4"/> Đình chỉ
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]