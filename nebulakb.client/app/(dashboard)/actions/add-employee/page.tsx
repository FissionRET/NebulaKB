"use client"

// Hooks

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"
import axios from "axios";
import {useRouter} from "next/navigation";
import {SetStateAction, useState} from "react";
import {getDistricts, getProvinces, getWards} from "vietnam-provinces";
import {format} from "date-fns";
import {cn} from "@/lib/utils";

// Components
import {Button} from "@/components/ui/button"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card"
import {useToast} from "@/components/ui/use-toast";
import {PasswordInput} from "@/components/password-input";
import {ArrowLeft, CalendarIcon, UserRoundPlus} from "lucide-react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Calendar} from "@/components/ui/calendar";
import {createEmployeeSchema} from "@/validators/addEmployee";

type Input = z.infer<typeof createEmployeeSchema>;

export default function AddCustomer() {
    const [selectedProvinceCode, setSelectedProvinceCode] = useState('');
    const [selectedDistrictCode, setSelectedDistrictCode] = useState('');
    const {toast, dismiss} = useToast();
    const router = useRouter();

    const form = useForm<Input>({
        resolver: zodResolver(createEmployeeSchema),
        defaultValues: {
            username: "",
            password: "",
            repeatPassword: "",

            firstName: "",
            lastName: "",
            gender: "",
            doB: new Date("1999-01-01"),
            phone: "",
            email: "",
            optIn: new Date("1999-01-01"),
            optOut: new Date("1999-01-01"),

            street: "",
            province: "",
            district: "",
            wards: "",
        },
    });

    async function onSubmit(data: Input) {
        var userData = {
            username: data.username,
            password: data.password
        };

        var employeeData = {
            firstName: data.firstName,
            lastName: data.lastName,
            gender: data.gender === "Nam" ? 0 : data.gender === "Nữ" ? 1 : null,
            doB: data.doB,
            phone: data.phone,
            email: data.email,
            optIn: data.optIn,
            optOut: data.optOut,
            // address: {
            //     street: data.street,
            //     province: data.province.split("-")[1],
            //     district: data.district.split("-")[1],
            //     wards: data.wards.split("-")[1],
            //     formattedAddress: data.street + " " + data.wards.split("-")[1] + " " + data.district.split("-")[1] + " " + data.province.split("-")[1],
            // }
        };

        try {
            const resp = await axios.post("http://localhost:1337/employee/create", {
                user: userData,
                employee: employeeData
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "application/json",
                },
                withCredentials: true
            });

            if (resp.status === 200) {
                toast({
                    title: "Thêm nhân viên thành công !",
                    description: "Trình xử lý thao tác / Next.js (turbo)",
                });

                setTimeout(() => {
                    dismiss();
                    router.push("/admin-dashboard");
                }, 2000);
            }
        } catch (err) {
            console.error("Create employee failed: ", err);

            toast({
                title: "Thêm nhân viên thất bại !",
                description: "Trình xử lý thao tác / Next.js (turbo)",
            });

            setTimeout(() => {
                dismiss();
            }, 2000);
        }
    }

    const handleProvinceChange = (selectedCode: SetStateAction<string>) => {
        setSelectedProvinceCode(selectedCode);
    };

    const handleDistrictChange = (selectedCode: SetStateAction<string>) => {
        setSelectedDistrictCode(selectedCode);
    }

    const getDistrictOptions = () => {
        const districtOptions = getDistricts(selectedProvinceCode.split("-")[0]);
        return districtOptions.map(item => (
            <SelectItem
                value={`${item.code}-${item.name}`}
                key={item.code}
            >
                {item.name}
            </SelectItem>
        ));
    };

    const getWardOptions = () => {
        const wardOptions = getWards(selectedDistrictCode.split("-")[0]);
        return wardOptions.map(item => (
            <SelectItem
                value={`${item.code}-${item.name}`}
                key={item.code}
            >
                {item.name}
            </SelectItem>
        ));
    };

    return (
        <Card>
            <CardHeader className="border-b-1 border-zinc-800">
                <CardTitle>Thêm nhân viên mới</CardTitle>
                <CardDescription>Nhập thông tin cho nhân viên mới vào form dưới đây</CardDescription>
            </CardHeader>

            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col mt-2 gap-2">
                        <div className="flex flex-row gap-4">
                            <div className="flex-1">
                                <FormField
                                    control={form.control}
                                    name="username"
                                    rules={{
                                        required: true,
                                    }}
                                    render={({field}) => (
                                        <FormItem className="mb-4">
                                            <FormLabel
                                                htmlFor={field.name.toString()}
                                            >
                                                Tên đăng nhập
                                            </FormLabel>

                                            <FormControl>
                                                <Input
                                                    placeholder="Nhập tên đăng nhập"
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
                                    name="password"
                                    rules={{
                                        required: true,
                                    }}
                                    render={({field}) => (
                                        <FormItem className="mb-4">
                                            <FormLabel
                                                htmlFor={field.name.toString()}
                                            >
                                                Mật khẩu
                                            </FormLabel>

                                            <FormControl>
                                                <PasswordInput
                                                    placeholder="Nhập mật khẩu"
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
                                    name="repeatPassword"
                                    rules={{
                                        required: true,
                                    }}
                                    render={({field}) => (
                                        <FormItem className="mb-4">
                                            <FormLabel
                                                htmlFor={field.name.toString()}
                                            >
                                                Xác thực mật khẩu
                                            </FormLabel>

                                            <FormControl>
                                                <PasswordInput
                                                    placeholder="Nhập lại mật khẩu"
                                                    id={field.name.toString()}
                                                    {...field}
                                                />
                                            </FormControl>

                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />

                                <div className="flex flex-row w-full gap-2">
                                    <FormField
                                        control={form.control}
                                        name="province"
                                        render={({field}) => (
                                            <FormItem className="grow mb-4">
                                                <FormLabel
                                                    htmlFor={field.name.toString()}
                                                >
                                                    Tỉnh thành
                                                </FormLabel>

                                                <FormControl>
                                                    <Select
                                                        onValueChange={(value) => {
                                                            field.onChange(value);
                                                            handleProvinceChange(value);
                                                        }}
                                                        defaultValue={field.value}
                                                    >
                                                        <SelectTrigger>
                                                            <SelectValue
                                                                placeholder="Chọn tỉnh thành"
                                                                id={field.name.toString()}
                                                                {...field}
                                                            />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {getProvinces().map(item => {
                                                                    return (
                                                                        <SelectItem
                                                                            value={`${item.code}-${item.name}`}
                                                                            key={item.code}
                                                                        >
                                                                            {item.name}
                                                                        </SelectItem>
                                                                    );
                                                                }
                                                            )}
                                                        </SelectContent>
                                                    </Select>
                                                </FormControl>

                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="district"
                                        render={({field}) => (
                                            <FormItem className="grow mb-4">
                                                <FormLabel
                                                    htmlFor={field.name.toString()}
                                                >
                                                    Quận / Huyện / Thị xã / Thành phố
                                                </FormLabel>

                                                <FormControl>
                                                    <Select
                                                        onValueChange={(value) => {
                                                            field.onChange(value);
                                                            handleDistrictChange(value);
                                                        }}
                                                        defaultValue={field.value}
                                                    >
                                                        <SelectTrigger>
                                                            <SelectValue
                                                                placeholder="Chọn quận / huyện / thị xã / thành phố"
                                                                id={field.name.toString()}
                                                                {...field}
                                                            />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {selectedProvinceCode && getDistrictOptions()}
                                                        </SelectContent>
                                                    </Select>
                                                </FormControl>

                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="wards"
                                        render={({field}) => (
                                            <FormItem className="grow mb-4">
                                                <FormLabel
                                                    htmlFor={field.name.toString()}
                                                >
                                                    Phường
                                                </FormLabel>

                                                <FormControl>
                                                    <Select
                                                        onValueChange={field.onChange}
                                                        defaultValue={field.value}
                                                    >
                                                        <SelectTrigger>
                                                            <SelectValue
                                                                placeholder="Chọn phường"
                                                                id={field.name.toString()}
                                                                {...field}
                                                            />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {selectedDistrictCode && getWardOptions()}
                                                        </SelectContent>
                                                    </Select>
                                                </FormControl>

                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <FormField
                                    control={form.control}
                                    name="optIn"
                                    rules={{
                                        required: true,
                                    }}
                                    render={({field}) => (
                                        <FormItem className="grid gap-2 mb-4">
                                            <FormLabel
                                                htmlFor={field.name.toString()}
                                            >
                                                Ngày vào làm
                                            </FormLabel>

                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "pl-3 text-left font-normal",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value ? (
                                                                format(field.value, "dd/MM/yyyy")
                                                            ) : (
                                                                <span>Chọn ngày vào làm</span>
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

                            <div className="flex-1 flex flex-col">
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
                                        name="gender"
                                        render={({field}) => (
                                            <FormItem className="grow mb-4">
                                                <FormLabel
                                                    htmlFor={field.name.toString()}
                                                >
                                                    Giới tính
                                                </FormLabel>

                                                <FormControl>
                                                    <Select
                                                        onValueChange={field.onChange}
                                                        defaultValue={field.value}
                                                    >
                                                        <SelectTrigger>
                                                            <SelectValue
                                                                placeholder="Chọn giới tính"
                                                                id={field.name.toString()}
                                                                {...field}
                                                            />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {["Nam", "Nữ"].map(
                                                                (gender) => {
                                                                    return (
                                                                        <SelectItem
                                                                            value={gender}
                                                                            key={gender}
                                                                        >
                                                                            {gender}
                                                                        </SelectItem>
                                                                    );
                                                                }
                                                            )}
                                                        </SelectContent>
                                                    </Select>
                                                </FormControl>

                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="phone"
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
                                </div>

                                <FormField
                                    control={form.control}
                                    name="doB"
                                    rules={{
                                        required: true,
                                    }}
                                    render={({field}) => (
                                        <FormItem className="grid gap-2 mb-4">
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
                                                                "pl-3 text-left font-normal",
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

                                <div className="flex flex-row w-full gap-2">
                                    <FormField
                                        control={form.control}
                                        name="email"
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
                                        name="street"
                                        render={({field}) => (
                                            <FormItem className="grow mb-4">
                                                <FormLabel
                                                    htmlFor={field.name.toString()}
                                                >
                                                    Đường
                                                </FormLabel>

                                                <FormControl>
                                                    <Input
                                                        placeholder="Nhập đường, VD: Số nhà 12, Tổ 3, Khu 4"
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
                                    name="optOut"
                                    rules={{
                                        required: true,
                                    }}
                                    render={({field}) => (
                                        <FormItem className="grid gap-2 mb-4">
                                            <FormLabel
                                                htmlFor={field.name.toString()}
                                            >
                                                Ngày thôi việc
                                            </FormLabel>

                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "pl-3 text-left font-normal",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value ? (
                                                                format(field.value, "dd/MM/yyyy")
                                                            ) : (
                                                                <span>Chọn ngày thôi việc</span>
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

                        <div className="border-t-1 border-zinc-800">
                            <div className="flex flex-row gap-2">
                                <Button variant="expandIcon" Icon={ArrowLeft}
                                        onClick={() => router.push("/admin-dashboard")} type="button"
                                        iconPlacement="left" className="mt-3">
                                    Trở lại
                                </Button>

                                <Button variant="gooeyLeft" className="mt-3" type="submit">
                                    Thêm <UserRoundPlus className="ml-2 h-4 w-4"/>
                                </Button>
                            </div>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}