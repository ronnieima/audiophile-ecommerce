import Link from "next/link";
import React from "react";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "./SocialIcons";

const socialLinks = [
  { icon: <FacebookIcon />, href: "https://www.facebook.com" },
  { icon: <TwitterIcon />, href: "https://www.twitter.com" },
  { icon: <InstagramIcon />, href: "https://www.instagram.com" },
];

export default function SocialButtons() {
  return (
    <ul className="flex items-center gap-4">
      {socialLinks.map((social) => (
        <li key={social.href}>
          <Link href={social.href} target="_blank">
            {social.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
}
