import { Button } from "@/components/ui/button";
import MaxWidthContainer from "@/components/ui/MaxWidthContainer";
import { getCartProducts } from "@/lib/actions";
import Image from "next/image";

const SHIPPING_FEE = 50;
const INCLUDED_VAT = 1079;
type Props = { userId: string };

export default async function SummarySection({ userId }: Props) {
  const cart = await getCartProducts(userId);
  const price = cart.reduce(
    (acc, cartItem) =>
      acc + parseInt(cartItem.product?.price!) * cartItem.quantity!.quantity!,
    0,
  );
  return (
    <section className="w-full rounded-lg bg-white  lg:w-1/2">
      <MaxWidthContainer className="w-full items-start py-8">
        <h5>Summary</h5>

        <div className="flex w-full flex-col gap-4 py-8">
          {cart.map((cartItem) => (
            <div
              key={cartItem?.product!.id}
              className="flex w-full items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="relative aspect-square h-16 w-16">
                  <Image
                    fill
                    className="absolute  h-full w-full rounded-lg"
                    src={cartItem.product!.image.mobile.slice(1)}
                    alt={cartItem.product!.name}
                  />
                </div>
                <div>
                  <h6>
                    {cartItem?.product!.name.split(" ").slice(0, -1).join(" ")}
                  </h6>
                  <p>$ {cartItem?.product!.price}</p>
                </div>
              </div>
              <p>x{cartItem.quantity?.quantity}</p>
            </div>
          ))}
        </div>
        <div className="flex w-full flex-col gap-4 py-4">
          <div className="flex w-full justify-between">
            <h6 className="font-normal uppercase">Total</h6>
            <p className="text-lg font-bold">$ 5,396</p>
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

        <Button className="w-full uppercase">Continue & Pay</Button>
      </MaxWidthContainer>
    </section>
  );
}