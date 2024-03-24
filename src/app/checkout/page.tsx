import BackButton from "@/components/ui/BackButton";
import MaxWidthContainer from "@/components/ui/MaxWidthContainer";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import CheckoutSection from "./_components/CheckoutSection";
import SummarySection from "./_components/SummarySection";

export default async function CheckoutPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/");
  return (
    <main className="bg-gray ">
      <MaxWidthContainer className="py-24">
        <BackButton className="self-start py-2" />
        <div className="flex flex-col items-center justify-center gap-8 p-8 lg:flex-row lg:items-start">
          <CheckoutSection />
          <SummarySection userId={session.user.id} />
        </div>
      </MaxWidthContainer>
    </main>
  );
}
