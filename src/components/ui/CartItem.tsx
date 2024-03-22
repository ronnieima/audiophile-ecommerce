import { getProductById } from "@/lib/actions";
import Image from "next/image";
import React from "react";

type Props = { productId: number };

export default async function CartItem({ productId }: Props) {
  const product = await getProductById(productId);
  if (!product) return;
  return (
    <div className="flex gap-4">
      <div className="relative aspect-square h-16 w-16">
        <Image
          fill
          className="absolute  h-full w-full"
          src={product.image.mobile.slice(1)}
          alt={product.name}
        />
      </div>
      <div className="flex flex-col items-start text-xs">
        <p className=" text-left font-bold">
          {product.name.replace("Headphones", "")}
        </p>
        <p>${product.price}</p>
      </div>
    </div>
  );
}
