import Image from "next/image";
import React from "react";

export default function CallToAction() {
  return (
    <section className="flex flex-col items-center justify-center gap-16 px-4 pb-32 text-center">
      <Image
        src={"/assets/shared/mobile/image-best-gear.jpg"}
        height={0}
        width={0}
        sizes="100vw"
        className="h-auto w-full rounded-lg"
        alt="a black-and-white image of a man wearing headphones posing"
      />
      <h3>
        Bringing you the <span className="text-primary">best</span> audio gear
      </h3>
      <p>
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </p>
    </section>
  );
}
