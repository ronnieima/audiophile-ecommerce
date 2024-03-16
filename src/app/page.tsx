import CallToAction from "@/components/Home/CallToAction";
import Categories from "@/components/Home/Categories";
import Hero from "@/components/Home/Hero";
import Products from "@/components/Home/Products";
import { getServerSession } from "next-auth";

export default async function HomePage() {
  const session = await getServerSession();

  return (
    <main className="flex flex-col items-stretch justify-center gap-32 ">
      <Hero />
      <Categories />
      <Products />
      <CallToAction />
    </main>
  );
}
