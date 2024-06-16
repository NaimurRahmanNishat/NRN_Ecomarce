import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchBox from "../Helper/SearchBox";
import { HeartIcon, UserIcon } from "lucide-react";
import ShoppingCartButton from "../Helper/ShoppingCartButton";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Nav = () => {
  return (
    <div className="h-[12vh] sticky top-0 z-[1] bg-white shadow-md">
      <div className="flex items-center justify-between w-[95%] md:w-4/5 mx-auto h-full">
        {/* logo */}
        <Link href={"/"}>
          <Image
            src="/images/header.png"
            alt="header-logo"
            width={36}
            height={36}
            priority={true}
            className="cursor-pointer"
          />
        </Link>
        <div className="flex items-center space-x-6">
          {/* SearchBox */}
          <SearchBox />
          {/* heaetIcons */}
          <HeartIcon size={28} cursor={"pointer"} />
          {/* ShoppingCartButton */}
          <ShoppingCartButton />
          {/* User button */}

          {/* sign user */}
          <SignedIn>
            <UserButton />
          </SignedIn>

          {/* not signin */}
          <SignedOut>
            <SignInButton>
              <UserIcon size={28} cursor={"Pointer"} />
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
};

export default Nav;
