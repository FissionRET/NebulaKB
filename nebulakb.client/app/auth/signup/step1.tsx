// Hooks & functions

import {Control, FieldValues} from "react-hook-form";

// Components
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {PasswordInput} from "@/components/password-input";
import {Input} from "@/components/ui/input";

export default function FirstStep(props: { form: { control: Control<FieldValues> | undefined; }; }) {
    return (
        <>
            <div className="grid gap-4">
                <FormField
                    control={props.form.control}
                    name="username"
                    rules={{
                        required: true,
                    }}
                    render={({field}) => (
                        <FormItem className="grid gap-2">
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
                    control={props.form.control}
                    name="password"
                    rules={{
                        required: true,
                    }}
                    render={({field}) => (
                        <FormItem className="grid gap-2">
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
                    control={props.form.control}
                    name="repeatPassword"
                    rules={{
                        required: true,
                    }}
                    render={({field}) => (
                        <FormItem className="grid gap-2">
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
            </div>
        </>
    );
}