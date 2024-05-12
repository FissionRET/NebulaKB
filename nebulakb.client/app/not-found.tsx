import Link from 'next/link'
import {Button, buttonVariants} from "@/components/ui/button";
import {ArrowLeft } from 'lucide-react';
import {Spotlight} from "@/components/custom/spotlight";
import {SparklesCore} from "@/components/custom/sparkles";
import {ErrorCard} from "@/components/error-card";

export default function NotFound() {
    return (
        <div className="min-h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
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
            
            <ErrorCard title="404" description="Không tìm thấy tài nguyên được yêu cầu" retryLink="/" retryLinkText="Trở về trang chủ"/>
        </div>
    )
}