import {columns, Products} from "@/app/(dashboard)/admin-dashboard/components/products/columns"
import {DataTable} from "@/app/(dashboard)/admin-dashboard/components/products/data-table"
import {generateRandomString} from "@/lib/utils";

function getData(): Products[] {
    // Fetch data from server later, now data for testing is placed here

    return [
        {
            id: generateRandomString(6),
            images: "/imgs/switches/gateron-unicorn.png",
            name: "Gateron Unicorn / 10pcs",
            des: "Type: Linear 5-pin Switch\n" +
                "Spring: 18mm Dual-Stage Spring \n" +
                "Force: Operating 50g, Bottom 63g\n" +
                "Stem: POM (colour: Baby Unicorn Blue)\n" +
                "Top Housing: Transparent Polycarbonate (colour: Unicorn Poop Purple)\n" +
                "Bottom Housing: Nylon (Color: Cream Unicorn PinkleBerry)\n" +
                "Lightly pre-lubed from the factory  to tame the unicorn",
            price: "171,630 VNĐ",
            stock: 190,
            data: "",
            category: "Switches"
        },
        {
            id: generateRandomString(6),
            images: "/imgs/switches/gateron-unicorn.png",
            name: "Gateron Melodic / 10pcs",
            des: "Type: Linear 5-pin Switch\n" +
                "Spring: 18mm Dual-Stage Spring \n" +
                "Force: Operating 50g, Bottom 63g\n" +
                "Stem: POM (colour: Baby Unicorn Blue)\n" +
                "Top Housing: Transparent Polycarbonate (colour: Unicorn Poop Purple)\n" +
                "Bottom Housing: Nylon (Color: Cream Unicorn PinkleBerry)\n" +
                "Lightly pre-lubed from the factory  to tame the unicorn",
            price: "150,000 VNĐ",
            stock: 145,
            data: "",
            category: "Switches"
        }
    ]
}

export default function ProductsTable() {
    const data = getData();

    return (
        <DataTable columns={columns} data={data}/>
    )
}