"use client";
import Image from "next/image";
import React, { useState } from "react";
import Counter from "./Counter";
import { Product } from "@/data";

type Props = { product: Product; defaultQuantity: number };

export default function CartItem({ product, defaultQuantity }: Props) {
  const [quantity, setQuantity] = useState(defaultQuantity);
  return (
    <div className="flex justify-between ">
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
      <Counter quantity={quantity} setQuantity={setQuantity} />
    </div>
  );
}
