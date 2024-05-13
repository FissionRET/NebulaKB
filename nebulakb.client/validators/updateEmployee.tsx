import {z} from 'zod'

export const updateSchema = z.object({
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
        required_error: "Mục ngày sinh là bắt buộc"
    }),

    optOut: z.date({
        required_error: "Mục ngày sinh là bắt buộc"
    }),    

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
})