import Cart from "./ui/Cart";
import Logo from "./ui/Logo";
import MaxWidthContainer from "./ui/MaxWidthContainer";
import MobileMenu from "./ui/MobileMenu";
import NavLinks from "./ui/NavLinks";
import SignInButton from "./ui/SignInButton";

export default function Navbar() {
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

        <div>
          <SignInButton />
          <Cart />
        </div>
      </MaxWidthContainer>
    </nav>
  );
}
