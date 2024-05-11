"use client"

import {ColumnDef} from "@tanstack/react-table"
import {Copy, MoreHorizontal, ArrowUpDown, Eye, FilePenLine, UserRoundX, Check, CalendarIcon} from "lucide-react"

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
import {useState} from "react"
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Label} from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {FormControl} from "@/components/ui/form";
import {cn} from "@/lib/utils";
import {Calendar} from "@/components/ui/calendar";
import {format} from "date-fns"

export type Employees = {
    id: string
    employee: string
    email: string
    gender: "Nam" | "Nữ"
    DoB: string
    phone: string
    address: string
    optIn: string
    optOut: string
}

export const columns: ColumnDef<Employees>[] = [
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
        accessorKey: "employee",
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
                        className="absolute opacity-0 transition-opacity right-0 top-0 px-3 py-3 hover:opacity-100 hover:bg-transparent h-full"
                        onClick={() => handleCopy(row.getValue("email"))}>
                        {copied ? (
                            <>
                                <Check className="h-4 w-4"/>
                                <span className="sr-only">Copied</span>
                            </>
                        ) : (
                            <>
                                <Copy className="h-4 w-4"/>
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
                <Input defaultValue={row.getValue("DoB")} disabled/>
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
        accessorKey: "optIn",
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="Ngày vào làm"/>
        ),
        cell: ({row}) => {
            return (
                <Badge variant="secondary">{row.getValue("optIn")}</Badge>
            );
        }
    },
    {
        accessorKey: "optOut",
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="Ngày nghỉ việc"/>
        ),
        cell: ({row}) => {
            return (
                <Badge variant="secondary">{row.getValue("optOut")}</Badge>
            );
        }
    },
    {
        id: "actions",
        header: "Thao tác",
        cell: ({row}) => {
            const employee = row.original
            const [gender, setGender] = useState<string>(employee.gender);
            const [optIn, setOptIn] = useState<Date>()
            const [optOut, setOptOut] = useState<Date>()

            const genders = [
                {
                    value: "0",
                    label: "Nam"
                },
                {
                    value: "1",
                    label: "Nữ"
                }
            ];

            return (
                <div className="grid grid-cols-3 gap-6">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Button variant="outline" onClick={() => navigator.clipboard.writeText(employee.id)}>
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
                                        <Button variant="outline" className="col-span-1">
                                            <FilePenLine className="h-4 w-4"/>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>Chỉnh sửa</TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Chỉnh sửa người dùng</DialogTitle>
                                <DialogDescription>
                                    Thay đổi thông tin và ấn lưu thay đổi
                                </DialogDescription>

                                <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="employee" className="text-right">
                                            Họ tên
                                        </Label>
                                        <Input
                                            id="employee"
                                            defaultValue={employee.employee}
                                            className="col-span-3"
                                        />
                                    </div>

                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="email" className="text-right">
                                            Email
                                        </Label>
                                        <Input
                                            id="email"
                                            defaultValue={employee.email}
                                            type="email"
                                            className="col-span-3"
                                        />
                                    </div>

                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="des" className="text-right">
                                            Giới tính
                                        </Label>

                                        <Select onValueChange={e => setGender(e.valueOf())}>
                                            <SelectTrigger className="col-span-3">
                                                <SelectValue placeholder="Thay đổi giới tính"/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    {genders.map((gender) => (
                                                        <SelectItem value={gender.value}>{gender.label}</SelectItem>
                                                    ))}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="phone" className="text-right">
                                            Số điện thoại
                                        </Label>
                                        <Input
                                            id="phone"
                                            defaultValue={employee.phone}
                                            type="number"
                                            className="col-span-3"
                                        />
                                    </div>

                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="address" className="text-right">
                                            Địa chỉ
                                        </Label>
                                        <Textarea
                                            id="address"
                                            defaultValue={employee.address}
                                            className="col-span-3"
                                        />
                                    </div>

                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="optIn" className="text-right">
                                            Ngày vào làm
                                        </Label>

                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "col-span-3 justify-start text-left font-normal",
                                                        !optIn && "text-muted-foreground"
                                                    )}
                                                >
                                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                                    {optIn ? format(optIn, "dd/MM/yyyy") : <span>Chọn ngày</span>}
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="p-0">
                                                <Calendar
                                                    mode="single"
                                                    captionLayout="dropdown-buttons"
                                                    fromYear={2000}
                                                    toYear={2024}
                                                    selected={optIn}
                                                    onSelect={setOptIn}
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    </div>

                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="point" className="text-right">
                                            Ngày nghỉ việc
                                        </Label>
                                        
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "col-span-3 justify-start text-left font-normal",
                                                        !optOut && "text-muted-foreground"
                                                    )}
                                                >
                                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                                    {optOut ? format(optOut, "dd/MM/yyyy") : <span>Chọn ngày</span>}
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="p-0">
                                                <Calendar
                                                    mode="single"
                                                    captionLayout="dropdown-buttons"
                                                    fromYear={2000}
                                                    toYear={2024}
                                                    selected={optOut}
                                                    onSelect={setOptOut}
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
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
                                            <UserRoundX className="h-4 w-4"/>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>Đình chỉ người dùng</TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Bạn có chắc chắn muốn đình chỉ ?</DialogTitle>
                                <DialogDescription>
                                    Hành động này không thể hoàn tác. Thao tác này sẽ thực hiện đình chỉ người dùng.
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
            )
        }
    }
]