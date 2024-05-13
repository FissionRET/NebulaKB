import {Toaster} from "@/components/ui/toaster";

export default function ActionsLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div
            className="flex min-h-screen w-full flex-col bg-muted/40 dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] p-10">
            {children}

            <Toaster/>
        </div>
    );
}