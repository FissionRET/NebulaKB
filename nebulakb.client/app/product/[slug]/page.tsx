'use client'

import Autoplay from "embla-carousel-autoplay"
import {useRef} from "react";

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel"
import {Separator} from "@/components/ui/separator";
import {Rating} from "@/components/rating";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {ScrollArea} from "@/components/ui/scroll-area";


export default function Product({params}: { params: { slug: string } }) {
    const plugin = useRef(Autoplay({delay: 3000, stopOnInteraction: true}));

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Thông tin sản phẩm</CardTitle>
                    <CardDescription>Mã sản phẩm: {params.slug}</CardDescription>
                </CardHeader>

                <CardContent>
                    <div className="container pb-12 md:pb-14">
                        <div className="flex flex-col gap-8 md:flex-row md:gap-16">
                            <Carousel className="w-full md:w-1/2 max-w-sm" plugins={[plugin.current]}
                                      onMouseEnter={plugin.current.stop}
                                      onMouseLeave={plugin.current.reset}>
                                <CarouselContent>
                                    {Array.from({length: 5}).map((_, index) => (
                                        <CarouselItem key={index}>
                                            <div className="p-1">
                                                <Card>
                                                    <CardContent
                                                        className="flex aspect-square items-center justify-center p-6">
                                                        <span className="text-4xl font-semibold">{index + 1}</span>
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious/>
                                <CarouselNext/>
                            </Carousel>

                            <Separator className="mt-4 md:hidden"/>

                            <div className="flex w-full flex-col gap-4 md:w-1/2">
                                <div className="space-y-2">
                                    <h2 className="line-clamp-1 text-2xl font-bold">{params.slug.replace("-", " ")}</h2>
                                    <p className="text-gray-400">
                                        150.000 VNĐ
                                    </p>
                                </div>

                                <Separator className="my-1.5"/>

                                <p className="text-base text-muted-foreground">
                                    0 in stock
                                </p>
                                <div className="flex items-center justify-between">
                                    <Rating rating={Math.round(5 / 5)}/>
                                </div>
                                {/*<AddToCartForm productId={productId} showBuyNow={true}/>*/}
                                <Separator className="mt-5"/>

                                <Accordion
                                    type="single"
                                    collapsible
                                    className="w-full"
                                    defaultValue="info"
                                >
                                    <AccordionItem value="info" className="border-none">
                                        <AccordionTrigger>Thông số kỹ thuật</AccordionTrigger>
                                        <AccordionContent>
                                            {"No description is available for this product."}
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>

                                <Separator className="md:hidden"/>
                            </div>
                        </div>
                    </div>
                </CardContent>

                <CardFooter>
                    <blockquote className="border-l-2 border-zinc-700 italic pl-6">
                        NebulaKB - 2024
                    </blockquote>
                </CardFooter>
            </Card>

            <div className="space-y-6 overflow-hidden">
                <h2 className="line-clamp-1 flex-1 text-2xl font-bold">
                    Các sản phẩm khác từ NebulaKB
                </h2>
                <ScrollArea className="pb-3.5">
                    <div className="flex gap-4">
                        {/* Map products here */}
                    </div>
                </ScrollArea>
            </div>
        </>
    );
}