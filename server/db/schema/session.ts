import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { users } from "./user";

export const sessions = sqliteTable("sessions", {
  id: text("id").notNull().primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  expiresAt: integer("expires_at").notNull(),
});
