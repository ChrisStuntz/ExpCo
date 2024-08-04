"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "~/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form"

import { Input } from "~/components/ui/input"
import { CreateNewTask } from "./_components/queries"
import { useRouter } from "next/navigation"
import { DialogFooter, DialogTrigger } from "~/components/ui/dialog"
import React, { useState } from "react"

const FormSchema = z.object({
  name: z.string().min(1, {
    message: "Task Name must be at least 1 character.",
  }),
  skills: z.string().min(1, {
    message: "Skills must be at least 1 character.",
  }),
  task_dc: z.number().positive(),
  total_points: z.number().positive(),
})
  
export function InputForm() {
  const router = useRouter();

  const [open, setOpen] = useState(false)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      skills: "",
      task_dc: 0,
      total_points: 0,
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    await CreateNewTask(
      data.name,
      data.skills,
      data.task_dc,
      data.total_points,
    )
    console.log("Submitted new task")
    setOpen(false)
    router.refresh()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">Task Name</FormLabel>
              <FormControl>
                <Input className="text-black" {...field} />
              </FormControl>
              <FormDescription>Task name</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="skills"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">Skills</FormLabel>
              <FormControl>
                <Input className="text-black" {...field} />
              </FormControl>
              <FormDescription>Valid skills</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="task_dc"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">Task DC</FormLabel>
              <FormControl>
                <Input type="number" className="text-black" {...field} onChange={(event) => field.onChange(Number(event.target.value))} />
              </FormControl>
              <FormDescription>DC of the Task</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="total_points"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">Total Points</FormLabel>
              <FormControl>
                <Input type="number" className="text-black" {...field} onChange={(event) => field.onChange(Number(event.target.value))} />
              </FormControl>
              <FormDescription>Total points required for the task</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <DialogTrigger asChild>
          <Button type="submit">Submit</Button>
        </DialogTrigger>
      </form>
    </Form>
  )
}