// Run this file `bun ./server/db/seed/...`

import { generateMock } from "@anatine/zod-mock";
import { expenses, insertExpense } from "../schema/expense";
import { db } from "../client";

let values_to_insert = [];
for (let i = 0; i < 500; i++) {
  const mock = generateMock(insertExpense);
  mock.id = i;
  values_to_insert.push(mock);
}

const query = db.insert(expenses).values(values_to_insert).prepare();
query.run();
