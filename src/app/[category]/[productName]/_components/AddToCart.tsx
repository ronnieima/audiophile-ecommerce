"use client";

import { Button } from "@/components/ui/button";
import Counter from "@/components/ui/Counter";
import { addToCart } from "@/lib/actions";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { toast } from "react-toastify";

export default function AddToCart({ productId }: { productId: number }) {
  const session = useSession();
  const isAuthed = session.status === "authenticated";
  const userId = session.data?.user.id;
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Counter quantity={quantity} setQuantity={setQuantity} />
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
