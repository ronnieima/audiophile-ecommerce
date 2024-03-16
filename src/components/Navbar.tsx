import { Menu, ShoppingCart } from "lucide-react";
import React from "react";
import Logo from "./ui/Logo";
import NavLinks from "./ui/NavLinks";
import Link from "next/link";
import MaxWidthContainer from "./ui/MaxWidthContainer";

export default function Navbar() {
  return (
    <nav className=" bg-black text-white">
      <MaxWidthContainer className="flex h-24 flex-row items-center justify-between border-b border-lightgray/20 px-4 sm:hidden">
        <Menu size={32} />
        <Link href={"/"}>
          <Logo />
        </Link>
        <ShoppingCart size={32} />
      </MaxWidthContainer>
      <div className="hidden h-24 items-center justify-between border-b border-lightgray/20 px-8 sm:flex lg:hidden">
        <div className="flex items-center gap-8">
          <Menu size={32} />
          <Link href={"/"}>
            <Logo />
          </Link>
        </div>
        <ShoppingCart size={32} />
      </div>
      <MaxWidthContainer className="mx-auto hidden h-24 flex-row items-center justify-between border-b border-lightgray/20 px-2 lg:flex">
        <Link href={"/"}>
          <Logo />
        </Link>
        <NavLinks />
        <ShoppingCart size={32} />
      </MaxWidthContainer>
    </nav>
  );
}
