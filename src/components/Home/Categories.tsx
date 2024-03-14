import React from "react";
import Category from "../ui/CategoryItem";
import { categories } from "@/config/content";

export default function Categories() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-24 bg-lightgray px-4 py-16 sm:flex-row sm:gap-4 sm:px-8 lg:mx-auto lg:max-w-7xl">
      {categories.map((category) => (
        <Category
          key={category.title}
          title={category.title}
          imageUrl={category.imageUrl}
          href={category.href}
        />
      ))}
    </section>
  );
}
