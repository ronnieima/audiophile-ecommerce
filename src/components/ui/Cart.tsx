import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { cartItem } from "@/db/schema";
import { getCart, getProductById } from "@/lib/actions";
import { InferSelectModel } from "drizzle-orm";
import { getServerSession } from "next-auth";
import { Button } from "./button";
import CartIcon from "./CartIcon";
import CartItem from "./CartItem";
import Counter from "./Counter";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./dialog";
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
        {cart?.map(async (cartItem) => {
          const product = await getProductById(cartItem.productId);
          if (!product) return;
          return (
            <CartItem
              key={cartItem.id}
              product={product}
              defaultQuantity={cartItem.quantity}
            />
          );
        })}
        <div className="flex justify-between">
          <p>Total</p>
          <p className="font-bold">$ {1}</p>
        </div>
        <DialogClose>
          <Button className="w-full uppercase">Checkout</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
