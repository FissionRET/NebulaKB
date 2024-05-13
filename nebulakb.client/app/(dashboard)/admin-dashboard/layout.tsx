import {DashboardHeader} from "@/app/(dashboard)/admin-dashboard/components/header";
import {Toaster} from "@/components/ui/toaster";

export default function AdminDashboardLayout() {
    return (
        <>
            <DashboardHeader/>

            <Toaster/>
        </>
    );
}