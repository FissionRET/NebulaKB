import { z } from 'zod'

export const registerSchema = z.object({
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

    gender: z.string(),

    dOB: z.string().refine((value) => /(?:(?:(?:0?[13578]|1[02])(\/|-|\.)31)\1|(?:(?:0?[1,3-9]|1[0-2])(\/|-|\.)(?:29|30)\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:0?2(\/|-|\.)29\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:(?:0?[1-9])|(?:1[0-2]))(\/|-|\.)(?:0?[1-9]|1\d|2[0-8])\4(?:(?:1[6-9]|[2-9]\d)?\d{2})/.test(value), {
        message: "Ngày sinh không đúng định dạng"
    }),

    phone: z.string().trim().min(10).max(10, {
        message: "Số điện thoại không hợp lệ"
    }),

    email: z.string().email().trim().min(1, {
        message: "Không thể để trống email"
    }),

    // Address info

    street: z.string().trim().min(1, {
        message: "Không thể để trống phố"
    }),

    city: z.string().trim().min(1, {
        message: "Không thể để trống thành phố"
    }),

    province: z.string().trim().min(1, {
        message: "Không thể để trống tỉnh thành"
    }),

    country: z.string().trim().min(1, {
        message: "Không thể để trống quốc gia"
    }),
}).refine((data) => data.password === data.repeatPassword, {
    message: "Xác thực mật khẩu không khớp",
    path: ["repeatPassword"]
});