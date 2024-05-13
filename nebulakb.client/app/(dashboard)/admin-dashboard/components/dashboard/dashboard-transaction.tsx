import {DataTable} from "@/app/(dashboard)/admin-dashboard/components/dashboard/data-table"
import {columns, Transaction} from "@/app/(dashboard)/admin-dashboard/components/dashboard/columns";
import {generateRandomString} from "@/lib/utils";

function getData(): Transaction[] {
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
    ]
}

export default function TransactionTable() {
    const data = getData();

    return (
        <DataTable columns={columns} data={data}/>
    )
}