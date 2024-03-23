import { FormInputProps } from "@/app/checkout/_components/FormInput";

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

export const checkout: { header: string; inputs: FormInputProps[] }[] = [
  {
    header: "Billing Details",
    inputs: [
      {
        inputType: "text",
        label: "Name",
        value: "name",
        placeholder: "Alexei Ward",
        className: "sm:w-1/2",
      },
      {
        inputType: "email",
        label: "Email Address",
        value: "email",
        placeholder: "alexei@mail.com",
        className: "sm:w-1/2",
      },
      {
        inputType: "tel",
        label: "Phone Number",
        value: "phone",
        placeholder: "+1 202-555-0136",
        className: "sm:w-1/2",
      },
    ],
  },
  {
    header: "Shipping Info",
    inputs: [
      {
        inputType: "text",
        label: "Your Address",
        value: "address",
        placeholder: "1137 Williams Avenue",
        className: "w-full",
      },
      {
        inputType: "number",
        label: "ZIP Code",
        value: "zipCode",
        placeholder: "10001",
        className: "sm:w-1/2",
      },
      {
        inputType: "text",
        label: "City",
        value: "city",
        placeholder: "New York",
        className: "sm:w-1/2",
      },
      {
        inputType: "text",
        label: "Country",
        value: "country",
        placeholder: "United States",
        className: "sm:w-1/2",
      },
    ],
  },
  // {
  //   header: "Payment Details",
  //   inputs: [
  //     {
  //       inputType: "radio",
  //       label: "e-Money Number",
  //       value: "eMoneyNumber",
  //       placeholder: "238521993",
  //       className: "sm:w-1/2",
  //     },
  //     {
  //       inputType: "number",
  //       label: "e-Money Number",
  //       value: "eMoneyNumber",
  //       placeholder: "238521993",
  //       className: "sm:w-1/2",
  //     },
  //     {
  //       inputType: "number",
  //       label: "e-Money PIN",
  //       value: "eMoneyPin",
  //       placeholder: "6891",
  //       className: "sm:w-1/2",
  //     },
  //   ],
  // },
];
