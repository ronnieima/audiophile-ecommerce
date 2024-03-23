import { Button } from "@/components/ui/button";
import MaxWidthContainer from "@/components/ui/MaxWidthContainer";
import { getCartProducts } from "@/lib/actions";
import Image from "next/image";

type Props = { userId: string };

export default async function SummarySection({ userId }: Props) {
  const cart = await getCartProducts(userId);
  return (
    <section className="w-full rounded-lg bg-white px-4">
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
                  <h6>{cartItem?.product!.name}</h6>
                  <p>$ {cartItem?.product!.price}</p>
                </div>
              </div>
              <p>x{cartItem.quantity?.quantity}</p>
            </div>
          ))}
        </div>
        <div className="flex w-full flex-col gap-4 py-4">
          <div className="flex w-full justify-between">
            <h6 className="uppercase">Total</h6>
            <p>$ 5,396</p>
          </div>
          <div className="flex w-full justify-between">
            <h6 className="uppercase">Shipping</h6>
            <p>$ 5,396</p>
          </div>
          <div className="flex w-full justify-between">
            <h6 className="uppercase">VAT (Included)</h6>
            <p>$ 5,396</p>
          </div>
          <div className="flex w-full justify-between py-4">
            <h6 className="uppercase">Grand Total</h6>
            <p className="font-semibold text-primary">$ 5,396</p>
          </div>
        </div>

        <Button className="w-full">Continue & Pay</Button>
      </MaxWidthContainer>
    </section>
  );
}
