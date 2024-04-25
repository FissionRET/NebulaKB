"use client"

// Hooks

import { Suspense, useState } from 'react'

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
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

// Icons

import { Calendar as CalendarIcon } from "lucide-react"

// Others

import { AnimatePresence, motion } from 'framer-motion'
import SignupForm from './signupHandler'
import { format } from 'date-fns'
import { cn } from '@/lib/utils'

const steps = [
    { label: "Bước 1", description: "Thông tin đăng nhập" },
    { label: "Bước 2", description: "Thông tin cá nhân" }
] satisfies StepItem[]

export default function Signup() {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
        <>
            <div className="min-h-screen w-full dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative">
                <div className="w-full lg:grid lg:grid-cols-2 min-h-screen">
                    <div className="flex items-center justify-center py-12">
                        <div className="mx-auto grid w-[550px] gap-6">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    initial={{ opacity: 0, y: -100 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ type: 'spring', delay: 0.5 }}
                                    className="grid gap-4 text-center"
                                >
                                    <h1 className="text-3xl font-bold mb-2">Signup</h1>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.3 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ type: "spring", delay: 0.5 }}
                                >
                                    <Stepper initialStep={0} steps={steps} className="mb-4">
                                        {steps.map((stepProps, index) => {
                                            return (
                                                <Step key={stepProps.label} {...stepProps}>
                                                    {index === 0 && (
                                                        <SignupForm />
                                                    )}

                                                    {index === 1 && (
                                                        <div className="grid gap-4">
                                                            <div className="grid grid-cols-2 gap-4">
                                                                <div className="grid gap-2">
                                                                    <Label htmlFor="fullName">Tên đầy đủ</Label>
                                                                    <Input id="fullName" placeholder="Nguyễn Văn A" required />
                                                                </div>

                                                                <div className="grid gap-2">
                                                                    <Label htmlFor="dob">Ngày sinh</Label>
                                                                    <Popover>
                                                                        <PopoverTrigger asChild>
                                                                            <Button
                                                                                variant={"outline"}
                                                                                className={cn(
                                                                                    "w-[280px] justify-start text-left font-normal",
                                                                                    !date && "text-muted-foreground"
                                                                                )}
                                                                            >
                                                                                <CalendarIcon className="mr-2 h-4 w-4" />
                                                                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                                                                            </Button>
                                                                        </PopoverTrigger>
                                                                        <PopoverContent className="w-auto p-0">
                                                                            <Calendar
                                                                                mode="single"
                                                                                selected={date}
                                                                                onSelect={setDate}
                                                                                initialFocus
                                                                                id="dob"
                                                                                required
                                                                            />
                                                                        </PopoverContent>
                                                                    </Popover>
                                                                </div>
                                                            </div>

                                                            <div className="grid gap-2">
                                                                <Label htmlFor="address">Địa chỉ</Label>
                                                                <Input
                                                                    id="address"
                                                                    placeholder="Tổ 1, Khu 3, phường ABC"
                                                                    required
                                                                />
                                                            </div>
                                                        </div>
                                                    )}
                                                </Step>
                                            )
                                        })}

                                        <Footer />
                                    </Stepper>
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

const Footer = () => {
    const {
        nextStep,
        prevStep,
        resetSteps,
        hasCompletedAllSteps,
        isLastStep,
        isOptionalStep,
        isDisabledStep,
    } = useStepper()
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