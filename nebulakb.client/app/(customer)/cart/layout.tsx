"use client"

// Hooks

import {useEffect, useState} from "react";
import CheckAuthorization from '@/app/handlers/userinfo/get'

// Components
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {SparklesCore} from "@/components/custom/sparkles";
import {Spotlight} from "@/components/custom/spotlight";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {buttonVariants} from "@/components/ui/button";
import {ArrowLeft} from "lucide-react";
import Link from "next/link"

export default function CartLayout({children}: { children: React.ReactNode }) {
    const [auth, setAuth] = useState<boolean>(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const token = await localStorage.getItem('token');

                if (token) {
                    const isAuth = await CheckAuthorization({token});
                    await setAuth(isAuth);
                } else {
                    await setAuth(false);
                }
            } catch (err) {
                console.error('Authentication error: ', err);
                await setAuth(false);
            }
        };

        checkAuth();
    }, []);

    if (!auth) {
        return (
            <div
                className="min-h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
                <div className="w-full absolute inset-0 h-screen">
                    <SparklesCore
                        id="tsparticlesfullpage"
                        background="transparent"
                        minSize={0.6}
                        maxSize={1.4}
                        particleDensity={100}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                    />
                </div>

                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="white"
                />
                <Card className="mx-auto max-w-sm relative z-20">
                    <CardHeader>
                        <CardTitle className="text-5xl text-center">Unauthorized</CardTitle>
                        <CardDescription>
                            Bạn chưa đăng nhập.
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <div className="grid gap-4">
                            <Link href={"/auth/login/"} className={buttonVariants({variant: "default"})}>
                                <ArrowLeft className="mr-2 h-4 w-4"/> Đăng nhập ngay
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <>
            <div
                className="min-h-screen w-full dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative">
                <Navbar auth={auth}/>

                <main
                    className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">{children}</main>

                <Footer/>
            </div>
        </>
    );
}