import { DataTable } from "@/app/(dashboard)/admin-dashboard/components/customers/data-table"
import {Customers, columns} from "@/app/(dashboard)/admin-dashboard/components/customers/columns";
import {generateRandomString} from "@/lib/utils";

function getData(): Customers[] {
    // Fetch data from server later, now data for testing is placed here
    
    return [
        {
            id: generateRandomString(6),
            customer: "Phạm Tuấn Khôi",
            email: "helloworld@gmail.com",
            gender: "Nam",
            DoB: "30/11/2004",
            phone: "0865005719",
            address: "Số 12, Tổ 3, Khu 4, Phường Trần Hưng Đạo",
            rank: "Kim cương",
            point: 666
        },
    ]
}

export default function CustomersTable() {
    const data = getData();

    return (
        <DataTable columns={columns} data={data}/>
    )
}