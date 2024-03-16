import { Menu, ShoppingCart } from "lucide-react";
import React from "react";
import Logo from "./ui/Logo";
import NavLinks from "./ui/NavLinks";
import MaxWidthContainer from "./ui/MaxWidthContainer";
import MobileMenu from "./ui/MobileMenu";
import Cart from "./ui/Cart";

export default function Navbar() {
  return (
    <nav className="relative z-[999] bg-black text-white" id="navbar">
      <MaxWidthContainer className="h-24 w-full flex-row justify-between">
        <MobileMenu className="sm:hidden" />
        <Logo className="sm:hidden lg:block" />

        {/* Tablet layout */}
        <div className="hidden items-center gap-8 sm:flex lg:hidden">
          <MobileMenu />
          <Logo />
        </div>

        <NavLinks className="hidden lg:flex" />
        <Cart />
      </MaxWidthContainer>
    </nav>
  );
}
