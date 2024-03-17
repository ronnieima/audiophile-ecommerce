import CallToAction from "@/components/Home/CallToAction";
import Categories from "@/components/Home/Categories";
import Hero from "@/components/Home/Hero";
import Products from "@/components/Home/Products";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function HomePage() {
  return (
    <main className="flex flex-col items-stretch justify-center gap-32 ">
      <Hero />
      <Categories />
      <Products />
      <CallToAction />
    </main>
  );
}
