import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "@/styles/globals.css";

import ThemeProvider from "@/components/theme-provider"
import { Providers } from "@/components/providers"
import { Toaster } from "@/components/ui/toaster"

import { cn } from "@/lib/utils";

const spaceGrot = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Nebula Keyboard",
    description: "The best keyboard shop for your imagination custom keyboard.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <html lang="en" suppressHydrationWarning>
                <head />

                <body className={cn("min-h-screen bg-background antialiased", spaceGrot.className)}>
                    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                        <Providers>
                            {children}

                            <Toaster/>
                        </Providers>
                    </ThemeProvider>
                </body>
            </html>
        </>
    );
}
