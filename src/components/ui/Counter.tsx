"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "./button";
import db from "@/db";
import { cartItem } from "@/db/schema";
import { updateCartItemQuantity } from "@/lib/actions";

type Props = {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
  isInCart: boolean;
  cartItemId?: string;
};

export default function Counter({
  quantity,
  setQuantity,
  isInCart = false,
  cartItemId,
}: Props) {
  const handleDecrement = async () => {
    if (isInCart && cartItemId) {
      await updateCartItemQuantity(cartItemId, "decrement");
    } else {
      if (quantity !== 1) setQuantity((prevCount) => prevCount - 1);
    }
  };
  const handleIncrement = async () => {
    if (isInCart && cartItemId) {
      await updateCartItemQuantity(cartItemId, "increment");
    } else {
      setQuantity((prevCount) => prevCount + 1);
    }
  };

  return (
    <div className="flex h-10 items-center">
      <Button className="w-10 bg-gray text-black" onClick={handleDecrement}>
        -
      </Button>
      <h6 className="inline-flex h-full w-10 items-center justify-center bg-gray">
        {quantity}
      </h6>
      <Button className="w-10 bg-gray text-black" onClick={handleIncrement}>
        +
      </Button>
    </div>
  );
}
