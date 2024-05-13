"use client"

import Link from "next/link"

import {Separator} from "@/components/ui/separator";
import {buttonVariants} from "@/components/ui/button";
import {ChevronLeft} from "lucide-react";
import {motion} from "framer-motion"

export default function ShippingPolicy() {
    return (
        <div className="flex-1">
            <motion.article initial={{opacity: 0}} animate={{opacity: 1}} transition={{type: "spring", delay: 0.1}}
                            className="grid items-center gap-8 lg:py-6 container max-w-3xl py-8 md:py-10">
                <section className="flex max-w-[61.25rem] flex-col gap-1">
                    <h1 className="font-bold tracking-tighter lg:leading-[1.1] text-3xl md:text-5xl">Chính sách vận
                        chuyển</h1>
                    <p className="max-w-[46.875rem] mt-2 text-sm text-muted-foreground text-base sm:text-lg">
                        Chúng tôi cố gắng cung cấp dịch vụ vận chuyển đến càng nhiều tỉnh thành, quốc gia càng tốt.
                    </p>
                </section>

                <Separator/>

                <div className="overflow-hidden">
                    <p className="leading-7 text-center font-bold [&amp;:not(:first-child)]:mt-6">
                        Tất cả các đơn đặt hàng trước nửa đêm sẽ được chuyển vào ngày làm việc tiếp theo!
                    </p>

                    <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                        Tùy thuộc vào năng lực vận chuyển sẵn có, chúng tôi có quyền vận chuyển các gói hàng và bưu kiện
                        bằng đường bộ, đường hàng không đến kho cho đến khi có thông báo mới. Việc xác nhận các lô hàng
                        như vậy chỉ có thể được thực hiện trực tuyến và chúng tôi chỉ ra rõ ràng rằng trong một số
                        trường hợp nhất định, thời gian vận chuyển rất dài có thể lên tới 14 ngày. Đối với các điểm đến
                        như ở miền Nam hoặc ở các vùng xa xôi, thời gian vận chuyển cũng có thể lâu hơn.
                    </p>
                </div>

                <div className="flex items-center justify-between my-4">
                    <Link href="/terms" className={buttonVariants({
                        variant: "gooeyRight",
                        className: "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2"
                    })}><ChevronLeft className="mr-2 h-4 w-4"/> Điều khoản & Điều kiện</Link>
                </div>
            </motion.article>
        </div>
    );
}