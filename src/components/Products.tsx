import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

export default function Products() {
  return (
    <section className="px-4 text-center">
      <div className="relative flex flex-col items-center justify-center gap-8 rounded-lg bg-primary p-8 text-white">
        <Image
          src={"/assets/shared/desktop/image-category-thumbnail-speakers.png"}
          className=" h-auto w-full"
          sizes="100vw"
          width={0}
          height={0}
          alt="ZX9 Speaker"
        />
        <div className="absolute top-0 z-10 ">
          <svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
            <g stroke="#FFF" fill="none" fill-rule="evenodd" opacity=".202">
              <circle cx="472" cy="472" r="235.5" />
              <circle cx="472" cy="472" r="270.5" />
              <circle cx="472" cy="472" r="471.5" />
            </g>
          </svg>
        </div>
        <h2>ZX9 Speaker</h2>
        <p>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button className="bg-black uppercase text-white">See product</Button>
      </div>
    </section>
  );
}
