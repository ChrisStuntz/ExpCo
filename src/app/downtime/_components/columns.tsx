"use client"

import { Delete, MoreHorizontal } from "lucide-react"

import { ColumnDef, createColumnHelper } from "@tanstack/react-table"
import { Button } from "~/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import { SignedIn } from "@clerk/nextjs"
import { DeleteTask } from "./queries"

export type Task = {
    id: number
    name: string
    skills: string
    task_dc: number
    total_points: number
    points_remaining: number
}

const columnHelper = createColumnHelper<Task>();

export const columns: ColumnDef<Task>[] = [
  {
      accessorKey: "name",
      header: "Name",
  },
  {
      accessorKey: "skills",
      header: "Skills",
  },
  {
      accessorKey: "task_dc",
      header: "Task DC",
  },
  {
      accessorKey: "total_points",
      header: "Total Points",
  },
  {
      accessorKey: "points_remaining",
      header: "Points Remaining",
      filterFn: 'inNumberRange',
      meta: {
        type: "number",
      },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const task = row.original
  
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(task.name)}
            >
              Copy Task Name
            </DropdownMenuItem>
            <SignedIn>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem onClick={() =>
              DeleteTask(task.name)
            }>Delete</DropdownMenuItem>
            </SignedIn>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]