"use client";
import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
import { Button } from "./button";
import ArrowRight from "./ArrowRight";

type CategoryItemProps = {
  imageUrl: string;
  title: string;
  href: string;
  setShowModal?: Dispatch<SetStateAction<boolean>>;
};

export default function CategoryItem({
  imageUrl,
  title,
  href,
  setShowModal,
}: CategoryItemProps) {
  return (
    <div className="flex h-48  w-full flex-col items-center justify-center gap-2 rounded-lg bg-gray py-12 uppercase ">
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
      <h6>{title}</h6>
      {setShowModal ? (
        <Button asChild variant={"link"}>
          <Link
            href={href}
            className="text-subtitle flex gap-2 text-black"
            onClick={() => setShowModal(false)!}
          >
            Shop <ArrowRight />
          </Link>
        </Button>
      ) : (
        <Button asChild variant={"link"}>
          <Link href={href} className="text-subtitle flex gap-2 text-black">
            Shop <ArrowRight />
          </Link>
        </Button>
      )}
    </div>
  );
}
