
// Next components

import Link from "next/link"

// Icons

import {Activity, ArrowUpRight, CreditCard, DollarSign, Users} from "lucide-react";

// Shadcn components

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Button} from "@/components/ui/button";
import {Progress} from "@/components/ui/progress";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge";

export default function AdminDashboard() {
    return (
        <>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                <Card className="sm:col-span-2">
                    <CardHeader className="pb-3 flex flex-row items-center justify-between space-y-0">
                        <CardTitle className="text-medium font-medium">Tổng doanh thu</CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground"/>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1.147.362.422 VNĐ</div>
                        <p className="text-xs text-muted-foreground">
                            +20.1% từ tháng trước
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Progress value={25} aria-label="25% increase"/>
                    </CardFooter>
                </Card>

                <Card className="sm:col-span-2">
                    <CardHeader className="pb-3 flex flex-row items-center justify-between space-y-0">
                        <CardTitle className="text-medium font-medium">Số lượng khách hàng</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground"/>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+2350</div>
                        <p className="text-xs text-muted-foreground">
                            +180.1% từ tháng trước
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Progress value={60} aria-label="60% increase"/>
                    </CardFooter>
                </Card>

                <Card className="sm:col-span-2">
                    <CardHeader className="pb-3 flex flex-row items-center justify-between space-y-0">
                        <CardTitle className="text-medium font-medium">Lượng hàng đã bán</CardTitle>
                        <CreditCard className="h-4 w-4 text-muted-foreground"/>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+12,234</div>
                        <p className="text-xs text-muted-foreground">
                            +19% từ tháng trước
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Progress value={20} aria-label="20% increase"/>
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

            <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 mt-3">
                <Card className="xl:col-span-2">
                    <CardHeader className="flex flex-row items-center">
                        <div className="grid gap-2">
                            <CardTitle>Các giao dịch</CardTitle>
                            <CardDescription>
                                Tất cả những giao dịch gần đây của shop bạn
                            </CardDescription>
                        </div>
                        
                        <Button asChild size="sm" className="ml-auto gap-1">
                            <Link href="#">
                                Xem tất cả
                                <ArrowUpRight className="h-4 w-4" />
                            </Link>
                        </Button>
                    </CardHeader>
                    
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Khách hàng đặt mua</TableHead>
                                    <TableHead>Loại hàng</TableHead>
                                    <TableHead>Trạng thái</TableHead>
                                    <TableHead>Ngày mua</TableHead>
                                    <TableHead className="text-center">Số lượng</TableHead>
                                    <TableHead className="text-right">Giá tiền</TableHead>
                                </TableRow>
                            </TableHeader>
                            
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <div className="font-medium">Tuấn Khôi</div>
                                        <div className="hidden text-sm text-muted-foreground md:inline">
                                            helloworld@gmail.com
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        Red Switch
                                    </TableCell>
                                    <TableCell>
                                        <Badge className="text-xs" variant="outline">
                                            Hoàn thành
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        04-05-2024
                                    </TableCell>
                                    <TableCell className="text-center">
                                        5
                                    </TableCell>
                                    <TableCell className="text-right">6.303.663 VNĐ</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
                
                <Card>
                    <CardHeader>
                        <CardTitle>Hàng đã bán gần đây</CardTitle>
                    </CardHeader>

                    <CardContent className="grid gap-8">
                        <div className="flex items-center gap-4">
                            <Avatar className="hidden h-9 w-9 sm:flex">
                                <AvatarImage src="/hacker.png" alt="Avatar"/>
                                <AvatarFallback>TK</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-1">
                                <p className="text-sm font-medium leading-none">
                                    Tuấn Khôi
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    helloworld@email.com
                                </p>
                            </div>
                            <div className="ml-auto font-medium">+ 6.303.663 VNĐ</div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}