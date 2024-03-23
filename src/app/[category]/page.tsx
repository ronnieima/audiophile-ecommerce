import CallToAction from "@/components/Home/CallToAction";
import Categories from "@/components/Home/Categories";
import ProductItem from "@/components/ui/ProductItem";
import { getProducts } from "@/lib/actions";
import { cn } from "@/lib/utils";
import { notFound } from "next/navigation";

type CategoryPageProps = {
  params: { category: "headphones" | "speakers" | "earphones" };
};

export default async function CategoryPage({
  params: { category },
}: CategoryPageProps) {
  const filteredProducts = await getProducts(category);
  if (!filteredProducts) return notFound();
  return (
    <main className="flex flex-col items-stretch justify-center gap-32 ">
      <header
        className={cn(
          "flex h-32 items-center justify-center bg-black text-center uppercase text-white",
          "sm:h-64",
        )}
      >
        <h1 className="uppercase">{category}</h1>
      </header>
      <section
        className={cn(
          "space-y-16 px-4 py-16",
          "sm:space-y-48 sm:px-8 sm:py-24",
        )}
      >
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} productId={product.id} />
        ))}
      </section>
      <Categories />
      <CallToAction />
    </main>
  );
}
