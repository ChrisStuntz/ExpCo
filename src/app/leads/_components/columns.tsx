"use client"
import { Badge } from "~/components/ui/badge"
import { ColumnDef, createColumnHelper } from "@tanstack/react-table"

export type Lead = {
    id: number
    name: string
    status: string
    type: string
    session: string
    session_id: string
    description: string
    location: string
}

function stringToArray(str: string) {
  return str.split(",")
}

export const leadsColumnHelper = createColumnHelper<Lead>();

export const leadsColumns: ColumnDef<Lead>[] = [
  {
      accessorKey: "name",
      header: "Name",
  },
  {
      accessorKey: "status",
      header: "Status",
  },
  {
      accessorKey: "type",
      header: "Tags",
      cell: ({ row }) => {
        const lead = row.original
        const tags = stringToArray(lead.type)
        return (
          <div className="flex flex-col">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="mr-2">
                {tag}
              </Badge>
            ))}
          </div>
        )
      },
  },
  {
      accessorKey: "session",
      header: "Session",
      cell: ({ row }) => {
        const lead = row.original
        return (
          <a href={lead.session}>
            {lead.session_id}
          </a>
        )
      },
  },
  {
      accessorKey: "description",
      header: "Description",
  },
  {
      accessorKey: "location",
      header: "Location",
  },
]
