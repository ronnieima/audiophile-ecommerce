"use client";
import { updateCartItemQuantity } from "@/lib/actions";
import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "./button";

type Props = {
  initialQuantity: number;
  isInCart?: boolean;
  cartItemId?: string;
  onQuantityChange?: (newQuantity: number) => void;
};

export default function Counter({
  initialQuantity,
  isInCart = false,
  cartItemId,
  onQuantityChange,
}: Props) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleDecrement = async () => {
    if (quantity !== 1) {
      if (isInCart && cartItemId) {
        setQuantity((prevQuantity) => prevQuantity - 1);
        await updateCartItemQuantity(cartItemId, "decrement");
      }
      if (onQuantityChange)
        setQuantity((prevQuantity) => {
          const newQuantity = prevQuantity - 1;
          onQuantityChange(newQuantity);
          return newQuantity;
        });
    }
  };
  const handleIncrement = async () => {
    if (isInCart && cartItemId) {
      setQuantity((prevQuantity) => prevQuantity + 1);
      await updateCartItemQuantity(cartItemId, "increment");
    }
    if (onQuantityChange)
      setQuantity((prevQuantity) => {
        const newQuantity = prevQuantity + 1;
        onQuantityChange(newQuantity);
        return newQuantity;
      });
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
