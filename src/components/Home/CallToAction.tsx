import { cn } from "@/lib/utils";
import MaxWidthContainer from "../ui/MaxWidthContainer";

export default function CallToAction() {
  return (
    <section className="py-8">
      <MaxWidthContainer
        className={cn(
          "mx-auto flex max-w-7xl flex-col items-center justify-center gap-16 pb-32",
          " lg:flex-row-reverse",
        )}
      >
        <picture>
          <source
            media="(min-width:1024px)"
            srcSet={"/assets/shared/desktop/image-best-gear.jpg"}
          />
          <source
            media="(min-width:640px)"
            srcSet={"/assets/shared/tablet/image-best-gear.jpg"}
          />
          <img
            src="/assets/shared/mobile/image-best-gear.jpg"
            alt="a black-and-white image of a man wearing headphones posing"
            className="rounded-lg"
          />
        </picture>

        <div className="flex flex-col items-center justify-center gap-8 text-center  lg:items-start lg:text-left">
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
      </MaxWidthContainer>
    </section>
  );
}
