'use client'

import {Spotlight} from "@/components/custom/spotlight";
import {Button, buttonVariants} from "@/components/ui/button";
import {RotateCcw} from "lucide-react";
import {SparklesCore} from "@/components/custom/sparkles";
import {ErrorCard} from "@/components/error-card";

export default function Error({error, reset,}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
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
            
            <ErrorCard title="Có lỗi xảy ra" description="Lỗi không xác định xảy ra vui lòng thử lại" retryLink="/" retryLinkText="Trở về trang chủ"/>
        </div>
    )
}