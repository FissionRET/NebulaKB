// Hooks

import axios from "axios";
import { useEffect, useState } from "react";

// Shadcn components

import { HardDriveUpload, Key } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";

export const InformationCard = () => {
    const [userData, setUserData] = useState({
        user: {
            id: '',
            username: '',
            role: 0,
            status: 0
        },
        customer: {
            id: '',
            firstName: '',
            lastName: '',
            gender: '',
            doB: '',
            phone: '',
            email: '',
            address: '',
            rank: 0,
            point: 0
        }
    });

    const getCurrentUserInfo = async () => {
        const resp = await axios.get('http://localhost:1337/api/user', {
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem('token')
            }
        });

        const responseData = resp.data.userData;

        const currentSessionData = {
            user: {
                id: responseData.userInfo.id,
                username: responseData.userInfo.username,
                role: responseData.userInfo.role,
                status: responseData.userInfo.status
            },
            customer: {
                id: responseData.customerInfo.id,
                firstName: responseData.customerInfo.firstName,
                lastName: responseData.customerInfo.lastName,
                gender: responseData.customerInfo.gender === 0 ? "Nam" : "Nữ",
                doB: responseData.customerInfo.doB,
                phone: responseData.customerInfo.phone,
                email: responseData.customerInfo.email,
                address: responseData.customerInfo.address.formattedAddress,
                rank: responseData.customerInfo.rank,
                point: responseData.customerInfo.point
            }
        }

        console.log(resp.data);

        return currentSessionData;
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await getCurrentUserInfo();
                setUserData(userData);
            } catch (error) {
                console.error('Error fetching user data: ', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Card className="mb-3">
                <CardHeader>
                    <CardTitle>Thông tin tài khoản của bạn</CardTitle>
                </CardHeader>


                <CardContent>
                    <form className="grid grid-cols-2 gap-4">
                        <div className="grid max-w-md gap-2">
                            <Label htmlFor="id">ID người dùng</Label>
                            <Input type="text" id="id" defaultValue={userData.user.id} readOnly />
                        </div>

                        <div className="grid max-w-md gap-2">
                            <Label htmlFor="username">Tên người dùng</Label>
                            <Input type="text" id="username" defaultValue={userData.user.username} />
                        </div>

                        <div className="grid max-w-md gap-2">
                            <Label htmlFor="role">Quyền hạn</Label>
                            <Input type="text" id="role" defaultValue={userData.user.role === 0 ? "Khách hàng" : userData.user.role === 1 ? "Nhân viên" : userData.user.role === 3 ? "Quản trị viên" : 'Khách hàng'} readOnly />
                        </div>

                        <div className="grid max-w-md gap-2">
                            <Label htmlFor="status">Trạng thái tài khoản</Label>
                            <Input type="text" id="status" defaultValue={userData.user.status === 0 ? 'Hoạt động' : userData.user.status === 1 ? 'Bị cấm' : 'Hoạt động'} readOnly />
                        </div>
                    </form>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Thông tin cá nhân của bạn</CardTitle>

                    <CardDescription>
                        Được dùng khi thanh toán và vận chuyển.
                    </CardDescription>
                </CardHeader>


                <CardContent>
                    <form className="grid grid-cols-2 gap-4">
                        {/* Row 1 */}

                        <div className="grid max-w-md gap-2">
                            <Label htmlFor="id">ID khách hàng</Label>
                            <Input type="text" id="id" defaultValue={userData.customer.id} readOnly />
                        </div>

                        <div className="grid max-w-md gap-2">
                            <Label htmlFor="phone">Số điện thoại</Label>
                            <Input type="text" id="phone" defaultValue={userData.customer.phone} />
                        </div>

                        {/* Row 2 */}

                        <div className="grid max-w-md gap-2">
                            <Label htmlFor="firstName">Họ</Label>
                            <Input type="text" id="firstName" defaultValue={userData.customer.firstName} />
                        </div>

                        <div className="grid max-w-md gap-2">
                            <Label htmlFor="lastName">Tên</Label>
                            <Input type="text" id="lastName" defaultValue={userData.customer.lastName} />
                        </div>

                        {/* Row 3 */}

                        <div className="grid max-w-md gap-2">
                            <Label htmlFor="gender">Giới tính</Label>
                            <Input type="text" id="gender" defaultValue={userData.customer.gender} />
                        </div>

                        <div className="grid max-w-md gap-2">
                            <Label htmlFor="doB">Ngày sinh</Label>
                            <Input type="text" id="doB" defaultValue={userData.customer.doB} readOnly />
                        </div>

                        {/* Row 4 */}

                        <div className="grid max-w-md gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input type="text" id="email" defaultValue={userData.customer.email} />
                        </div>

                        <div className="grid max-w-md gap-2">
                            <Label htmlFor="formattedAddress">Địa chỉ</Label>
                            <Input type="text" id="formattedAddress" defaultValue={userData.customer.address} readOnly />
                        </div>

                        {/* Row 5 */}

                        <div className="grid max-w-md gap-2">
                            <Label htmlFor="rank">Hạng tài khoản</Label>
                            <Input type="text" id="rank" defaultValue={userData.customer.rank === 0 ? 'Thành viên' : userData.customer.rank === 1 ? 'VIP' : 'Thành viên'} readOnly />
                        </div>

                        <div className="grid max-w-md gap-2">
                            <Label htmlFor="point">Điểm tích lũy</Label>
                            <Input type="number" id="point" defaultValue={userData.customer.point} readOnly />
                        </div>
                    </form>
                </CardContent>

                <Separator />

                <CardFooter className="px-6 py-4">
                    <Button>
                        <HardDriveUpload className="mr-2 h-4 w-4" /> Lưu thay đổi
                    </Button>
                </CardFooter>
            </Card>
        </>
    );
}

export const SecurityCard = () => {
    return (
        <Card className="mb-3">
            <CardHeader>
                <CardTitle>Thay đổi mật khẩu</CardTitle>
            </CardHeader>


            <CardContent>
                <form>
                    <div className="grid mb-3 gap-2">
                        <Label htmlFor="currentPassword">Mật khẩu hiện tại</Label>
                        <Input type="text" id="currentPassword" defaultValue="" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid max-w-md gap-2">
                            <Label htmlFor="newPassword">Mật khẩu mới</Label>
                            <Input type="text" id="newPassword" defaultValue="" />
                        </div>

                        <div className="grid max-w-md gap-2">
                            <Label htmlFor="confirmNewPassword">Xác thực mật khẩu mới</Label>
                            <Input type="text" id="confirmNewPassword" defaultValue="" />
                        </div>
                    </div>
                </form>
            </CardContent>

            <Separator />

            <CardFooter className="px-6 py-4">
                <Button>
                    <Key className="mr-2 h-4 w-4" /> Thay mật khẩu
                </Button>
            </CardFooter>
        </Card>
    );
}