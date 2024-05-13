// Hooks

import {Suspense, useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import Link from "next/link";
import Image from 'next/image'

// Local components
import Loader from "@/lib/loader";
import {Meteors} from "@/components/custom/meteors"
import {ImagesSlider} from "@/components/custom/slider"
import {SvgIcon} from "@/components/svg";
import {CardBody, CardContainer, CardItem} from "@/components/custom/3d-card"

// Shadcn components
import {Badge} from "@/components/ui/badge"
import {Heart} from "lucide-react";

export default function Hero() {
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (<Loader/>);
    }

    const images = [
        "imgs/KIT-10.jpg",
        "imgs/ALS00598.png",
        "imgs/Terminal.png",
        "imgs/SixtyFiveTopCropped.png",
        "imgs/Synth.png",
        "imgs/TAHO.jpg",
        "imgs/Nomad-Atom.png",
        "imgs/ePBT.jpg"
    ];

    return (
        <>
            <Suspense fallback={<Loader/>}>
                <main
                    className="mt-3 flex-1 items-center gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">

                    <AnimatePresence>
                        <motion.section
                            key="sliderAnimation"
                            initial={{opacity: 0, x: -100}}
                            animate={{opacity: 1, x: 0}}
                            transition={{type: 'spring', damping: 20, stiffness: 100, delay: 0.5}}
                            className="mb-3"
                        >
                            <ImagesSlider className="h-[40rem] mb-3" images={images}>
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: -80,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 0.6,
                                    }}
                                    className="z-50 flex flex-col justify-center items-center"
                                >
                                    <motion.p
                                        className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                                        Nơi cung cấp <br/> các loại bàn phím cơ dành cho bạn !
                                    </motion.p>
                                    <button
                                        className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
                                        <Link href="/">Xem ngay →</Link>

                                        <div
                                            className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent"/>
                                    </button>
                                </motion.div>
                            </ImagesSlider>
                        </motion.section>

                        <motion.section
                            key="cardsAnimation"
                            initial={{opacity: 0, x: 100}}
                            animate={{opacity: 1, x: 0}}
                            transition={{type: 'spring', damping: 20, stiffness: 100, delay: 0.5}}
                            className="grid grid-cols-3 gap-4 mb-3"
                        >
                            <CardContainer className="inter-var">
                                <CardBody
                                    className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border ">
                                    <CardItem
                                        translateZ="50"
                                        className="text-xl font-bold text-neutral-600 dark:text-white"
                                    >
                                        Keyboards
                                    </CardItem>
                                    <CardItem
                                        as="p"
                                        translateZ="60"
                                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                    >
                                        Các loại bàn phím custom phổ biến trên thị trường.
                                    </CardItem>
                                    <CardItem
                                        translateZ="100"
                                        rotateX={20}
                                        rotateZ={-10}
                                        className="w-full mt-4"
                                    >
                                        <Image
                                            src="/imgs/Assemblydrawing_Carbon.jpg"
                                            height="1000"
                                            width="1000"
                                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                            alt="thumbnail"
                                        />
                                    </CardItem>
                                    <div className="flex justify-between items-center mt-20">
                                        <Link href="/">
                                            <CardItem
                                                translateZ={20}
                                                translateX={-40}
                                                as="button"
                                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                            >
                                                Xem ngay →
                                            </CardItem>
                                        </Link>
                                    </div>
                                </CardBody>
                            </CardContainer>

                            <CardContainer className="inter-var">
                                <CardBody
                                    className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                                    <CardItem
                                        translateZ="50"
                                        className="text-xl font-bold text-neutral-600 dark:text-white"
                                    >
                                        Keycaps
                                    </CardItem>
                                    <CardItem
                                        as="p"
                                        translateZ="60"
                                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                    >
                                        Các loại keycaps (phím ấn) nổi tiếng hiện nay.
                                    </CardItem>
                                    <CardItem
                                        translateZ="100"
                                        rotateX={20}
                                        rotateZ={-10}
                                        className="w-full mt-4"
                                    >
                                        <Image
                                            src="/imgs/Keycaps.png"
                                            height="1000"
                                            width="1000"
                                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                            alt="thumbnail"
                                        />
                                    </CardItem>
                                    <div className="flex justify-between items-center mt-20">
                                        <Link href="/">
                                            <CardItem
                                                translateZ={20}
                                                translateX={-40}
                                                as="button"
                                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                            >
                                                Xem ngay →
                                            </CardItem>
                                        </Link>
                                    </div>
                                </CardBody>
                            </CardContainer>

                            <CardContainer className="inter-var">
                                <CardBody
                                    className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                                    <CardItem
                                        translateZ="50"
                                        className="text-xl font-bold text-neutral-600 dark:text-white"
                                    >
                                        Switches
                                    </CardItem>
                                    <CardItem
                                        as="p"
                                        translateZ="60"
                                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                    >
                                        Các loại switch (công tắc) phổ biến trên thị trường.
                                    </CardItem>
                                    <CardItem
                                        translateZ="100"
                                        rotateX={20}
                                        rotateZ={-10}
                                        className="w-full mt-4"
                                    >
                                        <Image
                                            src="/imgs/Switch.jpg"
                                            height="1000"
                                            width="1000"
                                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                            alt="thumbnail"
                                        />
                                    </CardItem>
                                    <div className="flex justify-between items-center mt-20">
                                        <Link href="/">
                                            <CardItem
                                                translateZ={20}
                                                translateX={-40}
                                                as="button"
                                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                            >
                                                Xem ngay →
                                            </CardItem>
                                        </Link>
                                    </div>
                                </CardBody>
                            </CardContainer>
                        </motion.section>

                        <motion.section
                            key="h1Animation"
                            initial={{opacity: 0, x: -100}}
                            animate={{opacity: 1, x: 0}}
                            transition={{type: 'spring', damping: 20, stiffness: 100, delay: 0.5}}
                            className="mb-3"
                        >
                            <h1 className="font-bold text-3xl">Tất cả sản phẩm</h1>
                        </motion.section>

                        <motion.section
                            key="productsAnimation"
                            initial={{opacity: 0, x: -100}}
                            animate={{opacity: 1, x: 0}}
                            transition={{type: 'spring', damping: 20, stiffness: 100, delay: 0.5}}
                            className="flex flex-row mb-3"
                        >
                            <div className="w-full">
                                <div
                                    className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
                                    <SvgIcon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black"/>
                                    <SvgIcon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black"/>
                                    <SvgIcon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black"/>
                                    <SvgIcon
                                        className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black"/>

                                    <div className="p-0.5 bg-transparent w-full h-full">
                                        <motion.img
                                            initial={{opacity: 0}}
                                            animate={{opacity: 1}}
                                            src="imgs/ePBT.jpg"
                                            alt="cardImg"
                                            className="h-full object-cover"
                                        />
                                    </div>

                                    <div className="flex flex-row mt-4 justify-between w-full">
                                        <h2 className="dark:text-white text-black text-sm font-light">
                                            Wikuo Fuyu Switch / 10pcs
                                        </h2>

                                        <Badge variant="outline">5$</Badge>
                                    </div>


                                    <Link href="/product/Wikuo-Fuyu-Switch"
                                          className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
                                        Mua ngay
                                    </Link>
                                </div>
                            </div>
                        </motion.section>

                        <motion.section
                            key="supportAnimation"
                            initial={{opacity: 0, x: 100}}
                            animate={{opacity: 1, x: 0}}
                            transition={{type: 'spring', damping: 20, stiffness: 100, delay: 0.5}}
                            className="mb-2 mt-3"
                        >
                            <div className="w-3/4 mx-auto relative mt-10 flex flex-col justify-center items-center">
                                <div
                                    className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl"/>

                                <div
                                    className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start w-4/5">
                                    <div
                                        className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-2 w-2 text-gray-300"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                                            />
                                        </svg>
                                    </div>

                                    <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                                        Đội ngũ chúng tôi luôn sẵn sàng giúp đỡ <Heart
                                        className="animate-pulse inline-block" color="#FF3B3B" fill="#FF3B3B"/> .
                                    </h1>

                                    <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                                        Ấn vào nút dưới đây để liên hệ shop.
                                    </p>

                                    <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                                        Liên hệ ngay !
                                    </button>

                                    {/* Meaty part - Meteor effect */}
                                    <Meteors number={21}/>
                                </div>
                            </div>
                        </motion.section>
                    </AnimatePresence>

                </main>
            </Suspense>
        </>
    );
}