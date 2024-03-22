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
import AccountMenu from "./ui/AccountMenu";
import { Button } from "./ui/button";

export default async function Navbar() {
  const session = await getServerSession(authOptions);
  return (
    <nav className="relative bg-black text-white" id="navbar">
      <MaxWidthContainer className="h-24 w-full flex-row justify-between">
        <MobileMenu className="sm:hidden" />
        <Logo className="sm:hidden lg:block" />

        {/* Tablet layout */}
        <div className="hidden items-center gap-8 sm:flex lg:hidden">
          <MobileMenu />
          <Logo />
        </div>

        <NavLinks className="hidden lg:flex" />
        <div className="space-x-8">
          {session ? (
            <>
              <AccountMenu />
            </>
          ) : (
            <>
              <SignInButton />
              <Button asChild>
                <Link href={"/register"}>Register</Link>
              </Button>
            </>
          )}
          <Cart />
        </div>
      </MaxWidthContainer>
    </nav>
  );
}
