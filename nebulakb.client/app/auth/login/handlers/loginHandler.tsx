"use client";

import Link from "next/link"
import { useRouter } from 'next/navigation'
import axios from 'axios'
import jwt from 'jsonwebtoken'

// Shadcn components

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { useState } from "react";

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { toast, dismiss } = useToast();
    const router = useRouter();

    const loginHandler = async (event) => {
        event.preventDefault();       

        try {
            const resp = await axios.post("http://localhost:1337/User/login", { username, password });
            const token = resp.data.token;

            localStorage.setItem("token", token);

            const decoded = jwt.decode(token);
            console.log(decoded);

            toast({
                title: "Login successful !",
                description: "Login Handler / Next.js (turbo)",
            });

            setTimeout(() => {
                dismiss();
                router.push("/");
            }, 2000);
        } catch (err) {
            console.error('err: ', err);

            toast({
                title: "Login failed !",
                description: "Login Handler / Next.js (turbo)",
            });

            setTimeout(() => {
                dismiss();
            }, 2000);
        }

        //const username = event.target.username.value;
        //const password = event.target.password.value;

        //if (username === 'user1' && password === 'a123') {
        //    toast({
        //        title: "Login successful !",
        //        description: "Login Handler / Next.js (turbo)",
        //    });

        //    setTimeout(() => {
        //        dismiss();
        //        router.push("/");
        //    }, 2000);
        //} else {
        //    toast({
        //        title: "Login failed !",
        //        description: "Login Handler / Next.js (turbo)",
        //    });

        //    setTimeout(() => {
        //        dismiss();
        //    }, 2000);
        //}
    }

    return (
        <form onSubmit={loginHandler}>
            <div className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="username">Tên đăng nhập</Label>
                    <Input id="username" type="text" placeholder="VD: user1" value={username} required onChange={(e) => setUsername(e.target.value)} />
                </div>

                <div className="grid gap-2">
                    <div className="flex items-center">
                        <Label htmlFor="password">Mật khẩu</Label>
                        <Link href={"/auth/forgot-password"} className="ml-auto inline-block text-sm underline">
                            Quên mật khẩu?
                        </Link>
                    </div>
                    <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>

                <Button type="submit" className="w-full">
                    Đăng nhập ngay
                </Button>
            </div>
        </form>
    );
}