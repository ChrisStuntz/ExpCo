import "server-only"

import { db } from "./db"

export async function getAllTasks() {
    return db.query.tasks.findMany();
}

export async function getAllLeads() {
    return db.query.leads.findMany();
}