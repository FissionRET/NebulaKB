"use client"

import Link from "next/link"

import {Separator} from "@/components/ui/separator";
import {buttonVariants} from "@/components/ui/button";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {motion} from "framer-motion"

export default function Contact() {
    return (
        <div className="flex-1">
            <motion.article initial={{opacity: 0}} animate={{opacity: 1}} transition={{type: "spring", delay: 0.1}}
                            className="grid items-center gap-8 lg:py-6 container max-w-3xl py-8 md:py-10">
                <section className="flex max-w-[61.25rem] flex-col gap-1">
                    <h1 className="font-bold tracking-tighter lg:leading-[1.1] text-3xl md:text-5xl">Liên hệ.</h1>
                    <p className="max-w-[46.875rem] mt-2 text-balance text-muted-foreground text-base sm:text-lg">
                        Liên hệ với chúng tôi nếu có bất kỳ câu hỏi hoặc thắc mắc nào về NebulaKB
                    </p>
                </section>

                <Separator/>

                <div className="overflow-hidden">
                    <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                        Nếu bạn có bất kỳ câu hỏi hoặc thắc mắc nào về NebulaKB hoặc vấn đề sử dụng bàn phím, vui lòng
                        liên hệ với chúng tôi bằng một trong các phương pháp bên dưới. chúng tôi sẽ phản hồi sớm nhất có
                        thể.
                    </p>

                    <h2 className="mt-12 scroll-m-20 border-b-1 border-zinc-800 pb-4 font-sans text-2xl font-semibold tracking-tight first:mt-0"
                        id="contact-information">
                        Thông tin liên hệ
                    </h2>

                    <ul className="my-6 ml-6 list-disc">
                        <li className="mt-2">
                            Email: <a className="font-medium underline underline-offset-4"
                                      href="mailto:helloworld@gmail.com">
                            helloworld@gmail.com</a>
                        </li>
                        <li className="mt-2">
                            Phone: <a className="font-medium underline underline-offset-4" href="tel:0865005719">
                            0865 005 719</a>
                        </li>
                        <li className="mt-2">
                            Discord: <a className="font-medium underline underline-offset-4"
                                        href="https://github.com/0xDynamic">
                            Chino#6969</a>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center justify-between my-4">
                    <Link href="/about" className={buttonVariants({
                        variant: "gooeyRight",
                        className: "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2"
                    })}><ChevronLeft className="mr-2 h-4 w-4"/> Về chúng tôi</Link>

                    <Link href="/terms" className={buttonVariants({
                        variant: "gooeyLeft",
                        className: "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 ml-auto"
                    })}>
                        Điều khoản & điều kiện <ChevronRight className="ml-2 h-4 w-4"/>
                    </Link>
                </div>
            </motion.article>
        </div>
    );
}