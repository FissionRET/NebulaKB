// Hooks

import { Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";

// Local components

import Image from 'next/image'
import Loader from "@/lib/loader";
import { Meteors } from "@/components/custom/meteors";
import { ImagesSlider } from "@/components/custom/slider";
import { CardBody, CardContainer, CardItem } from "@/components/custom/3d-card";

// Shadcn components

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";

export default function Hero() {
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (<Loader />);
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
            <Suspense>
                <main className="mt-3 flex-1 items-center gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">

                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type: 'spring', damping: 20, stiffness: 100, delay: 0.5 }}
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
                                <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                                    Nơi cung cấp <br /> các loại bàn phím cơ dành cho bạn !
                                </motion.p>
                                <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
                                    <span>Xem ngay →</span>

                                    <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                                </button>
                            </motion.div>
                        </ImagesSlider>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type: 'spring', damping: 20, stiffness: 100, delay: 0.5 }}
                        className="grid grid-cols-3 gap-4 mb-3"
                    >
                        <CardContainer className="inter-var">
                            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
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
                                    <CardItem
                                        translateZ={20}
                                        translateX={-40}
                                        as="button"
                                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                    >
                                        Xem ngay →
                                    </CardItem>
                                </div>
                            </CardBody>
                        </CardContainer>

                        <CardContainer className="inter-var">
                            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
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
                                    <CardItem
                                        translateZ={20}
                                        translateX={-40}
                                        as="button"
                                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                    >
                                        Xem ngay →
                                    </CardItem>
                                </div>
                            </CardBody>
                        </CardContainer>

                        <CardContainer className="inter-var">
                            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
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
                                    <CardItem
                                        translateZ={20}
                                        translateX={-40}
                                        as="button"
                                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                    >
                                        Xem ngay →
                                    </CardItem>
                                </div>
                            </CardBody>
                        </CardContainer>
                    </motion.div>

                    
                </main>
            </Suspense>
        </>
    );
}

//<div className="w-full relative mt-3">
//    <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
//    <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
//        <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
//            <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="none"
//                viewBox="0 0 24 24"
//                strokeWidth="1.5"
//                stroke="currentColor"
//                className="h-2 w-2 text-gray-300"
//            >
//                <path
//                    strokeLinecap="round"
//                    strokeLinejoin="round"
//                    d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
//                />
//            </svg>
//        </div>

//        <h1 className="font-bold text-xl text-white mb-4 relative z-50">
//            Meteors
//        </h1>

//        <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
//            I have no motivation to continue, don&apos;t ask me why.
//        </p>

//        <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
//            nah
//        </button>

//        {/* Meaty part - Meteor effect */}
//        <Meteors number={20} />
//    </div>
//</div>