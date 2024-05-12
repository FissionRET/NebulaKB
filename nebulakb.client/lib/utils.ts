import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function generateRandomString(length: number) {
    return Math.random().toString(20).substr(2, length)
}

export function formatPrice(
    price: number | string,
    options: Intl.NumberFormatOptions = {}
) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: options.currency ?? "USD",
        notation: options.notation ?? "compact",
        ...options,
    }).format(Number(price))
}

export function truncate(str: string, length: number) {
    return str.length > length ? `${str.substring(0, length)}...` : str
}