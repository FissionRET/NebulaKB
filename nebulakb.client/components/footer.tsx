// Hooks

import { useEffect, useState } from 'react'
import Link from "next/link";

// Local components

import AnimatedIcon from '@/components/animatedlogo'

// Shadcn components

import { motion } from 'framer-motion'

import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button"
import { Tooltip } from "@nextui-org/react";

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", delay: 0.1 }}
            className="min-h-[10rem] mt-4 mb-2 py-6 px-6"
        >
            <div className="space-y-2">
                <div className="text-md font-medium leading-none">
                    <p className="font-bold text-inherit">Nebula Keyboard</p>
                </div>

                <p className="text-sm text-muted-foreground">
                    Shop bán bàn phím cơ custom số 1 Việt Nam.
                    <Tooltip color="default" content="Trạng thái hệ thống: Online" placement="right">
                        <span className="ml-2 relative h-3 w-3">
                            <span className="animate-[ping_3s_ease-in-out_infinite] absolute inline-block h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-block rounded-full h-4 w-4 bg-emerald-500"></span>
                        </span>
                    </Tooltip>
                </p>
            </div>

            <Separator className="my-4" />

            <div className="flex h-5 items-center space-x-4 text-sm">
                <Link href="/" className={buttonVariants({ variant: "outline" })}>FAQ</Link>

                <Separator orientation="vertical" />

                <Link href="/" className={buttonVariants({ variant: "outline" })}>Chính sách vận chuyển</Link>

                <Separator orientation="vertical" />

                <Link href="/" className={buttonVariants({ variant: "outline" })}>Hỗ trợ</Link>
            </div>

            <div className="w-10 h-10" style={{ position: 'fixed', bottom: '30px', right: '38px', margin: 'auto' }}>
                <AnimatedIcon/>
            </div>
        </motion.footer>
    );
}