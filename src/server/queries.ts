import "server-only"

import { db } from "./db"

export async function getAllTasks() {
    return db.query.tasks.findMany();
}