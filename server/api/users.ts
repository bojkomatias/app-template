import { Hono } from "hono";
import { db } from "../db/client";
import { users } from "../db/schema/user";
import { Context } from "../lib/context";
import { User } from "lucia";

export const usersApi = new Hono<Context>()
  .get("current-user", async (c) => {
    const user = c.get("user");
    return c.json(user as User, 200);
  })
  .get("users", async (c) => {
    const data = await db.select().from(users);
    return c.json(data, 200);
  });
