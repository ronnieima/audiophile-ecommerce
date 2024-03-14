import CallToAction from "@/components/Home/CallToAction";
import Categories from "@/components/Home/Categories";
import ProductItem from "@/components/ui/ProductItem";
import { getData } from "@/lib/actions";
import React from "react";

export default async function HeadphonesPage() {
  const products = await getData("headphones");
  return (
    <main>
      <header className="flex h-32 items-center justify-center bg-black text-center uppercase text-white">
        <h1>Headphones</h1>
      </header>
      <section className="px-4 py-16">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </section>
      <Categories />
      <CallToAction />
    </main>
  );
}
