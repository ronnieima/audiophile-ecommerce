"use server";

import db from "@/db";
import { includedItems, products, users } from "@/db/schema";
import bcrypt from "bcrypt";
import { eq } from "drizzle-orm";

export async function registerUser(formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  try {
    const hashedPassword = await bcrypt.hash(password, 5);
    await db.insert(users).values({ username, hashedPassword });
  } catch (error: any) {
    if (error.code === "23505") console.log("duplicate found");
  }
}

export async function getProducts(
  category?: "headphones" | "speakers" | "earphones",
) {
  if (category) {
    const data = await db.select().from(products);
    return data;
  } else return products;
}

export async function getProductById(productId: number) {
  return await db.query.products.findFirst({
    where: eq(products.id, productId),
  });
}

export async function getProductBySlug(productSlug: string) {
  return await db.query.products.findFirst({
    where: eq(products.slug, productSlug),
  });
}

export async function getIncludedItems(productId: number) {
  return await db
    .select()
    .from(includedItems)
    .where(eq(includedItems.productId, productId));
}
