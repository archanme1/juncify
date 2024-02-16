import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "../ui/button";
import { Sign } from "crypto";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full border-b sticky top-0 bg-white z-10">
      <div className="wrapper flex items-center justify-between">
        {/* change the logo later on  */}
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="juncify logo"
            width={140}
            height={24}
          />
        </Link>
        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>
        <div className="w-32 flex justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-xl" size="lg">
              <Link href="/sign-in">Sign in</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
