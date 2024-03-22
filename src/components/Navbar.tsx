import Link from "next/link";
import Cart from "./ui/Cart";
import Logo from "./ui/Logo";
import MaxWidthContainer from "./ui/MaxWidthContainer";
import MobileMenu from "./ui/MobileMenu";
import NavLinks from "./ui/NavLinks";
import SignInButton from "./ui/SignInButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SignOutButton from "./ui/SignOutButton";

export default async function Navbar() {
  const session = await getServerSession(authOptions);
  return (
    <nav className="relative z-[999] bg-black text-white" id="navbar">
      <MaxWidthContainer className="h-24 w-full flex-row justify-between">
        <MobileMenu className="sm:hidden" />
        <Logo className="sm:hidden lg:block" />

        {/* Tablet layout */}
        <div className="hidden items-center gap-8 sm:flex lg:hidden">
          <MobileMenu />
          <Logo />
        </div>

        <NavLinks className="hidden lg:flex" />

        <div className="flex gap-2">
          {session ? (
            <SignOutButton />
          ) : (
            <div className="space-x-2">
              <SignInButton />
              <Link href={"/register"}>Register</Link>
            </div>
          )}

          <Cart />
        </div>
      </MaxWidthContainer>
    </nav>
  );
}
