import CallToAction from "@/components/Home/CallToAction";
import Categories from "@/components/Home/Categories";
import AddToCartButton from "@/components/ui/AddToCartButton";
import Counter from "@/components/ui/Counter";
import MaxWidthContainer from "@/components/ui/MaxWidthContainer";
import ProductItem from "@/components/ui/ProductItem";
import { Button } from "@/components/ui/button";
import { getProduct } from "@/lib/actions";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

type ProductPageProps = {
  params: { productName: string };
};

export default async function ProductPage({
  params: { productName },
}: ProductPageProps) {
  const product = await getProduct(productName);
  if (!product) return notFound();

  return (
    <main>
      <MaxWidthContainer className="gap-32 py-4">
        <section className="flex flex-col gap-4 sm:flex-row lg:gap-16">
          <div>
            <Link href={`/${product.category}`}>Go Back</Link>
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
          <div className="flex flex-col justify-center sm:w-2/3 lg:w-1/2">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h3>$ {product.price}</h3>
            <div className="flex gap-4">
              <Counter />
              <AddToCartButton />
            </div>
          </div>
        </section>

        <section>
          <h5 className="uppercase">Features</h5>
          <p>{product.features}</p>
        </section>

        <section className="flex w-full flex-col gap-8 self-start sm:flex-row  sm:text-left">
          <h4 className="uppercase sm:w-1/2">In The Box</h4>
          <ul className="flex flex-col gap-2">
            {product.includes.map((item) => (
              <li key={item.item} className="flex items-center gap-4">
                <h6 className="lowercase text-primary">{item.quantity}x</h6>
                <p>{item.item}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col gap-4 sm:flex-row">
          <div className="flex flex-col justify-between gap-4">
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
        </section>

        <section>
          <h5 className="text-center uppercase">You May Also Like</h5>
          <div className="flex flex-col gap-8 sm:flex-row">
            {product.others.map((suggestion) => (
              <div
                key={suggestion.name}
                className={cn(
                  "mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 text-center",
                  " lg:justify-center lg:gap-4 lg:px-8  ",
                )}
              >
                <picture className="lg:w-1/2">
                  <source
                    media="(min-width:1024px)"
                    srcSet={suggestion.image.desktop.slice(1)}
                  />
                  <source
                    media="(min-width:640px)"
                    srcSet={suggestion.image.tablet.slice(1)}
                  />
                  <img
                    src={suggestion.image.mobile.slice(1)}
                    alt={suggestion.name}
                  />
                </picture>
                <div
                  className={cn(
                    "flex max-w-xs flex-col items-center justify-center gap-8",
                    "sm:max-w-lg",
                    "lg:w-1/2 lg:items-start lg:text-left",
                  )}
                >
                  {product.new && (
                    <span className="text-overline text-primary">
                      New product
                    </span>
                  )}
                  <h4 className="max-w-xs">{suggestion.name}</h4>
                  <Button asChild>
                    <Link href={`${suggestion.slug}`} className="uppercase">
                      See product
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Categories />
        <CallToAction />
      </MaxWidthContainer>
    </main>
  );
}
