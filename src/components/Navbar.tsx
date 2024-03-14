import { Menu, ShoppingCart } from "lucide-react";
import React from "react";
import Logo from "./ui/Logo";
import NavLinks from "./ui/NavLinks";

export default function Navbar() {
  return (
    <nav className=" bg-black text-white">
      <div className="flex h-24 items-center justify-between border-b border-lightgray/20 px-4 sm:hidden">
        <Menu size={32} />
        <Logo />
        <ShoppingCart size={32} />
      </div>
      <div className="hidden h-24 items-center justify-between border-b border-lightgray/20 px-8 sm:flex lg:hidden">
        <div className="flex items-center gap-8">
          <Menu size={32} />
          <Logo />
        </div>
        <ShoppingCart size={32} />
      </div>
      <div className="mx-auto hidden h-24 items-center justify-between border-b border-lightgray/20 px-2 lg:flex lg:max-w-6xl">
        <Logo />
        <NavLinks />
        <ShoppingCart size={32} />
      </div>
    </nav>
  );
}
