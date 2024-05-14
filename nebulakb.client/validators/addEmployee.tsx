import {z} from 'zod'

export const createEmployeeSchema = z.object({
    username: z.string().min(2, {
        message: "Tên đăng nhập phải 2 ký tự trở lên",
    }).max(30, {
        message: "Tối đa là 30 ký tự"
    }).trim().transform((value) => value.toLowerCase()),

    password: z.string()
        .min(8, {
            message: "Mật khẩu phải ít nhất 8 ký tự"
        })
        .refine((value) => /[a-z]/.test(value), {
            message: "Mật khẩu phải chứa ít nhất 1 ký tự chữ thường"
        })
        .refine((value) => /[A-Z]/.test(value), {
            message: "Mật khẩu phải chứa ít nhất 1 ký tự chữ hoa",
        })
        .refine((value) => /[0-9]/.test(value), {
            message: "Mật khẩu phải chứa ít nhất 1 ký tự số",
        }),
    repeatPassword: z.string(),

    firstName: z.string().trim().min(1, {
        message: "Không thể để trống họ"
    }).max(30, {
        message: "Tối đa là 30 ký tự"
    }),

    lastName: z.string().trim().min(1, {
        message: "Không thể để trống tên"
    }).max(30, {
        message: "Tối đa là 30 ký tự"
    }),

    gender: z.string().trim().min(1, {
        message: "Vui lòng chọn giới tính"
    }),

    doB: z.date({
        required_error: "Mục ngày sinh là bắt buộc"
    }),

    phone: z.string().trim().min(10, {
        message: "Số điện thoại phải ít nhất 10 số"
    }).max(10, {
        message: "Số điện thoại chỉ có tối đa 10 số"
    }),

    email: z.string().email().trim().min(1, {
        message: "Email không được để trống"
    }),

    optIn: z.date({
        required_error: "Mục ngày vào làm là bắt buộc"
    }),

    optOut: z.date(),

    // Address info

    street: z.string().trim().min(1, {
        message: "Mục này không được để trống"
    }),

    wards: z.string().trim().min(1, {
        message: "Mục này không thể để trống"
    }),

    district: z.string().trim().min(1, {
        message: "Mục này không thể để trống"
    }),

    province: z.string().trim().min(1, {
        message: "Không thể để trống tỉnh thành"
    }),
}).refine((data) => data.password === data.repeatPassword, {
    message: "Xác thực mật khẩu không khớp",
    path: ["repeatPassword"]
});