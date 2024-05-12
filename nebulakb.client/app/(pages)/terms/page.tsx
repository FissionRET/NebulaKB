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
                    <h1 className="font-bold tracking-tighter lg:leading-[1.1] text-3xl md:text-5xl">Điều khoản & Điều
                        kiện</h1>
                    <p className="max-w-[46.875rem] mt-2 text-balance text-muted-foreground text-base sm:text-lg">
                        Đọc các điều khoản và điều kiện của NebulaKB
                    </p>
                </section>

                <Separator/>

                <div className="overflow-hidden">
                    <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                        Các điều khoản và điều kiện này chi phối việc bạn sử dụng trang web này; bằng cách sử dụng trang
                        web này, bạn chấp nhận đầy đủ các điều khoản và điều kiện này. Nếu bạn không đồng ý với các điều
                        khoản và điều kiện này hoặc bất kỳ phần nào trong các điều khoản và điều kiện này, bạn không
                        được sử dụng trang web này.
                    </p>

                    <h2 className="mt-12 scroll-m-20 border-b-1 border-zinc-800 pb-4 font-sans text-2xl font-semibold tracking-tight first:mt-0"
                        id="usage-license">
                        2. Giấy phép sử dụng trang web
                    </h2>

                    <p className="leading-7 [&amp;:not(:first-child)]:mt-6">Trừ khi có quy định khác, NebulaKB và/hoặc
                        người cấp phép của nó sở hữu quyền sở hữu trí tuệ trên trang web và tài liệu trên trang web.
                        Theo giấy phép dưới đây, tất cả các quyền sở hữu trí tuệ này đều được bảo lưu.</p>

                    <p className="leading-7 [&amp;:not(:first-child)]:mt-6">Bạn có thể xem, tải xuống chỉ nhằm mục đích
                        lưu vào bộ nhớ đệm và in các trang hoặc nội dung khác từ trang web cho mục đích sử dụng cá nhân
                        của riêng bạn, tùy thuộc vào các hạn chế được nêu dưới đây và các nơi khác trong các điều khoản
                        và điều kiện này.</p>

                    <p className="leading-7 [&amp;:not(:first-child)]:mt-6">Bạn không được:</p>

                    <ul className="my-6 ml-6 list-disc">
                        <li className="mt-2">
                            tái xuất bản tài liệu từ trang web này (bao gồm cả việc xuất bản trên một trang web khác);
                        </li>
                        <li className="mt-2">
                            bán, cho thuê hoặc cấp giấy phép phụ từ trang web;
                        </li>
                        <li className="mt-2">
                            hiển thị bất kỳ tài liệu nào từ trang web ở nơi công cộng;
                        </li>
                        <li className="mt-2">
                            sao chép, nhân bản, sao chép hoặc khai thác tài liệu trên trang web này vì mục đích thương
                            mại;
                        </li>
                        <li className="mt-2">
                            chỉnh sửa hoặc sửa đổi bất kỳ tài liệu nào trên trang web; hoặc
                        </li>
                        <li className="mt-2">
                            phân phối lại tài liệu từ trang web này ngoại trừ nội dung được cung cấp cụ thể và rõ ràng
                            để phân phối lại.
                        </li>
                    </ul>

                    <h2 className="mt-12 scroll-m-20 border-b-1 border-zinc-800 pb-4 font-sans text-2xl font-semibold tracking-tight first:mt-0"
                        id="acceptable-use">
                        3. Chấp thuận sử dụng
                    </h2>

                    <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                        Bạn không được sử dụng trang web này theo bất kỳ cách nào gây ra hoặc có thể gây ra thiệt hại
                        cho trang web hoặc làm suy giảm tính khả dụng hoặc khả năng truy cập của trang web; hoặc theo
                        bất kỳ cách nào trái pháp luật, bất hợp pháp, gian lận hoặc có hại, hoặc liên quan đến bất kỳ
                        mục đích hoặc hoạt động bất hợp pháp, bất hợp pháp, gian lận hoặc có hại nào.
                    </p>

                    <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                        Bạn không được sử dụng trang web này để sao chép, lưu trữ, lưu trữ, truyền tải, gửi, sử dụng,
                        xuất bản hoặc phân phối bất kỳ tài liệu nào bao gồm (hoặc được liên kết với) bất kỳ phần mềm
                        gián điệp, vi-rút máy tính, Trojan, Worm, trình ghi thao tác gõ phím, rootkit hoặc phần mềm
                        khác. phần mềm máy tính độc hại.
                    </p>

                    <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                        Bạn không được tiến hành bất kỳ hoạt động thu thập dữ liệu có hệ thống hoặc tự động nào (bao gồm
                        nhưng không giới hạn ở việc thu thập dữ liệu, khai thác dữ liệu, trích xuất dữ liệu và thu thập
                        dữ liệu) trên hoặc liên quan đến trang web này mà không có sự đồng ý rõ ràng bằng văn bản của
                        NebulaKB.
                    </p>

                    <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                        Bạn không được sử dụng trang web này để truyền hoặc gửi các thông tin thương mại không được yêu
                        cầu.
                    </p>

                    <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                        Bạn không được sử dụng trang web này cho bất kỳ mục đích nào liên quan đến tiếp thị mà không có
                        sự đồng ý rõ ràng bằng văn bản của NebulaKB.
                    </p>

                    <h2 className="mt-12 scroll-m-20 border-b-1 border-zinc-800 pb-4 font-sans text-2xl font-semibold tracking-tight first:mt-0"
                        id="restricted-access">
                        4. Giới hạn truy cập
                    </h2>

                    <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                        Quyền truy cập vào một số khu vực nhất định của trang web này bị hạn chế. NebulaKB có quyền hạn
                        chế quyền truy cập vào các khu vực của trang web này hoặc toàn bộ trang web này theo quyết định
                        riêng của NebulaKB.
                    </p>

                    <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                        Nếu NebulaKB cung cấp cho bạn ID người dùng và mật khẩu để cho phép bạn truy cập các khu vực hạn
                        chế của trang web này hoặc nội dung hoặc dịch vụ khác, bạn phải đảm bảo rằng ID người dùng và
                        mật khẩu được giữ bí mật.
                    </p>

                    <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                        NebulaKB có thể vô hiệu hóa ID người dùng và mật khẩu của bạn theo quyết định riêng của NebulaKB
                        mà không cần thông báo hoặc giải thích.
                    </p>

                    <h2 className="mt-12 scroll-m-20 border-b-1 border-zinc-800 pb-4 font-sans text-2xl font-semibold tracking-tight first:mt-0"
                        id="user-content">
                        5. Nội dung người dùng
                    </h2>

                    <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                        Trong các điều khoản và điều kiện này, “nội dung người dùng của bạn” có nghĩa là tài liệu (bao
                        gồm nhưng không giới hạn ở văn bản, hình ảnh, tài liệu âm thanh, tài liệu video và tài liệu nghe
                        nhìn) mà bạn gửi đến trang web này, cho bất kỳ mục đích nào.
                    </p>

                    <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                        Bạn cấp cho NebulaKB giấy phép toàn cầu, không thể thu hồi, không độc quyền, miễn phí bản quyền
                        để sử dụng, tái tạo, điều chỉnh, xuất bản, dịch và phân phối nội dung người dùng của bạn trên
                        bất kỳ phương tiện truyền thông hiện tại hoặc tương lai nào. Bạn cũng cấp cho NebulaKB quyền cấp
                        phép phụ cho các quyền này và quyền khởi kiện nếu vi phạm các quyền này.
                    </p>

                    <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                        Nội dung người dùng của bạn không được bất hợp pháp, không được vi phạm quyền hợp pháp của bất
                        kỳ bên thứ ba nào và không được có khả năng dẫn đến hành động pháp lý chống lại bạn hoặc
                        NebulaKB hoặc bên thứ ba (trong từng trường hợp theo bất kỳ luật hiện hành nào).
                    </p>

                    <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                        Bạn không được gửi bất kỳ nội dung người dùng nào đến trang web đang hoặc đã từng là đối tượng
                        của bất kỳ thủ tục pháp lý thực tế hoặc bị đe dọa nào hoặc khiếu nại tương tự khác.
                    </p>

                    <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                        NebulaKB có quyền chỉnh sửa hoặc xóa bất kỳ tài liệu nào được gửi lên trang web này hoặc được
                        lưu trữ trên máy chủ của NebulaKB hoặc được lưu trữ hoặc xuất bản trên trang web này.
                    </p>

                    <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                        Bất chấp các quyền của NebulaKB theo các điều khoản và điều kiện này liên quan đến nội dung của
                        người dùng, NebulaKB không cam kết giám sát việc gửi nội dung đó lên hoặc xuất bản nội dung đó
                        trên trang web này.
                    </p>

                    <h2 className="mt-12 scroll-m-20 border-b-1 border-zinc-800 pb-4 font-sans text-2xl font-semibold tracking-tight first:mt-0"
                        id="no-warranties">
                        6. Không có bảo hành
                    </h2>

                    <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                        Trang web này được cung cấp “nguyên trạng” mà không có bất kỳ tuyên bố hay bảo đảm nào, rõ ràng
                        hay ngụ ý. NebulaKB không tuyên bố hay bảo đảm liên quan đến trang web này hoặc thông tin và tài
                        liệu được cung cấp trên trang web này.
                    </p>

                    <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                        Không ảnh hưởng đến tính tổng quát của đoạn trên, NebulaKB không đảm bảo rằng:
                    </p>

                    <ul className="my-6 ml-6 list-disc">
                        <li className="mt-2">trang web này sẽ liên tục có sẵn hoặc hoàn toàn có sẵn; hoặc</li>
                        <li className="mt-2">thông tin trên trang web này là đầy đủ, đúng sự thật, chính xác hoặc không
                            gây hiểu nhầm.
                        </li>
                    </ul>

                    <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                        Không có gì trên trang web này cấu thành hoặc có nghĩa là cấu thành lời khuyên dưới bất kỳ hình
                        thức nào. Nếu bạn cần lời khuyên liên quan đến bất kỳ vấn đề pháp lý, tài chính hoặc y tế nào,
                        bạn nên tham khảo ý kiến của chuyên gia thích hợp.
                    </p>

                    <h2 className="mt-12 scroll-m-20 border-b-1 border-zinc-800 pb-4 font-sans text-2xl font-semibold tracking-tight first:mt-0"
                        id="limitations-of-liability">
                        7. Giới hạn trách nhiệm pháp lý
                    </h2>

                    <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                        NebulaKB sẽ không chịu trách nhiệm pháp lý với bạn (dù theo luật liên hệ, luật tra tấn hay luật
                        khác) liên quan đến nội dung hoặc việc sử dụng hoặc liên quan đến trang web này:
                    </p>

                    <ul className="my-6 ml-6 list-disc">
                        <li className="mt-2">trong phạm vi trang web được cung cấp miễn phí đối với mọi tổn thất trực
                            tiếp;
                        </li>
                        <li className="mt-2">đối với bất kỳ tổn thất gián tiếp, đặc biệt hoặc do hậu quả nào; hoặc</li>
                        <li className="mt-2">đối với bất kỳ tổn thất kinh doanh, mất doanh thu, thu nhập, lợi nhuận hoặc
                            khoản tiết kiệm dự kiến, mất hợp đồng hoặc mối quan hệ kinh doanh, mất danh tiếng hoặc thiện
                            chí, hoặc mất hoặc hỏng thông tin hoặc dữ liệu.
                        </li>
                    </ul>

                    <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                        Những giới hạn trách nhiệm pháp lý này được áp dụng ngay cả khi NebulaKB đã được thông báo rõ
                        ràng về tổn thất có thể xảy ra.
                    </p>

                    <h2 className="mt-12 scroll-m-20 border-b-1 border-zinc-800 pb-4 font-sans text-2xl font-semibold tracking-tight first:mt-0"
                        id="exceptions">
                        8. Ngoại lệ
                    </h2>

                    <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                        Không có nội dung nào trong tuyên bố từ chối trách nhiệm của trang web này sẽ loại trừ hoặc giới
                        hạn bất kỳ bảo đảm nào được pháp luật ngụ ý rằng việc loại trừ hoặc giới hạn là trái pháp luật;
                        và không có nội dung nào trong tuyên bố từ chối trách nhiệm của trang web này sẽ loại trừ hoặc
                        giới hạn trách nhiệm pháp lý của NebulaKB đối với bất kỳ:
                    </p>

                    <ul className="my-6 ml-6 list-disc">
                        <li className="mt-2">
                            tử vong hoặc thương tích cá nhân do sơ suất của NebulaKB;
                        </li>
                        <li className="mt-2">gian lận hoặc xuyên tạc mang tính gian lận từ phía NebulaKB; hoặc</li>
                        <li className="mt-2">
                            vấn đề mà Skateshop13 loại trừ hoặc giới hạn hoặc cố gắng hoặc có mục đích loại trừ hoặc
                            giới hạn trách nhiệm pháp lý của mình là bất hợp pháp hoặc bất hợp pháp.
                        </li>
                    </ul>

                    <h2 className="mt-12 scroll-m-20 border-b-1 border-zinc-800 pb-4 font-sans text-2xl font-semibold tracking-tight first:mt-0"
                        id="reasonableness">
                        9. Tính hợp lý
                    </h2>

                    <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                        Bằng cách sử dụng trang web này, bạn đồng ý rằng các loại trừ và giới hạn trách nhiệm pháp lý
                        được nêu trong tuyên bố từ chối trách nhiệm của trang web này là hợp lý.
                    </p>

                    <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                        Nếu bạn không cho rằng chúng hợp lý, bạn không được sử dụng trang web này.
                    </p>

                    <h2 className="mt-12 scroll-m-20 border-b-1 border-zinc-800 pb-4 font-sans text-2xl font-semibold tracking-tight first:mt-0"
                        id="other-parties">
                        10. Các bên khác
                    </h2>

                    <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                        Bạn chấp nhận rằng, với tư cách là một thực thể trách nhiệm hữu hạn, NebulaKB có lợi ích trong
                        việc giới hạn trách nhiệm cá nhân của các cán bộ và nhân viên của mình. Bạn đồng ý rằng bạn sẽ
                        không đưa ra bất kỳ khiếu nại cá nhân nào chống lại các quan chức hoặc nhân viên của NebulaKB về
                        bất kỳ tổn thất nào mà bạn phải gánh chịu liên quan đến trang web.
                    </p>

                    <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                        Không ảnh hưởng đến đoạn trên, bạn đồng ý rằng các giới hạn về bảo hành và trách nhiệm pháp lý
                        được nêu trong tuyên bố từ chối trách nhiệm của trang web này sẽ bảo vệ các cán bộ, nhân viên,
                        đại lý, công ty con, người kế nhiệm, người chuyển nhượng và nhà thầu phụ của NebulaKB cũng như
                        NebulaKB.
                    </p>

                    <h2 className="mt-12 scroll-m-20 border-b-1 border-zinc-800 pb-4 font-sans text-2xl font-semibold tracking-tight first:mt-0"
                        id="unenforceable-provisions">
                        11. Điều khoản không thể thực thi
                    </h2>

                    <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                        Nếu bất kỳ điều khoản nào của tuyên bố từ chối trách nhiệm của trang web này bị hoặc được phát
                        hiện là không thể thực thi theo luật hiện hành thì điều đó sẽ không ảnh hưởng đến khả năng thực
                        thi các điều khoản khác của tuyên bố từ chối trách nhiệm của trang web này.
                    </p>

                    <h2 className="mt-12 scroll-m-20 border-b-1 border-zinc-800 pb-4 font-sans text-2xl font-semibold tracking-tight first:mt-0"
                        id="indemnity">
                        12. Bồi thường
                    </h2>

                    <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                        Theo đây, bạn bồi thường cho NebulaKB và cam kết đảm bảo NebulaKB được bồi thường đối với mọi
                        tổn thất, thiệt hại, chi phí, trách nhiệm pháp lý và phí tổn (bao gồm nhưng không giới hạn chi
                        phí pháp lý và bất kỳ khoản tiền nào NebulaKB trả cho bên thứ ba để giải quyết khiếu nại hoặc
                        tranh chấp theo lời khuyên của cơ quan pháp lý của NebulaKB cố vấn) mà NebulaKB phải chịu hoặc
                        phải chịu phát sinh từ việc bạn vi phạm bất kỳ điều khoản nào trong các điều khoản và điều kiện
                        này, hoặc phát sinh từ bất kỳ khiếu nại nào rằng bạn đã vi phạm bất kỳ điều khoản nào trong các
                        điều khoản và điều kiện này.
                    </p>

                    <h2 className="mt-12 scroll-m-20 border-b-1 border-zinc-800 pb-4 font-sans text-2xl font-semibold tracking-tight first:mt-0"
                        id="breaches">
                        13. Vi phạm các điều khoản và điều kiện này
                    </h2>

                    <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                        Không ảnh hưởng đến các quyền khác của NebulaKB theo các điều khoản và điều kiện này, nếu bạn vi
                        phạm các điều khoản và điều kiện này dưới bất kỳ hình thức nào, NebulaKB có thể thực hiện hành
                        động mà NebulaKB cho là phù hợp để giải quyết vi phạm, bao gồm đình chỉ quyền truy cập của bạn
                        vào trang web, cấm bạn truy cập trang web, chặn các máy tính sử dụng địa chỉ IP của bạn truy cập
                        trang web, liên hệ với nhà cung cấp dịch vụ internet của bạn để yêu cầu họ chặn quyền truy cập
                        của bạn vào trang web và/hoặc khởi kiện ra tòa chống lại bạn.
                    </p>

                    <h2 className="mt-12 scroll-m-20 border-b-1 border-zinc-800 pb-4 font-sans text-2xl font-semibold tracking-tight first:mt-0"
                        id="variation">
                        14. Biến thể
                    </h2>

                    <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                        NebulaKB có thể sửa đổi các điều khoản và điều kiện này theo thời gian. Các điều khoản và điều
                        kiện sửa đổi sẽ áp dụng cho việc sử dụng trang web này kể từ ngày công bố các điều khoản và điều
                        kiện sửa đổi trên trang web này. Vui lòng kiểm tra trang này thường xuyên để đảm bảo bạn đã quen
                        với phiên bản hiện tại.
                    </p>

                    <h2 className="mt-12 scroll-m-20 border-b-1 border-zinc-800 pb-4 font-sans text-2xl font-semibold tracking-tight first:mt-0"
                        id="assignment">
                        15. Phân công
                    </h2>

                    <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                        NebulaKB có thể chuyển nhượng, ký hợp đồng phụ hoặc giải quyết các quyền và/hoặc nghĩa vụ của
                        NebulaKB theo các điều khoản và điều kiện này mà không cần thông báo cho bạn hoặc nhận được sự
                        đồng ý của bạn.
                    </p>

                    <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                        Bạn không được phép chuyển nhượng, ký hợp đồng phụ hoặc giải quyết các quyền và/hoặc nghĩa vụ
                        của mình theo các điều khoản và điều kiện này.
                    </p>

                    <h2 className="mt-12 scroll-m-20 border-b-1 border-zinc-800 pb-4 font-sans text-2xl font-semibold tracking-tight first:mt-0"
                        id="severability">
                        16. Tính tách rời
                    </h2>

                    <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                        Nếu một điều khoản trong các điều khoản và điều kiện này được tòa án hoặc cơ quan có thẩm quyền
                        khác xác định là trái pháp luật và/hoặc không thể thi hành thì các điều khoản khác sẽ tiếp tục
                        có hiệu lực. Nếu bất kỳ điều khoản trái pháp luật và/hoặc không thể thi hành nào sẽ hợp pháp
                        hoặc có hiệu lực thi hành nếu một phần của nó bị xóa thì phần đó sẽ được coi là bị xóa và phần
                        còn lại của điều khoản sẽ tiếp tục có hiệu lực.
                    </p>

                    <h2 className="mt-12 scroll-m-20 border-b-1 border-zinc-800 pb-4 font-sans text-2xl font-semibold tracking-tight first:mt-0"
                        id="entire-agreement">
                        17. Toàn bộ thỏa thuận
                    </h2>

                    <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                        Các điều khoản và điều kiện này cấu thành toàn bộ thỏa thuận giữa bạn và Skateshop13 liên quan
                        đến việc bạn sử dụng trang web này và thay thế tất cả các thỏa thuận trước đó về việc bạn sử
                        dụng trang web này.
                    </p>
                </div>

                <div className="flex items-center justify-between my-4">
                    <Link href="/contact" className={buttonVariants({
                        variant: "gooeyRight",
                        className: "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2"
                    })}><ChevronLeft className="mr-2 h-4 w-4"/> Liên hệ</Link>

                    <Link href="/shipping-policy" className={buttonVariants({
                        variant: "gooeyLeft",
                        className: "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 ml-auto"
                    })}>
                        Chính sách vận chuyển <ChevronRight className="ml-2 h-4 w-4"/>
                    </Link>
                </div>
            </motion.article>
        </div>
    );
}