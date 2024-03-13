import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./button";
import ArrowRight from "./ArrowRight";

type CategoryItemProps = {
  imageUrl: string;
  title: string;
};

export default function CategoryItem({ imageUrl, title }: CategoryItemProps) {
  return (
    <div className="flex h-48 flex-col items-center justify-center gap-2 rounded-lg bg-gray py-12 uppercase ">
      <div className="relative top-0 mx-auto h-full w-40 -translate-y-1/2">
        <Image
          src={imageUrl}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full"
          alt={`${title} category`}
        />
      </div>
      <p>{title}</p>
      <Button asChild variant={"link"}>
        <Link href="/" className="text-subtitle flex gap-2 text-black">
          Shop <ArrowRight />
        </Link>
      </Button>
    </div>
  );
}
