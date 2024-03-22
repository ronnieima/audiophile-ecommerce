"use client";

import { Button } from "@/components/ui/button";
import Counter from "@/components/ui/Counter";
import { addToCart } from "@/lib/actions";
import { useSession } from "next-auth/react";

export default function AddToCart({ productId }: { productId: number }) {
  const session = useSession();
  const userId = session.data?.user.id;

  return (
    <div className="flex gap-4">
      <Counter />
      <Button
        onClick={() => {
          if (userId) addToCart(productId, 1, userId);
        }}
      >
        Add to cart
      </Button>
    </div>
  );
}
