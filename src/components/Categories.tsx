import React from "react";
import Category from "./ui/Category";
import { categories } from "@/config/content";

export default function Categories() {
  return (
    <section className="flex flex-col gap-24 bg-lightgray px-4 py-32">
      {categories.map((category) => (
        <Category
          key={category.title}
          title={category.title}
          imageUrl={category.imageUrl}
        />
      ))}
    </section>
  );
}
