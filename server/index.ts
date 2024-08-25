import { Hono } from "hono";
import type { Context } from "./lib/context.js";
import { logger } from "hono/logger";
import { cors } from "hono/cors";
import { csrf } from "hono/csrf";
import { lucia } from "./lib/auth.js";
import { authApi } from "./api/auth.js";

const app = new Hono<Context>();

app.use("*", async (c, next) => {
  const sessionId = lucia.readSessionCookie(c.req.header("Cookie") ?? "");
  console.log("sessionId", sessionId);

  if (!sessionId) {
    c.set("user", null);
    c.set("session", null);
    return next();
  }

  const { session, user } = await lucia.validateSession(sessionId);
  console.log("session - user", session, user);

  if (session && session.fresh) {
    c.header("Set-Cookie", lucia.createSessionCookie(session.id).serialize(), {
      append: true,
    });
  }
  if (!session) {
    c.header("Set-Cookie", lucia.createBlankSessionCookie().serialize(), {
      append: true,
    });
  }
  c.set("session", session);
  c.set("user", user);
  return next();
});

app.use(logger());
app.use(csrf());
app.use("*", cors());

const api = app.basePath("/api").route("/", authApi);

export type ApiType = typeof api;

export default {
  port: 3001,
  fetch: app.fetch,
};
