import { Hono } from "hono";
import type { Context } from "../lib/context.js";
import { generateId } from "lucia";
import { db } from "../db/client.js";
import { github, lucia } from "../lib/auth.js";
import { eq } from "drizzle-orm";
import { getCookie, setCookie } from "hono/cookie";
import { generateState, OAuth2RequestError } from "arctic";
import { users } from "../db/schema/user.js";

export const authApi = new Hono<Context>()
  .get("/session", async (c) => {
    const session = c.get("session");
    return c.json({ session }, 200);
  })

  .get("/auth/github", async (c) => {
    const state = generateState();
    const url = await github.createAuthorizationURL(state);
    setCookie(c, "github_oauth_state", state, {
      path: "/",
      secure: Bun.env.NODE_ENV === "production",
      httpOnly: true,
      maxAge: 60 * 10,
      sameSite: "Lax",
    });
    return c.redirect(url.toString());
  })

  .get("/auth/callback/github", async (c) => {
    const code = c.req.query("code")?.toString() ?? null;
    const state = c.req.query("state")?.toString() ?? null;
    const storedState = getCookie(c).github_oauth_state ?? null;
    if (!code || !state || !storedState || state !== storedState) {
      return c.body(null, 400);
    }

    try {
      const tokens = await github.validateAuthorizationCode(code);
      const githubUserResponse = await fetch("https://api.github.com/user", {
        headers: {
          Authorization: `Bearer ${tokens.accessToken}`,
        },
      });

      const githubUser: {
        id: number;
        login: string;
        name: string;
        email: string;
        avatar_url: string;
      } = await githubUserResponse.json();

      const [existingUser] = await db
        .select()
        .from(users)
        .where(eq(users.github_id, githubUser.id));

      if (existingUser) {
        const session = await lucia.createSession(existingUser.id, {});
        c.header(
          "Set-Cookie",
          lucia.createSessionCookie(session.id).serialize(),
          { append: true },
        );
        return c.redirect(`${Bun.env.BASE_URL!}/app`);
      }

      const userId = generateId(15);

      const result = await db.insert(users).values({
        id: userId,
        github_id: githubUser.id,
        username: githubUser.login,
        name: githubUser.name,
        email: githubUser.email,
        avatar_url: githubUser.avatar_url,
      });

      const session = await lucia.createSession(userId, {});
      c.header(
        "Set-Cookie",
        lucia.createSessionCookie(session.id).serialize(),
        { append: true },
      );
      return c.redirect(`${Bun.env.BASE_URL!}/app`);
    } catch (e) {
      if (
        e instanceof OAuth2RequestError &&
        e.message === "bad_verification_code"
      ) {
        // invalid code
        return c.body(null, 400);
      }
      return c.body(null, 500);
    }
  })

  .get("/logout", async (c) => {
    const session = c.get("session");
    if (!session) {
      return c.body(null, 401);
    }
    await lucia.invalidateSession(session.id);
    c.header("Set-Cookie", lucia.createBlankSessionCookie().serialize(), {
      append: true,
    });

    return c.redirect(Bun.env.BASE_URL!);
  });
