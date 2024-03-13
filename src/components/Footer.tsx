import React from "react";
import Logo from "./ui/Logo";
import NavLinks from "./ui/NavLinks";
import SocialButtons from "./ui/SocialButtons";
import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <footer
      className={cn(
        "relative flex flex-col items-center bg-black py-12 text-white",
        "sm:items-start sm:gap-4 sm:px-8",
      )}
    >
      <div className="absolute top-0 mx-auto  h-1 w-32  max-w-sm  bg-primary"></div>
      <div
        className={cn(
          "flex flex-col items-center gap-16 px-4 text-center ",
          "sm:items-start  sm:gap-8 sm:text-left",
        )}
      >
        <Logo />
        <NavLinks />
        <p className="text-white/80">
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we&apos;re open 7 days a week.
        </p>
        <div
          className={cn(
            "flex w-full flex-col items-center justify-between gap-8",
            "sm:flex-row",
          )}
        >
          <p>Copyright 2024. All Rights Reserved</p>
          <SocialButtons />
        </div>
      </div>
    </footer>
  );
}
