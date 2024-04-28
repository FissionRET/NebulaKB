"use client"

import Link from "next/link";

// Components

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import { motion } from "framer-motion";
import { HardDriveUpload } from "lucide-react";

export default function Profile() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <>
            <motion.div className="mx-auto grid w-full max-w-6xl gap-2" variants={containerVariants}>
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="text-3xl font-semibold">Profile (Trang cá nhân)</motion.h1>
            </motion.div>
            <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
                <motion.nav className="grid gap-4 text-sm text-muted-foreground">
                    <motion.div initial="hidden" animate="visible" className="" variants={containerVariants}>
                        <motion.div variants={itemVariants} className="mb-3">
                            <Link href="#" className="font-semibold underline underline-offset-4">
                                Information (Thông tin cá nhân)
                            </Link>
                        </motion.div>

                        <motion.div variants={itemVariants} className="mb-3" >
                            <Link href="#">Security (Bảo mật)</Link>
                        </motion.div>

                        <motion.div variants={itemVariants} className="mb-3">
                            <Link href="#">Address (Địa chỉ giao hàng)</Link>
                        </motion.div>

                        <motion.div variants={itemVariants} className="mb-3">
                            <Link href="#">Orders (Lịch sử mua hàng)</Link>
                        </motion.div>
                        
                    </motion.div>
                </motion.nav>

                <div className="grid gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Thông tin cá nhân của bạn</CardTitle>

                            <CardDescription>
                                Được dùng khi thanh toán và vận chuyển.
                            </CardDescription>
                        </CardHeader>


                        <CardContent>
                            <form>
                                <Input placeholder="Tên ?" />
                            </form>
                        </CardContent>

                        <Separator />

                        <CardFooter className="px-6 py-4">
                            <Button>
                                <HardDriveUpload className="mr-2 h-4 w-4" /> Lưu thay đổi
                            </Button>
                        </CardFooter>
                    </Card>

                </div>
            </div>
        </>
    );
}