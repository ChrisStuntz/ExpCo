"use client"
import { Badge } from "~/components/ui/badge"
import { ColumnDef, createColumnHelper } from "@tanstack/react-table"
import { leadTypes } from "../data/data"

import {
    CrumpledPaperIcon,
    GlobeIcon,
    HobbyKnifeIcon,
    MagnifyingGlassIcon,
    QuestionMarkCircledIcon,
    ReloadIcon
} from "@radix-ui/react-icons"

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
        const typeIcons = tags.map((tag) => leadTypes.find((type) => type.label === tag))
        return (
          <div className="flex flex-col">
            {typeIcons.map((tag) => (
              <div className="flex">
                <tag.icon className="mr-2 h-5 w-5" />
                {tag.label}
              </div>
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
