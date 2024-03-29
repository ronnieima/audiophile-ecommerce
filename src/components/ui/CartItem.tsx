"use client";
import { Product } from "@/data";
import { cartItem } from "@/db/schema";
import { InferSelectModel } from "drizzle-orm";
import Image from "next/image";
import Counter from "./Counter";
import DeleteButton from "./DeleteButton";

type CartItem = InferSelectModel<typeof cartItem>;

type Props = { product: Product; cartItem: CartItem };

export default function CartItem({ product, cartItem }: Props) {
  return (
    <div className="flex justify-between ">
      <div className="flex gap-4">
        <div className="relative aspect-square h-16 w-16">
          <Image
            fill
            className="absolute  h-full w-full"
            sizes="10vw"
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
      <div className="flex items-center justify-end gap-4">
        <Counter
          initialQuantity={cartItem.quantity}
          isInCart
          cartItemId={cartItem.id}
        />
        <DeleteButton cartItemId={cartItem.id} />
      </div>
    </div>
  );
}
