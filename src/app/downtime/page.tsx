import { getAllTasks } from "~/server/queries";
import { Task, columns } from "./columns"
import { DataTable } from "./data-table"
import { InputForm } from "./InputForm";

export const dynamic = "force-dynamic"

export default async function DowntimePage() {
    const dbdata = await getAllTasks();
    const data: Task[] = [...dbdata.values()]
    return (
        <main className="flex min-h-screen flex-col items-center justify-center">
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-4">
                <div className="container mx-auto py-10">
                    <DataTable columns={columns} data={data} />
                </div>
            </div>
        </main>
    )
}