"use client"

// Hooks

import {useState} from "react"
import {updateSchema} from "@/validators/updateCustomer";
import {z} from "zod"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import axios, {AxiosError} from "axios"
import {useToast} from "@/components/ui/use-toast";
import {useRouter} from "next/navigation"
import {ColumnDef} from "@tanstack/react-table"

// Components
import {CalendarIcon, Check, ChevronsUpDown, Copy, FilePenLine, HardDriveDownload, UserRoundX} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Badge} from "@/components/ui/badge"
import {Textarea} from "@/components/ui/textarea"
import {DataTableColumnHeader} from "@/components/datatable/column-header";
import {Checkbox} from "@/components/ui/checkbox"
import {Input} from "@/components/ui/input";
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
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {cn} from "@/lib/utils";
import {Command, CommandGroup, CommandItem} from "@/components/ui/command";
import {Calendar} from "@/components/ui/calendar";
import {format} from "date-fns";

export type Customers = {
    id: string
    firstName: string
    lastName: string
    gender: number
    doB: Date
    email: string
    phone: string
    address: string
    rank: number
    point: number
}

type Input = z.infer<typeof updateSchema>;

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
        header: "Họ tên",
        cell: ({row}) => {
            return (
                <span>{row.original.firstName + " " + row.original.lastName}</span>
            )
        }
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
                <Badge variant="secondary">{row.original.gender === 0 ? "Nam" : "Nữ"}</Badge>
            );
        }
    },
    {
        accessorKey: "doB",
        header: "Ngày sinh",
        cell: ({row}) => {
            return (
                <Input defaultValue={row.getValue("doB")} disabled/>
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
                <Textarea value={JSON.parse(row.getValue("address")).FormattedAddress} disabled/>
            );
        }
    },
    {
        accessorKey: "rank",
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="Hạng / Rank"/>
        ),
        cell: ({row}) => {
            return (
                <Badge
                    variant="outline">{row.getValue("rank") === 0 ? "Hội viên thường" : row.getValue("rank") === 1 ? "Thành viên vàng" : "Thành viên kim cương"}</Badge>
            );
        }
    },
    {
        accessorKey: "point",
        header: ({column}) => (
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
        header: "Thao tác",
        cell: ({row}) => {
            const user = row.original
            const {toast, dismiss} = useToast();
            const router = useRouter();

            const genders = [
                {
                    value: 0,
                    label: "Nam"
                },
                {
                    value: 1,
                    label: "Nữ"
                }
            ];

            const ranks = [
                {
                    value: 0,
                    label: "Hội viên thường"
                },
                {
                    value: 1,
                    label: "Hội viên vàng"
                },
                {
                    value: 2,
                    label: "Hội viên kim cương"
                }
            ];

            const form = useForm<Input>({
                resolver: zodResolver(updateSchema),
                defaultValues: {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    gender: user.gender.toString(),
                    doB: user.doB,
                    phone: user.phone,
                    email: user.email,
                    rank: user.rank,
                    point: user.point,

                    street: JSON.parse(user.address).street,
                    province: JSON.parse(user.address).province,
                    district: JSON.parse(user.address).district,
                    wards: JSON.parse(user.address).wards,
                },
            });

            async function onSubmit(data: Input) {
                var customerData = {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    gender: data.gender === "Nam" ? 0 : data.gender === "Nữ" ? 1 : null,
                    doB: data.doB,
                    phone: data.phone,
                    email: data.email,
                    address: {
                        street: data.street,
                        province: data.province.split("-")[1],
                        district: data.district.split("-")[1],
                        wards: data.wards.split("-")[1],
                        formattedAddress: data.street + " " + data.wards.split("-")[1] + " " + data.district.split("-")[1] + " " + data.province.split("-")[1],
                    }
                };

                try {
                    const resp = await axios.post(`http://localhost:1337/customer/update/${user.id}`, {
                        customer: customerData
                    }, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                            "Content-Type": "application/json",
                        }
                    });

                    if (resp.status === 200) {
                        toast({
                            title: "Chỉnh sửa khách hàng thành công !",
                            description: "Trình xử lý thao tác / Next.js (turbo)",
                        });

                        setTimeout(() => {
                            dismiss();
                            router.push("/admin-dashboard");
                        }, 2000);
                    }
                } catch {
                    console.error("Edit customer failed: ", AxiosError.ERR_BAD_REQUEST);

                    toast({
                        title: "Chỉnh sửa khách hàng thất bại !",
                        description: "Trình xử lý thao tác / Next.js (turbo)",
                    });

                    setTimeout(() => {
                        dismiss();
                    }, 2000);
                }
            }

            const handleDelete = async (e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();

                try {
                    const resp = await axios.delete(`http://localhost:1337/customer/delete/${customer.id}`, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                    })

                    if (resp.status === 200) {
                        toast({
                            title: "Xóa khách hàng thành công !",
                            description: "Trình xử lý thao tác / Next.js (turbo)",
                        });

                        setTimeout(() => {
                            dismiss();
                            router.push("/admin-dashboard");
                        }, 2000);
                    }
                } catch (err) {
                    console.error("Delete customer failed: ", err);

                    toast({
                        title: "Xóa khách hàng thất bại !",
                        description: "Trình xử lý thao tác / Next.js (turbo)",
                    });

                    setTimeout(() => {
                        dismiss();
                    }, 2000);
                }
            }

            return (
                <div className="grid grid-cols-3 gap-6 mr-4">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Button variant="outline" onClick={() => navigator.clipboard.writeText(user.id)}>
                                    <Copy className="h-4 w-4"/>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>Copy ID khách hàng</TooltipContent>
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
                                <DialogTitle>Chỉnh sửa khách hàng</DialogTitle>
                                <DialogDescription>
                                    Thay đổi thông tin và ấn lưu thay đổi
                                </DialogDescription>

                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col mt-2 gap-2">
                                        <div className="flex flex-row gap-4">
                                            <div className="flex-1">
                                                <div className="flex flex-row w-full gap-2">
                                                    <FormField
                                                        control={form.control}
                                                        name="firstName"
                                                        rules={{
                                                            required: true,
                                                        }}
                                                        render={({field}) => (
                                                            <FormItem className="grow mb-4">
                                                                <FormLabel
                                                                    htmlFor={field.name.toString()}
                                                                >
                                                                    Họ
                                                                </FormLabel>

                                                                <FormControl>
                                                                    <Input
                                                                        placeholder="Nhập họ"
                                                                        id={field.name.toString()}
                                                                        {...field}
                                                                    />
                                                                </FormControl>

                                                                <FormMessage/>
                                                            </FormItem>
                                                        )}
                                                    />

                                                    <FormField
                                                        control={form.control}
                                                        name="lastName"
                                                        rules={{
                                                            required: true,
                                                        }}
                                                        render={({field}) => (
                                                            <FormItem className="grow mb-4">
                                                                <FormLabel
                                                                    htmlFor={field.name.toString()}
                                                                >
                                                                    Tên
                                                                </FormLabel>

                                                                <FormControl>
                                                                    <Input
                                                                        placeholder="Nhập tên"
                                                                        id={field.name.toString()}
                                                                        {...field}
                                                                    />
                                                                </FormControl>

                                                                <FormMessage/>
                                                            </FormItem>
                                                        )}
                                                    />
                                                </div>

                                                <div className="flex flex-row w-full gap-2">
                                                    <FormField
                                                        control={form.control}
                                                        name="email"
                                                        rules={{
                                                            required: true,
                                                        }}
                                                        render={({field}) => (
                                                            <FormItem className="grow mb-4">
                                                                <FormLabel
                                                                    htmlFor={field.name.toString()}
                                                                >
                                                                    Email
                                                                </FormLabel>

                                                                <FormControl>
                                                                    <Input
                                                                        placeholder="Nhập email"
                                                                        id={field.name.toString()}
                                                                        {...field}
                                                                    />
                                                                </FormControl>

                                                                <FormMessage/>
                                                            </FormItem>
                                                        )}
                                                    />

                                                    <FormField
                                                        control={form.control}
                                                        name="gender"
                                                        rules={{
                                                            required: true,
                                                        }}
                                                        render={({field}) => (
                                                            <FormItem className="grow mb-4">
                                                                <FormLabel
                                                                    htmlFor={field.name.toString()}
                                                                >
                                                                    Giới tính
                                                                </FormLabel>

                                                                <Popover>
                                                                    <PopoverTrigger asChild>
                                                                        <FormControl>
                                                                            <Button variant="outline" role="combobox"
                                                                                    className={cn("grow mb-4 w-full justify-between", !field.value && "text-muted-foreground")}>
                                                                                {field.value ? genders.find((gender) => gender.value.toString() === field.value)?.label : "Chọn giới tính"}
                                                                                <ChevronsUpDown
                                                                                    className="ml-2 h-4 w-4 shrink-0 opacity-50"/>
                                                                            </Button>
                                                                        </FormControl>
                                                                    </PopoverTrigger>

                                                                    <PopoverContent className="p-0">
                                                                        <Command>
                                                                            <CommandGroup>
                                                                                {genders.map((gender) => (
                                                                                    <CommandItem
                                                                                        value={gender.value.toString()}
                                                                                        key={gender.label}
                                                                                        onSelect={() => {
                                                                                            form.setValue("gender", gender.value.toString())
                                                                                        }}
                                                                                    >
                                                                                        <Check
                                                                                            className={cn("mr-2 h-4 w-4", gender.value.toString() === field.value ? "opacity-100" : "opacity-0")}/>
                                                                                        {gender.label}
                                                                                    </CommandItem>
                                                                                ))}
                                                                            </CommandGroup>
                                                                        </Command>
                                                                    </PopoverContent>
                                                                </Popover>

                                                                <FormMessage/>
                                                            </FormItem>
                                                        )}
                                                    />
                                                </div>

                                                <div className="flex flex-row w-full gap-2">
                                                    <FormField
                                                        control={form.control}
                                                        name="phone"
                                                        rules={{
                                                            required: true,
                                                        }}
                                                        render={({field}) => (
                                                            <FormItem className="grow mb-4">
                                                                <FormLabel
                                                                    htmlFor={field.name.toString()}
                                                                >
                                                                    Số điện thoại
                                                                </FormLabel>

                                                                <FormControl>
                                                                    <Input
                                                                        placeholder="Nhập số điện thoại"
                                                                        id={field.name.toString()}
                                                                        {...field}
                                                                    />
                                                                </FormControl>

                                                                <FormMessage/>
                                                            </FormItem>
                                                        )}
                                                    />

                                                    <FormField
                                                        control={form.control}
                                                        name="street"
                                                        rules={{
                                                            required: true,
                                                        }}
                                                        render={({field}) => (
                                                            <FormItem className="grow mb-4">
                                                                <FormLabel
                                                                    htmlFor={field.name.toString()}
                                                                >
                                                                    Địa chỉ
                                                                </FormLabel>

                                                                <FormControl>
                                                                    <Input
                                                                        placeholder="Nhập địa chỉ"
                                                                        id={field.name.toString()}
                                                                        {...field}
                                                                    />
                                                                </FormControl>

                                                                <FormMessage/>
                                                            </FormItem>
                                                        )}
                                                    />
                                                </div>

                                                <FormField
                                                    control={form.control}
                                                    name="rank"
                                                    rules={{
                                                        required: true,
                                                    }}
                                                    render={({field}) => (
                                                        <FormItem className="grow mb-4">
                                                            <FormLabel
                                                                htmlFor={field.name.toString()}
                                                            >
                                                                Hạng thành viên
                                                            </FormLabel>

                                                            <Popover>
                                                                <PopoverTrigger asChild>
                                                                    <FormControl>
                                                                        <Button variant="outline" role="combobox"
                                                                                className={cn("grow mb-4 w-full justify-between", !field.value && "text-muted-foreground")}>
                                                                            {field.value ? ranks.find((rank) => rank.value === field.value)?.label : "Hội viên thường"}
                                                                            <ChevronsUpDown
                                                                                className="ml-2 h-4 w-4 shrink-0 opacity-50"/>
                                                                        </Button>
                                                                    </FormControl>
                                                                </PopoverTrigger>

                                                                <PopoverContent className="p-0">
                                                                    <Command>
                                                                        <CommandGroup>
                                                                            {ranks.map((rank) => (
                                                                                <CommandItem
                                                                                    value={rank.value.toString()}
                                                                                    key={rank.label}
                                                                                    onSelect={() => {
                                                                                        form.setValue("rank", rank.value)
                                                                                    }}
                                                                                >
                                                                                    <Check
                                                                                        className={cn("mr-2 h-4 w-4", rank.value === field.value ? "opacity-100" : "opacity-0")}/>
                                                                                    {rank.label}
                                                                                </CommandItem>
                                                                            ))}
                                                                        </CommandGroup>
                                                                    </Command>
                                                                </PopoverContent>
                                                            </Popover>

                                                            <FormMessage/>
                                                        </FormItem>
                                                    )}
                                                />

                                                <FormField
                                                    control={form.control}
                                                    name="doB"
                                                    rules={{
                                                        required: true,
                                                    }}
                                                    render={({field}) => (
                                                        <FormItem>
                                                            <FormLabel
                                                                htmlFor={field.name.toString()}
                                                            >
                                                                Ngày sinh
                                                            </FormLabel>

                                                            <Popover>
                                                                <PopoverTrigger asChild>
                                                                    <FormControl>
                                                                        <Button
                                                                            variant={"outline"}
                                                                            className={cn(
                                                                                "grow mb-4 w-full justify-between",
                                                                                !field.value && "text-muted-foreground"
                                                                            )}
                                                                        >
                                                                            {field.value ? (
                                                                                format(field.value, "dd/MM/yyyy")
                                                                            ) : (
                                                                                <span>Chọn ngày sinh</span>
                                                                            )}
                                                                            <CalendarIcon
                                                                                className="ml-auto h-4 w-4 opacity-50"/>
                                                                        </Button>
                                                                    </FormControl>
                                                                </PopoverTrigger>
                                                                <PopoverContent className="w-auto p-0" align="start">
                                                                    <Calendar
                                                                        mode="single"
                                                                        captionLayout="dropdown-buttons"
                                                                        fromYear={1990}
                                                                        toYear={2024}
                                                                        selected={field.value}
                                                                        onSelect={field.onChange}
                                                                        initialFocus
                                                                    />
                                                                </PopoverContent>
                                                            </Popover>

                                                            <FormMessage/>
                                                        </FormItem>
                                                    )}
                                                />

                                                <FormField
                                                    control={form.control}
                                                    name="point"
                                                    rules={{
                                                        required: true,
                                                    }}
                                                    render={({field}) => (
                                                        <FormItem className="grow mb-4">
                                                            <FormLabel
                                                                htmlFor={field.name.toString()}
                                                            >
                                                                Điểm thưởng
                                                            </FormLabel>

                                                            <FormControl>
                                                                <Input
                                                                    placeholder="Nhập điểm thưởng"
                                                                    type="number"
                                                                    id={field.name.toString()}
                                                                    {...field}
                                                                />
                                                            </FormControl>

                                                            <FormMessage/>
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>
                                        </div>

                                        <DialogFooter>
                                            <DialogClose asChild>
                                                <Button variant="secondary" type="button">Hủy</Button>
                                            </DialogClose>

                                            <Button variant="expandIcon" Icon={HardDriveDownload} iconPlacement="right"
                                                    type="submit">Lưu thay đổi</Button>
                                        </DialogFooter>
                                    </form>
                                </Form>
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
                                    <TooltipContent>Xóa người dùng</TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Bạn có chắc chắn muốn xóa người dùng này ?</DialogTitle>
                                <DialogDescription>
                                    Hành động này không thể hoàn tác. Thao tác này sẽ thực hiện đình chỉ người dùng.
                                </DialogDescription>
                                <DialogFooter>
                                    <DialogClose asChild>
                                        <Button variant="secondary" type="button">Hủy</Button>
                                    </DialogClose>

                                    <form onSubmit={handleDelete}>
                                        <DialogClose asChild>
                                            <Button variant="destructive" type="submit">Tôi chắc chắn <Check
                                                className="ml-2 h-4 w-4"/></Button>
                                        </DialogClose>
                                    </form>
                                </DialogFooter>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </div>
            )
        }
    }
]