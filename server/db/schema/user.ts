import { text } from "drizzle-orm/sqlite-core";
import { integer } from "drizzle-orm/sqlite-core";
import { sqliteTable } from "drizzle-orm/sqlite-core";
import { createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const users = sqliteTable("user", {
  id: text("id").notNull().primaryKey(),
  github_id: integer("github_id").notNull().unique(),
  username: text("username").notNull(),
  email: text("email"),
  name: text("name"),
  avatar_url: text("avatar_url"),
});

export const selectUser = createSelectSchema(users);

export type DatabaseUser = z.infer<typeof selectUser>;
