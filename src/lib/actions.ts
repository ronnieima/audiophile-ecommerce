"use server";

import db from "@/db";
import { cartItem, includedItems, products, users } from "@/db/schema";
import bcrypt from "bcrypt";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

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

export async function addToCart(
  productId: number,
  quantity: number,
  userId: string,
) {
  try {
    const duplicateProducts = await db
      .select()
      .from(cartItem)
      .where(eq(cartItem.userId, userId) && eq(cartItem.productId, productId));

    const hasDuplicateProduct = duplicateProducts.length > 0;

    if (hasDuplicateProduct) {
      await db
        .update(cartItem)
        .set({ quantity: duplicateProducts[0].quantity + quantity })
        .where(
          eq(cartItem.userId, userId) && eq(cartItem.productId, productId),
        );
    } else {
      await db.insert(cartItem).values({ productId, quantity, userId });
    }
    revalidatePath("/");
  } catch (error) {
    throw error;
  }
}

export async function getCart(userId: string) {
  try {
    return await db.select().from(cartItem).where(eq(cartItem.userId, userId));
  } catch (error) {
    throw error;
  }
}

export async function getProducts(
  category?: "headphones" | "speakers" | "earphones",
) {
  if (category) {
    return await db
      .select()
      .from(products)
      .where(eq(products.category, category));
  } else return await db.select().from(products);
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

export async function deleteAllCartItems(userId: string) {
  await db.delete(cartItem).where(eq(cartItem.userId, userId));
  revalidatePath("/");
}
