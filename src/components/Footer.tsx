import React from "react";
import Logo from "./ui/Logo";
import NavLinks from "./ui/NavLinks";
import SocialButtons from "./ui/SocialButtons";

export default function Footer() {
  return (
    <footer className="relative flex flex-col items-center bg-black py-12 text-white">
      <div className="absolute top-0 mx-auto  h-1 w-32  max-w-sm  bg-primary"></div>
      <div className="flex flex-col items-center gap-16 px-4 text-center">
        <Logo />
        <NavLinks />
        <p>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <p>Copyright 2021. All Rights Reserved</p>
        <SocialButtons />
      </div>
    </footer>
  );
}
