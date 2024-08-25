import { Lucia } from "lucia";
import { adapter } from "../db/client";
import { GitHub } from "arctic";
import { DatabaseUser } from "../db/schema/user";

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      secure: process.env.NODE_ENV === "production",
    },
  },
  getUserAttributes: (attributes) => {
    return {
      github_id: attributes.github_id,
      username: attributes.username,
      email: attributes.email,
      name: attributes.name,
      avatar_url: attributes.avatar_url,
      created_at: attributes.created_at,
    };
  },
});

export const github = new GitHub(
  process.env.GITHUB_CLIENT_ID!,
  process.env.GITHUB_CLIENT_SECRET!,
);

declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: DatabaseUser;
  }
}
