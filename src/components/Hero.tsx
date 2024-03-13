import Image from "next/image";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section
      className={cn(
        "relative h-[36rem] w-full bg-cover bg-bottom bg-no-repeat text-white",
        "sm:h-[48rem]",
      )}
    >
      <div className="absolute h-full w-full">
        <Image
          src={"/assets/home/tablet/image-header.jpg"}
          fill
          sizes="100vw"
          alt="cooked"
          className=" -z-10 h-auto w-full object-cover lg:hidden"
        />
        <Image
          src={"/assets/home/desktop/image-hero.jpg"}
          fill
          sizes="100vw"
          alt="cooked"
          className=" -z-10 hidden h-auto w-full object-cover lg:block"
        />
      </div>
      <header
        className={cn(
          "flex h-full w-full flex-col items-center justify-center gap-4 py-32 text-center",
          "lg:mx-auto lg:max-w-7xl lg:items-start  lg:gap-8 lg:px-2 lg:text-left",
        )}
      >
        <span className="text-overline text-neutral-500">NEW PRODUCT</span>
        <h1 className="max-w-sm">XX99 MARK II HEADPHONES</h1>
        <p className="max-w-sm text-lightgray">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Button className="text-xs uppercase" variant="default">
          See product
        </Button>
      </header>
    </section>
  );
}
