import { drizzle } from "drizzle-orm/bun-sqlite";
import { Database } from "bun:sqlite";
import { DrizzleSQLiteAdapter } from "@lucia-auth/adapter-drizzle";
import { sessions, users } from "./tables";

if (!process.env.DATABASE_URL) throw Error("No DATABASE_URL found");

const sqlite = new Database(process.env.DATABASE_URL);
export const db = drizzle(sqlite, { logger: true });

// Lucia Auth adapter
export const adapter = new DrizzleSQLiteAdapter(db, sessions, users);
