// Hooks & functions

import {SetStateAction, useState} from "react";
import {getDistricts, getProvinces, getWards} from "vietnam-provinces";
import {cn} from "@/lib/utils";
import {format} from "date-fns";
import {Control, FieldValues} from "react-hook-form";

// Components
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {Calendar} from "@/components/ui/calendar";
import {Input} from "@/components/ui/input";
import {CalendarIcon} from "lucide-react";

export default function SecondStep(props: {
    form: { control: Control<FieldValues> | undefined; };
}) {
    const [selectedProvinceCode, setSelectedProvinceCode] = useState('');
    const [selectedDistrictCode, setSelectedDistrictCode] = useState('');

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
        <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                    <FormField
                        control={props.form.control}
                        name="firstName"
                        rules={{
                            required: true,
                        }}
                        render={({field}) => (
                            <FormItem className="grid gap-2">
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
                </div>

                <div className="grid gap-2">
                    <FormField
                        control={props.form.control}
                        name="lastName"
                        rules={{
                            required: true,
                        }}
                        render={({field}) => (
                            <FormItem className="grid gap-2">
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

                <div className="grid gap-2">
                    <FormField
                        control={props.form.control}
                        name="gender"
                        render={({field}) => (
                            <FormItem className="grid gap-2">
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
                </div>

                <div className="grid gap-2">
                    <FormField
                        control={props.form.control}
                        name="doB"
                        rules={{
                            required: true,
                        }}
                        render={({field}) => (
                            <FormItem className="grid gap-2">
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
                </div>
            </div>

            <div className="grid gap-2">
                <FormField
                    control={props.form.control}
                    name="phone"
                    render={({field}) => (
                        <FormItem className="grid gap-2">
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

            <div className="grid gap-2">
                <FormField
                    control={props.form.control}
                    name="email"
                    render={({field}) => (
                        <FormItem className="grid gap-2">
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
            </div>

            <div className="grid gap-2">
                <FormField
                    control={props.form.control}
                    name="street"
                    render={({field}) => (
                        <FormItem className="grid gap-2">
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

            <div className="grid gap-2">
                <FormField
                    control={props.form.control}
                    name="province"
                    render={({field}) => (
                        <FormItem className="grid gap-2">
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
            </div>

            <div className="grid gap-2">
                <FormField
                    control={props.form.control}
                    name="district"
                    render={({field}) => (
                        <FormItem className="grid gap-2">
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
            </div>

            <div className="grid gap-2">
                <FormField
                    control={props.form.control}
                    name="wards"
                    render={({field}) => (
                        <FormItem className="grid gap-2">
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

        </div>
    )
}