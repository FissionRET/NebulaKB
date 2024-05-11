import {DataTable} from "@/app/(dashboard)/admin-dashboard/components/employees/data-table"
import {generateRandomString} from "@/lib/utils";
import {Employees, columns} from "@/app/(dashboard)/admin-dashboard/components/employees/columns";

function getData(): Employees[] {
    // Fetch data from server later, now data for testing is placed here

    return [
        {
            id: generateRandomString(6),
            employee: "Phạm Tuấn Khôi",
            email: "helloworld@gmail.com",
            gender: "Nam",
            DoB: "2004-11-30",
            phone: "0865005719",
            address: "Số 12, Tổ 3, Khu 4, Phường Trần Hưng Đạo",
            optIn: new Date().toLocaleDateString(),
            optOut: new Date().toLocaleDateString()
        },
    ]
}

export default function EmployeesTable() {
    const data = getData();

    return (
        <DataTable columns={columns} data={data}/>
    )
}