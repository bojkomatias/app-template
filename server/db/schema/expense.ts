import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { users } from "./user";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const expenses = sqliteTable("expenses", {
  id: integer("id").notNull().primaryKey({ autoIncrement: true }),
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

export const selectExpense = createSelectSchema(expenses);
export const insertExpense = createInsertSchema(expenses);

export type Expense = typeof expenses.$inferSelect;
