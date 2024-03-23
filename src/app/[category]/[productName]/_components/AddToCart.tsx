"use client";

import { Button } from "@/components/ui/button";
import Counter from "@/components/ui/Counter";
import { addToCart } from "@/lib/actions";
import { Session } from "next-auth";
import { useState } from "react";
import { toast } from "react-toastify";

type Props = { productId: number; session: Session };

export default function AddToCart({ productId, session }: Props) {
  const isAuthed = !!session;
  const userId = session?.user.id;
  const [quantity, setQuantity] = useState<number>(1);

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Counter
          initialQuantity={quantity}
          onQuantityChange={handleQuantityChange}
        />
        <Button
          disabled={!isAuthed}
          onClick={() => {
            if (userId && quantity) {
              try {
                addToCart(productId, quantity, userId);
                toast("Successfully added item to cart.", { type: "success" });
              } catch (error) {
                toast("Failed to add item to cart.", { type: "error" });
              }
            }
          }}
        >
          Add to cart
        </Button>
      </div>
      {!isAuthed && (
        <p className="font-semibold text-primary">
          Please login to add item to cart
        </p>
      )}
    </div>
  );
}
