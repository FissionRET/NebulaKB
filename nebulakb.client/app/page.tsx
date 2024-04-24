"use client";

// Hooks

import { useEffect, useState } from "react";
import CheckAuthorization from '@/app/handlers/userinfo/get'

// Local components

import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Footer from "@/components/footer";

export default function Home() {
    // Authorization check

    const [auth, setAuth] = useState<boolean>(false);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const token = sessionStorage.getItem('token');

                if (token) {
                    const isAuth = await CheckAuthorization({ token });
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
    }, []); // Only run once to avoid re-renders

    return (
        <>
            <div className="min-h-screen w-full dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative">
                <Navbar auth={auth} />

                <Hero />

                <Footer/>
            </div>      
        </>
    );
}
