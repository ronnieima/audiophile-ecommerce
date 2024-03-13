import Categories from "@/components/Categories";
import Hero from "../components/Hero";
import Products from "@/components/Products";
import CallToAction from "@/components/CallToAction";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center gap-32 ">
      <Hero />
      <Categories />
      <Products />
      <CallToAction />
    </main>
  );
}
