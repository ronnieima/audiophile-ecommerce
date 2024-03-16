"use server";

import { Product, products } from "@/data";
import db from "@/db";
import { users } from "@/db/schema";
import bcrypt from "bcrypt";

export async function registerUser(formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;
  //TODO: check if username already exists
  try {
    const hashedPassword = await bcrypt.hash(password, 5);
    await db.insert(users).values({ username, hashedPassword });
  } catch (error: any) {
    console.log({ error });
  }
}

export async function getProducts(
  category?: "headphones" | "speakers" | "earphones",
) {
  if (category) {
    return products.filter((product: Product) => product.category === category);
  } else return products;
}

export async function getProduct(productName: string) {
  return products.filter((product) => product.slug === productName).at(0);
}
