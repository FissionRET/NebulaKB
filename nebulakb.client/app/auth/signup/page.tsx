"use client";

// Hooks

import { Suspense, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useForm, UseFormReturn, UseFormWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Next components

import Link from "next/link";

// Shadcn components

import { Button } from "@/components/ui/button";
import { Step, StepItem, Stepper, useStepper } from "@/components/ui/stepper";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { useToast } from "@/components/ui/use-toast";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

// Icons

import { Calendar as CalendarIcon } from "lucide-react";

// Others

import { AnimatePresence, motion } from "framer-motion";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { registerSchema } from "@/validators/auth";

const steps = [
	{ label: "Bước 1", description: "Thông tin đăng nhập" },
	{ label: "Bước 2", description: "Thông tin cá nhân" },
] satisfies StepItem[];

type Input = z.infer<typeof registerSchema>;

export default function Signup() {
	const { toast, dismiss } = useToast();
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
			dOB: "",
			phone: "",
			email: "",

			street: "",
			city: "",
			province: "",
			country: "",
		},
	});

	function onSubmit(data: Input) {
		console.log(data);
	}

	return (
		<>
			<div className="min-h-screen w-full dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative">
				<div className="w-full lg:grid lg:grid-cols-2 min-h-screen">
					<div className="flex items-center justify-center py-12">
						<div className="mx-auto grid w-[550px] gap-6">
							<AnimatePresence>
								<motion.div
									key="h1Animation"
									initial={{ opacity: 0, y: -100 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ type: "spring", delay: 0.5 }}
									className="grid gap-4 text-center"
								>
									<h1 className="text-3xl font-bold mb-2">
										Signup
									</h1>
								</motion.div>

								<motion.div
									key="formAnimation"
									initial={{ opacity: 0, scale: 0.3 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ type: "spring", delay: 0.5 }}
								>
									<Form {...form}>
										<form
											onSubmit={form.handleSubmit(
												onSubmit
											)}
										>
											<Stepper
												initialStep={0}
												steps={steps}
												className="mb-4"
											>
												{steps.map(
													(stepProps, index) => {
														return (
															<Step
																key={
																	stepProps.label
																}
																{...stepProps}
															>
																{index ===
																	0 && (
																	<div className="grid gap-4">
																		<FormField
																			control={
																				form.control
																			}
																			name="username"
																			rules={{
																				required:
																					true,
																			}}
																			render={({
																				field,
																			}) => (
																				<FormItem className="grid gap-2">
																					<FormLabel
																						htmlFor={field.name.toString()}
																					>
																						Tên
																						đăng
																						nhập
																					</FormLabel>

																					<FormControl>
																						<Input
																							placeholder="Nhập tên đăng nhập"
																							id={field.name.toString()}
																							{...field}
																						/>
																					</FormControl>

																					<FormMessage />
																				</FormItem>
																			)}
																		/>

																		<FormField
																			control={
																				form.control
																			}
																			name="password"
																			rules={{
																				required:
																					true,
																			}}
																			render={({
																				field,
																			}) => (
																				<FormItem className="grid gap-2">
																					<FormLabel
																						htmlFor={field.name.toString()}
																					>
																						Mật
																						khẩu
																					</FormLabel>

																					<FormControl>
																						<Input
																							placeholder="Nhập mật khẩu"
																							id={field.name.toString()}
																							{...field}
																						/>
																					</FormControl>

																					<FormMessage />
																				</FormItem>
																			)}
																		/>

																		<FormField
																			control={
																				form.control
																			}
																			name="repeatPassword"
																			rules={{
																				required:
																					true,
																			}}
																			render={({
																				field,
																			}) => (
																				<FormItem className="grid gap-2">
																					<FormLabel
																						htmlFor={field.name.toString()}
																					>
																						Xác
																						thực
																						mật
																						khẩu
																					</FormLabel>

																					<FormControl>
																						<Input
																							placeholder="Nhập lại mật khẩu"
																							id={field.name.toString()}
																							{...field}
																						/>
																					</FormControl>

																					<FormMessage />
																				</FormItem>
																			)}
																		/>
																	</div>
																)}

																{index ===
																	1 && (
																	<div className="grid gap-4">
																		<div className="grid grid-cols-2 gap-4">
																			<div className="grid gap-2">
																				<FormField
																					control={
																						form.control
																					}
																					name="firstName"
																					rules={{
																						required:
																							true,
																					}}
																					render={({
																						field,
																					}) => (
																						<FormItem className="grid gap-2">
																							<FormLabel
																								htmlFor={field.name.toString()}
																							>
																								Họ
																							</FormLabel>

																							<FormControl>
																								<Input
																									placeholder="Nhập họ"
																									id={field.name.toString()}
																									{...field}
																								/>
																							</FormControl>

																							<FormMessage />
																						</FormItem>
																					)}
																				/>
																			</div>

																			<div className="grid gap-2">
																				<FormField
																					control={
																						form.control
																					}
																					name="lastName"
																					rules={{
																						required:
																							true,
																					}}
																					render={({
																						field,
																					}) => (
																						<FormItem className="grid gap-2">
																							<FormLabel
																								htmlFor={field.name.toString()}
																							>
																								Tên
																							</FormLabel>

																							<FormControl>
																								<Input
																									placeholder="Nhập tên"
																									id={field.name.toString()}
																									{...field}
																								/>
																							</FormControl>

																							<FormMessage />
																						</FormItem>
																					)}
																				/>
																			</div>

																			<div className="grid gap-2">
																				<FormField
																					control={
																						form.control
																					}
																					name="gender"
																					render={({
																						field,
																					}) => (
																						<FormItem className="grid gap-2">
																							<FormLabel
																								htmlFor={field.name.toString()}
																							>
																								Giới
																								tính
																							</FormLabel>

																							<FormControl>
																								<Select
																									onValueChange={
																										field.onChange
																									}
																									defaultValue={
																										field.value
																									}
																								>
																									<SelectTrigger>
																										<SelectValue
																											placeholder="Chọn giới tính"
																											id={field.name.toString()}
																											{...field}
																										/>
																									</SelectTrigger>
																									<SelectContent>
																										{[
																											"Nam",
																											"Nữ",
																										].map(
																											(
																												gender
																											) => {
																												return (
																													<SelectItem
																														value={
																															gender
																														}
																														key={
																															gender
																														}
																													>
																														{
																															gender
																														}
																													</SelectItem>
																												);
																											}
																										)}
																									</SelectContent>
																								</Select>
																							</FormControl>

																							<FormMessage />
																						</FormItem>
																					)}
																				/>
																			</div>

																			<div className="grid gap-2">
																				<FormField
																					control={
																						form.control
																					}
																					name="dOB"
																					rules={{
																						required:
																							true,
																					}}
																					render={({
																						field,
																					}) => (
																						<FormItem className="grid gap-2">
																							<FormLabel
																								htmlFor={field.name.toString()}
																							>
																								Ngày
																								sinh
																							</FormLabel>

																							<FormControl>
																								<Input
																									placeholder="Nhập ngày sinh, VD: 30/11/2004"
																									id={field.name.toString()}
																									{...field}
																								/>
																							</FormControl>

																							<FormMessage />
																						</FormItem>
																					)}
																				/>
																			</div>
																		</div>

																		<div className="grid gap-2">
																			<FormField
																				control={
																					form.control
																				}
																				name="phone"
																				render={({
																					field,
																				}) => (
																					<FormItem className="grid gap-2">
																						<FormLabel
																							htmlFor={field.name.toString()}
																						>
																							Số
																							điện
																							thoại
																						</FormLabel>

																						<FormControl>
																							<Input
																								placeholder="Nhập số điện thoại"
																								id={field.name.toString()}
																								{...field}
																							/>
																						</FormControl>

																						<FormMessage />
																					</FormItem>
																				)}
																			/>
																		</div>

																		<div className="grid gap-2">
																			<FormField
																				control={
																					form.control
																				}
																				name="email"
																				render={({
																					field,
																				}) => (
																					<FormItem className="grid gap-2">
																						<FormLabel
																							htmlFor={field.name.toString()}
																						>
																							Email
																						</FormLabel>

																						<FormControl>
																							<Input
																								placeholder="Nhập email"
																								id={field.name.toString()}
																								{...field}
																							/>
																						</FormControl>

																						<FormMessage />
																					</FormItem>
																				)}
																			/>
																		</div>

																		<div className="grid gap-2">
																			<FormField
																				control={
																					form.control
																				}
																				name="street"
																				render={({
																					field,
																				}) => (
																					<FormItem className="grid gap-2">
																						<FormLabel
																							htmlFor={field.name.toString()}
																						>
																							Đường
																						</FormLabel>

																						<FormControl>
																							<Input
																								placeholder="Nhập đường"
																								id={field.name.toString()}
																								{...field}
																							/>
																						</FormControl>

																						<FormMessage />
																					</FormItem>
																				)}
																			/>
																		</div>

																		<div className="grid gap-2">
																			<FormField
																				control={
																					form.control
																				}
																				name="city"
																				render={({
																					field,
																				}) => (
																					<FormItem className="grid gap-2">
																						<FormLabel
																							htmlFor={field.name.toString()}
																						>
																							Thành
																							phố
																						</FormLabel>

																						<FormControl>
																							<Select
																								onValueChange={
																									field.onChange
																								}
																								defaultValue={
																									field.value
																								}
																							>
																								<SelectTrigger>
																									<SelectValue
																										placeholder="Chọn thành phố"
																										id={field.name.toString()}
																										{...field}
																									/>
																								</SelectTrigger>
																								<SelectContent>
																									{[
																										"Hạ Long",
																										"Uông Bí",
																									].map(
																										(
																											city
																										) => {
																											return (
																												<SelectItem
																													value={
																														city
																													}
																													key={
																														city
																													}
																												>
																													{
																														city
																													}
																												</SelectItem>
																											);
																										}
																									)}
																								</SelectContent>
																							</Select>
																						</FormControl>

																						<FormMessage />
																					</FormItem>
																				)}
																			/>
																		</div>

																		<div className="grid gap-2">
																			<FormField
																				control={
																					form.control
																				}
																				name="province"
																				render={({
																					field,
																				}) => (
																					<FormItem className="grid gap-2">
																						<FormLabel
																							htmlFor={field.name.toString()}
																						>
																							Tỉnh
																							thành
																						</FormLabel>

																						<FormControl>
																							<Select
																								onValueChange={
																									field.onChange
																								}
																								defaultValue={
																									field.value
																								}
																							>
																								<SelectTrigger>
																									<SelectValue
																										placeholder="Chọn tỉnh thành"
																										id={field.name.toString()}
																										{...field}
																									/>
																								</SelectTrigger>
																								<SelectContent>
																									{[
																										"Quảng Ninh",
																									].map(
																										(
																											province
																										) => {
																											return (
																												<SelectItem
																													value={
																														province
																													}
																													key={
																														province
																													}
																												>
																													{
																														province
																													}
																												</SelectItem>
																											);
																										}
																									)}
																								</SelectContent>
																							</Select>
																						</FormControl>

																						<FormMessage />
																					</FormItem>
																				)}
																			/>
																		</div>

																		<div className="grid gap-2">
																			<FormField
																				control={
																					form.control
																				}
																				name="country"
																				render={({
																					field,
																				}) => (
																					<FormItem className="grid gap-2">
																						<FormLabel
																							htmlFor={field.name.toString()}
																						>
																							Quốc
																							gia
																						</FormLabel>

																						<FormControl>
																							<Select
																								onValueChange={
																									field.onChange
																								}
																								defaultValue={
																									field.value
																								}
																							>
																								<SelectTrigger>
																									<SelectValue
																										placeholder="Chọn quốc gia"
																										id={field.name.toString()}
																										{...field}
																									/>
																								</SelectTrigger>
																								<SelectContent>
																									{[
																										"Việt Nam",
																										"Anh",
																										"Pháp",
																									].map(
																										(
																											country
																										) => {
																											return (
																												<SelectItem
																													value={
																														country
																													}
																													key={
																														country
																													}
																												>
																													{
																														country
																													}
																												</SelectItem>
																											);
																										}
																									)}
																								</SelectContent>
																							</Select>
																						</FormControl>

																						<FormMessage />
																					</FormItem>
																				)}
																			/>
																		</div>
																	</div>
																)}
															</Step>
														);
													}
												)}

												<Footer formController={form} />
											</Stepper>
										</form>
									</Form>
								</motion.div>

								<motion.div
									key="existUserAnimation"
									initial={{ opacity: 0, y: 100 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ ease: "easeIn", delay: 0.5 }}
									className="mt-4 text-center text-sm"
								>
									Đã có tài khoản?{" "}
									<Link
										href={"/auth/login"}
										className="underline"
									>
										Đăng nhập ngay
									</Link>
								</motion.div>
							</AnimatePresence>
						</div>
					</div>

					<div className="hidden bg-muted lg:block">
						<Suspense
							fallback={<Skeleton className="h-full w-full" />}
						>
							<motion.img
								initial={{ opacity: 0, x: 100 }}
								animate={{ opacity: 1, x: 0 }}
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

const Footer = ({ formController }: { formController: any }) => {
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
					<Button
						size="sm"
						type="submit"
					>
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
								formController.trigger([
									"username",
									"password",
									"repeatPassword",
								]);

								const usernameState =
									formController.getFieldState("username");
								const passwordState =
									formController.getFieldState("password");
								const repeatPasswordState =
									formController.getFieldState(
										"repeatPassword"
									);

								if (
									!usernameState.isDirty ||
									usernameState.invalid
								)
									return;
								if (
									!passwordState.isDirty ||
									passwordState.invalid
								)
									return;
								if (
									!repeatPasswordState.isDirty ||
									repeatPasswordState.invalid
								)
									return;

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
