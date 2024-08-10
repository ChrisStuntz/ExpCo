import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "~/components/ui/table"

import Link from 'next/link';
import { SignedIn } from "@clerk/nextjs";
import { DataTable } from "./_components/data-table";
import { Lead, leadsColumns } from "./_components/columns";
import { getAllLeads } from "~/server/queries";

async function getLeads(): Promise<Lead[]> {
    return [
        {
            id: 1,
            name: "More Rituals",
            description: "Once we craft more ritual objects and learn more layouts, we can perform different rituals in Agir's temple",
            session: "https://bookstack.kronia.dev/books/player-notes/page/session-19-whats-your-star-sign",
            session_id: "19",
            status: "Active",
            type: "Repeatable",
            location: "Agir's Temple",
        },
        {
            id: 2,
            name: "The Acamaya",
            description: "Othli mentioned that there are a great deal of Acamaya ruins where knowledge may be hidden for safekeeping. He also pointed out that the seat of Acamaya's power lies west across the bay. Downtime Action Needed: Some time will need to be spent studying the map, and/or talking with Othli to uncover potential hexes/areas to pursue and investigate",
            session: "https://bookstack.kronia.dev/books/player-notes/page/session-2-amazing-ritual-site-book-your-trip-today",
            session_id: "2",
            status: "Active",
            type: "Exploration,Battle,Resource",
            location: "NW",
        }
    ]
}
export default async function LeadsPage() {
    const dbdata = await getAllLeads();
    const data: Lead[] = [...dbdata.values()]
    return (
        <main className="flex min-h-screen flex-col items-center justify-center">
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-4">
                <DataTable columns={leadsColumns} data={data} />
            </div>
        </main>
    )
}