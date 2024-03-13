import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export default function Products() {
  return (
    <section className={cn("flex flex-col gap-8  px-4 text-center", "sm:px-8")}>
      <div
        className={cn(
          "relative flex flex-col items-center justify-center gap-8 rounded-lg bg-primary bg-patternCircles bg-cover bg-[center_-7rem] bg-no-repeat p-8 py-32  text-white",
        )}
      >
        <div className="w-1/2 sm:w-1/4">
          <Image
            src={"/assets/home/mobile/image-speaker-zx9.png"}
            className=" h-auto w-full"
            sizes="100vw"
            width={0}
            height={0}
            alt="ZX9 Speaker"
          />
        </div>
        <h2 className="max-w-[16rem]">ZX9 Speaker</h2>
        <p className="max-w-xs">
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

      <div
        className={cn(
          "flex h-96 flex-col items-start justify-center gap-8 rounded-lg bg-[url('/assets/home/mobile/image-speaker-zx7.jpg')] bg-cover bg-right p-4 ",
          "sm:bg-[url('/assets/home/tablet/image-speaker-zx7.jpg')] sm:px-16",
        )}
      >
        <h3>ZX7 Speaker</h3>
        <Button variant={"secondary"}>See product</Button>
      </div>

      <div className="flex  flex-col items-center justify-center gap-8 sm:flex-row">
        <div
          className={cn(
            "h-[16rem] w-full rounded-lg bg-[url('/assets/home/mobile/image-earphones-yx1.jpg')] bg-cover",
            "sm:bg-[url('/assets/home/tablet/image-earphones-yx1.jpg')]",
          )}
        ></div>
        <div className="flex h-[16rem] w-full flex-col items-start justify-center gap-8 rounded-lg bg-gray p-8 py-12">
          <h3 className="text-left">YX1 Earphones</h3>
          <Button variant={"secondary"}>See product</Button>
        </div>
      </div>
    </section>
  );
}
