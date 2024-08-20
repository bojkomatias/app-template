import { z } from "zod";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { sessions, users } from "./tables";

export const selectUser = createSelectSchema(users);
export const insertUser = createInsertSchema(users, {
  email: z.string().email({
    message: "Debe ser un email valido",
  }),
});
export const credentialsSchema = z.object({
  email: z.string().email({
    message: "Debe ser un email valido",
  }),
  password: z.string().min(8, {
    message: "Debe tener minimo 8 caracteres",
  }),
});

export type DatabaseUser = z.infer<typeof selectUser>;
