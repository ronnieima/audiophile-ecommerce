import BackButton from "@/components/ui/BackButton";
import MaxWidthContainer from "@/components/ui/MaxWidthContainer";
import { getCartProducts } from "@/lib/actions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import CheckoutForm from "./_components/CheckoutForm";

export default async function CheckoutPage() {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  const cart = await getCartProducts(userId!);
  if (!session || !cart) redirect("/");

  const price = cart.reduce(
    (acc, cartItem) =>
      acc + parseInt(cartItem.product?.price!) * cartItem.quantity!,
    0,
  );
  return (
    <main className="bg-gray ">
      <MaxWidthContainer className="py-8">
        <BackButton className="self-start py-2" />
        <CheckoutForm userId={userId!} cart={cart} price={price} />
      </MaxWidthContainer>
    </main>
  );
}
