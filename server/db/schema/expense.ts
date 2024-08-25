import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { users } from "./user";

export const expenses = sqliteTable("expenses", {
  id: text("id").notNull().primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  amount: integer("amount").notNull(),
  detail: text("detail").notNull(),
  date: text("date").notNull(),

  created_at: text("created_at")
    .notNull()
    .default(sql`(current_timestamp)`),
});
