"use client"

import {ColumnDef} from "@tanstack/react-table"
import {Copy, FilePenLine, PackageX} from "lucide-react"

import {Button} from "@/components/ui/button"
import {Badge} from "@/components/ui/badge"
import {Textarea} from "@/components/ui/textarea"
import {DataTableColumnHeader} from "@/components/datatable/column-header";
import {Checkbox} from "@/components/ui/checkbox"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,} from "@/components/ui/tooltip"
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {useState} from "react"

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

const categories = [
    {
        value: "keyboards",
        label: "Bàn phím",
    },
    {
        value: "switches",
        label: "Switches",
    },
    {
        value: "keycaps",
        label: "Keycaps",
    },
    {
        value: "accessories",
        label: "Phụ kiện",
    },
]

export const columns: ColumnDef<Products>[] = [
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
        accessorKey: "id",
        header: "Mã sản phẩm"
    },
    {
        accessorKey: "images",
        header: "Ảnh sản phẩm",
        cell: ({row}) => {
            return (
                <Avatar>
                    <AvatarImage src={row.getValue("images")} alt={row.index.toString()}/>
                    <AvatarFallback>{row.index}</AvatarFallback>
                </Avatar>
            );
        }
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
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="Danh mục"/>
        ),
        cell: ({row}) => {
            return <Badge variant="outline">{row.getValue("category")}</Badge>
        }
    },
    {
        id: "actions",
        header: "Thao tác",
        cell: ({row}) => {
            const product = row.original
            const [value, setValue] = useState(product.category.toLowerCase());

            return (
                <>
                    <div className="grid grid-cols-3 gap-2">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Button variant="outline" onClick={() => navigator.clipboard.writeText(product.id)}>
                                        <Copy className="h-4 w-4"/>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>Copy ID sản phẩm</TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <Dialog>
                            <DialogTrigger>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <Button variant="outline">
                                                <FilePenLine className="h-4 w-4"/>
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>Chỉnh sửa</TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Chỉnh sửa sản phẩm</DialogTitle>
                                    <DialogDescription>
                                        Thay đổi thông tin và ấn lưu thay đổi
                                    </DialogDescription>

                                    <div className="grid gap-4 py-4">
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="name" className="text-right">
                                                Tên sản phẩm
                                            </Label>
                                            <Input
                                                id="name"
                                                defaultValue={product.name}
                                                className="col-span-3"
                                            />
                                        </div>

                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="images" className="text-right">
                                                Ảnh sản phẩm
                                            </Label>
                                            <Input
                                                id="images"
                                                type="file"
                                                className="col-span-3"
                                            />
                                        </div>

                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="des" className="text-right">
                                                Chi tiết
                                            </Label>
                                            <Textarea
                                                id="des"
                                                defaultValue={product.des}
                                                className="col-span-3"
                                            />
                                        </div>

                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="price" className="text-right">
                                                Giá thành
                                            </Label>
                                            <Input
                                                id="price"
                                                defaultValue={product.price}
                                                className="col-span-3"
                                            />
                                        </div>

                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="stock" className="text-right">
                                                Stock (tồn kho)
                                            </Label>
                                            <Input
                                                id="stock"
                                                defaultValue={product.stock}
                                                className="col-span-3"
                                            />
                                        </div>

                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="category" className="text-right">
                                                Danh mục
                                            </Label>

                                            <Select onValueChange={e => setValue(e.valueOf())} defaultValue={value}>
                                                <SelectTrigger className="col-span-3">
                                                    <SelectValue placeholder="Chọn danh mục"/>
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectLabel className="text-center">Danh sách danh
                                                            mục</SelectLabel>
                                                        {categories.map((category) => (
                                                            <SelectItem
                                                                value={category.value}>{category.label}</SelectItem>
                                                        ))}
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <DialogFooter>
                                        <DialogClose asChild>
                                            <Button variant="secondary">Hủy</Button>
                                        </DialogClose>

                                        <DialogClose asChild>
                                            <Button type="submit">Lưu thay đổi</Button>
                                        </DialogClose>
                                    </DialogFooter>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>

                        <Dialog>
                            <DialogTrigger>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <Button variant="destructive">
                                                <PackageX className="h-4 w-4"/>
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>Xóa sản phẩm</TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Bạn có chắc chắn muốn xóa ?</DialogTitle>
                                    <DialogDescription>
                                        Hành động này không thể hoàn tác. Thao tác này sẽ xóa vĩnh viễn sản phẩm.
                                    </DialogDescription>
                                    <DialogFooter>
                                        <DialogClose asChild>
                                            <Button variant="destructive" type="submit">Tôi chắc chắn</Button>
                                        </DialogClose>
                                    </DialogFooter>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    </div>
                </>
            )
        }
    }
]