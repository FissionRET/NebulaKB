"use client";

import axios from "axios";
import {useEffect, useState} from "react";
import {DataTable} from "@/app/(dashboard)/admin-dashboard/components/customers/data-table"
import {columns, Customers} from "@/app/(dashboard)/admin-dashboard/components/customers/columns";

export default function CustomersTable() {
    const [data, setData] = useState<Customers[]>([]);

    const getData = async () => {
        const resp = await axios.get<Customers[]>("http://localhost:1337/customer/getAll", {
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