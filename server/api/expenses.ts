import { Hono } from "hono";
import { Context } from "../lib/context";
import { db } from "../db/client";
import { expenses } from "../db/schema/expense";
import { asc, count, getTableColumns, sql } from "drizzle-orm";

const PAGE_SIZE = 10;

export const expensesApi = new Hono<Context>().get("expenses", async (c) => {
  const { page } = c.req.query();

  const [{ totalRecords }] = await db
    .select({ totalRecords: count(expenses.id) })
    .from(expenses);

  const result = await db
    .select()
    .from(expenses)
    .orderBy(asc(expenses.id))
    .limit(PAGE_SIZE) // the number of rows to return
    .offset(page ? parseInt(page) * PAGE_SIZE : 0); // the number of rows to skip

  return c.json(
    {
      data: result,
      nextPage: parseInt(page) + 1,
      totalRecords,
    },
    200,
  );
});
