import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Category() {
  return (
    <div className="bg- flex flex-col items-center rounded-lg">
      <div className="relative h-48 w-48 -translate-y-16 mix-blend-darken">
        <Image
          src={"/product-xx99-mark-one-headphones/mobile/image-product.jpg"}
          className="absolute "
          fill
          alt="product-xx99"
        />
      </div>
      <h4>Headphones</h4>
      <Link href="/">Shop ></Link>
    </div>
  );
}
