'use client';

// Hooks

import * as React from "react"
import Link from "next/link"

// Components

import {cn} from "@/lib/utils"
import {Button, buttonVariants} from "@/components/ui/button";
import {Card, CardDescription, CardTitle} from "@/components/ui/card";
import {ArrowLeft, TriangleAlert} from "lucide-react"

interface ErrorCardProps extends React.ComponentPropsWithoutRef<typeof Card> {
    icon?: React.ComponentType<{ className?: string }>
    title: string
    description: string
    retryLink?: string
    retryLinkText?: string
    reset?: () => void
}

export function ErrorCard({
                              icon: Icon = TriangleAlert,
                              title,
                              description,
                              retryLink,
                              retryLinkText = "Trở lại",
                              reset,
                              className,
                              ...props
                          }: ErrorCardProps) {
    return (
        <Card role="alert" aria-live="assertive" aria-atomic="true"
              className={cn("flex flex-col items-center justify-center overflow-hidden p-10 mx-auto max-w-sm relative z-20", className)} {...props}>
            <div className="grid place-items-center rounded-full border border-dashed border-muted-foreground/75 p-6">
                <Icon className="size-10 text-muted-foreground/75" aria-hidden="true"/>
            </div>

            <div className="flex flex-col items-center justify-center space-y-1.5 py-14 text-center">
                <CardTitle className="text-2xl">{title}</CardTitle>
                <CardDescription className="line-clamp-4">
                    {description}
                </CardDescription>
            </div>

            {retryLink ? (
                <Link href={retryLink} className={cn(buttonVariants({variant: "gooeyRight"}))}>
                    {retryLinkText}
                    <span className="sr-only">{retryLinkText}</span>
                </Link>
            ) : null}

            {reset ? (
                <Button aria-label="Retry" variant="expandIcon" Icon={ArrowLeft} iconPlacement="left" onClick={reset}>
                    Thử lại
                </Button>
            ) : null}
        </Card>
    );
}