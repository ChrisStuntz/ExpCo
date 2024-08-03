"use client"
 
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "~/components/ui/dialog"
 
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table"

import { Button } from "~/components/ui/button"
import { Checkbox } from "~/components/ui/checkbox"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import React, { useState } from "react"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
  }

  export function DataTable<TData, TValue>({
    columns,
    data,
  }: DataTableProps<TData, TValue>) {

    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        [
            {
                id: 'points_remaining',
                value: [1,100],
            },
        ]
    )

    const [editedRows, setEditedRows] = React.useState({})

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            columnFilters,
        },
        meta: {
            editedRows,
            setEditedRows,
        }
    })

    return (
        <div>
        <div className="flex items-center py-4 space-x-2">
            <Input
            placeholder="Filter Name..."
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
                table.getColumn("name")?.setFilterValue(event.target.value)
            }
            className="max-w-sm text-black"
            />
            <Checkbox id="isCompleted" 
                onCheckedChange={(checked) => {
                    checked
                        ? table.setColumnFilters([
                            {
                                id: 'points_remaining',
                                value: [0,100],
                            }
                        ])
                        : table.setColumnFilters([
                            {
                                id: 'points_remaining',
                                value: [1,100],
                            },
                        ])
                }}
            />
            <label htmlFor="isCompleted">
                Show Completed?
            </label>
      </div>
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                         ? null
                                         : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                         )}
                                    </TableHead>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No Results
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline" className="text-black">Add New Task</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                    <DialogTitle>New Task Info</DialogTitle>
                    <DialogDescription>
                        You need to fill out all fields for it to be saved
                    </DialogDescription>
                    </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-black text-right">
                                    Task Name
                                </Label>
                                <Input id="name" className="col-span-3 text-black" />
                            </div>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="skills" className="text-black text-right">
                                        Skills
                                    </Label>
                                    <Input id="skills" className="col-span-3 text-black" />
                                </div>
                            </div>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="task-dc" className="text-black text-right">
                                        Task DC
                                    </Label>
                                    <Input id="task-dc" className="col-span-3 text-black" />
                                </div>
                            </div>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="tot-points" className="text-black text-right">
                                        Total Points
                                    </Label>
                                    <Input id="tot-points" className="col-span-3 text-black" />
                                </div>
                            </div>
                        </div>
                    <DialogFooter>
                        <Button type="submit">Save Task</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
        </div>
    )
  }