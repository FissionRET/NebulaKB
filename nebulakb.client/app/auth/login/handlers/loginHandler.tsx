"use client";

import { SyntheticEvent, useState } from "react";
import Link from "next/link"
import { useRouter } from 'next/navigation'
import axios from 'axios'

// Shadcn components

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { toast, dismiss } = useToast();
    const router = useRouter();

    const loginHandler = async (event: SyntheticEvent) => {
        event.preventDefault();       

        try {
            const resp = await axios.post("http://localhost:1337/api/login",
                { username, password },
                { withCredentials: true }
            );

            if (resp.data.message == "success") {
                const token = resp.data.token;
                sessionStorage.setItem("token", token);
                sessionStorage.setItem("username", username);
            }

            toast({
                title: "Login successful !",
                description: "Authorization Handler / Next.js (turbo)",
            });

            setTimeout(() => {
                dismiss();
                router.push("/");
            }, 2000);
        } catch (err) {
            console.error('err: ', err);

            toast({
                title: "Login failed !",
                description: "Authorization Handler / Next.js (turbo)",
            });

            setTimeout(() => {
                dismiss();
            }, 2000);
        }
    }

    return (
        <form onSubmit={loginHandler}>
            <div className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="username">Tên đăng nhập</Label>
                    <Input id="username" type="text" placeholder="VD: user1" required onChange={(e) => setUsername(e.target.value)} />
                </div>

                <div className="grid gap-2">
                    <div className="flex items-center">
                        <Label htmlFor="password">Mật khẩu</Label>
                        <Link href={"/auth/forgot-password"} className="ml-auto inline-block text-sm underline">
                            Quên mật khẩu?
                        </Link>
                    </div>
                    <Input id="password" type="password" onChange={(e) => setPassword(e.target.value)} required />
                </div>

                <Button type="submit" className="w-full">
                    Đăng nhập ngay
                </Button>
            </div>
        </form>
    );
}