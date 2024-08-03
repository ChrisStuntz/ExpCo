"use server"

import { db } from "~/server/db"
import { tasks } from "~/server/db/schema"

export async function CreateNewTask(task_name: string, task_skills: string, dc: number, points: number): Promise<number> {
    const result = await db.insert(tasks).values({
        name: task_name,
        skills: task_skills,
        task_dc: dc,
        total_points: points,
        points_remaining: points,
    })

    return Number(result.rowCount);

}