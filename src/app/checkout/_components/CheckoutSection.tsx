import MaxWidthContainer from "@/components/ui/MaxWidthContainer";
import CheckoutForm from "./CheckoutForm";

export default function CheckoutSection() {
  return (
    <section className="w-full rounded-lg bg-white">
      <MaxWidthContainer className="w-full  py-8  ">
        <CheckoutForm />
      </MaxWidthContainer>
    </section>
  );
}
