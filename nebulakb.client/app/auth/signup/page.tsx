"use client";

// Hooks

import {Suspense} from "react";
import {useRouter} from "next/navigation";
import axios, {AxiosError} from "axios";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";

// Next components
import Link from "next/link";

// Shadcn components
import {Button} from "@/components/ui/button";
import {Step, StepItem, Stepper, useStepper} from "@/components/ui/stepper";
import {Skeleton} from "@/components/ui/skeleton";
import {Input} from "@/components/ui/input";
import {useToast} from "@/components/ui/use-toast";
import {Form,} from "@/components/ui/form";

// Others
import {AnimatePresence, motion} from "framer-motion";
import {registerSchema} from "@/validators/auth";
import FirstStep from "@/app/auth/signup/step1";
import SecondStep from "@/app/auth/signup/step2";

const steps = [
    {label: "Bước 1", description: "Thông tin đăng nhập"},
    {label: "Bước 2", description: "Thông tin cá nhân"},
] satisfies StepItem[];

type Input = z.infer<typeof registerSchema>;

export default function Signup() {
    const {toast, dismiss} = useToast();
    const router = useRouter();

    // Form

    const form = useForm<Input>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            username: "",
            password: "",
            repeatPassword: "",

            firstName: "",
            lastName: "",
            gender: "",
            doB: new Date("1999-01-01"),
            phone: "",
            email: "",

            street: "",
            province: "",
            district: "",
            wards: "",
        },
    });

    // Field handlers

    async function onSubmit(data: Input) {
        var userData = {
            username: data.username,
            password: data.password,
            repeatPassword: data.repeatPassword
        };

        var customerData = {
            firstName: data.firstName,
            lastName: data.lastName,
            gender: data.gender === "Nam" ? 0 : data.gender === "Nữ" ? 1 : null,
            doB: data.doB,
            phone: data.phone,
            email: data.email,
            address: {
                street: data.street,
                province: data.province.split("-")[1],
                district: data.district.split("-")[1],
                wards: data.wards.split("-")[1],
                formattedAddress: data.street + " " + data.wards.split("-")[1] + " " + data.district.split("-")[1] + " " + data.province.split("-")[1],
            }
        };

        try {
            const resp = await axios.post("http://localhost:1337/api/register", {
                user: userData,
                customer: customerData
            }, {
                headers: {
                    "Content-Type": "application/json",
                }
            });

            if (resp.status === 200) {
                toast({
                    title: "Đăng ký thành công !",
                    description: "Trình xử lý ủy quyền / Next.js (turbo)",
                });

                setTimeout(() => {
                    dismiss();
                    router.push("/auth/login");
                }, 2000);
            }
        } catch {
            console.error("Registeration failed: ", AxiosError.ERR_BAD_REQUEST);

            toast({
                title: "Đăng ký thất bại !",
                description: "Trình xử lý ủy quyền / Next.js (turbo)",
            });

            setTimeout(() => {
                dismiss();
            }, 2000);
        }
    }

    return (
        <>
            <div
                className="min-h-screen w-full dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative">
                <div className="w-full lg:grid lg:grid-cols-2 min-h-screen">
                    <div className="flex items-center justify-center py-12">
                        <div className="mx-auto grid w-[550px] gap-6">
                            <AnimatePresence>
                                <motion.div
                                    key="h1Animation"
                                    initial={{opacity: 0, y: -100}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{type: "spring", delay: 0.5}}
                                    className="grid gap-4 text-center"
                                >
                                    <h1 className="text-3xl font-bold mb-2">Signup</h1>
                                </motion.div>

                                <motion.div
                                    key="formAnimation"
                                    initial={{opacity: 0, scale: 0.3}}
                                    animate={{opacity: 1, scale: 1}}
                                    transition={{type: "spring", delay: 0.5}}
                                >
                                    <Form {...form}>
                                        <form onSubmit={form.handleSubmit(onSubmit)}>
                                            <Stepper initialStep={0} steps={steps} className="mb-4">
                                                {steps.map((stepProps, index) => {
                                                    return (
                                                        <Step key={stepProps.label} {...stepProps}>
                                                            {index === 0 && (
                                                                <FirstStep form={form}/>
                                                            )}

                                                            {index === 1 && (
                                                                <SecondStep form={form}/>
                                                            )}
                                                        </Step>
                                                    );
                                                })}

                                                <Footer formController={form} onSubmit={onSubmit}/>
                                            </Stepper>
                                        </form>
                                    </Form>
                                </motion.div>

                                <motion.div
                                    key="existUserAnimation"
                                    initial={{opacity: 0, y: 100}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{ease: "easeIn", delay: 0.5}}
                                    className="mt-4 text-center text-sm"
                                >
                                    Đã có tài khoản?{" "}
                                    <Link href={"/auth/login"} className="underline">
                                        Đăng nhập ngay
                                    </Link>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="hidden bg-muted lg:block">
                        <Suspense fallback={<Skeleton className="h-full w-full"/>}>
                            <motion.img
                                initial={{opacity: 0, x: 100}}
                                animate={{opacity: 1, x: 0}}
                                transition={{
                                    type: "spring",
                                    damping: 20,
                                    stiffness: 100,
                                    delay: 0.5,
                                }}
                                src="/imgs/wall.jpg"
                                alt="Login"
                                width="1920"
                                height="1080"
                                className="h-full w-full object-cover dark:brightness-[0.8] dark:grayscale"
                            />
                        </Suspense>
                    </div>
                </div>
            </div>
        </>
    );
}

const Footer = ({formController, onSubmit}: { formController: any, onSubmit: any }) => {
    const {
        nextStep,
        prevStep,
        hasCompletedAllSteps,
        isLastStep,
        isOptionalStep,
        isDisabledStep,
    } = useStepper();

    return (
        <>
            {hasCompletedAllSteps && (
                <div className="h-40 flex items-center justify-center my-2 border rounded-md">
                    <h1 className="text-xl">
                        Hãy ấn nút bên dưới để đăng ký ngay thôi ! 🎉
                    </h1>
                </div>
            )}
            <div className="w-full flex justify-end gap-2 my-4">
                {hasCompletedAllSteps ? (
                    <Button size="sm" type="submit" onClick={() => onSubmit(formController.getValues())}>
                        Đăng ký ngay
                    </Button>
                ) : (
                    <>
                        <Button
                            disabled={isDisabledStep}
                            onClick={prevStep}
                            size="sm"
                            type="button"
                            variant="secondary"
                        >
                            Trở lại
                        </Button>

                        <Button
                            size="sm"
                            type="button"
                            onClick={async () => {
                                formController.trigger(["username", "password", "repeatPassword",]);

                                const usernameState = formController.getFieldState("username");
                                const passwordState = formController.getFieldState("password");
                                const repeatPasswordState = formController.getFieldState("repeatPassword");

                                if (!usernameState.isDirty || usernameState.invalid) return;
                                if (!passwordState.isDirty || passwordState.invalid) return;
                                if (!repeatPasswordState.isDirty || repeatPasswordState.invalid) return;

                                await nextStep();
                            }}
                        >
                            {isLastStep
                                ? "Hoàn tất đăng ký"
                                : isOptionalStep
                                    ? "Skip"
                                    : "Tiếp tục"}
                        </Button>
                    </>
                )}
            </div>
        </>
    );
};
