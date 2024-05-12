"use client"

import Link from "next/link"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {Separator} from "@/components/ui/separator";
import {buttonVariants} from "@/components/ui/button";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {motion} from "framer-motion"

export default function FAQ() {
    return (
        <div className="flex-1">
            <motion.article initial={{opacity: 0}} animate={{opacity: 1}} transition={{type: "spring", delay: 0.1}}
                            className="grid items-center gap-8 lg:py-6 container max-w-3xl py-8 md:py-10">
                <section className="flex max-w-[61.25rem] flex-col gap-1">
                    <h1 className="font-bold tracking-tighter lg:leading-[1.1] text-3xl md:text-5xl">FAQ</h1>
                    <p className="max-w-[46.875rem] mt-2 text-sm text-muted-foreground text-base sm:text-lg">
                        Các câu hỏi thường gặp.
                    </p>
                </section>

                <Separator/>

                <div className="overflow-hidden">
                    <Accordion type="single" defaultValue="payment-faq" collapsible className="w-full">
                        <AccordionItem value="payment-faq">
                            <AccordionTrigger>Nếu tôi thanh toán bằng loại tiền khác thì giá sẽ thay đổi như thế
                                nào?</AccordionTrigger>
                            <AccordionContent>
                                <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                                    Trước hết, chúng tôi muốn chỉ ra rằng chúng tôi khuyên bạn luôn thanh toán bằng VNĐ.
                                </p>

                                <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                                    Các khoản thanh toán bằng loại tiền tệ khác được quy đổi dựa trên tỷ giá hối đoái và
                                    bao
                                    gồm phí chuyển đổi mà chúng tôi không thể thay đổi hoặc xóa.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="product-1-faq">
                            <AccordionTrigger>Tất cả các sản phẩm bạn cung cấp có còn hàng không?</AccordionTrigger>
                            <AccordionContent>
                                Có. Tất cả các sản phẩm bạn có thể cho vào giỏ hàng và mua đều có trong kho và sẽ được
                                vận chuyển trong thời gian sớm nhất. Nếu một sản phẩm không có trong kho, sản phẩm đó sẽ
                                được đánh dấu là "Hết hàng", "Sắp ra mắt" hoặc "Đặt hàng trước".
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="product-2-faq">
                            <AccordionTrigger>Chân công tắc (switches) bị uốn cong</AccordionTrigger>
                            <AccordionContent>
                                <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                                    Chúng tôi nhập công tắc (switches) theo gói 1000 trực tiếp từ quá trình sản xuất. Ở
                                    đó chúng được đóng gói bằng máy. Chúng tôi không có ảnh hưởng gì đến tình trạng của
                                    từng công tắc riêng lẻ. Thật không may, vì lý do hậu cần, chúng tôi không thể kiểm
                                    tra chân của mọi công tắc mà chúng tôi bán.
                                </p>

                                <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                                    Nói chung, hiện tượng chân cong là hiện tượng bình thường và có thể xảy ra với mọi
                                    nhà sản xuất cũng như mọi loại công tắc. Ngoại lệ duy nhất là khi các công tắc được
                                    nhà sản xuất đóng gói với số lượng nhỏ và được bọc riêng bằng xốp (chẳng hạn như
                                    Công tắc kim loại Tecsee).
                                </p>

                                <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                                    Trong 99,9% trường hợp, các chốt có thể được đưa trở lại hình dạng chính xác mà
                                    không gặp vấn đề gì và không có dấu hiệu khiếm khuyết.
                                </p>

                                <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                                    Trước khi sử dụng chúng trong một hot-swap, bạn thường nên kiểm tra xem các chân cắm
                                    có thẳng không, vì ngay cả những chân cắm hơi cong cũng có thể bị uốn cong hoàn toàn
                                    trong quá trình lắp đặt hoặc trong trường hợp xấu nhất là làm rách ổ cắm hot-swap.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="order-1-faq">
                            <AccordionTrigger>Tôi có thể thêm thứ gì đó vào đơn hàng của mình không?</AccordionTrigger>
                            <AccordionContent>
                                Có. Vui lòng viết tin nhắn cho chúng tôi và chúng tôi sẽ thêm nó vào đơn đặt hàng của
                                bạn và gửi cho bạn hóa đơn. Điều này chỉ có thể thực hiện được nếu đơn hàng của bạn chưa
                                được vận chuyển.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="shipping-1-faq">
                            <AccordionTrigger>Có thể hoàn trả đơn đặt hàng của tôi?</AccordionTrigger>
                            <AccordionContent>
                                Có. Vui lòng viết tin nhắn cho chúng tôi và chúng tôi có thể sắp xếp thời gian và hoàn
                                trả chi phí vận chuyển. Chỉ có thể nhận hàng ở Vietnam.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="shipping-2-faq">
                            <AccordionTrigger>Khi nào đơn hàng của tôi sẽ được vận chuyển?</AccordionTrigger>
                            <AccordionContent>
                                Mỗi đơn hàng sẽ được vận chuyển vào ngày làm việc tiếp theo! Sự chậm trễ có thể xảy ra
                                nếu chúng tôi có các sự kiện đặc biệt như Black Friday!
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="shipping-3-faq">
                            <AccordionTrigger>Làm thế nào tôi có thể theo dõi đơn hàng của mình?</AccordionTrigger>
                            <AccordionContent>
                                Tùy thuộc vào đơn vị vận chuyển, bạn có thể theo dõi tình trạng đơn hàng trên trang của
                                họ. Mã vận đơn sẽ được gửi qua mail cho bạn khi bạn đặt hàng.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </motion.article>
        </div>
    );
}