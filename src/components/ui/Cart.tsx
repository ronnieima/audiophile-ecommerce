import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { cartItem } from "@/db/schema";
import { getCart, getProductById } from "@/lib/actions";
import { InferSelectModel } from "drizzle-orm";
import { ShoppingCart } from "lucide-react";
import { getServerSession } from "next-auth";
import { Button } from "./button";
import CartIcon from "./CartIcon";
import CartItem from "./CartItem";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./dialog";
import RemoveAllButton from "./RemoveAllButton";

type CartItemType = InferSelectModel<typeof cartItem>;

async function calculateTotalPrice(cart: CartItemType[]) {
  let totalPrice = 0;
  for (const item of cart) {
    const product = await getProductById(item.productId);
    totalPrice += parseFloat(product!.price) * item.quantity;
  }
  return totalPrice;
}

export default async function Cart() {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;
  if (!userId) return;
  const cart = await getCart(userId);

  const isEmptyCart = cart.length === 0;

  const totalPrice = calculateTotalPrice(cart);
  return (
    <Dialog>
      <CartIcon />
      <DialogContent className="overflow-auto">
        <DialogHeader className="flex-row items-center justify-between">
          <DialogTitle className=" uppercase">Cart</DialogTitle>
          <RemoveAllButton />
        </DialogHeader>
        {isEmptyCart ? (
          <div className="flex flex-col items-center justify-center gap-8 py-8 text-center">
            <ShoppingCart size={80} />
            <h3>Cart is empty</h3>
            <DialogClose asChild>
              <Button>Start shopping</Button>
            </DialogClose>
          </div>
        ) : (
          <>
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
              <p className="font-bold">$ {totalPrice}</p>
            </div>
            <DialogClose asChild>
              <Button className="w-full uppercase">Checkout</Button>
            </DialogClose>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
