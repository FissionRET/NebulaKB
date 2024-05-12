"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function Cart() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };
    
    return (
        <>
            <motion.div className="mx-auto grid w-full max-w-6xl gap-2" variants={containerVariants}>
                <motion.h1
                    initial={{opacity: 0, y: -50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{type: "spring", delay: 0.2}}
                    className="text-3xl font-semibold">
                    Giỏ hàng
                </motion.h1>
            </motion.div>
        </>
    );
}