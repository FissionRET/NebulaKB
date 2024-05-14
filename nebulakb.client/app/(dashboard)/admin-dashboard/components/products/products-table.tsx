"use client";

import axios from "axios";
import {useEffect, useState} from "react";
import {columns, Products} from "@/app/(dashboard)/admin-dashboard/components/products/columns"
import {DataTable} from "@/app/(dashboard)/admin-dashboard/components/products/data-table"

export default function ProductsTable() {
    const [data, setData] = useState<Products[]>([]);

    const getData = async () => {
        const resp = await axios.get<Products[]>("http://localhost:1337/product/getAll", {
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