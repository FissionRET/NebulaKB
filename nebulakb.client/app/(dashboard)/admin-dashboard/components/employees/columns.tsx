"use client"

// Hooks

import {useState} from "react"
import {ColumnDef} from "@tanstack/react-table"
import {useForm} from "react-hook-form"
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import axios, {AxiosError} from "axios"
import {useToast} from "@/components/ui/use-toast";
import {useRouter} from "next/navigation"
import {format} from "date-fns"
import {cn} from "@/lib/utils";
import {updateSchema} from "@/validators/updateEmployee";

// Components

import {Button} from "@/components/ui/button"
import {Badge} from "@/components/ui/badge"
import {Textarea} from "@/components/ui/textarea"
import {DataTableColumnHeader} from "@/components/datatable/column-header";
import {Checkbox} from "@/components/ui/checkbox"
import {Input} from "@/components/ui/input";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {CalendarIcon, Check, ChevronsUpDown, Copy, FilePenLine, HardDriveDownload, UserRoundX} from "lucide-react"
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
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Calendar} from "@/components/ui/calendar";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Command, CommandGroup, CommandItem} from "@/components/ui/command";

export type Employees = {
    id: string
    firstName: string
    lastName: string
    gender: number
    email: string
    doB: Date
    phone: string
    address: string
    optIn: Date
    optOut: Date
}

type Input = z.infer<typeof updateSchema>;

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
                <Textarea value={JSON.parse(row.getValue("address")).FormattedAddress} disabled/>
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
            const {toast, dismiss} = useToast();
            const router = useRouter();

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

            const form = useForm<Input>({
                resolver: zodResolver(updateSchema),
                defaultValues: {
                    firstName: employee.firstName,
                    lastName: employee.lastName,
                    gender: employee.gender.toString(),
                    doB: employee.doB,
                    phone: employee.phone,
                    email: employee.email,
                    optIn: employee.optIn,
                    optOut: employee.optOut,

                    street: JSON.parse(employee.address).street,
                    province: JSON.parse(employee.address).province,
                    district: JSON.parse(employee.address).district,
                    wards: JSON.parse(employee.address).wards,
                },
            });

            async function onSubmit(data: Input) {
                var employeeData = {
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
                    const resp = await axios.post(`http://localhost:1337/employee/update/${employee.id}`, {
                        employee: employeeData
                    }, {
                        headers: {
                            "Content-Type": "application/json",
                        }
                    });

                    if (resp.status === 200) {
                        toast({
                            title: "Chỉnh sửa nhân viên thành công !",
                            description: "Trình xử lý thao tác / Next.js (turbo)",
                        });

                        setTimeout(() => {
                            dismiss();
                            router.push("/admin-dashboard");
                        }, 2000);
                    }
                } catch {
                    console.error("Edit employee failed: ", AxiosError.ERR_BAD_REQUEST);

                    toast({
                        title: "Chỉnh sửa nhân viên thất bại !",
                        description: "Trình xử lý thao tác / Next.js (turbo)",
                    });

                    setTimeout(() => {
                        dismiss();
                    }, 2000);
                }
            }

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
                                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50"/>
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