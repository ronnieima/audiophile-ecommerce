import { randomUUID } from "crypto";
import { pgTable, text } from "drizzle-orm/pg-core";

export const users = pgTable("user", {
  id: text("id")
    .notNull()
    .primaryKey()
    .$default(() => randomUUID()),
  username: text("username").notNull().unique(),
  hashedPassword: text("hashedPassword").notNull(),
});
