import Link from "next/link";
import React from "react";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "./SocialIcons";
import { SocialPlatforms, socialLinks } from "@/config/content";
import { cn } from "@/lib/utils";

type Props = { className: string };

export default function SocialButtons({ className }: Props) {
  return (
    <ul className={cn("flex items-center gap-4", className)}>
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
