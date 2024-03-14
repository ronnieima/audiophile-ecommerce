export const categories = [
  {
    title: "Headphones",
    href: "/headphones",
    imageUrl: "/assets/shared/desktop/image-category-thumbnail-headphones.png",
  },
  {
    title: "Speakers",
    href: "/speakers",
    imageUrl: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
  },
  {
    title: "Earphones",
    href: "/earphones",
    imageUrl: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Headphones", href: "/headphones" },
  { label: "Speakers", href: "/speakers" },
  { label: "Earphones", href: "/earphones" },
];

export enum SocialPlatforms {
  Facebook,
  Twitter,
  Instagram,
}

export const socialLinks: { platform: SocialPlatforms; href: string }[] = [
  { platform: SocialPlatforms.Facebook, href: "https://www.facebook.com" },
  { platform: SocialPlatforms.Twitter, href: "https://www.twitter.com" },
  { platform: SocialPlatforms.Instagram, href: "https://www.instagram.com" },
];
