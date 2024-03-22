import { deleteAllCartItems, getCart } from "@/lib/actions";
import { ShoppingCart } from "lucide-react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Button } from "./button";
import CartItem from "./CartItem";
import Counter from "./Counter";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { InferSelectModel } from "drizzle-orm";
import { cartItem } from "@/db/schema";
import CartItems from "./CartItems";
import CartIcon from "./CartIcon";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import RemoveAllButton from "./RemoveAllButton";

type CartItemType = InferSelectModel<typeof cartItem>;

export default async function Cart() {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;
  if (!userId) return;
  const cart = await getCart(userId);
  return (
    <Dialog>
      <CartIcon />
      <DialogContent className="overflow-auto">
        <DialogHeader className="flex-row items-center justify-between">
          <DialogTitle className=" uppercase">Cart</DialogTitle>
          <RemoveAllButton />
        </DialogHeader>
        {cart?.map((cartItem) => {
          return (
            <div key={cartItem.id} className="flex justify-between ">
              <CartItem productId={cartItem.productId} />
              <Counter quantity={cartItem.quantity} />
            </div>
          );
        })}
        <div className="flex justify-between">
          <p>Total</p>
          <p className="font-bold">$ 5,3232</p>
        </div>
        <DialogClose>
          <Button className="w-full uppercase">Checkout</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
