import React from "react";
import Category from "../ui/CategoryItem";
import { categories } from "@/config/content";
import MaxWidthContainer from "../ui/MaxWidthContainer";

export default function Categories() {
  return (
    <section className="w-full">
      <MaxWidthContainer className="w-full gap-24 sm:flex-row sm:gap-4 sm:px-8">
        {categories.map((category) => (
          <Category
            key={category.title}
            title={category.title}
            imageUrl={category.imageUrl}
            href={category.href}
          />
        ))}
      </MaxWidthContainer>
    </section>
  );
}
