import { navLinks } from "@/config/content";
import React from "react";
import { Button } from "./button";
import Link from "next/link";

export default function NavLinks() {
  return (
    <ul className="flex flex-col uppercase sm:flex-row sm:gap-12">
      {navLinks.map((link) => (
        <li key={link.label}>
          <Button asChild variant={"link"} className="w-full px-0">
            <Link href={link.href} className="text-white">
              {link.label}
            </Link>
          </Button>
        </li>
      ))}
    </ul>
  );
}
