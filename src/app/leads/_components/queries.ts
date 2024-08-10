"use server"

import { eq } from "drizzle-orm";
import { db } from "~/server/db"
import { leads } from "~/server/db/schema"

export async function CreateLead(
    lead_name: string, 
    lead_status: string, 
    lead_type: string, 
    lead_session: string, 
    lead_session_id: string,
    lead_description: string, 
    lead_location: string
): Promise<number> {
    const result = await db.insert(leads).values({
        name: lead_name,
        status: lead_status,
        type: lead_type,
        session: lead_session,
        session_id: lead_session_id,
        description: lead_description,
        location: lead_location,
    })

    return Number(result.rowCount);
}

export async function DeleteLead(lead_name: string) {
    await db.delete(leads).where(eq(leads.name, lead_name)).returning();
}