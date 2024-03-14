import { Product } from "@/data";
import Image from "next/image";
import React from "react";
import { Button } from "./button";
import Link from "next/link";

export type ProductItemProps = {
  product: Product;
};

export default function ProductItem({ product }: ProductItemProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-8 text-center">
      <Image
        className="h-auto w-full rounded-lg"
        src={product.image.desktop.slice(1)}
        sizes="100vw"
        width={0}
        height={0}
        alt="test"
      />
      <div className="flex max-w-xs flex-col items-center justify-center gap-8">
        {product.new && (
          <span className="text-overline text-primary">New product</span>
        )}
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <Button asChild>
          <Link href={product.slug} className="uppercase">
            See product
          </Link>
        </Button>
      </div>
    </div>
  );
}
