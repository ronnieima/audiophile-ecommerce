"use server";

import { RegisterFormSchemaType } from "@/app/register/_component/RegisterForm";
import db from "@/db";
import { cartItem, includedItems, products, users } from "@/db/schema";
import bcrypt from "bcrypt";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function registerUser({
  username,
  password,
}: RegisterFormSchemaType) {
  try {
    const hashedPassword = await bcrypt.hash(password, 5);
    await db.insert(users).values({ username, hashedPassword });
  } catch (error: any) {
    if (error.code === "23505") throw new Error(error);
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
      revalidatePath("/");
    } else {
      await db.insert(cartItem).values({ productId, quantity, userId });
      revalidatePath("/");
    }
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

export async function getCartProducts(userId: string) {
  try {
    const cart = await getCart(userId);
    const cartProducts = [];
    for (const currCartItem of cart) {
      const product = await getProductById(currCartItem.productId);
      const quantityResponse = await db.query.cartItem.findFirst({
        where:
          eq(cartItem.userId, userId) &&
          eq(cartItem.productId, currCartItem.productId),
        columns: { quantity: true },
      });
      const quantity = quantityResponse?.quantity || 1;
      cartProducts.push({ product, quantity });
    }
    return cartProducts;
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

export async function getCartItemQuantity(cartItemId: string) {
  return await db.query.cartItem.findFirst({
    columns: { quantity: true },
    where: eq(cartItem.id, cartItemId),
  });
}

export async function getIncludedItems(productId: number) {
  return await db
    .select()
    .from(includedItems)
    .where(eq(includedItems.productId, productId));
}

export async function updateCartItemQuantity(
  cartItemId: string,
  operation: "increment" | "decrement",
) {
  const updateNumber = operation === "increment" ? 1 : -1;
  let currentQuantity = await db.query.cartItem.findFirst({
    columns: { quantity: true },
    where: eq(cartItem.id, cartItemId),
  });
  if (currentQuantity?.quantity! <= 0 && operation === "decrement") return;

  await db
    .update(cartItem)
    .set({
      quantity: currentQuantity?.quantity! + updateNumber,
    })
    .where(eq(cartItem.id, cartItemId));
  revalidatePath("/");
}

export async function deleteCartItem(cartItemId: string) {
  await db.delete(cartItem).where(eq(cartItem.id, cartItemId));
  revalidatePath("/");
}

export async function deleteAllCartItems(userId: string) {
  await db.delete(cartItem).where(eq(cartItem.userId, userId));
  revalidatePath("/");
}
