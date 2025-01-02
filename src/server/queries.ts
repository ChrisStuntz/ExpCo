import "server-only"

import { eq } from "drizzle-orm"
import { db } from "./db"

export async function getAllTasks() {
    return db.query.tasks.findMany();
}

export async function getAllLeads() {
    return db.query.leads.findMany();
}

export async function getCategoryLeads(c: string) {
  return db.query.leads.findMany({
    where: (leads, { eq }) => (eq(leads.category, c))
  })
}
