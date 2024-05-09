'use client'

import {Spotlight} from "@/components/custom/spotlight";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button, buttonVariants} from "@/components/ui/button";
import {RotateCcw} from "lucide-react";
import {SparklesCore} from "@/components/custom/sparkles";

export default function GlobalError({error, reset,}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <html>
            <body>
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
                            <CardTitle className="text-6xl text-center">Đã xảy ra sự cố</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-4">
                                <Button onClick={() => reset()} className={buttonVariants({variant: "default"})}>
                                    <RotateCcw className="mr-2 h-4 w-4"/> Hãy thử lại
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </body>
        </html>
    )
}