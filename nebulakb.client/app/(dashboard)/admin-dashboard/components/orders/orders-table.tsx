import {DataTable} from "@/app/(dashboard)/admin-dashboard/components/orders/data-table"
import {columns, Orders} from "@/app/(dashboard)/admin-dashboard/components/orders/columns";
import {generateRandomString} from "@/lib/utils";

function getData(): Orders[] {
    // Fetch data from server later, now data for testing is placed here

    return [
        {
            id: generateRandomString(6),
            customer: "Tuấn Khôi\nhelloworld@gmail.com",
            product: "Gateron Unicorn / 10pcs",
            status: "Hoàn thành",
            createdAt: new Date().toLocaleDateString(),
            amount: 80,
            total: "6.303.663"
        },
        {
            id: generateRandomString(6),
            customer: "Quang Sáng\nquangsang.red@gmail.com",
            product: "Gateron Melodic / 10pcs",
            status: "Hoàn thành",
            createdAt: new Date().toLocaleDateString(),
            amount: 100,
            total: "7.564.396"
        },
    ]
}

export default function OrdersTable() {
    const data = getData();

    return (
        <DataTable columns={columns} data={data}/>
    )
}