import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

export default function Products() {
  return (
    <section className="flex flex-col gap-8 px-4 py-16 text-center">
      <div className="bg-patternCircles relative flex flex-col items-center justify-center gap-8 rounded-lg bg-primary bg-cover bg-[center_-7rem] bg-no-repeat p-8 py-32  text-white">
        <div>
          <Image
            src={"/assets/home/mobile/image-speaker-zx9.png"}
            className=" h-auto w-full"
            sizes="100vw"
            width={0}
            height={0}
            alt="ZX9 Speaker"
          />
        </div>
        <h2>ZX9 Speaker</h2>
        <p>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button
          className="border-none bg-black text-white hover:bg-white hover:text-black"
          variant={"secondary"}
        >
          See product
        </Button>
      </div>

      <div className="flex h-96 flex-col items-start justify-center gap-8 rounded-lg bg-[url('/assets/home/mobile/image-speaker-zx7.jpg')] bg-cover bg-right p-4">
        <h3>ZX7 Speaker</h3>
        <Button variant={"secondary"}>See product</Button>
      </div>

      <div className="flex  flex-col items-center justify-center gap-8">
        <div className="h-[16rem] w-full rounded-lg bg-[url('/assets/home/mobile/image-earphones-yx1.jpg')] bg-cover"></div>
        <div className="flex h-full w-full flex-col items-start justify-center gap-8 rounded-lg bg-gray p-8">
          <h3>YX1 Earphones</h3>
          <Button variant={"secondary"}>See product</Button>
        </div>
      </div>
    </section>
  );
}
