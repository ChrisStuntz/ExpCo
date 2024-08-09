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
  
export default function LeadsPage() {
    const leadsList = [
        {
            id: 1,
            name: "More Rituals",
            description: "Once we craft more ritual objects and learn more layouts, we can perform different rituals in Agir's temple",
            session_link: "https://bookstack.kronia.dev/books/player-notes/page/session-19-whats-your-star-sign",
            session_id: 19,
        },
        {
            id: 2,
            name: "The Acamaya",
            description: "Othli mentioned that there are a great deal of Acamaya ruins where knowledge may be hidden for safekeeping. He also pointed out that the seat of Acamaya's power lies west across the bay. Downtime Action Needed: Some time will need to be spent studying the map, and/or talking with Othli to uncover potential hexes/areas to pursue and investigate",
            session_link: "https://bookstack.kronia.dev/books/player-notes/page/session-2-amazing-ritual-site-book-your-trip-today",
            session_id: 2,
        }
    ]
    return (
        <main className="flex min-h-screen flex-col items-center justify-center">
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-4">
                <Table>
                    <TableCaption>List of Current Leads</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Sessions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {leadsList.map((lead) => (
                            <TableRow key={lead.id}>
                                <TableCell>{lead.name}</TableCell>
                                <TableCell>{lead.description}</TableCell>
                                <TableCell><Link href={lead.session_link}>{lead.session_id}</Link></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </main>
    )
}