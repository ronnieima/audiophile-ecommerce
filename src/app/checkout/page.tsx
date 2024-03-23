import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import CheckoutSection from "./_components/CheckoutSection";
import SummarySection from "./_components/SummarySection";

export default async function CheckoutPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/");
  return (
    <main className="flex flex-col items-center justify-center gap-8 bg-gray p-8">
      <CheckoutSection />
      <SummarySection userId={session.user.id} />
    </main>
  );
}
