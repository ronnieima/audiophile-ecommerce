import React from "react";
import Logo from "./ui/Logo";
import NavLinks from "./ui/NavLinks";
import SocialButtons from "./ui/SocialButtons";
import { cn } from "@/lib/utils";
import MaxWidthContainer from "./ui/MaxWidthContainer";

export default function Footer() {
  return (
    <footer
      className={cn(
        "relative flex flex-col items-center bg-black pb-12 text-white",
        "sm:items-start sm:gap-4 sm:px-8",
      )}
    >
      <MaxWidthContainer className="pt-16">
        <div className="absolute top-0 mx-auto  h-1 w-32 max-w-sm  bg-primary  px-8 sm:self-start"></div>
        <div
          className={cn(
            "flex flex-col items-center gap-16 px-4 text-center ",
            "sm:items-start   sm:text-left",
          )}
        >
          <div className="flex w-full flex-col items-center gap-8 sm:items-start lg:flex-row lg:items-center lg:justify-between">
            <Logo />
            <NavLinks />
          </div>
          <div className="flex justify-between">
            <p className="text-white/80 lg:w-1/2">
              Audiophile is an all in one stop to fulfill your audio needs.
              We&apos;re a small team of music lovers and sound specialists who
              are devoted to helping you get the most out of personal audio.
              Come and visit our demo facility - we&apos;re open 7 days a week.
            </p>
            <SocialButtons className="hidden self-end lg:flex" />
          </div>
          <div
            className={cn(
              "flex w-full flex-col items-center justify-between gap-8",
              "sm:flex-row",
            )}
          >
            <p>Copyright 2024. All Rights Reserved</p>
            <SocialButtons className="flex lg:hidden" />
          </div>
        </div>
      </MaxWidthContainer>
    </footer>
  );
}
