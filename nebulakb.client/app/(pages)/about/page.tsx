"use client"

import Link from "next/link"

import {Separator} from "@/components/ui/separator";
import {IconsSvg} from "@/components/icons";
import {buttonVariants} from "@/components/ui/button";
import {ChevronRight} from "lucide-react";
import {motion} from "framer-motion"

export default function About() {
    return (
        <div className="flex-1">
            <motion.article initial={{opacity: 0}} animate={{opacity: 1}} transition={{type: "spring", delay: 0.1}}
                            className="grid items-center gap-8 lg:py-6 container max-w-3xl py-8 md:py-10">
                <section className="flex max-w-[61.25rem] flex-col gap-1">
                    <h1 className="font-bold tracking-tighter lg:leading-[1.1] text-3xl md:text-5xl">Về chúng tôi.</h1>
                    <p className="max-w-[46.875rem] mt-2 text-balance text-muted-foreground text-base sm:text-lg">
                        Thông tin về NebulaKB và người sáng lập
                    </p>
                </section>

                <Separator/>

                <div className="overflow-hidden">
                    <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                        Đây là một dự án shopify trực tuyến cung cấp
                        bàn phím cơ custom được viết bởi <a className="font-medium underline underline-offset-4"
                                                            href="https://github.com/0xDynamic">Chino</a>, kết hợp
                        giữa <a className="font-medium underline underline-offset-4"
                                href="https://nextjs.org/">Next.js</a> với vai trò front-end làm cho giao diện người sử
                        dụng đẹp và thân thiện hơn và <a className="font-medium underline underline-offset-4"
                                                         href="https://learn.microsoft.com/en-us/aspnet/core/introduction-to-aspnet-core?view=aspnetcore-8.0">ASP.NET Core</a> với vai trò
                        back-end để tối
                        ưu trong việc tương tác với cơ sở dữ liệu. Dự án này vẫn đang được hoàn thiện và phát triển. Bạn
                        có thể theo dõi tiến độ tại trang <a
                        className="font-medium underline underline-offset-4"
                        href="https://github.com/FissionRET/NebulaKB">Github</a>.
                    </p>

                    <h2 className="mt-12 scroll-m-20 border-b-1 border-zinc-800 pb-4 font-sans text-2xl font-semibold tracking-tight first:mt-0"
                        id="tech-stack-used">
                        Công nghệ được sử dụng
                    </h2>

                    <ul className="my-6 ml-6 list-disc">
                        <li className="mt-2">
                            <a className="font-medium underline underline-offset-4" href="https://react.dev/">
                                React <IconsSvg.react className="inline-block ml-2 h-4 w-4"/>
                            </a>
                        </li>
                        <li className="mt-2">
                            <a className="font-medium underline underline-offset-4" href="https://nextjs.org">
                                Next.js V14 <IconsSvg.nextjs className="inline-block ml-2 h-4 w-4"/>
                            </a>
                        </li>
                        <li className="mt-2">
                            <a className="font-medium underline underline-offset-4"
                               href="https://www.typescriptlang.org/">
                                Typescript <IconsSvg.typescript className="inline-block ml-2 h-4 w-4"/>
                            </a>
                        </li>
                        <li className="mt-2">
                            <a className="font-medium underline underline-offset-4" href="https://html.com/html5/">
                                HTML5 <IconsSvg.html5 className="inline-block ml-2 h-4 w-4"/>
                            </a>
                        </li>
                        <li className="mt-2">
                            <a className="font-medium underline underline-offset-4" href="https://tailwindcss.com">
                                Tailwind CSS <IconsSvg.tailwindcss className="inline-block ml-2 h-4 w-4"/>
                            </a>
                        </li>
                        <li className="mt-2">
                            <a className="font-medium underline underline-offset-4"
                               href="https://www.npmjs.com/package/jsonwebtoken">
                                Json Web Token <IconsSvg.json className="inline-block ml-2 h-4 w-4"/>
                            </a>
                        </li>
                        <li className="mt-2">
                            <a className="font-medium underline underline-offset-4"
                               href="https://www.microsoft.com/en-in/sql-server/sql-server-2019">
                                Microsoft SQL Server <IconsSvg.mssqlserver className="inline-block ml-2 h-4 w-4"/>
                            </a>
                        </li>
                        <li className="mt-2">
                            <a className="font-medium underline underline-offset-4"
                               href="https://learn.microsoft.com/en-us/aspnet/core/introduction-to-aspnet-core?view=aspnetcore-8.0">
                                ASP.NET Core <IconsSvg.netcore className="inline-block ml-2 h-4 w-4"/>
                            </a>
                        </li>
                    </ul>

                    <h2 className="mt-12 scroll-m-20 border-b-1 border-zinc-800 pb-4 font-sans text-2xl font-semibold tracking-tight first:mt-0"
                        id="features-to-be-implemented">Các tính năng cần triển khai</h2>

                    <ul className="my-6 ml-6 list-disc">
                        <li className="mt-2">[x] Xử lý quyền hạn / đăng nhập / đăng ký với <strong>ASP.NET Core
                            Controller</strong>
                        </li>
                        <li className="mt-2">[ ] Chức năng cho giỏ hàng <strong>Thêm sản phẩm</strong>, <strong>Xóa sản
                            phẩm</strong></li>
                        <li className="mt-2">[ ] Giao diện giỏ hàng</li>
                        <li className="mt-2">[x] Giao diện danh sách sản phẩm theo danh mục</li>
                        <li className="mt-2">[x] Chức năng cho trang thông tin cá nhân <strong>Cập nhật mật
                            khẩu</strong></li>
                        <li className="mt-2">[x] Xử lý các thao tác trong panel
                            Admin <strong>Thêm</strong>, <strong>Sửa</strong>, <strong>Xóa</strong></li>
                    </ul>

                    <h2 className="mt-12 scroll-m-20 border-b-1 border-zinc-800 pb-4 font-sans text-2xl font-semibold tracking-tight first:mt-0"
                        id="credits">Credits</h2>

                    <ul className="my-6 ml-6 list-disc">
                        <li className="mt-2">
                            <a className="font-medium underline underline-offset-4"
                               href="https://vercel.com/">Vercel</a> - Cho phép tạo các ứng dụng web chất lượng cao với
                            sức mạnh của các thành phần React
                        </li>
                        <li className="mt-2">
                            <a className="font-medium underline underline-offset-4"
                               href="https://ui.shadcn.com">shadcn/ui</a> - Thư viện thành phần có thể tái sử dụng tuyệt
                            vời
                        </li>
                    </ul>

                    <h2 className="mt-12 scroll-m-20 border-b-1 border-zinc-800 pb-4 font-sans text-2xl font-semibold tracking-tight first:mt-0"
                        id="about-the-author">Về người sáng lập</h2>

                    <p className="leading-7 [&amp;:not(:first-child)]:mt-6">Xin chào, Tôi là <a
                        className="font-medium underline underline-offset-4"
                        href="https://github.com/0xDyanmic">Chino</a>. Kỹ sư đảo ngược tự học, nhà phát triển
                        full-stack, phân tích phần mềm độc hại, kiến trúc sư bảo mật. Mạng xã hội của tôi dùng ở bên
                        dưới.</p>

                    <ul className="my-6 ml-6 list-disc">
                        <li className="mt-2">
                            <a className="font-medium underline underline-offset-4"
                               href="https://github.com/0xDynamic">GitHub</a>
                        </li>
                        <li className="mt-2">
                            <a className="font-medium underline underline-offset-4"
                               href="https://discord.com/users/chinothegod">Discord</a>
                        </li>
                        <li className="mt-2">
                            <a className="font-medium underline underline-offset-4"
                               href="https://facebook.com/luxuryrabbit">Facebook</a>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center justify-between my-4">
                    <Link href="/contact" className={buttonVariants({
                        variant: "gooeyLeft",
                        className: "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 ml-auto"
                    })}>
                        Liên hệ <ChevronRight className="ml-2 h-4 w-4"/>
                    </Link>
                </div>
            </motion.article>
        </div>
    );
}