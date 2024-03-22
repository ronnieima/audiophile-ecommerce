"use client";

import { Button } from "@/components/ui/button";
import Counter from "@/components/ui/Counter";
import { addToCart } from "@/lib/actions";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function AddToCart({ productId }: { productId: number }) {
  const session = useSession();
  const userId = session.data?.user.id;
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div className="flex gap-4">
      <Counter quantity={quantity} setQuantity={setQuantity} />
      <Button
        onClick={() => {
          if (userId && quantity) addToCart(productId, quantity, userId);
        }}
      >
        Add to cart
      </Button>
    </div>
  );
}
