import { Task, columns } from "./columns"
import { DataTable } from "./data-table"
import { db } from "~/server/db"

export const dynamic = "force-dynamic"

export default async function DowntimePage() {
    // const data = await getData()
    const dbdata = await db.query.tasks.findMany();
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