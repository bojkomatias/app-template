import { sql } from "drizzle-orm";
import { text } from "drizzle-orm/sqlite-core";
import { integer } from "drizzle-orm/sqlite-core";
import { sqliteTable } from "drizzle-orm/sqlite-core";
import { createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const users = sqliteTable("users", {
  id: text("id").notNull().primaryKey(),
  github_id: integer("github_id").notNull().unique(),
  username: text("username").notNull(),
  email: text("email"),
  name: text("name"),
  avatar_url: text("avatar_url"),

  created_at: text("created_at")
    .notNull()
    .default(sql`(current_timestamp)`),
});

export const selectUser = createSelectSchema(users);

export type DatabaseUser = z.infer<typeof selectUser>;
