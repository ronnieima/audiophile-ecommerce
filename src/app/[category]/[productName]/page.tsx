import CallToAction from "@/components/Home/CallToAction";
import Categories from "@/components/Home/Categories";
import MaxWidthContainer from "@/components/ui/MaxWidthContainer";
import { Button } from "@/components/ui/button";
import {
  getIncludedItems,
  getProductById,
  getProductBySlug,
} from "@/lib/actions";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { notFound } from "next/navigation";
import AddToCart from "./_components/AddToCart";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

type ProductPageProps = {
  params: { productName: string };
};

export default async function ProductPage({
  params: { productName },
}: ProductPageProps) {
  const session = await getServerSession(authOptions);
  const product = await getProductBySlug(productName);
  if (!product) return notFound();
  const includedItems = await getIncludedItems(product.id);

  return (
    <main className="flex flex-col items-stretch justify-center gap-32 ">
      <section className=" ">
        <MaxWidthContainer className="justify-between gap-8 sm:flex-row lg:gap-16">
          <div className="">
            <Button asChild variant={"link"}>
              <Link href={`/${product.category}`} className=" py-8 ">
                Go Back
              </Link>
            </Button>
            <picture>
              <source
                media="(min-width:1024px)"
                srcSet={product.image.mobile.slice(1)}
              />
              <source
                media="(min-width:640px)"
                srcSet={product.image.tablet.slice(1)}
              />
              <img
                className="rounded-lg"
                src={product.image.mobile.slice(1)}
                alt={product.name}
              />
            </picture>
          </div>
          <div className="flex flex-col justify-center gap-8 sm:w-2/3 lg:w-1/2">
            <h2 className="max-w-xs">{product.name}</h2>
            <p className="max-w-sm">{product.description}</p>
            <h3>$ {product.price}</h3>
            <AddToCart productId={product.id} session={session!} />
          </div>
        </MaxWidthContainer>
      </section>

      <MaxWidthContainer className="flex flex-col gap-32 lg:flex-row">
        <section className="space-y-8 lg:w-full">
          <h5 className="uppercase">Features</h5>
          <p>{product.features}</p>
        </section>

        <section className="flex w-full flex-col gap-8 self-start sm:flex-row  sm:text-left lg:flex-col">
          <h4 className="uppercase sm:w-1/2">In The Box</h4>
          <ul className="flex flex-col gap-2">
            {includedItems.map((item) => (
              <li key={item.id} className="flex items-center gap-4">
                <h6 className="lowercase text-primary">{item.quantity}x</h6>
                <p>{item.name}</p>
              </li>
            ))}
          </ul>
        </section>
      </MaxWidthContainer>

      <section className="">
        <MaxWidthContainer className=" justify-center gap-8 sm:flex-row">
          <div className="flex flex-col justify-between gap-8 ">
            <picture>
              <source
                media="(min-width:1024px)"
                srcSet={product.gallery.first.desktop.slice(1)}
              />
              <source
                media="(min-width:640px)"
                srcSet={product.gallery.first.tablet.slice(1)}
              />
              <img
                src={product.gallery.first.mobile.slice(1)}
                alt={product.name}
                className="rounded-lg"
              />
            </picture>
            <picture>
              <source
                media="(min-width:1024px)"
                srcSet={product.gallery.second.desktop.slice(1)}
              />
              <source
                media="(min-width:640px)"
                srcSet={product.gallery.second.tablet.slice(1)}
              />
              <img
                src={product.gallery.second.mobile.slice(1)}
                alt={product.name}
                className="rounded-lg"
              />
            </picture>
          </div>
          <picture>
            <source
              media="(min-width:1024px)"
              srcSet={product.gallery.third.desktop.slice(1)}
            />
            <source
              media="(min-width:640px)"
              srcSet={product.gallery.third.tablet.slice(1)}
            />
            <img
              src={product.gallery.third.mobile.slice(1)}
              alt={product.name}
              className="rounded-lg"
            />
          </picture>
        </MaxWidthContainer>
      </section>

      <section className="space-y-8">
        <h5 className="text-center uppercase">You May Also Like</h5>
        <MaxWidthContainer className="flex flex-col gap-8 sm:flex-row lg:gap-8">
          {product.others?.map(async (suggestedProductId) => {
            const suggestedProduct = await getProductById(suggestedProductId);
            if (suggestedProduct)
              return (
                <div
                  key={suggestedProduct.name}
                  className={cn(
                    "flex w-full  flex-col items-center justify-center gap-8 text-center",
                    " lg:justify-center lg:gap-4   ",
                  )}
                >
                  <picture>
                    <source
                      media="(min-width:1024px)"
                      srcSet={suggestedProduct.image.desktop.slice(1)}
                    />
                    <source
                      media="(min-width:640px)"
                      srcSet={suggestedProduct.image.tablet.slice(1)}
                    />
                    <img
                      src={suggestedProduct.image.mobile.slice(1)}
                      alt={suggestedProduct.name}
                      className="sm:w-full "
                    />
                  </picture>
                  <div
                    className={cn(
                      "flex max-w-xs flex-col items-center justify-center gap-8",
                      "sm:max-w-lg",
                      "lg:w-1/2  lg:text-center",
                    )}
                  >
                    {product.new && (
                      <span className="text-overline text-primary">
                        New product
                      </span>
                    )}
                    <h5>{suggestedProduct.name}</h5>
                    <Button asChild>
                      <Link
                        href={`${suggestedProduct.slug}`}
                        className="uppercase"
                      >
                        See product
                      </Link>
                    </Button>
                  </div>
                </div>
              );
          })}
        </MaxWidthContainer>
      </section>

      <Categories />
      <CallToAction />
    </main>
  );
}
