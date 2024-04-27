"use client"

// Hooks

import { Suspense, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

// Next components

import Link from 'next/link'

// Shadcn components

import { Button } from "@/components/ui/button"
import {
    Step,
    StepItem,
    Stepper,
    useStepper,
} from "@/components/ui/stepper"
import { Skeleton } from '@/components/ui/skeleton'
import { Input } from '@/components/ui/input'
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useToast } from '@/components/ui/use-toast'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

// Icons

import { Calendar as CalendarIcon } from "lucide-react"

// Others

import { AnimatePresence, motion } from 'framer-motion'
import { format } from 'date-fns'
import { cn } from '@/lib/utils'

const steps = [
    { label: "Bước 1", description: "Thông tin đăng nhập" },
    { label: "Bước 2", description: "Thông tin cá nhân" }
] satisfies StepItem[];

const userSchema = z.object({
    // User table

    username: z.string().min(2, {
        message: "Tên đăng nhập phải 2 ký tự trở lên",
    }).max(30, {
        message: "Tối đa là 30 ký tự"
    }).trim().transform((value) => value.toLowerCase()),

    password: z.string()
        .min(8, {
            message: "Mật khẩu phải ít nhất 8 ký tự"
        })
        .refine((value) => /[a-z]/.test(value), {
            message: "Mật khẩu phải chứa ít nhất 1 ký tự chữ thường"
        })
        .refine((value) => /[A-Z]/.test(value), {
            message: "Mật khẩu phải chứa ít nhất 1 ký tự chữ hoa",
        })
        .refine((value) => /[0-9]/.test(value), {
            message: "Mật khẩu phải chứa ít nhất 1 ký tự số",
        }),
    repeatPassword: z.string(),
})

userSchema.refine((data) => data.password === data.repeatPassword, {
    message: "Xác thực mật khẩu không khớp",
    path: ["repeatPassword"]
});

const customerSchema = z.object({
    // Customer table

    firstName: z.string().trim().min(1, {
        message: "Không thể để trống họ"
    }).max(30, {
        message: "Tối đa là 30 ký tự"
    }),

    lastName: z.string().trim().min(1, {
        message: "Không thể để trống tên"
    }).max(30, {
        message: "Tối đa là 30 ký tự"
    }),

    gender: z.number().int(),

    dateOfBirth: z.date(),

    phone: z.string().trim().min(10).max(10, {
        message: "Số điện thoại không hợp lệ"
    }),

    email: z.string().email().trim().min(1, {
        message: "Không thể để trống email"
    }),

    // Address info

    street: z.string().trim().min(1, {
        message: "Không thể để trống phố"
    }),

    city: z.string().trim().min(1, {
        message: "Không thể để trống thành phố"
    }),

    province: z.string().trim().min(1, {
        message: "Không thể để trống tỉnh thành"
    }),

    country: z.string().trim().min(1, {
        message: "Không thể để trống quốc gia"
    }),
})

export default function Signup() {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [zodStatus, setZodStatus] = useState(false);

    const { toast, dismiss } = useToast();
    const router = useRouter();

    // Form

    const [userJson, setUserJson] = useState('');
    const [customerJson, setCustomerJson] = useState('');

    const userForm = useForm<z.infer<typeof userSchema>>({
        resolver: zodResolver(userSchema),
        defaultValues: {
            username: "",
            password: "",
            repeatPassword: "",
        },
    });

    const customerForm = useForm<z.infer<typeof customerSchema>>({
        resolver: zodResolver(customerSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            gender: 0,
            dateOfBirth: new Date(),
            phone: "",
            email: "",

            street: "",
            city: "",
            province: "",
            country: ""
        }
    })

    useEffect(() => {
        //setZodStatus(userForm.formState.isValid);

        // new approach

        //const { isValid, errors } = userForm.formState;

        //const usernameIsValid = !errors.username && userForm.getValues('username') !== '';
        //const passwordIsValid = !errors.password && userForm.getValues('password') !== '';
        //const repeatPasswordIsValid = !errors.repeatPassword && userForm.getValues('repeatPassword') !== '';

        //const newStatus = usernameIsValid && passwordIsValid && repeatPasswordIsValid;

        //setZodStatus(newStatus);

        if (!userForm.getFieldState("username").isTouched && !userForm.getFieldState("password").isTouched || !userForm.getFieldState("repeatPassword").isTouched) {
            setZodStatus(true);
        }
    }, [userForm]);

    const userSubmit = async (values: z.infer<typeof userSchema>) => {
        // Test

        setUserJson(JSON.stringify(values, null, 2));

        toast({
            title: "You submitted user info:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{userJson}</code>
                </pre>
            ),
        })
    }

    const customerSubmit = (values: z.infer<typeof customerSchema>) => {
        setCustomerJson(JSON.stringify(values, null, 2));

        toast({
            title: "You submitted customer info:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{customerJson}</code>
                </pre>
            ),
        })
    }

    //const loginHandler = async (event: SyntheticEvent) => {
    //    event.preventDefault();

    //    try {
    //        const resp = await axios.post("http://localhost:1337/api/login",
    //            { username, password },
    //            {
    //                headers: {
    //                    'Content-Type': 'application/json'
    //                },
    //                withCredentials: true
    //            }
    //        );

    //        const data = resp.data;

    //        if (resp.status === 200) {
    //            sessionStorage.setItem("token", data.token);
    //            sessionStorage.setItem("username", data.username);
    //        }

    //        toast({
    //            title: "Đăng nhập thành công !",
    //            description: "Trình xử lý ủy quyền / Next.js (turbo)",
    //        });

    //        setTimeout(() => {
    //            dismiss();
    //            router.push("/");
    //        }, 2000);
    //    } catch (err) {
    //        console.error('err: ', err);

    //        toast({
    //            title: "Đăng nhập thất bại !",
    //            description: "Trình xử lý ủy quyền / Next.js (turbo)",
    //        });

    //        setTimeout(() => {
    //            dismiss();
    //        }, 2000);
    //    }
    //}

    return (
        <>
            <div className="min-h-screen w-full dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative">
                <div className="w-full lg:grid lg:grid-cols-2 min-h-screen">
                    <div className="flex items-center justify-center py-12">
                        <div className="mx-auto grid w-[550px] gap-6">
                            <AnimatePresence>
                                <motion.div
                                    key="h1Animation"
                                    initial={{ opacity: 0, y: -100 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ type: 'spring', delay: 0.5 }}
                                    className="grid gap-4 text-center"
                                >
                                    <h1 className="text-3xl font-bold mb-2">Signup</h1>
                                </motion.div>

                                <motion.div
                                    key="formAnimation"
                                    initial={{ opacity: 0, scale: 0.3 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ type: "spring", delay: 0.5 }}
                                >

                                    <Stepper initialStep={0} steps={steps} className="mb-4">
                                        {steps.map((stepProps, index) => {
                                            return (
                                                <Step key={stepProps.label} {...stepProps}>
                                                    {index === 0 && (
                                                        <Form {...userForm}>
                                                            <form onSubmit={userForm.handleSubmit(userSubmit)}>
                                                                <div className="grid gap-4">
                                                                    <FormField control={userForm.control} name="username" rules={{ required: true }} render={({ field }) => (
                                                                        <FormItem className="grid gap-2">
                                                                            <FormLabel htmlFor={field.name.toString()}>Tên đăng nhập</FormLabel>

                                                                            <FormControl>
                                                                                <Input placeholder="Nhập tên đăng nhập" id={field.name.toString()} {...field} />
                                                                            </FormControl>

                                                                            <FormMessage />
                                                                        </FormItem>

                                                                    )}>
                                                                    </FormField>

                                                                    <FormField control={userForm.control} name="password" rules={{ required: true }} render={({ field }) => (
                                                                        <FormItem className="grid gap-2">
                                                                            <FormLabel htmlFor={field.name.toString()}>Mật khẩu</FormLabel>

                                                                            <FormControl>
                                                                                <Input placeholder="Nhập mật khẩu" id={field.name.toString()} {...field} />
                                                                            </FormControl>

                                                                            <FormMessage />
                                                                        </FormItem>
                                                                    )}>
                                                                    </FormField>

                                                                    <FormField control={userForm.control} name="repeatPassword" rules={{ required: true }} render={({ field }) => (
                                                                        <FormItem className="grid gap-2">
                                                                            <FormLabel htmlFor={field.name.toString()}>Xác thực mật khẩu</FormLabel>

                                                                            <FormControl>
                                                                                <Input placeholder="Nhập lại mật khẩu" id={field.name.toString()} {...field} />
                                                                            </FormControl>

                                                                            <FormMessage />
                                                                        </FormItem>
                                                                    )}>
                                                                    </FormField>
                                                                </div>
                                                            </form>
                                                        </Form>
                                                    )}

                                                    {index === 1 && (
                                                        <Form {...customerForm}>
                                                            <form onSubmit={customerForm.handleSubmit(customerSubmit)}>
                                                                <div className="grid gap-4">
                                                                    <div className="grid grid-cols-2 gap-4">
                                                                        <div className="grid gap-2">
                                                                            <FormField control={customerForm.control} name="firstName" rules={{ required: true }} render={({ field }) => (
                                                                                <FormItem className="grid gap-2">
                                                                                    <FormLabel htmlFor={field.name.toString()}>Họ</FormLabel>

                                                                                    <FormControl>
                                                                                        <Input placeholder="Nhập họ" id={field.name.toString()} {...field} />
                                                                                    </FormControl>

                                                                                    <FormMessage />
                                                                                </FormItem>
                                                                            )}>
                                                                            </FormField>
                                                                        </div>

                                                                        <div className="grid gap-2">
                                                                            <FormField control={customerForm.control} name="lastName" rules={{ required: true }} render={({ field }) => (
                                                                                <FormItem className="grid gap-2">
                                                                                    <FormLabel htmlFor={field.name.toString()}>Tên</FormLabel>

                                                                                    <FormControl>
                                                                                        <Input placeholder="Nhập tên" id={field.name.toString()} {...field} />
                                                                                    </FormControl>

                                                                                    <FormMessage />
                                                                                </FormItem>
                                                                            )}>
                                                                            </FormField>
                                                                        </div>

                                                                        <div className="grid gap-2">
                                                                            <FormField control={customerForm.control} name="gender" render={({ field }) => (
                                                                                <FormItem className="grid gap-2">
                                                                                    <FormLabel htmlFor={field.name.toString()}>Giới tính</FormLabel>

                                                                                    <FormControl>
                                                                                        <Select>
                                                                                            <SelectTrigger>
                                                                                                <SelectValue placeholder="Chọn giới tính" id={field.name.toString()} {...field} />
                                                                                            </SelectTrigger>
                                                                                            <SelectContent>
                                                                                                <SelectGroup>
                                                                                                    <SelectLabel>Giới tính</SelectLabel>
                                                                                                    <SelectItem value="0">Nam</SelectItem>
                                                                                                    <SelectItem value="1">Nữ</SelectItem>

                                                                                                </SelectGroup>
                                                                                            </SelectContent>
                                                                                        </Select>
                                                                                    </FormControl>

                                                                                    <FormMessage />
                                                                                </FormItem>
                                                                            )}>
                                                                            </FormField>
                                                                        </div>

                                                                        <div className="grid gap-2">
                                                                            <FormField control={customerForm.control} name="dateOfBirth" render={({ field }) => (
                                                                                <FormItem className="grid gap-2">
                                                                                    <FormLabel htmlFor={field.name.toString()}>Ngày sinh</FormLabel>

                                                                                    <FormControl>
                                                                                        <Popover {...field}>
                                                                                            <PopoverTrigger id={field.name.toString()} asChild>
                                                                                                <Button
                                                                                                    variant={"outline"}
                                                                                                    className={cn(
                                                                                                        "w-[280px] justify-start text-left font-normal",
                                                                                                        !date && "text-muted-foreground"
                                                                                                    )}
                                                                                                >
                                                                                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                                                                                    {date ? format(date, "PPP") : <span>Chọn ngày sinh</span>}
                                                                                                </Button>
                                                                                            </PopoverTrigger>
                                                                                            <PopoverContent className="w-auto p-0">
                                                                                                <Calendar
                                                                                                    mode="single"
                                                                                                    selected={date}
                                                                                                    onSelect={setDate}
                                                                                                    initialFocus
                                                                                                    id={field.name.toString()}
                                                                                                />
                                                                                            </PopoverContent>
                                                                                        </Popover>
                                                                                    </FormControl>

                                                                                    <FormMessage />
                                                                                </FormItem>
                                                                            )}>
                                                                            </FormField>
                                                                        </div>

                                                                    </div>

                                                                    <div className="grid gap-2">
                                                                        <FormField control={customerForm.control} name="phone" render={({ field }) => (
                                                                            <FormItem className="grid gap-2">
                                                                                <FormLabel htmlFor={field.name.toString()}>Số điện thoại</FormLabel>

                                                                                <FormControl>
                                                                                    <Input placeholder="Nhập số điện thoại" id={field.name.toString()} {...field} />
                                                                                </FormControl>

                                                                                <FormMessage />
                                                                            </FormItem>
                                                                        )}>
                                                                        </FormField>
                                                                    </div>

                                                                    <div className="grid gap-2">
                                                                        <FormField control={customerForm.control} name="email" render={({ field }) => (
                                                                            <FormItem className="grid gap-2">
                                                                                <FormLabel htmlFor={field.name.toString()}>Email</FormLabel>

                                                                                <FormControl>
                                                                                    <Input placeholder="Nhập email" id={field.name.toString()} {...field} />
                                                                                </FormControl>

                                                                                <FormMessage />
                                                                            </FormItem>
                                                                        )}>
                                                                        </FormField>
                                                                    </div>

                                                                    <div className="grid gap-2">
                                                                        <FormField control={customerForm.control} name="street" render={({ field }) => (
                                                                            <FormItem className="grid gap-2">
                                                                                <FormLabel htmlFor={field.name.toString()}>Đường</FormLabel>

                                                                                <FormControl>
                                                                                    <Input placeholder="Nhập đường" id={field.name.toString()} {...field} />
                                                                                </FormControl>

                                                                                <FormMessage />
                                                                            </FormItem>
                                                                        )}>
                                                                        </FormField>
                                                                    </div>

                                                                    <div className="grid gap-2">
                                                                        <FormField control={customerForm.control} name="city" render={({ field }) => (
                                                                            <FormItem className="grid gap-2">
                                                                                <FormLabel htmlFor={field.name.toString()}>Thành phố</FormLabel>

                                                                                <FormControl>
                                                                                    <Select>
                                                                                        <SelectTrigger>
                                                                                            <SelectValue placeholder="Chọn thành phố" id={field.name.toString()} {...field} />
                                                                                        </SelectTrigger>
                                                                                        <SelectContent>
                                                                                            <SelectGroup>
                                                                                                <SelectLabel>Danh sách thành phố</SelectLabel>
                                                                                                <SelectItem value="halong">Hạ Long</SelectItem>
                                                                                                <SelectItem value="uongbi">Uông Bí</SelectItem>
                                                                                            </SelectGroup>
                                                                                        </SelectContent>
                                                                                    </Select>
                                                                                </FormControl>

                                                                                <FormMessage />
                                                                            </FormItem>
                                                                        )}>
                                                                        </FormField>
                                                                    </div>

                                                                    <div className="grid gap-2">
                                                                        <FormField control={customerForm.control} name="province" render={({ field }) => (
                                                                            <FormItem className="grid gap-2">
                                                                                <FormLabel htmlFor={field.name.toString()}>Tỉnh thành</FormLabel>

                                                                                <FormControl>
                                                                                    <Select>
                                                                                        <SelectTrigger>
                                                                                            <SelectValue placeholder="Chọn tỉnh thành" id={field.name.toString()} {...field} />
                                                                                        </SelectTrigger>
                                                                                        <SelectContent>
                                                                                            <SelectGroup>
                                                                                                <SelectLabel>Danh sách tỉnh thành</SelectLabel>
                                                                                                <SelectItem value="halong">Hạ Long</SelectItem>
                                                                                                <SelectItem value="uongbi">Uông Bí</SelectItem>
                                                                                            </SelectGroup>
                                                                                        </SelectContent>
                                                                                    </Select>
                                                                                </FormControl>

                                                                                <FormMessage />
                                                                            </FormItem>
                                                                        )}>
                                                                        </FormField>
                                                                    </div>

                                                                    <div className="grid gap-2">
                                                                        <FormField control={customerForm.control} name="country" render={({ field }) => (
                                                                            <FormItem className="grid gap-2">
                                                                                <FormLabel htmlFor={field.name.toString()}>Quốc gia</FormLabel>

                                                                                <FormControl>
                                                                                    <Select>
                                                                                        <SelectTrigger>
                                                                                            <SelectValue placeholder="Chọn quốc gia" id={field.name.toString()} {...field} />
                                                                                        </SelectTrigger>
                                                                                        <SelectContent>
                                                                                            <SelectGroup>
                                                                                                <SelectLabel>Danh sách quốc gia</SelectLabel>
                                                                                                <SelectItem value="halong">Hạ Long</SelectItem>
                                                                                                <SelectItem value="uongbi">Uông Bí</SelectItem>
                                                                                            </SelectGroup>
                                                                                        </SelectContent>
                                                                                    </Select>
                                                                                </FormControl>

                                                                                <FormMessage />
                                                                            </FormItem>
                                                                        )}>
                                                                        </FormField>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </Form>
                                                    )}
                                                </Step>
                                            )
                                        })}

                                        <Footer zodStatus={zodStatus} />
                                    </Stepper>
                                </motion.div>

                                <motion.div
                                    key="existUserAnimation"
                                    initial={{ opacity: 0, y: 100 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ ease: 'easeIn', delay: 0.5 }}
                                    className="mt-4 text-center text-sm"
                                >
                                    Đã có tài khoản?{" "}
                                    <Link href={'/auth/login'} className="underline">
                                        Đăng nhập ngay
                                    </Link>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="hidden bg-muted lg:block">
                        <Suspense fallback={<Skeleton className="h-full w-full" />}>
                            <motion.img
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ type: 'spring', damping: 20, stiffness: 100, delay: 0.5 }}
                                src="/imgs/wall.jpg"
                                alt="Login"
                                width="1920"
                                height="1080"
                                className="h-full w-full object-cover dark:brightness-[0.8] dark:grayscale"
                            />
                        </Suspense>
                    </div>

                </div>
            </div>
        </>
    );
}

const Footer = ({ zodStatus }: { zodStatus: boolean }) => {
    const {
        nextStep,
        prevStep,
        hasCompletedAllSteps,
        isLastStep,
        isOptionalStep,
        isDisabledStep,
    } = useStepper()

    const [canProceed, setCanProceed] = useState(false);

    // Watch for zodStatus variable

    useEffect(() => {
        setCanProceed(zodStatus);
    }, [zodStatus]);

    return (
        <>
            {hasCompletedAllSteps && (
                <div className="h-40 flex items-center justify-center my-2 border rounded-md">
                    <h1 className="text-xl">Hãy ấn nút bên dưới để đăng ký ngay thôi ! 🎉</h1>
                </div>
            )}
            <div className="w-full flex justify-end gap-2 my-4">
                {hasCompletedAllSteps ? (
                    <Button size="sm" type="submit">
                        Đăng ký ngay
                    </Button>
                ) : (
                    <>
                        <Button
                            disabled={isDisabledStep}
                            onClick={prevStep}
                            size="sm"
                            variant="secondary"
                        >
                            Trở lại
                        </Button>

                        <Button size="sm" type="button" onClick={() => canProceed && nextStep()}
                            disabled={!canProceed}>
                            {isLastStep ? "Hoàn tất đăng ký" : isOptionalStep ? "Skip" : "Tiếp tục"}
                        </Button>
                    </>
                )}
            </div>
        </>
    )
}