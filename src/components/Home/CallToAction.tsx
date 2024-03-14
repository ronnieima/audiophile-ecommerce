import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default function CallToAction() {
  return (
    <section className="px-4 py-8 pb-32 text-center">
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-16 ",
          "lg:mx-auto lg:max-w-7xl lg:flex-row-reverse",
        )}
      >
        <Image
          src={"/assets/shared/mobile/image-best-gear.jpg"}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto w-full rounded-lg sm:hidden"
          alt="a black-and-white image of a man wearing headphones posing"
        />
        <Image
          src={"/assets/shared/tablet/image-best-gear.jpg"}
          height={0}
          width={0}
          sizes="100vw"
          className="hidden h-auto w-full rounded-lg sm:block lg:hidden"
          alt="a black-and-white image of a man wearing headphones posing"
        />
        <Image
          src={"/assets/shared/desktop/image-best-gear.jpg"}
          height={0}
          width={0}
          sizes="100vw"
          className=" hidden h-auto w-2/4 rounded-lg lg:block"
          alt="a black-and-white image of a man wearing headphones posing"
        />
        <div className="flex flex-col items-center justify-center gap-8 lg:items-start lg:text-left">
          <h2 className="sm:max-w-xl">
            Bringing you the <span className="text-primary">best</span> audio
            gear
          </h2>
          <p className="sm:max-w-lg">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </section>
  );
}
