import CallToAction from "@/components/Home/CallToAction";
import Categories from "@/components/Home/Categories";
import { getProduct } from "@/lib/actions";
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
      <div className="mx-auto max-w-7xl px-4">
        <Link href={`/${product.category}`}>Go Back</Link>
        <picture>
          <img
            className="rounded-lg"
            src={product.image.mobile.slice(1)}
            alt={product.name}
          />
        </picture>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <h3>$ {product.price}</h3>

        <h2 className="uppercase">Features</h2>
        <p>{product.features}</p>

        <h2 className="uppercase">In The Box</h2>
        <ul>
          {product.includes.map((item) => (
            <li key={item.item} className="flex items-center gap-4">
              <h6 className="lowercase text-primary">{item.quantity}x</h6>
              <p>{item.item}</p>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-4 sm:flex-row">
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
            />
          </picture>
        </div>

        <h2 className="uppercase">You May Also Like</h2>
        <div>
          <picture></picture>
        </div>

        <Categories />
        <CallToAction />
      </div>
    </main>
  );
}
