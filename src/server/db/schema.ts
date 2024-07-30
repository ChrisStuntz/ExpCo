// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  integer,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `expco_${name}`);

export const posts = createTable(
  "post",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date()
    ),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  })
);

export const players = createTable(
  "player",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }),
    discord_name: varchar('discord_name', { length: 256 }),
  },
  (example) => ({
    playerIndex: index("player_idx").on(example.name),
  })
);

export const characters = createTable(
  "character",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }),
    player_name: varchar("name", {length: 256 }),
    ancestry: varchar("ancestry", { length: 256 }),
    heritate: varchar('heritate', { length: 256 }),
    background: varchar('background', { length: 256 }),
    class: varchar("class", { length: 256 }),
    subclass: varchar("subclass", { length: 256 }),
    level: integer('level'),
    xp: integer('xp'),
  },
  (example) => ({
    characterIndex: index("character_idx").on(example.name),
  })
);

export const tasks = createTable(
  "task",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }).notNull(),
    skills: varchar("skills", { length: 256 }).notNull(),
    task_dc: integer("task_dc").notNull(),
    total_points: integer("total_points").notNull(),
    points_remaining: integer("points_remaining").notNull(),
  },
  (example) => ({
    taskIndex: index("task_idx").on(example.name),
  })
);