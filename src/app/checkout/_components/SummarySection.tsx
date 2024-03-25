"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import MaxWidthContainer from "@/components/ui/MaxWidthContainer";
import { Separator } from "@/components/ui/separator";
import { deleteAllCartItems } from "@/lib/actions";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useFormContext } from "react-hook-form";
import { Cart } from "./CheckoutForm";

const SHIPPING_FEE = 50;
const INCLUDED_VAT = 1079;
type Props = { userId: string; cart: Cart; price: number };

export default function SummarySection({ userId, cart, price }: Props) {
  const router = useRouter();
  const {
    formState: { isValid },
  } = useFormContext();

  return (
    <section className="w-full rounded-lg bg-white px-2  lg:w-1/2">
      <MaxWidthContainer className="w-full items-start py-8">
        <h5>Summary</h5>

        <div className="flex w-full flex-col gap-4 py-8">
          {cart?.map((cartItem) => (
            <div
              key={cartItem?.product?.id}
              className="flex w-full items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="relative aspect-square h-16 w-16">
                  <Image
                    fill
                    className="absolute  h-full w-full rounded-lg"
                    src={cartItem?.product?.image.mobile.slice(1)!}
                    alt={cartItem?.product?.name!}
                  />
                </div>
                <div>
                  <h6>
                    {cartItem?.product!.name.split(" ").slice(0, -1).join(" ")}
                  </h6>
                  <p>$ {cartItem?.product!.price}</p>
                </div>
              </div>
              <p>x{cartItem.quantity}</p>
            </div>
          ))}
        </div>
        <div className="flex w-full flex-col gap-4 py-4">
          <div className="flex w-full justify-between">
            <h6 className="font-normal uppercase">Total</h6>
            <p className="text-lg font-bold">$ {price}</p>
          </div>
          <div className="flex w-full justify-between">
            <h6 className="font-normal uppercase">Shipping</h6>
            <p className="text-lg font-bold">$ {SHIPPING_FEE}</p>
          </div>
          <div className="flex w-full justify-between">
            <h6 className="font-normal uppercase">VAT (Included)</h6>
            <p className="text-lg font-bold">$ {INCLUDED_VAT}</p>
          </div>
          <div className="flex w-full justify-between py-4">
            <h6 className="font-normal uppercase">Grand Total</h6>
            <p className="text-lg font-bold text-primary">
              $ {price + SHIPPING_FEE}
            </p>
          </div>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button
              type="submit"
              disabled={!isValid}
              className="w-full uppercase "
            >
              Continue & Pay
            </Button>
          </DialogTrigger>
          <DialogContent className=" max-w-2xl gap-y-8 rounded-lg p-8">
            <div className="relative aspect-square h-24">
              <Image
                src={"/assets/checkout/icon-order-confirmation.svg"}
                fill
                alt="order confirmed"
                className="absolute"
              />
            </div>
            <h4 className="text-3xl">
              Thank you <br /> for your order
            </h4>
            <p className="text-2xl font-semibold text-neutral-500">
              You will receive an email confirmation shortly.
              <span className="text-rose-500">*</span>
            </p>
            <div className="flex h-full flex-col rounded-lg shadow-lg sm:h-48 sm:flex-row">
              <div className="flex flex-col items-center justify-center gap-2 rounded-tl-lg rounded-tr-lg bg-gray p-8 sm:w-1/2 sm:rounded-br-none sm:rounded-tr-none">
                <div className="w-full">
                  <div className="flex w-full items-center">
                    <div className="relative aspect-square h-16">
                      <Image
                        src={cart[0]?.product!.image.mobile!.slice(1)}
                        fill
                        alt={cart[0]?.product!.name}
                        className="absolute"
                      />
                    </div>
                    <div className="w-full">
                      <div className="flex items-center justify-between">
                        <h6>
                          {cart[0]?.product?.name
                            .split(" ")
                            .slice(0, -1)
                            .join(" ")}
                        </h6>
                        <p>x{cart[0]?.quantity}</p>
                      </div>
                      <p>$ {cart[0]?.product?.price}</p>
                    </div>
                  </div>
                </div>
                {cart.length - 1 > 0 && (
                  <div className="flex w-full flex-col items-stretch gap-4">
                    <Separator className=" bg-neutral-300/50" />
                    <p className="text-center font-semibold">
                      and {cart.length - 1} other item(s)
                    </p>
                  </div>
                )}
              </div>
              <div className="flex flex-col justify-center gap-4  rounded-bl-lg rounded-br-lg bg-black p-8 sm:w-1/2 sm:rounded-bl-none sm:rounded-tr-lg">
                <h5 className="text-lg font-normal text-neutral-400">
                  GRAND TOTAL
                </h5>
                <p className="text-3xl font-bold text-white">$ {price}</p>
              </div>
            </div>
            <Button
              className={`${buttonVariants({ variant: "default" })} h-16 w-full uppercase `}
              onClick={async (e) => {
                e.preventDefault();
                await deleteAllCartItems(userId);
                router.push("/");
              }}
            >
              Back to home
            </Button>
            <DialogFooter className="justify-self-center text-sm text-rose-500">
              *For demo purposes only. You will not receive an email :)
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </MaxWidthContainer>
    </section>
  );
}
