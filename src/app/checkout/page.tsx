import CheckoutSection from "./_components/CheckoutSection";
import SummarySection from "./_components/SummarySection";

export default function CheckoutPage() {
  return (
    <main className="flex flex-col items-center justify-center gap-8 bg-gray p-8">
      <CheckoutSection />
      <SummarySection />
    </main>
  );
}
