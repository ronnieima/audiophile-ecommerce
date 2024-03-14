"use server";

import { Product, products } from "@/data";

export async function getProducts(
  category?: "headphones" | "speakers" | "earphones",
) {
  if (category) {
    return products.filter((product: Product) => product.category === category);
  } else return products;
}
