import Link from "next/link";
import React from "react";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "./SocialIcons";
import { SocialPlatforms, socialLinks } from "@/config/content";

export default function SocialButtons() {
  return (
    <ul className="flex items-center gap-4">
      {socialLinks.map((social) => (
        <li key={social.href}>
          <Link href={social.href} target="_blank">
            {getSocialIcon(social.platform)}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function getSocialIcon(platform: SocialPlatforms) {
  switch (platform) {
    case SocialPlatforms.Facebook:
      return <FacebookIcon />;
    case SocialPlatforms.Twitter:
      return <TwitterIcon />;
    case SocialPlatforms.Instagram:
      return <InstagramIcon />;
    default:
      return null;
  }
}
