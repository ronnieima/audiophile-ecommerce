import { products as productList } from "@/data";
import db from ".";
import { includedItems, products } from "./schema";
import { sql } from "drizzle-orm";

async function populate() {
  for (const product of productList) {
    console.log(
      await db.update(products).set({
        others: JSON.stringify(product.others)
          .replace("[", "{")
          .replace("]", "}"),
      }),
    );
  }
}

populate();
