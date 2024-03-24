"use client";
import { ShoppingCart } from "lucide-react";

type Props = { cartSize: number };

export default function CartIcon({ cartSize }: Props) {
  return (
    <>
      <ShoppingCart />
      {!!cartSize && (
        <p className="absolute inset-0 flex h-4 w-4 -translate-y-2 translate-x-4 items-center justify-center rounded-full bg-red-900 text-[0.60rem] font-bold">
          {cartSize}
        </p>
      )}
    </>
  );
}
