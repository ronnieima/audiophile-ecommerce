import { navLinks } from "@/config/content";
import React from "react";
import { Button } from "./button";
import Link from "next/link";
import { cn } from "@/lib/utils";

type NavLinksProps = {
  className?: string;
};

export default function NavLinks({ className }: NavLinksProps) {
  return (
    <ul
      className={cn("flex flex-col uppercase sm:flex-row sm:gap-12", className)}
    >
      {navLinks.map((link) => (
        <li key={link.label}>
          <Button asChild variant={"link"} className="w-full px-0">
            <Link href={link.href} replace className="text-white">
              {link.label}
            </Link>
          </Button>
        </li>
      ))}
    </ul>
  );
}
