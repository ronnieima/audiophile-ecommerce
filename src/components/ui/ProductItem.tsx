import { Product } from "@/data";
import React from "react";
import { Button } from "./button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type ProductItemProps = {
  product: Product;
};

export default function ProductItem({ product }: ProductItemProps) {
  return (
    <div
      className={cn(
        "mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 text-center",
        "lg:flex-row lg:justify-center lg:gap-16 lg:px-8 lg:even:flex-row-reverse",
      )}
    >
      <picture className="lg:w-1/2">
        <source
          media="(min-width:1024px)"
          srcSet={product.image.desktop.slice(1)}
        />
        <source
          media="(min-width:640px)"
          srcSet={product.categoryImage.tablet.slice(1)}
        />
        <img src={product.image.mobile.slice(1)} alt={product.name} />
      </picture>
      <div
        className={cn(
          "flex max-w-xs flex-col items-center justify-center gap-8",
          "sm:max-w-lg",
          "lg:w-1/2 lg:items-start lg:text-left",
        )}
      >
        {product.new && (
          <span className="text-overline text-primary">New product</span>
        )}
        <h2 className="max-w-xs">{product.name}</h2>
        <p className="max-w-md">{product.description}</p>
        <Button asChild>
          <Link
            href={`${product.category}/${product.slug}`}
            className="uppercase"
          >
            See product
          </Link>
        </Button>
      </div>
    </div>
  );
}
