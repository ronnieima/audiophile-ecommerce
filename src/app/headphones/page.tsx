import CallToAction from "@/components/Home/CallToAction";
import Categories from "@/components/Home/Categories";
import ProductItem from "@/components/ui/ProductItem";
import { getData } from "@/lib/actions";
import { cn } from "@/lib/utils";
import React from "react";

export default async function HeadphonesPage() {
  const products = await getData("headphones");
  return (
    <main>
      <header
        className={cn(
          "flex h-32 items-center justify-center bg-black text-center uppercase text-white",
          "sm:h-64",
        )}
      >
        <h1>Headphones</h1>
      </header>
      <section
        className={cn(
          "space-y-16 px-4 py-16",
          "sm:space-y-24 sm:px-8 sm:py-24",
        )}
      >
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </section>
      <Categories />
      <CallToAction />
    </main>
  );
}
