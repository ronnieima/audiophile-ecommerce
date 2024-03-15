import Image from "next/image";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import headerTablet from "@/../public/assets/home/tablet/image-header.jpg";
import MaxWidthContainer from "../ui/MaxWidthContainer";

export default function Hero() {
  return (
    <section className={cn("relative h-[36rem] text-white", "sm:h-[48rem]")}>
      <picture className="absolute -z-10 h-full w-full">
        <Image
          src={headerTablet}
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
      </picture>

      <MaxWidthContainer
        className={cn(
          "gap-4 text-center",
          "lg:items-start  lg:gap-8  lg:text-left",
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
      </MaxWidthContainer>
    </section>
  );
}
