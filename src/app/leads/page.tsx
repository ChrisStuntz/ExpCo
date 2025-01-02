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
import { getAllLeads, getCategoryLeads } from "~/server/queries";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@radix-ui/react-collapsible";

export default async function LeadsPage() {
    const jukrosLeads = await getCategoryLeads("Jukros")
    const jukrosData: Lead[] = [...jukrosLeads.values()]
    const acaLeads = await getCategoryLeads("Acamaya")
    const acaData: Lead[] = [...acaLeads.values()]
    const korhasLeads = await getCategoryLeads("Korhas")
    const korhasData:  Lead[] = [...korhasLeads.values()]
    const druidLeads = await getCategoryLeads("Druids")
    const druidData:  Lead[] = [...druidLeads.values()]
    return (
        <main className="flex min-h-screen flex-col items-center justify-center">
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-4">
                <Collapsible>
                  <CollapsibleTrigger>Jukros</CollapsibleTrigger>
                  <CollapsibleContent>
                    <DataTable columns={leadsColumns} data={jukrosData} />
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible>
                  <CollapsibleTrigger>Acamaya</CollapsibleTrigger>
                  <CollapsibleContent>
                    <DataTable columns={leadsColumns} data={acaData} />
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible>
                  <CollapsibleTrigger>Druids</CollapsibleTrigger>
                  <CollapsibleContent>
                    <DataTable columns={leadsColumns} data={druidData} />
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible>
                  <CollapsibleTrigger>Korhas</CollapsibleTrigger>
                  <CollapsibleContent>
                    <DataTable columns={leadsColumns} data={korhasData} />
                  </CollapsibleContent>
                </Collapsible>
            </div>
        </main>
    )
}
