// Hooks & functions

import Link from "next/link";

// Components

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Progress} from "@/components/ui/progress";
import {Button} from "@/components/ui/button";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {
    Activity,
    ArrowUpRight,
    CreditCard,
    DollarSign,
    ListFilter,
    Users,
    File,
    ChevronLeft,
    ChevronRight,
    MoreVertical,
    Truck,
    Copy,
    Package,
    UserRoundPlus,
    UserRoundSearch,
    Check
} from "lucide-react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {
    DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,
    DropdownMenuSeparator, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Separator} from "@/components/ui/separator";
import {Pagination, PaginationContent, PaginationItem} from "@/components/ui/pagination";
import ProductsTable from "@/app/(dashboard)/admin-dashboard/components/products/products-table";
import OrdersTable from "@/app/(dashboard)/admin-dashboard/components/orders/orders-table";
import CustomersTable from "@/app/(dashboard)/admin-dashboard/components/customers/customers-table";
import { useState } from "react";

export const OrdersManagement = () => {
    const [copied, setCopied] = useState(false);
    
    const handleCopy = () => {
        navigator.clipboard.writeText("Oe31b70H");
        setCopied(true);
        
        setTimeout(() => {
            setCopied(false);
        }, 1500);
    }
    
    return (
        <>
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
                <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                        <Card className="sm:col-span-2">
                            <CardHeader className="pb-2">
                                <CardDescription>Tuần này</CardDescription>
                                <CardTitle className="text-4xl">33.510.274,75 VNĐ</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-xs text-muted-foreground">
                                    +25% so với tuần trước
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Progress value={25} aria-label="25% increase"/>
                            </CardFooter>
                        </Card>

                        <Card className="sm:col-span-2">
                            <CardHeader className="pb-2">
                                <CardDescription>Tháng này</CardDescription>
                                <CardTitle className="text-4xl">134.368.889,48 VNĐ</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-xs text-muted-foreground">
                                    +10% so với tháng trước
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Progress value={12} aria-label="12% increase"/>
                            </CardFooter>
                        </Card>
                    </div>
                    <Tabs defaultValue="Tuần">
                        <div className="flex items-center">
                            <TabsList>
                                {["Tuần", "Tháng", "Năm"].map(tabs => (
                                    <TabsTrigger value={tabs}>{tabs}</TabsTrigger>
                                ))}
                            </TabsList>
                            <div className="ml-auto flex items-center gap-2">
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className="h-7 gap-1 text-sm"
                                >
                                    <File className="h-3.5 w-3.5"/>
                                    <span className="sr-only sm:not-sr-only">Xuất ra Excel</span>
                                </Button>
                            </div>
                        </div>
                        <TabsContent value="Tuần">
                            <Card>
                                <CardHeader className="flex flex-row items-center">
                                    <div className="grid gap-2">
                                        <CardTitle>Danh sách đơn hàng</CardTitle>
                                        <CardDescription>
                                            Các đơn hàng gần đây.
                                        </CardDescription>
                                    </div>

                                    <div className="ml-auto mr-4 gap-1">
                                        <Truck className="h-10 w-10"/>
                                    </div>
                                </CardHeader>

                                <CardContent>
                                    <OrdersTable/>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>

                <div>
                    <Card className="overflow-hidden">
                        <CardHeader className="flex flex-row items-start bg-muted/50">
                            <div className="grid gap-0.5">
                                <CardTitle className="group flex items-center gap-2 text-lg">
                                    Đơn Oe31b70H
                                    <Button
                                        size="icon"
                                        variant="outline"
                                        className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                                        onClick={handleCopy}
                                    >
                                        {copied ? (
                                            <>
                                                <Check className="h-3 w-3" />
                                                <span className="sr-only">Copied</span>
                                            </>
                                        ) : (
                                            <>
                                                <Copy className="h-3 w-3" />
                                                <span className="sr-only">Copy ID đơn hàng</span>
                                            </>
                                        )}
                                    </Button>
                                </CardTitle>
                                <CardDescription>Ngày: Tháng 5 07, 2024</CardDescription>
                            </div>
                            <div className="ml-auto flex items-center gap-1">
                                <Button size="sm" variant="outline" className="h-8 gap-1">
                                    <Truck className="h-3.5 w-3.5"/>
                                    <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                                        Theo dõi
                                    </span>
                                </Button>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button size="icon" variant="outline" className="h-8 w-8">
                                            <MoreVertical className="h-3.5 w-3.5"/>
                                            <span className="sr-only">Thêm</span>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem>Chỉnh sửa</DropdownMenuItem>
                                        <DropdownMenuItem>Xuất</DropdownMenuItem>
                                        <DropdownMenuSeparator/>
                                        <DropdownMenuItem>Xóa</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </CardHeader>

                        <CardContent className="p-6 text-sm">
                            <div className="grid gap-3">
                                <div className="font-semibold">Chi tiết đơn hàng</div>
                                <ul className="grid gap-3">
                                    <li className="flex items-center justify-between">
                                          <span className="text-muted-foreground">
                                            Red Switch x <span>10</span>
                                          </span>
                                        <span>7.564.396 VNĐ</span>
                                    </li>
                                </ul>

                                <Separator className="my-2"/>

                                <ul className="grid gap-3">
                                    <li className="flex items-center justify-between">
                                        <span className="text-muted-foreground">Tổng phụ</span>
                                        <span>7.564.396 VNĐ</span>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <span className="text-muted-foreground">Phí vận chuyển</span>
                                        <span>30.000 VNĐ</span>
                                    </li>
                                    <li className="flex items-center justify-between font-semibold">
                                        <span className="text-muted-foreground">Tổng trả</span>
                                        <span>7.594.396 VNĐ</span>
                                    </li>
                                </ul>
                            </div>

                            <Separator className="my-4"/>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-3">
                                    <div className="font-semibold">Thông tin vận chuyển</div>
                                    <address className="grid gap-0.5 not-italic text-muted-foreground">
                                        <span>Phạm Tuấn Khôi</span>
                                        <span>Số 12, Tổ 3, Khu 4</span>
                                        <span>Phường Trần Hưng Đạo, Quảng Ninh</span>
                                    </address>
                                </div>

                                <div className="grid auto-rows-max gap-3">
                                    <div className="font-semibold">Thông tin thanh toán</div>
                                    <div className="text-muted-foreground">
                                        Tương tự như địa chỉ giao hàng
                                    </div>
                                </div>
                            </div>

                            <Separator className="my-4"/>

                            <div className="grid gap-3">
                                <div className="font-semibold">Thông tin khách hàng</div>
                                <dl className="grid gap-3">
                                    <div className="flex items-center justify-between">
                                        <dt className="text-muted-foreground">Khách hàng</dt>
                                        <dd>Phạm Tuấn Khôi</dd>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <dt className="text-muted-foreground">Email</dt>
                                        <dd>
                                            <a href="mailto:">helloworld@gmail.com</a>
                                        </dd>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <dt className="text-muted-foreground">Số điện thoại</dt>
                                        <dd>
                                            <a href="tel:">+086 5005 719</a>
                                        </dd>
                                    </div>
                                </dl>
                            </div>

                            <Separator className="my-4"/>

                            <div className="grid gap-3">
                                <div className="font-semibold">Thông tin thanh toán</div>
                                <dl className="grid gap-3">
                                    <div className="flex items-center justify-between">
                                        <dt className="flex items-center gap-1 text-muted-foreground">
                                            <CreditCard className="h-4 w-4"/>
                                            Visa
                                        </dt>
                                        <dd>**** **** **** 4532</dd>
                                    </div>
                                </dl>
                            </div>
                        </CardContent>
                        <CardFooter className="flex flex-row items-center border-t border-zinc-800 bg-muted/50 px-6 py-3">
                            <div className="text-xs text-muted-foreground">
                                Cập nhật <time dateTime="2024-05-07">Tháng 5 07, 2024</time>
                            </div>

                            <Pagination className="ml-auto mr-0 w-auto">
                                <PaginationContent>
                                    <PaginationItem>
                                        <Button size="icon" variant="outline" className="h-6 w-6">
                                            <ChevronLeft className="h-3.5 w-3.5"/>
                                            <span className="sr-only">Đơn hàng trước</span>
                                        </Button>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <Button size="icon" variant="outline" className="h-6 w-6">
                                            <ChevronRight className="h-3.5 w-3.5"/>
                                            <span className="sr-only">Đơn hàng kế</span>
                                        </Button>
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </CardFooter>
                    </Card>
                </div>
            </main>
        </>
    );
}

export const ProductsManagement = () => {
    return (
        <>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                <Card className="sm:col-span-2">
                    <CardHeader className="pb-3 flex flex-row items-center justify-between space-y-0">
                        <CardTitle className="text-medium font-medium">Tổng sản phẩm đang bán</CardTitle>
                        <Package className="h-4 w-4 text-muted-foreground"/>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">124 sản phẩm</div>
                        <p className="text-xs text-muted-foreground">
                            +10.1% từ tháng trước
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Progress value={12} aria-label="12% increase"/>
                    </CardFooter>
                </Card>

                <Card className="sm:col-span-2">
                    <CardHeader className="pb-3 flex flex-row items-center justify-between space-y-0">
                        <CardTitle className="text-medium font-medium">Tổng sản phẩm đã bán</CardTitle>
                        <Package className="h-4 w-4 text-muted-foreground"/>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1.452 sản phẩm</div>
                        <p className="text-xs text-muted-foreground">
                            +70% từ tháng trước
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Progress value={70} aria-label="70% increase"/>
                    </CardFooter>
                </Card>
            </div>

            <Card className="mt-4">
                <CardHeader className="flex flex-row items-center">
                    <div className="grid gap-2">
                        <CardTitle>Danh sách các sản phẩm đang bán</CardTitle>
                        <CardDescription>
                            Tất cả các sản phẩm đang được đăng bán
                        </CardDescription>
                    </div>

                    <div className="ml-auto mr-4 gap-1">
                        <Package className="h-10 w-10"/>
                    </div>
                </CardHeader>

                <CardContent>
                    <ProductsTable/>
                </CardContent>
            </Card>
        </>
    )
}

export const CustomersManagement = () => {
    return (
        <>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                <Card className="sm:col-span-2">
                    <CardHeader className="pb-3 flex flex-row items-center justify-between space-y-0">
                        <CardTitle className="text-medium font-medium">Số thành viên mới</CardTitle>
                        <UserRoundPlus className="h-4 w-4 text-muted-foreground"/>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+421 thành viên</div>
                        <p className="text-xs text-muted-foreground">
                            +75% từ tháng trước
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Progress value={75} aria-label="75% increase"/>
                    </CardFooter>
                </Card>

                <Card className="sm:col-span-2">
                    <CardHeader className="pb-3 flex flex-row items-center justify-between space-y-0">
                        <CardTitle className="text-medium font-medium">Khách đang hoạt động</CardTitle>
                        <Activity className="h-4 w-4 text-muted-foreground"/>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+573</div>
                        <p className="text-xs text-muted-foreground">
                            +201 kể từ 1 giờ trước
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Progress value={50} aria-label="50% increase"/>
                    </CardFooter>
                </Card>
            </div>

            <Card className="mt-4">
                <CardHeader className="flex flex-row items-center">
                    <div className="grid gap-2">
                        <CardTitle>Danh sách khách hàng</CardTitle>
                        <CardDescription>
                            Tất cả khách hàng đã tham gia
                        </CardDescription>
                    </div>

                    <div className="ml-auto mr-4 gap-1">
                        <UserRoundSearch className="h-10 w-10"/>
                    </div>
                </CardHeader>

                <CardContent>
                    <CustomersTable/>
                </CardContent>
            </Card>
        </>
    )
}