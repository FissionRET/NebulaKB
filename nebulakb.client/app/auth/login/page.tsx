"use client";

import Link from "next/link"
import { Suspense } from "react";

// Shadcn components

import LoginForm from "@/app/auth/login/handlers/loginHandler"
import { Skeleton } from "@/components/ui/skeleton";

// Framer

import { motion } from 'framer-motion'

export default function Login() {
    return (
        <div className="w-full lg:grid lg:grid-cols-2 min-h-screen">
            <div className="flex items-center justify-center py-12">
                <div className="mx-auto grid w-[350px] gap-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ type: 'spring', delay: 0.5 }}
                    >
                        <div className="grid gap-2 text-center">
                            <h1 className="text-3xl font-bold">Login</h1>

                            <p className="text-balance text-muted-foreground">
                                Nhập tên đăng nhập phía dưới để đăng nhập.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type: 'spring', delay: 0.5 }}
                    >
                        <LoginForm />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ease: 'easeIn', delay: 0.5 }}
                        className="mt-4 text-center text-sm"
                    >
                        Chưa có tài khoản?{" "}
                        <Link href={'/auth/signup'} className="underline">
                            Đăng ký ngay
                        </Link>
                    </motion.div>
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
    );
}