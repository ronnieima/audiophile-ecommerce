import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="relative h-full bg-hero bg-cover bg-bottom bg-no-repeat py-32 text-white">
      <header className="flex h-full flex-col items-center justify-center gap-4 text-center">
        <span className="text-overline text-neutral-500">NEW PRODUCT</span>
        <h3>XX99 MARK II HEADPHONES</h3>
        <p className="text-lightgray">
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
