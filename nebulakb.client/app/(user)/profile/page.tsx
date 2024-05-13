"use client"

import {useState} from "react";
import Link from "next/link";

// Components
import {AnimatePresence, motion} from "framer-motion";
import {InformationCard, SecurityCard} from "./items";

export default function Profile() {
    const [selectedNavItem, setSelectedNavItem] = useState('Information');

    const containerVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1, transition: {staggerChildren: 0.1}}
    };

    const itemVariants = {
        hidden: {opacity: 0, x: -20},
        visible: {opacity: 1, x: 0}
    };

    const handleNavItemClick = (navItem: string) => {
        setSelectedNavItem(navItem);
    };

    return (
        <>
            <motion.div className="mx-auto grid w-full max-w-6xl gap-2" variants={containerVariants}>
                <motion.h1
                    initial={{opacity: 0, y: -50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{type: "spring", delay: 0.2}}
                    className="text-3xl font-semibold">Profile (Trang cá nhân)
                </motion.h1>
            </motion.div>
            <div
                className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
                <motion.nav className="grid gap-4 text-sm text-muted-foreground">
                    <motion.div initial="hidden" animate="visible" className="" variants={containerVariants}>
                        <motion.div variants={itemVariants} className="mb-3">
                            <Link href="#"
                                  className={selectedNavItem === "Information" ? "font-semibold underline underline-offset-4" : ''}
                                  onClick={() => handleNavItemClick("Information")}>
                                Information (Thông tin cá nhân)
                            </Link>
                        </motion.div>

                        <motion.div variants={itemVariants} className="mb-3"
                                    onClick={() => handleNavItemClick("Security")}>
                            <Link
                                className={selectedNavItem === "Security" ? "font-semibold underline underline-offset-4" : ''}
                                href="#">Security (Bảo mật)</Link>
                        </motion.div>
                    </motion.div>
                </motion.nav>

                <div className="grid gap-6">
                    <AnimatePresence mode="wait">
                        {selectedNavItem === "Information" && (
                            <motion.div
                                key="information"
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                transition={{duration: 0.3}}
                            >
                                <InformationCard/>
                            </motion.div>
                        )}

                        {selectedNavItem === "Security" && (
                            <motion.div
                                key="security"
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                transition={{duration: 0.5}}
                            >
                                <SecurityCard/>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </>
    );
}