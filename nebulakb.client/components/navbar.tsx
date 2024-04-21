"use client";

import React from "react"
import Link from "next/link"

// Icons

import {
    AlignJustify,
    BoxSelect,
    Boxes,
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
    Shell,
    ShoppingBasket,
    SquareArrowRight,
    Trello,
    Type,
} from "lucide-react"

// Components

import { ModeToggle } from "@/components/mode-toggle"

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
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// NextUI Components

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";

export default function NavigationBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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
            label: 'Cửa hàng',
            dropdownContent: [
                {
                    label: 'Tất cả sản phẩm',
                    icon: <Boxes className="mr-2 h-4 w-4" />,
                    items: [
                        { label: 'Còn hàng', icon: <PackageCheck className="mr-2 h-4 w-4" />, link: '/' },
                        { label: 'Đặt trước', icon: <FileBox className="mr-2 h-4 w-4" />, link: '/' },
                        { label: 'Đang nhập hàng', icon: <PackagePlus className="mr-2 h-4 w-4" />, link: '/' }
                    ]
                },
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
                        { headerLabel: 'Các hãng stab', type: 'headerLabel' },
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
                        { headerLabel: 'Các hãng lò xo', type: 'headerLabel' },
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
            label: 'Keyboards',
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

    return (
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

                        <p className="font-bold text-inherit">Nebula Keyboard</p>
                    </NavbarBrand>
                </Link>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link href={"/"} className={buttonVariants({ variant: "outline" })}>Trang chủ</Link>
                </NavbarItem>

                <NavbarItem>
                    <Link href={"/about"} className={buttonVariants({ variant: "outline" })}>Giới thiệu</Link>
                </NavbarItem>
                
                {navMenuItems.map((item, index) => (
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
                                                            {nestItem.type === 'headerLabel' ? (
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
                ))}

            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                    <ModeToggle />
                </NavbarItem>

                <NavbarItem>
                    <Link href={"/cart"} className={buttonVariants({ variant: "outline" })}>
                        <ShoppingBasket className="h-[1.2rem] w-[1.2rem]" />
                    </Link>
                </NavbarItem>

                <NavbarItem className="hidden lg:flex">
                    <Button variant="default" asChild>
                        <Link href={"/auth/login"}>Đăng nhập</Link>
                    </Button>
                </NavbarItem>

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
    );
}