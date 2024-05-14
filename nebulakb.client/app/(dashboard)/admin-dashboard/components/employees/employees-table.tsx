"use client";

import axios from "axios";
import {useEffect, useState} from "react";
import {DataTable} from "@/app/(dashboard)/admin-dashboard/components/employees/data-table"
import {columns, Employees} from "@/app/(dashboard)/admin-dashboard/components/employees/columns";

export default function EmployeesTable() {
    const [data, setData] = useState<Employees[]>([]);

    const getData = async () => {
        const resp = await axios.get<Employees[]>("http://localhost:1337/employee/getAll", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })

        setData(resp.data);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <DataTable columns={columns} data={data}/>
    )
}