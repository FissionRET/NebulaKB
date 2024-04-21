import Image from "next/image"
import Link from "next/link"

// Shadcn components

import LoginForm from "./handlers/loginHandler"

export default function Login() {
    return (
        <div className="w-full lg:grid lg:grid-cols-2 min-h-screen">
            <div className="flex items-center justify-center py-12">
                <div className="mx-auto grid w-[350px] gap-6">
                    <div className="grid gap-2 text-center">
                        <h1 className="text-3xl font-bold">Login</h1>

                        <p className="text-balance text-muted-foreground">
                            Nhập tên đăng nhập phía dưới để đăng nhập.
                        </p>
                    </div>

                    <LoginForm/>

                    <div className="mt-4 text-center text-sm">
                        Chưa có tài khoản?{" "}
                        <Link href={'/auth/signup'} className="underline">
                            Đăng ký ngay
                        </Link>
                    </div>
                </div>
            </div>

            <div className="hidden bg-muted lg:block">
                <Image
                    src="/imgs/wall.jpg"
                    alt="Login"
                    width="1920"
                    height="1080"
                    className="h-full w-full object-cover dark:brightness-[0.8] dark:grayscale"
                />
            </div>
        </div>
    );
}