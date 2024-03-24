import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import MaxWidthContainer from "../ui/MaxWidthContainer";
import Link from "next/link";

export default function Products() {
  return (
    <section>
      <MaxWidthContainer
        className={cn(
          "relative flex flex-col items-stretch gap-8 px-4 text-center",
          "sm:px-8",
          "lg:mx-auto lg:max-w-7xl",
        )}
      >
        <div
          style={{ background: "primary" }}
          className={cn(
            "relative flex  w-full flex-col items-center justify-center gap-8 rounded-lg bg-primary p-8  text-white",
            "lg:h-[48rem] lg:flex-row lg:items-center lg:gap-32 lg:overflow-y-clip lg:p-0 lg:px-16",
          )}
        >
          <Image
            src={"/assets/home/desktop/pattern-circles.svg"}
            width={0}
            height={0}
            className=" absolute top-0 z-10  w-full"
            alt=""
          />
          <picture className=" z-20 flex h-full w-full items-center justify-center lg:w-1/2 lg:translate-y-4 lg:items-end">
            <source
              media="(min-width:1024px)"
              srcSet={"/assets/home/desktop/image-speaker-zx9.png"}
              className=" lg:w-1/2"
            />
            <source
              media="(min-width:640px)"
              srcSet={"/assets/home/tablet/image-speaker-zx9.png"}
            />
            <img
              src={"/assets/home/mobile/image-speaker-zx9.png"}
              alt="ZX9 Speaker"
              className="w-1/2 lg:w-full"
            />
          </picture>
          <div
            className={cn(
              "flex flex-col items-center justify-center gap-8",
              " lg:items-start lg:text-left",
            )}
          >
            <h2 className="max-w-[16rem]">ZX9 Speaker</h2>
            <p className="max-w-xs">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Button
              asChild
              className="z-30 border-none bg-black text-white hover:bg-white hover:text-black"
              variant={"secondary"}
            >
              <Link href={"/speaker/zx9-speaker"}>See product</Link>
            </Button>
          </div>
        </div>

        <div
          className={cn(
            "flex h-96 flex-col items-start justify-center gap-8 rounded-lg bg-[url('/assets/home/mobile/image-speaker-zx7.jpg')] bg-cover bg-right-bottom p-4 ",
            "sm:bg-[url('/assets/home/tablet/image-speaker-zx7.jpg')] sm:px-16",
          )}
        >
          <h3 className="text-left">ZX7 Speaker</h3>
          <Button variant={"secondary"} asChild>
            <Link href={"/speaker/zx7-speaker"}>See product</Link>
          </Button>
        </div>

        <div className="flex  flex-col items-center justify-center gap-8 sm:flex-row">
          <div
            className={cn(
              "h-[24rem] w-full rounded-lg bg-[url('/assets/home/mobile/image-earphones-yx1.jpg')] bg-cover bg-center",
              "sm:bg-[url('/assets/home/tablet/image-earphones-yx1.jpg')]",
              "lg:bg-[url('/assets/home/desktop/image-earphones-yx1.jpg')]",
            )}
          ></div>
          <div className="flex h-[24rem] w-full flex-col items-start justify-center gap-8 rounded-lg bg-gray p-8 py-12">
            <h3 className="text-left">YX1 Earphones</h3>
            <Button variant={"secondary"} asChild>
              <Link href={"/earphones/yx1-earphones"}>See product</Link>
            </Button>
          </div>
        </div>
      </MaxWidthContainer>
    </section>
  );
}
