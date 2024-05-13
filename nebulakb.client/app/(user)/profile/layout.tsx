"use client"

// Hooks

import {useEffect, useState} from "react";
import CheckAuthorization from '@/app/handlers/userinfo/get'

// Components
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function ProfileLayout({children}: { children: React.ReactNode }) {
    const [auth, setAuth] = useState<boolean>(false);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const token = localStorage.getItem('token');

                if (token) {
                    const isAuth = await CheckAuthorization({token});
                    setAuth(isAuth);
                } else {
                    setAuth(false);
                }
            } catch (err) {
                console.error('Authentication error: ', err);
                setAuth(false);
            }
        };

        checkAuth();
    }, []);

    return (
        <div
            className="min-h-screen w-full dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative">
            <Navbar auth={auth}/>

            <main
                className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">{children}
            </main>

            <Footer/>
        </div>
    );
}