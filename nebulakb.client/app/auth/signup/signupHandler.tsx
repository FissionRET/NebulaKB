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

export default function SignupForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { toast, dismiss } = useToast();
    const router = useRouter();

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
        <form onSubmit={loginHandler}>
            <div className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="username">Tên đăng nhập</Label>
                    <Input id="username" type="text" placeholder="keyboardlover69" required onChange={(e) => setUsername(e.target.value)} />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="password">Mật khẩu</Label>
                    <Input id="password" type="password" onChange={(e) => setPassword(e.target.value)} required />
                </div>
            </div>
        </form>
    );
}