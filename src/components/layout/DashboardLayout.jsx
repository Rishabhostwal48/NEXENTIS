import Sidebar from "./Sidebar";

export default function DashboardLayout({children}){
    return(
        <div className="flex min-h-screen bg-neutral-50 dark:bg-neutral-950">
            <Sidebar/>
            <div className="flex-1 min-h-screen">
                <main className="max-w-7xl mx-auto">
                    {children}
                </main>
            </div>
        </div>
    )
}
