/**
 * v0 by Vercel.
 * @see https://v0.dev/t/TCK0jrUfaa3
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import * as React from "react"
import { Button } from "~/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "~/components/ui/table"
import { Input } from "~/components/ui/input"

export default function Component() {
  const [data, setData] = React.useState([
    { id: 1, name: "John Doe", email: "john@example.com", phone: "555-1234" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "555-5678" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", phone: "555-9012" },
  ])
  const [editingRowId, setEditingRowId] = React.useState(null)
  const handleEdit = (id) => {
    setEditingRowId(id)
  }
  const handleSave = (id, updatedData) => {
    setData((prevData) => prevData.map((row) => (row.id === id ? { ...row, ...updatedData } : row)))
    setEditingRowId(null)
  }
  const handleAdd = () => {
    const newRow = { id: data.length + 1, name: "", email: "", phone: "" }
    setData((prevData) => [...prevData, newRow])
    setEditingRowId(newRow.id)
  }
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Contacts</h1>
        <Button onClick={handleAdd}>Add</Button>
      </div>
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead className="w-[100px]" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                {editingRowId === row.id ? (
                  <>
                    <TableCell>
                      <Input defaultValue={row.name} className="text-black" onBlur={(e) => handleSave(row.id, { name: e.target.value })} />
                    </TableCell>
                    <TableCell>
                      <Input defaultValue={row.email} className="text-black" onBlur={(e) => handleSave(row.id, { email: e.target.value })} />
                    </TableCell>
                    <TableCell>
                      <Input defaultValue={row.phone} className="text-black" onBlur={(e) => handleSave(row.id, { phone: e.target.value })} />
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          handleSave(row.id, {
                            name: row.name,
                            email: row.email,
                            phone: row.phone,
                          })
                        }
                      >
                        Save
                      </Button>
                    </TableCell>
                  </>
                ) : (
                  <>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.phone}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm" onClick={() => handleEdit(row.id)}>
                        Edit
                      </Button>
                    </TableCell>
                  </>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}