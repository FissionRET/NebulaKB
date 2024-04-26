"use client"

// Hooks

import { Suspense, SyntheticEvent, useEffect, useState } from 'react'
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

const formSchema = z.object({
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
    fullName: z.string().max(100, {
        message: "Tối đa là 100 ký tự"
    }),
    dateOfBirth: z.date(),
    address: z.string(),
})
    .refine((data) => data.password === data.repeatPassword, {
        message: "Xác thực mật khẩu không khớp",
        path: ["repeatPassword"]
    });

export default function Signup() {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [zodStatus, setZodStatus] = useState(false);

    const { toast, dismiss } = useToast();
    const router = useRouter();

    // Form

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
            repeatPassword: "",
            fullName: "",
            dateOfBirth: new Date(),
            address: ""
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        //if (values.username === "" && values.password === "") {
        //    return zodStatus;
        //}

        //await setZodStatus(true);
        await toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(values, null, 2)}</code>
                </pre>
            ),
        })
    }

    const loginHandler = async (event: SyntheticEvent) => {
        event.preventDefault();

        try {
            const resp = await axios.post("http://localhost:1337/api/login",
                { username, password },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                }
            );

            const data = resp.data;

            if (resp.status === 200) {
                sessionStorage.setItem("token", data.token);
                sessionStorage.setItem("username", data.username);
            }

            toast({
                title: "Đăng nhập thành công !",
                description: "Trình xử lý ủy quyền / Next.js (turbo)",
            });

            setTimeout(() => {
                dismiss();
                router.push("/");
            }, 2000);
        } catch (err) {
            console.error('err: ', err);

            toast({
                title: "Đăng nhập thất bại !",
                description: "Trình xử lý ủy quyền / Next.js (turbo)",
            });

            setTimeout(() => {
                dismiss();
            }, 2000);
        }
    }

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
                                    <Form {...form}>
                                        <form onSubmit={form.handleSubmit(onSubmit)}>
                                            <Stepper initialStep={0} steps={steps} className="mb-4">
                                                {steps.map((stepProps, index) => {
                                                    return (
                                                        <Step key={stepProps.label} {...stepProps}>
                                                            {index === 0 && (
                                                                <div className="grid gap-4">
                                                                    <FormField control={form.control} name="username" rules={{ required: true }} render={({ field }) => (
                                                                        <FormItem className="grid gap-2">
                                                                            <FormLabel htmlFor={field.name.toString()}>Tên đăng nhập</FormLabel>

                                                                            <FormControl>
                                                                                <Input placeholder="Nhập tên đăng nhập" id={field.name.toString()} {...field} />
                                                                            </FormControl>

                                                                            <FormMessage />
                                                                        </FormItem>

                                                                    )}>
                                                                    </FormField>

                                                                    <FormField control={form.control} name="password" rules={{ required: true }} render={({ field }) => (
                                                                        <FormItem className="grid gap-2">
                                                                            <FormLabel htmlFor={field.name.toString()}>Mật khẩu</FormLabel>

                                                                            <FormControl>
                                                                                <Input placeholder="Nhập mật khẩu" id={field.name.toString()} {...field} />
                                                                            </FormControl>

                                                                            <FormMessage />
                                                                        </FormItem>
                                                                    )}>
                                                                    </FormField>

                                                                    <FormField control={form.control} name="repeatPassword" rules={{ required: true }} render={({ field }) => (
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
                                                            )}

                                                            {index === 1 && (
                                                                <div className="grid gap-4">
                                                                    <div className="grid grid-cols-2 gap-4">
                                                                        <div className="grid gap-2">
                                                                            <FormField control={form.control} name="fullName" rules={{ required: true }} render={({ field }) => (
                                                                                <FormItem className="grid gap-2">
                                                                                    <FormLabel htmlFor={field.name.toString()}>Tên đầy đủ</FormLabel>

                                                                                    <FormControl>
                                                                                        <Input placeholder="Nhập họ tên" id={field.name.toString()} {...field} />
                                                                                    </FormControl>

                                                                                    <FormMessage />
                                                                                </FormItem>
                                                                            )}>
                                                                            </FormField>
                                                                        </div>


                                                                        <div className="grid gap-2">
                                                                            <FormField control={form.control} name="dateOfBirth" rules={{ required: true }} render={({ field }) => (
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
                                                                        <FormField control={form.control} name="address" rules={{ required: true }} render={({ field }) => (
                                                                            <FormItem className="grid gap-2">
                                                                                <FormLabel htmlFor={field.name.toString()}>Địa chỉ</FormLabel>

                                                                                <FormControl>
                                                                                    <Input placeholder="Nhập địa chỉ của bạn" id={field.name.toString()} {...field} />
                                                                                </FormControl>

                                                                                <FormMessage />
                                                                            </FormItem>
                                                                        )}>
                                                                        </FormField>

                                                                    </div>
                                                                </div>
                                                            )}
                                                        </Step>
                                                    )
                                                })}

                                                <Footer zodStatus={zodStatus} />
                                            </Stepper>
                                        </form>
                                    </Form>
                                </motion.div>

                                <motion.div
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

interface FooterProps {
    zodStatus: boolean;
}

const Footer = ({ zodStatus }: FooterProps) => {
    const {
        nextStep,
        prevStep,
        resetSteps,
        hasCompletedAllSteps,
        isLastStep,
        isOptionalStep,
        isDisabledStep,
    } = useStepper()

    //const [prevZodStatus, setPrevZodStatus] = useState(zodStatus);

    //useEffect(() => {
    //    setPrevZodStatus(zodStatus);
    //}, [zodStatus]);

    //const handleNext = () => {
    //    if (zodStatus) {
    //        nextStep();
    //    }
    //};

    return (
        <>
            {hasCompletedAllSteps && (
                <div className="h-40 flex items-center justify-center my-2 border rounded-md">
                    <h1 className="text-xl">Đăng ký thành công ! 🎉</h1>
                </div>
            )}
            <div className="w-full flex justify-end gap-2 my-4">
                {hasCompletedAllSteps ? (
                    <Button size="sm" onClick={resetSteps}>
                        Reset
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

                        <Button size="sm" onClick={nextStep}>
                            {isLastStep ? "Hoàn tất đăng ký" : isOptionalStep ? "Skip" : "Tiếp tục"}
                        </Button>
                    </>
                )}
            </div>
        </>
    )
}