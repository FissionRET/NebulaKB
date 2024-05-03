"use client"

// Hooks

import {useState} from "react";
import {cn} from "@/lib/utils"
import Link from "next/link";
import Image from "next/image"

// Components & Icons

import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {Home, Info, LineChart, LogOut, Package, PanelLeft, Settings, ShoppingCart, Users2} from "lucide-react";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {AnimatePresence, motion} from "framer-motion";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import AdminDashboard from "@/app/(dashboard)/admin-dashboard/page";

export function DashboardHeader() {
    const [selectedNavItem, setSelectedNavItem] = useState('Dashboard');

    const containerVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1, transition: {staggerChildren: 0.1}}
    };

    const itemVariants = {
        hidden: {opacity: 0, x: -20},
        visible: {opacity: 1, x: 0}
    };

    const handleSidebarClick = (navItem: string) => {
        setSelectedNavItem(navItem);
    };

    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <aside
                className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r border-slate-700 bg-background sm:flex">
                <motion.nav className="flex flex-col items-center gap-4 px-2 sm:py-5" initial="hidden" animate="visible"
                            variants={containerVariants}>
                    <Link href="#"
                          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-default text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base">
                        <svg fill="none" height="36" viewBox="0 0 32 32" width="36"
                             className={"transition-all group-hover:scale-110"}>
                            <path
                                clipRule="evenodd"
                                d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                                fill="currentColor"
                                fillRule="evenodd"
                            />
                        </svg>
                        <span className="sr-only">NebulaKB</span>
                    </Link>

                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <motion.a
                                    href="#"
                                    variants={itemVariants}
                                    className={selectedNavItem === "Dashboard" ? "flex h-9 w-9 items-center justify-center rounded-lg text-foreground transition-colors hover:text-foreground md:h-8 md:w-8" : 'flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition-colors hover:text-foreground md:h-8 md:w-8'}
                                    onClick={() => handleSidebarClick("Dashboard")}
                                >
                                    <Home className="h-5 w-5"/>
                                    <span className="sr-only">Bảng điều khiển</span>
                                </motion.a>
                            </TooltipTrigger>
                            <TooltipContent side="right">Bảng điều khiển</TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <motion.a
                                    href="#"
                                    variants={itemVariants}
                                    className={selectedNavItem === "Orders" ? "flex h-9 w-9 items-center justify-center rounded-lg text-foreground transition-colors hover:text-foreground md:h-8 md:w-8" : 'flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition-colors hover:text-foreground md:h-8 md:w-8'}
                                    onClick={() => handleSidebarClick("Orders")}
                                >
                                    <ShoppingCart className="h-5 w-5"/>
                                    <span className="sr-only">Đơn hàng</span>
                                </motion.a>
                            </TooltipTrigger>
                            <TooltipContent side="right">Quản lý đơn hàng</TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <motion.a
                                    href="#"
                                    variants={itemVariants}
                                    className={selectedNavItem === "Products" ? "flex h-9 w-9 items-center justify-center rounded-lg text-foreground transition-colors hover:text-foreground md:h-8 md:w-8" : 'flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition-colors hover:text-foreground md:h-8 md:w-8'}
                                    onClick={() => handleSidebarClick("Products")}
                                >
                                    <Package className="h-5 w-5"/>
                                    <span className="sr-only">Sản phẩm</span>
                                </motion.a>
                            </TooltipTrigger>
                            <TooltipContent side="right">Quản lý sản phẩm</TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <motion.a
                                    href="#"
                                    variants={itemVariants}
                                    className={selectedNavItem === "Customers" ? "flex h-9 w-9 items-center justify-center rounded-lg text-foreground transition-colors hover:text-foreground md:h-8 md:w-8" : 'flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition-colors hover:text-foreground md:h-8 md:w-8'}
                                    onClick={() => handleSidebarClick("Customers")}
                                >
                                    <Users2 className="h-5 w-5"/>
                                    <span className="sr-only">Khách hàng</span>
                                </motion.a>
                            </TooltipTrigger>
                            <TooltipContent side="right">Quản lý khách</TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <motion.a
                                    href="#"
                                    variants={itemVariants}
                                    className={selectedNavItem === "Analytics" ? "flex h-9 w-9 items-center justify-center rounded-lg text-foreground transition-colors hover:text-foreground md:h-8 md:w-8" : 'flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition-colors hover:text-foreground md:h-8 md:w-8'}
                                    onClick={() => handleSidebarClick("Analytics")}
                                >
                                    <LineChart className="h-5 w-5"/>
                                    <span className="sr-only">Thống kê</span>
                                </motion.a>
                            </TooltipTrigger>
                            <TooltipContent side="right">Thống kê</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </motion.nav>

                <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <motion.a
                                    href="#"
                                    variants={itemVariants}
                                    className={selectedNavItem === "Settings" ? "flex h-9 w-9 items-center justify-center rounded-lg text-foreground transition-colors hover:text-foreground md:h-8 md:w-8" : 'flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition-colors hover:text-foreground md:h-8 md:w-8'}
                                    onClick={() => handleSidebarClick("Settings")}
                                >
                                    <Settings className="h-5 w-5"/>
                                    <span className="sr-only">Tùy chỉnh</span>
                                </motion.a>
                            </TooltipTrigger>
                            <TooltipContent side="right">Tùy chỉnh</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </nav>
            </aside>

            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <header
                    className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b border-slate-700 bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size="icon" variant="outline" className="sm:hidden">
                                <PanelLeft className="h-5 w-5"/>
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="left" className="sm:max-w-xs">
                            <nav className="grid gap-6 text-lg font-medium">
                                <Link href="#"
                                      className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-default text-lg font-semibold text-primary-foreground md:text-base">
                                    <svg fill="none" height="36" viewBox="0 0 32 32" width="36"
                                         className={"transition-all group-hover:scale-110"}>
                                        <path
                                            clipRule="evenodd"
                                            d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                                            fill="currentColor"
                                            fillRule="evenodd"
                                        />
                                    </svg>
                                    <span className="sr-only">NebulaKB</span>
                                </Link>

                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                >
                                    <Home className="h-5 w-5"/>
                                    Bảng điều khiển
                                </Link>

                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                >
                                    <ShoppingCart className="h-5 w-5"/>
                                    Quản lý đơn hàng
                                </Link>

                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                >
                                    <Package className="h-5 w-5"/>
                                    Quản lý sản phẩm
                                </Link>

                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                >
                                    <Users2 className="h-5 w-5"/>
                                    Quản lý khách hàng
                                </Link>

                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                >
                                    <LineChart className="h-5 w-5"/>
                                    Thống kê
                                </Link>

                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                >
                                    <Settings className="h-5 w-5"/>
                                    Tùy chỉnh
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>

                    <Breadcrumb className="hidden md:flex">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                {selectedNavItem === "Dashboard" ? (
                                    <BreadcrumbPage>Bảng điều khiển</BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink asChild>
                                        <Link href="#">Bảng điều khiển</Link>
                                    </BreadcrumbLink>
                                )}
                            </BreadcrumbItem>

                            {selectedNavItem === "Orders" ? (
                                <>
                                    <BreadcrumbSeparator/>

                                    <BreadcrumbItem>
                                        <BreadcrumbPage>Quản lý đơn hàng</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </>
                            ) : null}

                            {selectedNavItem === "Products" ? (
                                <>
                                    <BreadcrumbSeparator/>

                                    <BreadcrumbItem>
                                        <BreadcrumbPage>Quản lý sản phẩm</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </>
                            ) : null}

                            {selectedNavItem === "Customers" ? (
                                <>
                                    <BreadcrumbSeparator/>

                                    <BreadcrumbItem>
                                        <BreadcrumbPage>Quản lý khách hàng</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </>
                            ) : null}

                            {selectedNavItem === "Analytics" ? (
                                <>
                                    <BreadcrumbSeparator/>

                                    <BreadcrumbItem>
                                        <BreadcrumbPage>Thống kê</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </>
                            ) : null}

                            {selectedNavItem === "Settings" ? (
                                <>
                                    <BreadcrumbSeparator/>

                                    <BreadcrumbItem>
                                        <BreadcrumbPage>Tùy chỉnh</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </>
                            ) : null}
                        </BreadcrumbList>
                    </Breadcrumb>

                    {/* User actions */}

                    <div className="relative ml-auto flex-1 md:grow-0"></div>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
                                <Image src="/hacker.png" width={36} height={36} alt="Avatar"
                                       className="overflow-hidden rounded-full"/>
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Tài khoản của bạn</DropdownMenuLabel>
                            <DropdownMenuSeparator/>

                            <DropdownMenuItem>
                                <Info className="mr-2 h-4 w-4"/> Trang cá nhân
                            </DropdownMenuItem>

                            <DropdownMenuItem className="text-danger">
                                <LogOut className="mr-2 h-4 w-4"/> Đăng xuất
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </header>

                <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
                    <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-4">
                        <AnimatePresence mode="wait">
                            {selectedNavItem === "Dashboard" && (
                                <motion.div
                                    key="dashboard"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <AdminDashboard/>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </main>
            </div>
        </div>
    );
}