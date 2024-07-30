import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "~/components/ui/table"
  
  import { Task, columns } from "./columns"
  import { DataTable } from "./data-table"

  async function getData(): Promise<Task[]> {
    return [
        {
          id: 1,
          name: "Build Quarry",
          skills: "Athletics, Crafting",
          dc: 15,
          total_points: 25,
          points_remaining: 8,
        },
        {
          id: 2,
          name: "Study Notes",
          skills: "Arcana, Occultism",
          dc: 20,
          total_points: 40,
          points_remaining: 34,
        },
        {
          id: 3,
          name: "Razdius Manual",
          skills: "Religion, Acamaya Lore",
          dc: 22,
          total_points: 60,
          points_remaining: 23
        },
      ]
}

export default async function DowntimePage() {
    const data = await getData()

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