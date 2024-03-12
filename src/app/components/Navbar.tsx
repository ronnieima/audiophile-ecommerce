import { Menu, ShoppingCart } from "lucide-react";
import React from "react";

export default function Navbar() {
  return (
    <nav className="border-b border-lightgray bg-black text-white sm:hidden">
      <div className="flex h-24 items-center justify-between px-8">
        <Menu size={40} />
        <h4 className="lowercase">audiophile</h4>
        <ShoppingCart size={40} />
      </div>
      <div className=" hidden h-24 items-center justify-between px-8 sm:flex">
        <Menu size={40} />
        <h4 className="lowercase">audiophile</h4>
        <ShoppingCart size={40} />
      </div>
    </nav>
  );
}
