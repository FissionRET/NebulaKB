import React, { useState } from "react"
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import axios from "axios"

// Icons

import {
    AlignJustify,
    AppWindow,
    BoxSelect,
    Boxes,
    CalendarDays,
    CircuitBoard,
    Codesandbox,
    Command,
    FileBox,
    Grid2X2,
    Keyboard,
    LayoutGrid,
    LibraryBig,
    Option,
    PackageCheck,
    PackagePlus,
    Power,
    ReceiptText,
    Shell,
    ShoppingBasket,
    ShoppingCart,
    SquareArrowRight,
    Trello,
    Type,
    User,
} from "lucide-react"

// Components

import Logout from '@/app/auth/logout/logout'
import { ModeToggle } from "@/components/mode-toggle"
import { Tooltip } from "@nextui-org/react";
import { AnimatePresence, motion } from 'framer-motion'

// Shadcn components

import { Button, buttonVariants } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useToast } from "@/components/ui/use-toast"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

// NextUI Components

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";

export default function NavigationBar(props: { auth: any }) {
    // Variables

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [userRole, setUserRole] = useState(0)
    const router = useRouter();
    const { toast, dismiss } = useToast();
    const pathname = usePathname();

    let authorizedItems;

    // Logic

    const menuItems = [
        "Trang chủ",
        "Mục bàn phím",
        "Mục keycaps",
        "Mục switches",
        "Hỗ trợ",
        "Log Out",
    ];

    const navMenuItems = [
        {
            label: 'Phụ kiện',
            dropdownContent: [
                {
                    label: 'Bàn phím',
                    icon: <Keyboard className="mr-2 h-4 w-4" />,
                    items: [
                        { label: 'Cases (Vỏ bàn phím)', icon: <BoxSelect className="mr-2 h-4 w-4" />, link: '/' },
                        { label: 'Plates (Tấm cố định)', icon: <FileBox className="mr-2 h-4 w-4" />, link: '/' },
                        { label: 'PCBs (Bảng mạch in)', icon: <CircuitBoard className="mr-2 h-4 w-4" />, link: '/' },
                        { label: 'Kits (Bảng dựng sẵn)', icon: <Grid2X2 className="mr-2 h-4 w-4" />, link: '/' }
                    ]
                },
                {
                    label: 'Keycaps (Nút bấm)',
                    icon: <Command className="mr-2 h-4 w-4" />,
                    items: [
                        { label: 'Các bộ keycaps', icon: <LibraryBig className="mr-2 h-4 w-4" />, link: '/' },
                        { label: 'Artisan (Chất liệu nút khác)', icon: <Command className="mr-2 h-4 w-4" />, link: '/' }
                    ]
                },
                {
                    label: 'Switches (Công tắc)',
                    icon: <SquareArrowRight className="mr-2 h-4 w-4" />,
                    items: [
                        { label: 'Linear', icon: <Option className="mr-2 h-4 w-4" />, link: '/' },
                        { label: 'Tactile', icon: <Option className="mr-2 h-4 w-4" />, link: '/' },
                        { label: 'Clicky', icon: <Option className="mr-2 h-4 w-4" />, link: '/' },
                        { label: 'Silent', icon: <Option className="mr-2 h-4 w-4" />, link: '/' },
                        { label: 'Switch tester (bộ thử switch)', icon: <Codesandbox className="mr-2 h-4 w-4" />, link: '/' }
                    ]
                },
                {
                    label: 'Stabilizers (Bộ ổn định)',
                    icon: <AlignJustify className="mr-2 h-4 w-4" />,
                    items: [
                        { headerLabel: 'Các hãng stab', headerType: 'headerLabel' },
                        { label: 'TX', icon: <Option className="mr-2 h-4 w-4" />, link: '/' },
                        { label: 'DUROCK', icon: <Option className="mr-2 h-4 w-4" />, link: '/' },
                        { label: 'Gateron', icon: <Option className="mr-2 h-4 w-4" />, link: '/' },
                        { label: 'GMK', icon: <Option className="mr-2 h-4 w-4" />, link: '/' },
                        { label: 'Owlab', icon: <Option className="mr-2 h-4 w-4" />, link: '/' },
                        { label: 'AEBoards Staebies', icon: <Option className="mr-2 h-4 w-4" />, link: '/' },
                        { label: 'WS', icon: <Option className="mr-2 h-4 w-4" />, link: '/' },
                        { label: 'C³ Equalz', icon: <Option className="mr-2 h-4 w-4" />, link: '/' }
                    ]
                },
                {
                    label: 'Springs (Lò xo)',
                    icon: <Shell className="mr-2 h-4 w-4" />,
                    items: [
                        { headerLabel: 'Các hãng lò xo', headerType: 'headerLabel' },
                        { label: 'TX', icon: <Option className="mr-2 h-4 w-4" />, link: '/' },
                        { label: 'DUROCK', icon: <Option className="mr-2 h-4 w-4" />, link: '/' },
                        { label: 'GAZZEW', icon: <Option className="mr-2 h-4 w-4" />, link: '/' },
                        { label: 'WS', icon: <Option className="mr-2 h-4 w-4" />, link: '/' },
                        { label: 'SPRiT', icon: <Option className="mr-2 h-4 w-4" />, link: '/' }
                    ]
                }
            ]
        },
        {
            label: 'Vật liệu',
            dropdownContent: [
                {
                    label: 'Cases (Vỏ bàn phím)',
                    icon: <BoxSelect className="mr-2 h-4 w-4" />,
                    items: [
                        { label: '60%', icon: <Option className="mr-2 h-4 w-4" />, link: '/', asChild: true },
                        { label: '65%', icon: <Option className="mr-2 h-4 w-4" />, link: '/' },
                        { label: '75%', icon: <Option className="mr-2 h-4 w-4" />, link: '/' },
                        { label: 'TKL', icon: <Option className="mr-2 h-4 w-4" />, link: '/' },
                        { label: 'Full-size', icon: <Option className="mr-2 h-4 w-4" />, link: '/' },
                        { label: 'Khác', icon: <Option className="mr-2 h-4 w-4" />, link: '/' }
                    ]
                },
                {
                    label: 'Plates (Tấm cố định)',
                    icon: <FileBox className="mr-2 h-4 w-4" />,
                    items: [
                        { label: '60%', icon: <Option className="mr-2 h-4 w-4" />, link: '/' },
                        { label: '65%', icon: <Option className="mr-2 h-4 w-4" />, link: '/' },
                        { label: '75%', icon: <Option className="mr-2 h-4 w-4" />, link: '/' },
                        { label: 'Keychron', icon: <Option className="mr-2 h-4 w-4" />, link: '/' },
                        { label: 'Glorius', icon: <Option className="mr-2 h-4 w-4" />, link: '/' },
                        { label: 'Khác', icon: <Option className="mr-2 h-4 w-4" />, link: '/' }
                    ]
                },
                {
                    label: 'PCBs (Bảng mạch in)',
                    icon: <CircuitBoard className="mr-2 h-4 w-4" />,
                    items: [
                        { label: '60%', icon: <Option className="mr-2 h-4 w-4" />, link: '/' },
                        { label: '65%', icon: <Option className="mr-2 h-4 w-4" />, link: '/' },
                        { label: '75%', icon: <Option className="mr-2 h-4 w-4" />, link: '/' },
                        { label: 'ANSI', icon: <Type className="mr-2 h-4 w-4" />, link: '/' },
                        { label: 'ISO', icon: <Type className="mr-2 h-4 w-4" />, link: '/' },
                        { label: 'Hot-swap', icon: <Option className="mr-2 h-4 w-4" />, link: '/' },
                        { label: 'Solderable (Có thể hàn)', icon: <Option className="mr-2 h-4 w-4" />, link: '/' },
                        { label: 'Khác', icon: <Option className="mr-2 h-4 w-4" />, link: '/' }
                    ]
                },
                {
                    label: 'Kits (Bảng dựng sẵn)',
                    icon: <Grid2X2 className="mr-2 h-4 w-4" />,
                    items: [
                        { label: '60%', icon: <Option className="mr-2 h-4 w-4" />, link: '/' },
                        { label: '65%', icon: <Option className="mr-2 h-4 w-4" />, link: '/' },
                        { label: '75%', icon: <Option className="mr-2 h-4 w-4" />, link: '/' },
                        { label: 'TKL', icon: <Option className="mr-2 h-4 w-4" />, link: '/' },
                        { label: 'Full-size (Kích cỡ đầy đủ)', icon: <Option className="mr-2 h-4 w-4" />, link: '/' },
                        { label: 'Khác', icon: <Option className="mr-2 h-4 w-4" />, link: '/' }
                    ]
                },
                {
                    label: 'Layout',
                    icon: <LayoutGrid className="mr-2 h-4 w-4" />,
                    items: [
                        { label: 'ANSI', icon: <Option className="mr-2 h-4 w-4" />, link: '/' },
                        { label: 'ISO', icon: <Option className="mr-2 h-4 w-4" />, link: '/' }
                    ]
                },
                {
                    label: 'Brands (Hãng)',
                    icon: <Trello className="mr-2 h-4 w-4" />,
                    items: [
                        { label: 'Keychron', icon: <Option className="mr-2 h-4 w-4" />, link: '/' },
                        { label: 'KBD', icon: <Option className="mr-2 h-4 w-4" />, link: '/' },
                        { label: 'KBDCraft', icon: <Option className="mr-2 h-4 w-4" />, link: '/' },
                        { label: '8BitDo', icon: <Option className="mr-2 h-4 w-4" />, link: '/' },
                        { label: 'Akko', icon: <Option className="mr-2 h-4 w-4" />, link: '/' },
                        { label: 'Ducky', icon: <Option className="mr-2 h-4 w-4" />, link: '/' },
                        { label: 'IDOBAO', icon: <Option className="mr-2 h-4 w-4" />, link: '/' }
                    ]
                }
            ]
        }
    ];

    const logoutHandler = async () => {
        try {
            const token = localStorage.getItem('token');

            if (token) {
                const message = await Logout({ token });

                if (message === "success") {
                    localStorage.clear();
                    sessionStorage.clear();

                    toast({
                        title: "Đăng xuất thành công !",
                        description: "Trình xử lý ủy quyền / Next.js (turbo)",
                    });

                    setTimeout(() => {
                        dismiss();
                        router.push("/auth/login");
                    }, 2000);
                }
            }
        } catch (err) {
            console.error('Error: ', err);

            toast({
                title: "Có lỗi không xác định xảy ra !",
                description: "Trình xử lý ủy quyền / Next.js (turbo)",
            });

            setTimeout(() => {
                dismiss();
            }, 2000);
        }
    }
    
    const roleHandler = async () => {
        const resp = await axios.post("http://localhost:1337/permission/check-permission",
            {
                userId: sessionStorage.getItem("user_id")
            },
            {
                headers: {
                    'Authorization': 'Bearer ' + sessionStorage.getItem('token')
                }
            }
        );
        
        if(resp.status === 200) {
            setUserRole(resp.data.role);
        }
    }
    
    if (!props.auth) {
        authorizedItems = (
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", delay: 0.5 }}
            >
                <NavbarItem className="hidden lg:flex">
                    <Button variant="default" asChild>
                        <Link href={"/auth/login"}>Đăng nhập</Link>
                    </Button>
                </NavbarItem>
            </motion.div>
        );
    } else {
        authorizedItems = (
            <>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", delay: 0.5 }}
                >
                    <Tooltip color="default" placement="bottom" showArrow={true} offset={10} content="Giỏ hàng">
                        <NavbarItem>
                            <Link href={"/cart"} className={buttonVariants({ variant: "outline" })}>
                                <ShoppingCart className="h-4 w-4" />
                            </Link>
                        </NavbarItem>
                    </Tooltip>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", delay: 0.5 }}
                >
                    <Tooltip color="default" placement="bottom" showArrow={true} offset={10} content="Thông tin của bạn">
                        <NavbarItem>
                            <DropdownMenu>                                
                                <DropdownMenuTrigger asChild onClick={roleHandler}>
                                    <Button variant="outline">
                                        <User className="mr-2 h-4 w-4" /> {sessionStorage.getItem("username") ? sessionStorage.getItem("username") : 'Guest'}
                                    </Button>
                                </DropdownMenuTrigger>

                                <DropdownMenuContent className="w-56">
                                    <DropdownMenuLabel>👋 Xin chào, {sessionStorage.getItem("username") ? sessionStorage.getItem("username") : null} !</DropdownMenuLabel>

                                    <DropdownMenuSeparator />

                                    <DropdownMenuGroup>
                                        <DropdownMenuItem className={`${pathname === '/profile' ? 'bg-zinc-800 text-zinc-50' : ''}`} onClick={() => router.push("/profile")}>
                                            <User className="mr-2 h-4 w-4" />
                                            <span>Thông tin cá nhân</span>
                                        </DropdownMenuItem>

                                        <DropdownMenuItem onClick={() => router.push("/orders")}>
                                            <ReceiptText className="mr-2 h-4 w-4" />
                                            <span>Đơn hàng của tôi</span>
                                        </DropdownMenuItem>

                                        <DropdownMenuSeparator />

                                        {userRole === 0 ? (
                                            <DropdownMenuItem onClick={() => router.push("/admin-dashboard")}>
                                                <AppWindow className="mr-2 h-4 w-4" />
                                                <span>Panel Quản lý</span>
                                            </DropdownMenuItem>
                                        ) : userRole === 1 ? (
                                            <DropdownMenuItem onClick={() => router.push("/employee-dashboard")}>
                                                <AppWindow className="mr-2 h-4 w-4" />
                                                <span>Panel Nhân viên</span>
                                            </DropdownMenuItem>
                                        ) : null}

                                        <DropdownMenuSeparator />

                                        <DropdownMenuItem onClick={logoutHandler} className="text-danger">
                                            <Power className="mr-2 h-4 w-4" />
                                            <span>Đăng xuất</span>
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>

                                </DropdownMenuContent>
                            </DropdownMenu>
                        </NavbarItem>
                    </Tooltip>
                </motion.div>
            </>
        );
    }

    // Framer

    const [isCompleted, setIsCompleted] = useState(false);

    return (
        <motion.div
            key="navbarAnimation"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 100, delay: 0.5 }}
            exit={{ opacity: 0 }}
            onAnimationComplete={() => setIsCompleted(true)}
        >
            <Navbar isBlurred isBordered onMenuOpenChange={setIsMenuOpen}>
                <NavbarContent justify="start">
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden"
                    />

                    <Link href={"/"}>
                        <NavbarBrand>
                            <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
                                <path
                                    clipRule="evenodd"
                                    d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                                    fill="currentColor"
                                    fillRule="evenodd"
                                />
                            </svg>

                            <HoverCard>
                                <HoverCardTrigger asChild>
                                    <Button variant="link" onClick={() => router.push("/")} className="font-bold text-inherit">NebulaKB</Button>
                                </HoverCardTrigger>
                                <HoverCardContent className="w-auto">
                                    <div className="flex justify-between space-x-4">
                                        <Avatar>
                                            <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
                                                <path
                                                    clipRule="evenodd"
                                                    d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                                                    fill="currentColor"
                                                    fillRule="evenodd"
                                                />
                                            </svg>
                                        </Avatar>

                                        <div className="space-y-1">
                                            <h4 className="text-sm font-semibold">Nebula Keyboard</h4>
                                            <p className="text-sm">
                                                Nơi cung cấp các mẫu bàn phím đa dạng và phù hợp cho mọi người.
                                            </p>
                                            <div className="flex items-center pt-2">
                                                <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                                                <span className="text-xs text-muted-foreground">
                                                    Thành lập từ 2020
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </HoverCardContent>
                            </HoverCard>
                        </NavbarBrand>
                    </Link>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <AnimatePresence mode="wait">
                        {isCompleted ? (
                            <>
                                <motion.div
                                    initial={{ opacity: 0, y: 100, scale: 0.3 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ type: "spring", delay: 0.1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <NavbarItem>
                                        <Link href={"/"} className={buttonVariants({ variant: "outline" })}>Trang chủ</Link>
                                    </NavbarItem>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 100, scale: 0.3 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ type: "spring", delay: 0.2 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <NavbarItem>
                                        <Link href={"/about"} className={buttonVariants({ variant: "outline" })}>Giới thiệu</Link>
                                    </NavbarItem>
                                </motion.div>

                                {navMenuItems.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 100, scale: 0.3 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        transition={{ type: "spring", delay: index * 0.2 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <NavbarItem key={index}>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="outline">{item.label}</Button>
                                                </DropdownMenuTrigger>

                                                <DropdownMenuContent className="w-56">
                                                    <DropdownMenuGroup>

                                                        {item.dropdownContent.map((subItem, subIndex) => (
                                                            <DropdownMenuSub key={`${index}-${subIndex}`}>
                                                                <DropdownMenuSubTrigger>
                                                                    {subItem.icon}
                                                                    <span>{subItem.label}</span>
                                                                </DropdownMenuSubTrigger>

                                                                <DropdownMenuPortal>
                                                                    <DropdownMenuSubContent>
                                                                        {subItem.items.map((nestItem, nestIndex) => (
                                                                            <React.Fragment key={`${index}-${subIndex}-${nestIndex}`}>
                                                                                {nestItem.headerType === 'headerLabel' ? (
                                                                                    <>
                                                                                        <DropdownMenuLabel>
                                                                                            {nestItem.headerLabel}
                                                                                        </DropdownMenuLabel>

                                                                                        <DropdownMenuSeparator />
                                                                                    </>
                                                                                ) : (
                                                                                    <DropdownMenuItem asChild key={`${index}-${subIndex}-${nestIndex}`}>
                                                                                        <Link href={`${nestItem.link}`}>
                                                                                            {nestItem.icon}
                                                                                            <span>{nestItem.label}</span>
                                                                                        </Link>
                                                                                    </DropdownMenuItem>
                                                                                )}
                                                                            </React.Fragment>
                                                                        ))}

                                                                    </DropdownMenuSubContent>
                                                                </DropdownMenuPortal>

                                                            </DropdownMenuSub>
                                                        ))}

                                                    </DropdownMenuGroup>
                                                </DropdownMenuContent>

                                            </DropdownMenu>
                                        </NavbarItem>
                                    </motion.div>
                                ))}
                            </>
                        ) : ''}
                    </AnimatePresence>
                </NavbarContent>

                <NavbarContent justify="end">
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring", delay: 0.5 }}
                    >
                        <Tooltip color="default" placement="bottom" showArrow={true} offset={10} content="Thay đổi màu">
                            <NavbarItem>
                                <ModeToggle />
                            </NavbarItem>
                        </Tooltip>
                    </motion.div>


                    {authorizedItems}
                </NavbarContent>

                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link className="w-full" href="#">
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </motion.div>
    );
}