import type { AdapterAccount } from "@auth/core/adapters";
import { randomUUID } from "crypto";
import {
  boolean,
  decimal,
  integer,
  json,
  pgTable,
  primaryKey,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const users = pgTable("user", {
  id: text("id")
    .notNull()
    .primaryKey()
    .$default(() => randomUUID()),
  name: text("name"),
  email: text("email"),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
  username: text("username").notNull().unique(),
  hashedPassword: text("hashedPassword").notNull(),
});

export const accounts = pgTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccount["type"]>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  }),
);

export const sessions = pgTable("session", {
  sessionToken: text("sessionToken").notNull().primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const verificationTokens = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
  }),
);

export const products = pgTable("product", {
  id: serial("id").notNull().unique().primaryKey(),
  slug: text("slug"),
  name: text("name"),
  image: json("image").$type<{
    mobile: string;
    tablet: string;
    desktop: string;
  }>(),
  category: text("category"),
  categryImage: json("categryImage").$type<{
    mobile: string;
    tablet: string;
    desktop: string;
  }>(),
  new: boolean("new"),
  price: decimal("price"),
  description: text("description"),
  features: text("features"),
  gallery: json("gallery").$type<{
    first: { mobile: string; tablet: string; desktop: string };
    second: { mobile: string; tablet: string; desktop: string };
    third: { mobile: string; tablet: string; desktop: string };
  }>(),
  //TODO figure out others
  others: text("others"),
});

export const includedItems = pgTable("includedItems", {
  id: serial("id").primaryKey().notNull(),
  name: text("name").notNull(),
  quantity: integer("quantity").notNull(),
  productId: integer("productId")
    .references(() => products.id)
    .notNull(),
});

export const cartItem = pgTable("cartItem", {
  id: text("id")
    .$default(() => randomUUID())
    .primaryKey()
    .notNull(),
  userId: text("userId").references(() => users.id),
  productId: integer("productId").references(() => products.id),
  quantity: integer("quantity"),
});
