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

import { Checkbox } from "~/components/ui/checkbox"
import { Input } from "~/components/ui/input"
import { useRouter } from "next/navigation"
import { DialogFooter, DialogTrigger } from "~/components/ui/dialog"
import React, { useState } from "react"
import { CreateLead } from "./queries"
import { leadTypes } from "../data/data"

const FormSchema = z.object({
  name: z.string().min(1, {
    message: "Task Name must be at least 1 character.",
  }),
  description: z.string().min(1, {
    message: "Lead Description must be at least 1 character.",
  }),
  status: z.string().min(1, {
    message: "Lead Status must be at least 1 character.",
  }),
  session: z.string().min(1, {
    message: "Session must be at least 1 character.",
  }),
  session_id: z.string().min(1, {
    message: "Session ID must be at least 1 character.",
  }),
  location: z.string().min(1, {
    message: "Location must be at least 1 character.",
  }),
  type: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
})

function arrayToString(arr: string[]) {
  return arr.join(",")
}

export function InputForm() {
  const router = useRouter();

  const [open, setOpen] = useState(false)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      description: "",
      status: "Active",
      type: ["Exploration"],
      session: "",
      session_id: "",
      location: "",
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    await CreateLead(
      data.name,
      data.status,
      arrayToString(data.type),
      data.session,
      data.session_id,
      data.description,
      data.location,
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
              <FormLabel className="text-black">Lead Name</FormLabel>
              <FormControl>
                <Input className="text-black" {...field} />
              </FormControl>
              <FormDescription>Lead name</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">Description</FormLabel>
              <FormControl>
                <Input className="text-black" {...field} />
              </FormControl>
              <FormDescription>Lead Description</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="session"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">Session Link</FormLabel>
              <FormControl>
                <Input className="text-black" {...field} />
              </FormControl>
              <FormDescription>Link to the session this lead came from</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="session_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">Session ID</FormLabel>
              <FormControl>
                <Input className="text-black" {...field} />
              </FormControl>
              <FormDescription>Session number</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">Location</FormLabel>
              <FormControl>
                <Input className="text-black" {...field} />
              </FormControl>
              <FormDescription>General location of the lead</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={() => (
            <FormItem>
              <div>
                <FormLabel className="text-black">Type</FormLabel>
                <FormDescription>
                  Select the types of lead you want to create
                </FormDescription>
              </div>
              {leadTypes.map((item) => (
                <FormField
                  key={item.label}
                  control={form.control}
                  name="type"
                  render={({ field }) => {
                    return (
                      <FormItem key={item.label} className="flex flex-row text-black items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.label)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.label])
                                : field.onChange(
                                  field.value?.filter(
                                    (value) => value !== item.label
                                  )
                                )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          <div className="flex">
                            <item.icon className="mr-2 h-5 w-5" />
                            {item.label}
                          </div>
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
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